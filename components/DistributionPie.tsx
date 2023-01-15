import BigNumber from "bignumber.js";
import { memo, useMemo } from "react";
import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

import { QuirkRewardSnapshot } from "../client-api";

const DistributionPie = ({ snapshot }: { snapshot: QuirkRewardSnapshot }) => {
  const { data } = snapshot;
  const pieData = useMemo(() => {
    const out: Array<{ name: string; value: number }> = [];
    let i = 0;
    for (; i < data.length && i < 10; i++) {
      const item = data[i]!;
      const share = Number(BigNumber(item.share).times(100).toFixed(2));
      if (share < 5) break;
      out.push({ name: item.address, value: share });
    }
    const restItems = data.slice(i);
    if (restItems.length) {
      const rest = Number(
        BigNumber(
          restItems.reduce(
            (acc, cur) => acc + Number(BigNumber(cur.share).times(100).toFixed(2)),
            0,
          ),
        ).toFixed(2),
      );
      out.push({ name: `(...${restItems.length} addresses)`, value: rest });
    }
    return out;
  }, [data]);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={300}>
        <Pie
          dataKey="value"
          data={pieData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="hsl(202, 46%, 30%)"
          stroke="hsl(222, 61%, 7%)"
          label={({ value }) => `${value}%`}
          animationDuration={500}
        />
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-blue-6 rounded outline-none p-4 border-none">
        <p className="label">{`${payload[0].name}`}</p>
      </div>
    );
  }

  return null;
};

export default memo(DistributionPie);
