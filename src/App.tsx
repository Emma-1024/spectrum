import React from 'react'
import { useState } from 'react'
import './App.less'
import Button from '@mui/material/Button'
import { LineChart } from './components/LineChart'
import { Data } from './utils/Data'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

function App() {
  const [chartProps] = useState({
    data: {
      labels: Data.map((data) => data.year),
      datasets: [
        {
          label: 'Users Gained ',
          data: Data.map((data) => data.userGain),
          backgroundColor: [
            'rgba(75,192,192,1)',
            '#ecf0f1',
            '#50AF95',
            '#f3ba2f',
            '#2a71d0',
          ],
          borderColor: 'black',
          borderWidth: 2,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Users Gained between 2016-2020',
        },
        legend: {
          display: false,
        },
      },
    },
  })
  return (
    <div className="App">
      <Button variant="contained">Contained</Button>
      <LineChart chartProps={chartProps} />
    </div>
  )
}

export default App
