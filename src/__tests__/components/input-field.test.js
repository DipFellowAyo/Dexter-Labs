import React from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'

import InputField from '../../components/forms/input-field'

describe('InputField Component', () => {
  let inputField

  beforeEach(() => {
    inputField = shallow(<InputField />)
  })
  afterAll(() => jest.resetAllMocks())

  it('should render without crashing', () => {
    expect(inputField.exists()).toBe(true)
  })

  it('should match the snapshots', () => {
    expect(toJson(inputField)).toMatchSnapshot()
  })

  it('accepts `name` as props', () => {
    expect(inputField.props().name).toBeUndefined()
  })

  it('accepts `onChange` as props', () => {
    expect(inputField.props().onChange).toBeUndefined()
  })

  it('renders a TextField component', () => {
    expect(inputField.find(TextField).exists()).toBe(true)
  })

  it('renders a TextField component with `name` prop', () => {
    expect(inputField.find(TextField).props().name).toBeUndefined()
  })

  it('renders a TextField component with `onChange` prop', () => {
    expect(inputField.find(TextField).props().onChange).toBeUndefined()
  })

  it('renders a FormControl component', () => {
    expect(inputField.find(FormControl).exists()).toBe(true)
  })

  it('renders a FormControl component with `fullWidth` prop', () => {
    expect(inputField.find(FormControl).props().fullWidth).toBe(true)
  })
})
