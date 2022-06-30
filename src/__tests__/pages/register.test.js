import React from 'react'
import Box from '@material-ui/core/Box'
import toJson from 'enzyme-to-json'
import Select from '@material-ui/core/Select'
import { mount } from 'enzyme'
import { MemoryRouter as Router } from 'react-router-dom'

import AuthPageLayout from '../../layouts/authpage.layout'
import Register from '../../pages/register'
import InputField from '../../components/forms/input-field'
import registerFormValidator, {
  PASSWORD,
  PASSWORD_COMFIRMATION,
  ROLE,
  STAFF_EMAIL,
  USERNAME
} from '../../utils/validators/register-form-validator'

describe('Register Page', () => {
  let register

  const initialValues = {
    [USERNAME]: '',
    [PASSWORD]: '',
    [PASSWORD_COMFIRMATION]: '',
    [ROLE]: '',
    [STAFF_EMAIL]: ''
  }

  beforeEach(() => {
    register = mount(
      <Router>
        <Register />
      </Router>
    )
  })
  afterAll(() => jest.resetAllMocks())

  it('should match the snapshots', () => {
    expect(toJson(register)).toMatchSnapshot()
  })

  it('should render `AuthPageLayout` to be exists', () => {
    expect(register.find(AuthPageLayout).exists()).toBe(true)
  })

  it('should render `RegisterForm` to be exists', () => {
    expect(register.find(AuthPageLayout).props().title).toBe('Create Account')
  })

  it('should render `Box` to be exists', () => {
    expect(register.find(Box).exists()).toBe(true)
  })

  it('should render `Box` component with a prop name `mt` at node 9', () => {
    expect(
      register
        .find(Box)
        .at(9)
        .props().mt
    ).toBe(8)
  })

  it('should render `Formik` to exists', () => {
    expect(register.find('Formik').exists()).toBe(true)
  })

  it('should render `Formik` component with a prop `initialValues`', () => {
    expect(register.find('Formik').props().initialValues).toEqual(initialValues)
  })

  it('should render `Formik` component with a prop `onSubmit`', () => {
    expect(register.find('Formik').props().validationSchema).toEqual(
      registerFormValidator
    )
  })

  it('should render `Form` to exists', () => {
    expect(register.find('Form').exists()).toBe(true)
  })

  it('should render `Form` component with a prop `onSubmit`', () => {
    expect(register.find('Form').props().onSubmit).toBeInstanceOf(Function)
  })

  it('should render `Box` component with a prop `mb` at node 10', () => {
    expect(
      register
        .find(Box)
        .at(10)
        .props().mb
    ).toBe(8)
  })

  it('should render `InputField` to exists', () => {
    expect(register.find(InputField).exists()).toBe(true)
  })

  it('should render `InputField` component with a prop `name` at node 0', () => {
    expect(
      register
        .find(InputField)
        .at(0)
        .props().name
    ).toBe(USERNAME)
  })

  it('should render `InputField` component with a prop `placeholder` at node 0', () => {
    expect(
      register
        .find(InputField)
        .at(0)
        .props().placeholder
    ).toBe('Username')
  })

  it('should render `InputField` component with a prop `type` at node 0', () => {
    expect(
      register
        .find(InputField)
        .at(0)
        .props().type
    ).toBe('text')
  })

  it('should render `InputField` component with a prop `onBlur` at node 0', () => {
    expect(
      register
        .find(InputField)
        .at(0)
        .props().onBlur
    ).toBeInstanceOf(Function)
  })

  it('should render `InputField` component with a prop `onChange` at node 0', () => {
    expect(
      register
        .find(InputField)
        .at(0)
        .props().onChange
    ).toBeInstanceOf(Function)
  })

  it('should render `Box` component with a prop `mb` at node 11', () => {
    expect(
      register
        .find(Box)
        .at(11)
        .props().mb
    ).toBe(8)
  })

  it('should render `InputField` component with a prop `name` at node 1', () => {
    expect(
      register
        .find(InputField)
        .at(1)
        .props().name
    ).toBe(PASSWORD)
  })

  it('should render `InputField` component with a prop `placeholder` at node 1', () => {
    expect(
      register
        .find(InputField)
        .at(1)
        .props().placeholder
    ).toBe('Password')
  })

  it('should render `InputField` component with a prop `type` at node 1', () => {
    expect(
      register
        .find(InputField)
        .at(1)
        .props().type
    ).toBe('password')
  })

  it('should render `InputField` component with a prop `onBlur` at node 1', () => {
    expect(
      register
        .find(InputField)
        .at(1)
        .props().onBlur
    ).toBeInstanceOf(Function)
  })

  it('should render `InputField` component with a prop `onChange` at node 1', () => {
    expect(
      register
        .find(InputField)
        .at(1)
        .props().onChange
    ).toBeInstanceOf(Function)
  })

  it('should render `Box` component with a prop `mb` at node 12', () => {
    expect(
      register
        .find(Box)
        .at(12)
        .props().mb
    ).toBe(8)
  })

  it('should render `InputField` component with a prop `name` at node 2', () => {
    expect(
      register
        .find(InputField)
        .at(2)
        .props().name
    ).toBe(PASSWORD_COMFIRMATION)
  })

  it('should render `InputField` component with a prop `placeholder` at node 2', () => {
    expect(
      register
        .find(InputField)
        .at(2)
        .props().placeholder
    ).toBe('Confirm Password')
  })

  it('should render `InputField` component with a prop `type` at node 2', () => {
    expect(
      register
        .find(InputField)
        .at(2)
        .props().type
    ).toBe('password')
  })

  it('should render `InputField` component with a prop `onBlur` at node 2', () => {
    expect(
      register
        .find(InputField)
        .at(2)
        .props().onBlur
    ).toBeInstanceOf(Function)
  })

  it('should render `InputField` component with a prop `onChange` at node 2', () => {
    expect(
      register
        .find(InputField)
        .at(2)
        .props().onChange
    ).toBeInstanceOf(Function)
  })

  it('should render `Box` component with a prop `mb` at node 13', () => {
    expect(
      register
        .find(Box)
        .at(13)
        .props().mb
    ).toBe(8)
  })

  it('should render `Select` field component to be present', () => {
    expect(register.find(Select).exists()).toBe(true)
  })

  it('should render `Select` field component with a prop `name`', () => {
    expect(register.find(Select).props().name).toBe(ROLE)
  })

  it('should render `Select` field component with a prop `native`', () => {
    expect(register.find(Select).props().native).toBe(true)
  })
})
