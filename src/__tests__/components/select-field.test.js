import React from 'react'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'

import SelectField from '../../components/forms/select-field'

describe('Select Field Component', () => {
  let selectField

  beforeEach(() => {
    selectField = shallow(<SelectField />)
  })
  afterAll(() => jest.resetAllMocks())

  it('should render without crashing', () => {
    expect(selectField).toBeTruthy()
  })

  it('should match the snapshot', () => {
    expect(toJson(selectField)).toMatchSnapshot()
  })

  it('accepts `name` as props', () => {
    expect(selectField.props().name).toBeUndefined()
  })

  it('should render a `FormControl` component', () => {
    expect(selectField.find(FormControl)).toBeTruthy()
  })

  it('`FormControl` accepts a prop fullwidth', () => {
    expect(selectField.find(FormControl).props().fullWidth).toBeTruthy()
  })

  it('should render a `Select` component', () => {
    expect(selectField.find(Select)).toBeTruthy()
  })
})
