import { FormEventHandler, useState } from "react";
import { useMutation } from "react-query";

import Button from "./Button";
import TextInput, { NumberInput, Textarea } from "./TextInput";

// prettier-ignore
const DUMMY_RAW_TX = JSON.stringify({ body: { messages: [{ '@type': '/cosmos.bank.v1beta1.MsgSend', from_address: 'stars1kekv8xqg7aj628l8av4d95cm79y8lw3c5lr28x', to_address: 'stars1u96xkp0rth26p3tr69hnzn9vl7kysmzm6ss607', amount: [{ amount: '1000000', denom: 'ustars' }] }], memo: '', timeout_height: '0', extension_options: [], non_critical_extension_options: [] }, auth_info: { signer_infos: [], fee: { amount: [{ amount: '0', denom: 'ustars' }], gas_limit: '200000', payer: '', granter: '' } }, signatures: [] }, null, 2)

type Sig = {
  address: string;
  signature: string | null;
};

type Transaction = {
  quorum: number;
  raw_tx: string;
  signatures: Sig[];
};

const MultisigCreateTx = ({ onClose }: { onClose(): void }) => {
  const createMutation = useMutation(async (tx: Transaction) => {
    await new Promise((r) => setTimeout(r, 2e3));
  });

  const [payload, setPayload] = useState<Transaction>({
    quorum: 2,
    raw_tx: DUMMY_RAW_TX,
    signatures: [
      {
        address: "",
        signature: null,
      },
      {
        address: "",
        signature: null,
      },
    ],
  });

  const onSubmit = () => {
    createMutation.mutate(payload);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit();
  };

  const bind = <K extends keyof Transaction>(key: K) => ({
    value: payload[key],
    onChange: (v: Transaction[K]) => setPayload((prevPayload) => ({ ...prevPayload, [key]: v })),
    disabled: createMutation.isLoading,
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-8">
        <div className="space-y-2">
          <label htmlFor="raw-tx" className="font-semibold opacity-60">
            {"Raw tx"}
          </label>
          <Textarea className="h-[200px]" {...bind("raw_tx")} />
        </div>
        {payload.signatures.map((sig, i) => {
          return (
            <div key={i} className="space-y-2">
              <label htmlFor={`adr${i + 1}`} className="font-semibold opacity-60">{`Address ${
                i + 1
              }`}</label>
              <TextInput
                disabled={createMutation.isLoading}
                id={`adr${i + 1}`}
                value={sig.address}
                placeholder="e.g: osmo12345abcde..."
                onChange={(address) => {
                  const newSig = { ...sig, address };
                  const newSigs = [...payload.signatures];
                  newSigs.splice(i, 1, newSig);
                  setPayload({ ...payload, signatures: newSigs });
                }}
              />
            </div>
          );
        })}
        <div>
          <label htmlFor="quorum" className="font-semibold opacity-60">
            {"Quorum"}
          </label>
          <NumberInput {...bind("quorum")} min={2} max={payload.signatures.length} />
        </div>
        <input type="submit" className="hidden" />
        <div className="text-right space-x-4">
          <Button onClick={onClose} disabled={createMutation.isLoading}>
            {"Cancel"}
          </Button>
          <Button onClick={onSubmit} isLoading={createMutation.isLoading}>
            {"Create"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default MultisigCreateTx;
