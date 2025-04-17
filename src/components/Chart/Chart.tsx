import { JSX } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { COLOR_PV, COLOR_UV, data } from './Chart.consts';
import { LineDot } from 'recharts/types/cartesian/Line';
import { getModZScore } from '../../utils';
import { ContentType } from 'recharts/types/component/Tooltip';

export const Chart = () => {
  const uvModScore = getModZScore(data.map(({ uv }) => uv));
  const pvModScore = getModZScore(data.map(({ pv }) => pv));

  const CustomizedDot: LineDot = (props) => {
    const { cx, cy, index, r = '5', zScore, ordinaryColor } = props;
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill={zScore[index] ? 'red' : ordinaryColor}
        viewBox="0 0 20 20"
      >
        <circle cx="10" cy="10" r={r} />
      </svg>
    );
  };

  const CustomTooltip: ContentType<any, any> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div>
          <p>{`${payload[0].name} : ${payload[0].value}`}</p>
          <p>{`${payload[1].name} : ${payload[1].value}`}</p>
        </div>
      );
    }

    return null;
  };

  const generateGradient: (score: boolean[], color: string) => JSX.Element[] = (
    score,
    color,
  ) => {
    const length = data.length - 1;
    const part = 100 / length;

    return score.reduce<JSX.Element[]>((acc, booleanVal, i) => {
      if (booleanVal) {
        return [
          ...acc,
          <stop offset={`${i * part}%`} stopColor="red" key={i * part} />,
        ];
      }
      return [
        ...acc,
        <stop offset={`${i * part}%`} stopColor={color} key={i * part} />,
      ];
    }, []);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="url(#colorPv)"
          dot={<CustomizedDot zScore={pvModScore} ordinaryColor={COLOR_PV} />}
          activeDot={
            <CustomizedDot zScore={pvModScore} ordinaryColor={COLOR_PV} r="8" />
          }
        />
        <defs>
          <linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
            {generateGradient(uvModScore, COLOR_UV).map((stop) => stop)}
          </linearGradient>

          <linearGradient id="colorPv" x1="0%" y1="0%" x2="100%" y2="0%">
            {generateGradient(pvModScore, COLOR_PV).map((stop) => stop)}
          </linearGradient>
        </defs>
        <Line
          type="monotone"
          dataKey="uv"
          stroke="url(#colorUv)"
          dot={<CustomizedDot zScore={uvModScore} ordinaryColor={COLOR_UV} />}
          activeDot={
            <CustomizedDot zScore={uvModScore} ordinaryColor={COLOR_UV} r="8" />
          }
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
