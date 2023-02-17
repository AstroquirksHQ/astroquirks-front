import BigNumber from "bignumber.js";
import { last } from "lodash";
import { memo, useMemo } from "react";
import { Cell } from "recharts";
import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

import { QuirkRewardSnapshot } from "../client-api";

const THEMES = {
  PINK_TO_BLACK_COLORS: [
    "#ff80ff",
    "#eb44e8",
    "#de25da",
    "#ab3da9",
    "#6b506b",
    "#54504c",
    "#474440",
    "#3b3734",
    "#2e2b28",
  ],
  YELLOW_TO_BLUE_COLORS: [
    "#c9e52f",
    "#a6d75b",
    "#76c68f",
    "#48b5c4",
    "#22a7f0",
    "#1984c5",
    "#115f9a",
  ],
  RED_TO_GREY_COLORS: [
    "#991f17",
    "#b04238",
    "#c86558",
    "#df8879",
    "#a4a2a8",
    "#b3bfd1",
    "#bfcbdb",
    "#cbd6e4",
    "#d7e1ee",
  ],
  PINK_FOAM: [
    "#c80064",
    "#d7658b",
    "#df979e",
    "#e4bcad",
    "#dedad2",
    "#badbdb",
    "#98d1d1",
    "#76c8c8",
    "#54bebe",
  ],
  SALMON_TO_AQUA: [
    "#e27c7c",
    "#a86464",
    "#6d4b4b",
    "#503f3f",
    "#333333",
    "#3c4e4b",
    "#466964",
    "#599e94",
    "#6cd4c5",
  ],
};

const COLORS = THEMES.PINK_FOAM;

const DistributionPie = ({ snapshot }: { snapshot: QuirkRewardSnapshot }) => {
  const { data } = snapshot;
  const pieData = useMemo(() => {
    const out: Array<{ name: string; value: number }> = [];
    let i = 0;
    for (; i < data.length && i < 7; i++) {
      const item = data[i]!;
      const share = Number(BigNumber(item.share).times(100).toFixed(2));
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
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={index < COLORS.length ? COLORS[index] : last(COLORS)} />
          ))}
        </Pie>
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
