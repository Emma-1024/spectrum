import React from 'react'
import { ChartData, ChartOptions } from 'chart.js'
import { Line } from 'react-chartjs-2'

interface LineProps {
  options: ChartOptions<'line'>
  data: ChartData<'line'>
}

interface Props {
  chartProps: LineProps
}

export const LineChart = (props: Props) => {
  return (
    <div className="chart-container" style={{ width: '80%' }}>
      <h2 style={{ textAlign: 'center' }}>Line Chart</h2>
      <Line {...props.chartProps} />
    </div>
  )
}
