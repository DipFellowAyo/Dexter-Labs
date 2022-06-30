import React from 'react'
import { Bar } from 'react-chartjs-2'

const data = canvas => {
  const ctx = canvas.getContext('2d')
  const gradient = ctx.createLinearGradient(211, 211, 211, 290)
  gradient.addColorStop(0, '#006A6A')
  gradient.addColorStop(1, 'rgba(0, 106, 106, 0.1)')

  const gradient2 = ctx.createLinearGradient(211, 211, 211, 290)
  gradient2.addColorStop(0, '#9C38FF')
  gradient2.addColorStop(1, 'rgba(156, 56, 255, 0.1)')

  return {
    labels: ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'],
    datasets: [
      {
        label: 'Profit1',
        data: [480, 670, 840, 620, 900, 500, 300],
        backgroundColor: gradient,
        barPercentage: 0.8
      },
      {
        label: 'Profit',
        data: [330, 480, 490, 330, 600, 300, 270],
        backgroundColor: gradient2,
        barPercentage: 0.8
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
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      align: 'end',
      labels: {
        color: '#006A6A'
      }
    }
  }
}

const DoubleBarChart = () => {
  return <Bar data={data} options={options} />
}

export default DoubleBarChart
