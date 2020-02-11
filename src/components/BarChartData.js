import React, { useState, useEffect } from 'react'
import { csv } from 'd3-fetch'
import { ascending } from 'd3-array'
import BarChart from './BarChart'

const parseNA = string => (string === 'NA' ? undefined : string)

function type(d) {
  return {
    stat: parseNA(d.stat),
    perc: +d.perc,
  }
}

function filterData(data) {
  return data.filter(d => {
    return d.perc > 0
  })
}

function prepareBarChartData(data) {
  return data
}

const BarChartData = () => {
  const [barChartData, setBarChartData] = useState(null)

  useEffect(() => {
    csv('/static/data/barchart.csv', type).then(data => {
      const dataClean = filterData(data)
      setBarChartData(
        prepareBarChartData(dataClean).sort((a, b) => {
          return ascending(a.stat, b.stat)
        }),
      )
    })
  }, [])

  if (barChartData === null) {
    return <p>Loading...</p>
  }

  return <BarChart data={barChartData} />
}

export default BarChartData;