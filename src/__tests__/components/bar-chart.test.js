import React from 'react'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'

import BarChart from '../../../src/components/bar-chart'

describe('BarChart', () => {
  let barChart

  beforeEach(() => {
    barChart = shallow(<BarChart />)
  })

  it('renders correctly', () => {
    expect(toJson(barChart)).toMatchSnapshot()
  })
})
