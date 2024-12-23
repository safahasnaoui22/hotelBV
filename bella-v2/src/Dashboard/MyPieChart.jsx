import CanvasJSReact from "@canvasjs/react-charts";
import React from "react";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function BarChart() {
  const options = {
    title: {
      text: "Sales Data"
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Jan", y: 100 },
          { label: "Feb", y: 200 },
          { label: "Mar", y: 150 },
          { label: "Apr", y: 300 },
          { label: "May", y: 250 }
        ]
      }
    ]
  };

  return (
    <div style={{ flex: 1 }}>
      <h2>Bar Chart</h2>
      <CanvasJSChart options={options} />
    </div>
  );
}

function LineChart() {
  const options = {
    title: {
      text: "Temperature Data"
    },
    data: [
      {
        type: "line",
        dataPoints: [
          { label: "Mon", y: 30 },
          { label: "Tue", y: 32 },
          { label: "Wed", y: 35 },
          { label: "Thu", y: 28 },
          { label: "Fri", y: 31 }
        ]
      }
    ]
  };

  return (
    <div style={{ flex: 1 }}>
      <h2>Line Chart</h2>
      <CanvasJSChart options={options} />
    </div>
  );
}

function PieChart() {
  const options = {
    title: {
      text: "Market Share"
    },
    data: [
      {
        type: "pie",
        dataPoints: [
          { label: "Product A", y: 20 },
          { label: "Product B", y: 30 },
          { label: "Product C", y: 25 },
          { label: "Product D", y: 15 },
          { label: "Product E", y: 10 }
        ]
      }
    ]
  };

  return (
    <div style={{ flex: 1 }}>
      <h2>Pie Chart</h2>
      <CanvasJSChart options={options} />
    </div>
  );
}

function AreaChart() {
  const options = {
    title: {
      text: "Website Traffic"
    },
    data: [
      {
        type: "area",
        dataPoints: [
          { label: "Jan", y: 100 },
          { label: "Feb", y: 120 },
          { label: "Mar", y: 130 },
          { label: "Apr", y: 150 },
          { label: "May", y: 180 }
        ]
      }
    ]
  };

  return (
    <div style={{ flex: 1 }}>
      <h2>Area Chart</h2>
      <CanvasJSChart options={options} />
    </div>
  );
}

function ColumnChart() {
  const options = {
    title: {
      text: "Sales Data"
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Jan", y: 100 },
          { label: "Feb", y: 200 },
          { label: "Mar", y: 150 },
          { label: "Apr", y: 300 },
          { label: "May", y: 250 }
        ]
      }
    ]
  };

  return (
    <div style={{ flex: 1 }}>
      <h2>Column Chart</h2>
      <CanvasJSChart options={options} />
    </div>
  );
}

function ChartPage() {
  return (
    <div style={{ display: "flex" }}>
      <BarChart />
      <LineChart />
      <PieChart />
      <AreaChart />
      <ColumnChart />
    </div>
  );
}

export default ChartPage;
