import { useMemo, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = {
  "1D": [
    { time: "9:30", value: 24200 },
    { time: "10:30", value: 24320 },
    { time: "11:30", value: 24280 },
    { time: "12:30", value: 24410 },
    { time: "1:30", value: 24520 },
    { time: "2:30", value: 24610 },
    { time: "3:30", value: 24850 },
  ],

  "1W": [
    { time: "Mon", value: 24200 },
    { time: "Tue", value: 24450 },
    { time: "Wed", value: 24320 },
    { time: "Thu", value: 24600 },
    { time: "Fri", value: 24850 },
  ],

  "1M": [
    { time: "Week 1", value: 23100 },
    { time: "Week 2", value: 23850 },
    { time: "Week 3", value: 23520 },
    { time: "Week 4", value: 24850 },
  ],

  "6M": [
    { time: "May", value: 20500 },
    { time: "Jun", value: 21400 },
    { time: "Jul", value: 22150 },
    { time: "Aug", value: 21600 },
    { time: "Sep", value: 23900 },
    { time: "Oct", value: 24850 },
  ],

  "1Y": [
    { time: "Nov", value: 18200 },
    { time: "Jan", value: 19400 },
    { time: "Mar", value: 21100 },
    { time: "May", value: 20500 },
    { time: "Jul", value: 22900 },
    { time: "Sep", value: 23900 },
    { time: "Oct", value: 24850 },
  ],
};

function MarketChart() {
  const [range, setRange] = useState("1W");

  const data = chartData[range];

  const currentValue = data[data.length - 1].value;
  const startingValue = data[0].value;

  const percentageChange =
    ((currentValue - startingValue) / startingValue) * 100;

  const isPositive = percentageChange >= 0;

  const formattedChange = `${isPositive ? "+" : ""}${percentageChange.toFixed(
    2
  )}%`;

  const chartStats = useMemo(() => {
    const values = data.map((item) => item.value);

    return {
      high: Math.max(...values),
      low: Math.min(...values),
    };
  }, [data]);

  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        padding: "22px",
        boxShadow: "0 6px 18px rgba(15, 23, 42, 0.05)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            MARKET PERFORMANCE
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "6px",
              flexWrap: "wrap",
            }}
          >
            <h2
              style={{
                margin: 0,
                color: "#111827",
                fontSize: "30px",
              }}
            >
              {currentValue.toLocaleString()}
            </h2>

            <span
              style={{
                background: isPositive ? "#dcfce7" : "#fee2e2",
                color: isPositive ? "#15803d" : "#dc2626",
                padding: "5px 9px",
                borderRadius: "7px",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              {isPositive ? "▲" : "▼"} {formattedChange}
            </span>
          </div>

          <p
            style={{
              margin: "5px 0 0",
              color: "#9ca3af",
              fontSize: "12px",
            }}
          >
            Demo market index value
          </p>
        </div>

        {/* Time Range Buttons */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            background: "#f8fafc",
            padding: "5px",
            borderRadius: "10px",
            flexWrap: "wrap",
          }}
        >
          {Object.keys(chartData).map((item) => (
            <button
              key={item}
              onClick={() => setRange(item)}
              style={{
                border: "none",
                borderRadius: "7px",
                padding: "7px 11px",
                background:
                  range === item ? "#2563eb" : "transparent",
                color: range === item ? "#ffffff" : "#64748b",
                fontSize: "12px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Mini Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(120px, 1fr))",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "10px",
            padding: "11px 13px",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: "12px",
            }}
          >
            Period High
          </p>

          <strong
            style={{
              display: "block",
              marginTop: "4px",
              color: "#111827",
            }}
          >
            {chartStats.high.toLocaleString()}
          </strong>
        </div>

        <div
          style={{
            background: "#f8fafc",
            borderRadius: "10px",
            padding: "11px 13px",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: "12px",
            }}
          >
            Period Low
          </p>

          <strong
            style={{
              display: "block",
              marginTop: "4px",
              color: "#111827",
            }}
          >
            {chartStats.low.toLocaleString()}
          </strong>
        </div>
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: "#6b7280",
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              width={65}
              tick={{
                fontSize: 12,
                fill: "#6b7280",
              }}
              domain={["dataMin - 500", "dataMax + 500"]}
            />

            <Tooltip
              contentStyle={{
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
              }}
              formatter={(value) => [
                value.toLocaleString(),
                "Market Value",
              ]}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#2563eb",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Transparency */}
      <div
        style={{
          marginTop: "12px",
          paddingTop: "12px",
          borderTop: "1px solid #f1f5f9",
          color: "#94a3b8",
          fontSize: "11px",
        }}
      >
        Chart data is simulated for educational demonstration.
      </div>
    </div>
  );
}

export default MarketChart;