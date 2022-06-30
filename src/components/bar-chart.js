import React from 'react'
import { Bar } from 'react-chartjs-2'

const data = canvas => {
  const ctx = canvas.getContext('2d')
  const gradient = ctx.createLinearGradient(211, 211, 211, 290)
  gradient.addColorStop(0, '#92D3D1')
  gradient.addColorStop(1, 'rgba(146, 211, 209, 0.1)')

  return {
    labels: ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'],
    datasets: [
      {
        data: [400, 500, 840, 480, 800, 370, 200],
        backgroundColor: [
          gradient,
          gradient,
          gradient,
          gradient,
          gradient,
          gradient,
          'rgba(237,126,129, 0.8)'
        ],
        borderWidth: 0,
        categoryPercentage: 0.5,
        barPercentage: 1.0
      }
    ]
  }
}

const options = {
  scales: {
    y: {
      min: 100,
      max: 1000
    },
    xAxis: {
      grid: {
        display: false
      }
    }
  },
  plugins: {
    legend: false
  },
  responsive: true,
  maintainAspectRatio: true
}

const BarChart = () => {
  return <Bar data={data} options={options} />
}

export default BarChart
