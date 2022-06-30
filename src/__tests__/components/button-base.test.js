import React from 'react'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'

import ButtonBase from '../../components/buttons/button-base'

describe('ButtonBase Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <ButtonBase variant='contained' color='primary' text='Click me' />
    )
  })
  afterAll(() => jest.resetAllMocks())

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('accept a variant as props', () => {
    expect(wrapper.prop('variant')).toEqual('contained')
  })

  it('accept a color as props', () => {
    expect(wrapper.prop('color')).toEqual('primary')
  })

  it('accept a disableElevation as props', () => {
    expect(wrapper.prop('disableElevation')).toEqual(true)
  })

  it('accept a text as children props', () => {
    expect(wrapper.prop('children')).toEqual('Click me')
  })
})
