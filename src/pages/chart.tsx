import React from "react";
import {
  Line,
  Bar,
  Radar,
  Doughnut,
  Pie,
  Bubble,
  Scatter,
  PolarArea,
} from "react-chartjs-2";
import { ChartData } from 'chart.js';

export default function Chart(): JSX.Element {
  const chartData: ChartData<'line'|'bar', number[]> = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        label: "label1",
        backgroundColor: "rgba(154,178,96,0.5)",
        hoverBackgroundColor: "rgba(154,178,96,1)",
        data: [1000, 1015, 1015, 1081, 1055],
      },
    ],
  };
  const chartData2: ChartData <'bubble', { x: number; y: number; r: number }[]>  = {
      labels: ["A", "B", "C"],
      datasets: [
          {
              label: "label2",
              backgroundColor: "rgba(255,99,132,0.5)",
              hoverBackgroundColor: "rgba(255,99,132,1)",
              data: [
                  {
                      x: 0,
                      y: 0,
                      r: 10,
                    },
                    {
                        x: 1,
                        y: 1,
                        r: 30,
                    },
                    {
                        x: 2,
                        y: 2,
                        r: 50,
                    },
                ],
            },
        ],
    };
    const chartData3 = {
        labels: ["A", "B", "C"],
        datasets: [
            {
                label: "label3",
                backgroundColor: "rgba(255,99,132,0.5)",
                hoverBackgroundColor: "rgba(255,99,132,1)",
                data: [
                    {
                        x: 0,
                        y: 0,
                    },
                    {
                        x: 1,
                        y: 1,
                    },
                    {
                        x: 2,
                        y: 2,
                    },
                ],
            },
        ],
    };
    
    const chartData4 = {
        labels: ["A", "B", "C", "D", "E", "F", "G"],
        datasets: [
            {
                label: "label1",
                backgroundColor: "rgba(333,178,96,0.5)",
                hoverBackgroundColor: "rgba(333,178,96,1)",
                data: [510, 615, 1215, 1481, 1055, 500, -1100],
            },
            {
                label: "label2",
                backgroundColor: "rgba(111,99,132,0.5)",
                hoverBackgroundColor: "rgba(111,99,132,1)",
                data: [-510, -615, -1215, -1481, -1055, -500, 1100],
            },
        ],
    };
    const chartData5: ChartData<'polarArea', number[]> = {
      labels: ["A", "B", "C", "D", "E"],
      datasets: [
        {
          label: "label1",
          backgroundColor: "rgba(154,178,96,0.5)",
          hoverBackgroundColor: "rgba(154,178,96,1)",
          data: [1000, 1015, 1015, 1081, 1055],
        },
      ],
    };
    const chartData6: ChartData<'pie', number[]> = {
        labels: ["A", "B", "C", "D", "E"],
        datasets: [
          {
            label: "label1",
            backgroundColor: "rgba(154,178,96,0.5)",
            hoverBackgroundColor: "rgba(154,178,96,1)",
            data: [1000, 1015, 1015, 1081, 1055],
          },
        ],
      };
      const chartData7: ChartData<'doughnut', number[]> = {
        labels: ["A", "B", "C", "D", "E"],
        datasets: [
          {
            label: "label1",
            backgroundColor: "rgba(154,178,96,0.5)",
            hoverBackgroundColor: "rgba(154,178,96,1)",
            data: [1000, 1015, 1015, 1081, 1055],
          },
        ],
      };
      const chartData8: ChartData<'radar', number[]> = {
        labels: ["A", "B", "C", "D", "E"],
        datasets: [
          {
            label: "label1",
            backgroundColor: "rgba(154,178,96,0.5)",
            hoverBackgroundColor: "rgba(154,178,96,1)",
            data: [1000, 1015, 1015, 1081, 1055],
          },
        ],
      };
    return (
    <>
      <div className="mx-auto">
        <div className="text-center font-bold text-3xl">Line</div>
        <div className="w-1/3 mx-auto">
          <Line data={chartData4} />
        </div>
        <div className="text-center font-bold text-3xl">Bar</div>
        <div className="w-1/3 mx-auto">
          <Bar data={chartData4} />
        </div>
        <div className="text-center font-bold text-3xl">Radar</div>
        <div className="w-1/3 mx-auto">
          <Radar data={chartData8} />
        </div>
        <div className="text-center font-bold text-3xl">Doughnut</div>
        <div className="w-1/3 mx-auto">
          <Doughnut data={chartData7} />
        </div>
        <div className="text-center font-bold text-3xl">Pie</div>
        <div className="w-1/3 mx-auto">
          <Pie data={chartData6} />
        </div>
        <div className="text-center font-bold text-3xl">Bubble</div>
        <div className="w-1/3 mx-auto">
          <Bubble data={chartData2} />
        </div>
        <div className="text-center font-bold text-3xl">Scatter</div>
        <div className="w-1/3 mx-auto">
          <Scatter data={chartData3} />
        </div>
        <div className="text-center font-bold text-3xl">PolarArea</div>
        <div className="w-1/3 mx-auto">
          <PolarArea data={chartData5} />
        </div>
      </div>
    </>
  );
}
