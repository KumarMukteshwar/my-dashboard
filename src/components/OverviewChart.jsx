import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const OverviewChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly',
        data: [800, 400, 1000, 1500, 700, 1200, 1100, 1500, 800, 1000, 300, 500],
        backgroundColor: '#C7A4F4', // Light purple color
        borderRadius: 5, // Rounded corners for the bars
        barThickness: 20, // Adjust this value to decrease the bar width
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend to match the example image
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines for the x-axis
        },
      },
      y: {
        grid: {
          drawBorder: false, // Remove grid lines for the y-axis border
          color: '#f3f3f3', // Light grid lines
        },
        ticks: {
          beginAtZero: true,
          stepSize: 250,
          callback: (value) => `$${value}`, // Format the y-axis labels as currency
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h5 className="text-lg font-semibold">Overview</h5>
        <button className="text-purple-500 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" />
          </svg>
          Download Report
        </button>
      </div>
      <div className="flex space-x-2 mt-4">
        <button className="bg-gray-100 text-purple-600 px-3 py-1 rounded-md text-sm font-semibold">
          Monthly
        </button>
        <button className="text-gray-500 px-3 py-1 rounded-md text-sm font-semibold">
          Yearly
        </button>
      </div>
      <div className="mt-6" style={{ height: '300px', width: '100%' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default OverviewChart;
