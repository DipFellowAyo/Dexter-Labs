import React from 'react'
import Box from '@material-ui/core/Box'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'

import InputFieldError from '../../components/forms/input-field-error'

describe('Input Field Error Component', () => {
  let inputFieldError

  beforeEach(() => {
    inputFieldError = shallow(<InputFieldError />)
  })
  afterAll(() => jest.resetAllMocks())

  it('should render without crashing', () => {
    expect(inputFieldError).toBeTruthy()
  })

  it('should match snapshots', () => {
    expect(toJson(inputFieldError)).toMatchSnapshot()
  })

  it('should render the error message', () => {
    inputFieldError.setProps({ errorText: 'error message' })
    expect(inputFieldError.text()).toEqual('error message')
  })

  it('should render a Box component', () => {
    expect(inputFieldError.find(Box)).toBeTruthy()
  })

  it('Box component accepts `pt` as props', () => {
    expect(inputFieldError.find(Box).props().pt).toEqual('2px')
  })

  it('Box component accepts `fontSize` as props', () => {
    expect(inputFieldError.find(Box).props().fontSize).toEqual('12px')
  })

  it('Box component accepts `color` as props', () => {
    expect(inputFieldError.find(Box).props().color).toEqual('red')
  })
})
