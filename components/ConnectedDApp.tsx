import { WalletManager } from "@cosmos-kit/core";
import axios from "axios";
import BigNumber from "bignumber.js";
import invariant from "invariant";
import { orderBy } from "lodash";
import { useMutation, useQuery } from "react-query";

type Props = {
  wallet: WalletManager;
};

type Delegation = {
  delegation: {
    delegator_address: string;
    validator_address: string;
    shares: string;
  };
  balance: {
    denom: string;
    amount: string;
  };
};

type DelegationsResponse = {
  delegation_responses: Delegation[];
  pagination: {
    next_key: null;
    total: "1";
  };
};

// {
//     "account": {
//         "@type": "/cosmos.auth.v1beta1.BaseAccount",
//         "address": "osmo1u96xkp0rth26p3tr69hnzn9vl7kysmzmxh5hja",
//         "pub_key": {
//             "@type": "/cosmos.crypto.secp256k1.PubKey",
//             "key": "A1P/SrDXp7GJN7dEFB0GQWm82q5kQfb4bb7eTO22HNXw"
//         },
//         "account_number": "37856",
//         "sequence": "23"
//     }
// }

const baseURL = "https://osmosis-mainnet-rpc.allthatnode.com:1317";
const network = axios.create({ baseURL });
const ASTROQUIRKS_ADDRESS = "osmovaloper1udp8gef365zcqhlxuepewrxuep9thjanuhxcaw";
// const CHAIN_ID = "osmosis-1";

const formatUOSMO = (uosmo: string) => {
  return BigNumber(uosmo).times(BigNumber(10).pow(-6)).toFixed(2);
};

const ConnectedDApp = (props: Props) => {
  const { wallet } = props;
  const { data: account } = wallet;
  invariant(account, "No account");

  const delegationsQuery = useQuery("delegations", () =>
    network
      .get<DelegationsResponse>(`/cosmos/staking/v1beta1/delegations/${account.address}`)
      .then((d) => d.data)
      .then((d) => {
        d.delegation_responses = orderBy(d.delegation_responses, "balance.amount", "desc");
        return d;
      }),
  );

  const astroquirksDelegation =
    delegationsQuery.data?.delegation_responses.find(
      (d) => d.delegation.validator_address === ASTROQUIRKS_ADDRESS,
    ) || null;

  const otherDelegations =
    delegationsQuery.data?.delegation_responses.filter((d) => d !== astroquirksDelegation) || [];

  const delegateMutation = useMutation(async (validator: string) => {
    const delegator = account.address!;
    await wallet.signAndBroadcast(
      [
        {
          typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
          value: {
            amount: { amount: "1000", denom: "uosmo" },
            delegatorAddress: delegator,
            validatorAddress: validator,
          },
        },
      ],
      // FIXME see how we can have better fees estimation
      { gas: "300000", amount: [{ denom: "uosmo", amount: "7000" }] },
    );
  });

  const redelegateMutation = useMutation(async (delegation: Delegation) => {
    const delegator = account.address!;
    await wallet.signAndBroadcast(
      [
        {
          typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
          value: {
            amount: { amount: delegation.balance.amount, denom: "uosmo" },
            delegatorAddress: delegator,
            validatorSrcAddress: delegation.delegation.validator_address,
            validatorDstAddress: ASTROQUIRKS_ADDRESS,
          },
        },
      ],
      // FIXME see how we can have better fees estimation
      { gas: "600000", amount: [{ denom: "uosmo", amount: "14000" }] },
    );
  });

  // Where to start :
  //
  // self.url = "https://osmosis-mainnet-rpc.allthatnode.com:1317"
  //
  // Get list of current delegations
  // f"{self.url}/cosmos/staking/v1beta1/delegations/{delegator}"
  //
  // Get nonce :
  // f"{self.url}/cosmos/auth/v1beta1/accounts/{delegator}"
  //
  // Get all restake authorizations :
  //
  // f"{self.url}/cosmos/authz/v1beta1/grants"
  //
  // get block height :
  // f"{self.url}/cosmos/base/tendermint/v1beta1/blocks/latest"
  //
  // Get a validator informations
  //
  // f"{self.url}/cosmos/staking/v1beta1/validators/{validator_address}"

  return (
    <div className="relative">
      <button className="absolute top-1 right-1 btn" onClick={() => wallet.disconnect()}>
        {"Disconnect"}
      </button>
      <div>
        <strong>{"Connected as: "}</strong>
        <span className="text-orange-2">{account.username}</span>
      </div>
      <div>
        <strong>{"Address: "}</strong>
        <span className="text-orange-2">{account.address}</span>
      </div>
      {delegationsQuery.isLoading
        ? "Loading delegations..."
        : delegationsQuery.data && (
            <div>
              {astroquirksDelegation ? (
                <div className="mt-8 bg-blue-2 bg-opacity-5 border-blue-2 border-opacity-30 border text-xl p-8 rounded">
                  <strong>{`🎉 You delegate `}</strong>
                  <strong className="text-orange-2">{`${formatUOSMO(
                    astroquirksDelegation.balance.amount,
                  )} ${astroquirksDelegation.balance.denom}`}</strong>
                  <strong>{` with us!`}</strong>
                  <button
                    className="btn text-sm ml-4"
                    onClick={() => delegateMutation.mutate(ASTROQUIRKS_ADDRESS)}
                  >
                    {"Delegate more"}
                  </button>
                </div>
              ) : (
                <div className="mt-8 bg-blue-2 bg-opacity-5 border-blue-2 border-opacity-30 border text-xl p-8 rounded">
                  <strong>{"You don't delegate with Astroquirks"}</strong>
                  <button
                    className="btn text-sm ml-4"
                    onClick={() => delegateMutation.mutate(ASTROQUIRKS_ADDRESS)}
                  >
                    {"Start staking with us"}
                  </button>
                </div>
              )}
              <div className="mt-8">
                {otherDelegations.length > 0 ? (
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-opacity-20 border-blue-2">
                        <th className="text-left">{"Validator"}</th>
                        <th className="text-right">{"Amount"}</th>
                        <th className="text-right"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {otherDelegations.map((delegation) => {
                        return (
                          <tr key={delegation.delegation.validator_address}>
                            <td className="max-w-[300px] truncate p-2">
                              {delegation.delegation.validator_address}
                            </td>
                            <td className="text-right p-2 whitespace-nowrap">
                              {delegation.balance.amount} {delegation.balance.denom}
                            </td>
                            <td className="text-right">
                              <button
                                className="btn"
                                disabled={redelegateMutation.isLoading}
                                onClick={() => redelegateMutation.mutate(delegation)}
                              >
                                {"Redelegate"}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : astroquirksDelegation ? (
                  <div>
                    <h2 className="font-alt opacity-70 text-2xl text-orange-2">
                      {"No other delegations."}
                    </h2>
                    <p>{"Congratz, you are an Astroquirks maximalist."}</p>
                  </div>
                ) : null}
              </div>
            </div>
          )}
    </div>
  );
};

export default ConnectedDApp;
