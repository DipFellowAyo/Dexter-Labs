import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'

import Loading from '../../components/loading'

describe('Loading', () => {
  let loader

  beforeEach(() => {
    loader = shallow(<Loading />)
  })
  afterAll(() => jest.resetAllMocks())

  it('renders correctly', () => {
    expect(toJson(loader)).toMatchSnapshot()
  })

  it('CircularProgress accepts a props `color`', () => {
    expect(loader.find(CircularProgress).props().color).toBe('secondary')
  })
})
