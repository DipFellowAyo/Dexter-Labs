import React from 'react'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import toJson from 'enzyme-to-json'
import { mount } from 'enzyme'
import { Link, MemoryRouter } from 'react-router-dom'

import AuthPageLayout from '../../layouts/authpage.layout'
import ButtonBase from '../../components/buttons/button-base'
import Login from '../../pages/login'
import InputField from '../../components/forms/input-field'
import { FORGOT_PASSWORD_ROUTE } from '../../utils/routes'
import loginFormValidator, {
  PASSWORD,
  USERNAME
} from '../../utils/validators/login-form-validator'

describe('Login Page', () => {
  let login

  const initialValues = {
    [USERNAME]: '',
    [PASSWORD]: ''
  }

  beforeEach(() => {
    login = mount(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
  })
  afterAll(() => jest.resetAllMocks())

  it('should render Login page without crashing', () => {
    expect(toJson(login)).toMatchSnapshot()
  })

  it('should render `AuthPageLayout` component with prop name `title`', () => {
    expect(login.find(AuthPageLayout).props().title).toEqual('Sign in')
  })

  it('should render `Box` component with prop name `mt`', () => {
    expect(
      login
        .find(Box)
        .at(9)
        .props().mt
    ).toBe(14)
  })

  it('should render `Formik`', () => {
    expect(login.find('Formik').exists()).toBe(true)
  })

  it('should render `Formik` with prop name `initialValues`', () => {
    expect(login.find('Formik').props().initialValues).toEqual(initialValues)
  })

  it('should render `Formik` with prop name `validationSchema` to exsits', () => {
    expect(login.find('Formik').props().validationSchema).toBeTruthy()
  })

  it('should render `Formik` with prop name `validationSchema` to equal `loginFormValidator`', () => {
    expect(login.find('Formik').props().validationSchema).toBe(
      loginFormValidator
    )
  })

  it('should render `Form` with prop name `onSubmit` to exsits', () => {
    expect(login.find('Form').exists()).toBeTruthy()
  })

  // it('should render `Form` with prop name `onSubmit` to equal `handleSubmit`', () => {
  //   expect(login.find('Form').props().onSubmit).toBe(loginFormValidator)
  // })

  it('should render `Box` with prop name `mb` to equal `11`', () => {
    expect(
      login
        .find(Box)
        .at(10)
        .props().mb
    ).toBe(11)
  })

  it('should render `InputField` component to exists', () => {
    expect(login.find(InputField).exists()).toBe(true)
  })

  it('should render `InputField` with a prop name `placeholder`', () => {
    expect(
      login
        .find(InputField)
        .at(0)
        .props().placeholder
    ).toBe('Username')
  })

  it('should render `InputField` with a prop name `name`', () => {
    expect(
      login
        .find(InputField)
        .at(0)
        .props().name
    ).toBe(USERNAME)
  })

  it('should render `InputField` with a prop name `type`', () => {
    expect(
      login
        .find(InputField)
        .at(0)
        .props().type
    ).toBe('text')
  })

  it('should render `InputField` with a prop name `placeholder` at node 1', () => {
    expect(
      login
        .find(InputField)
        .at(1)
        .props().placeholder
    ).toBe('Password')
  })

  it('should render `InputField` with a prop name `name` at node 1', () => {
    expect(
      login
        .find(InputField)
        .at(1)
        .props().name
    ).toBe(PASSWORD)
  })

  it('should render `InputField` with a prop name `type` at node 1', () => {
    expect(
      login
        .find(InputField)
        .at(1)
        .props().type
    ).toBe('password')
  })

  it('should render `Box` component with a prop name `component`', () => {
    expect(
      login
        .find(Box)
        .at(12)
        .props().component
    ).toBe(Link)
  })

  it('should render `Box` component with a prop name `to` at node 12', () => {
    expect(
      login
        .find(Box)
        .at(12)
        .props().to
    ).toBe(FORGOT_PASSWORD_ROUTE)
  })

  it('should render `Box` component with a prop name `className` at node 12', () => {
    expect(
      login
        .find(Box)
        .at(12)
        .props().className
    ).toBe('makeStyles-flexStyles-1 makeStyles-textStyles-3')
  })

  it('should render `Box` component with a prop name `children` at node 12', () => {
    expect(
      login
        .find(Box)
        .at(12)
        .props().children
    ).toBe('Forgot Password?')
  })

  it('should render `Box` component with a prop name `mt` at node 12', () => {
    expect(
      login
        .find(Box)
        .at(13)
        .props().mt
    ).toBe(11)
  })

  it('should render `Button` component with a prop name `type`', () => {
    expect(
      login
        .find(Box)
        .at(13)
        .props().className
    ).toBe('makeStyles-centerButton-2 makeStyles-flexStyles-1')
  })

  it('should render `ButtonBase` component', () => {
    expect(login.find(ButtonBase).exists()).toBe(true)
  })

  it('should render `ButtonBase` component with a prop name `disabled`', () => {
    expect(login.find(ButtonBase).props().disabled).toBe(false)
  })

  it('should render `ButtonBase` component with a prop name `color`', () => {
    expect(login.find(ButtonBase).props().color).toBe('primary')
  })

  it('should render `ButtonBase` component with a prop name `text`', () => {
    expect(login.find(ButtonBase).props().text).toBe('Sign in')
  })

  it('should render `ButtonBase` component with a prop name `variant`', () => {
    expect(login.find(ButtonBase).props().variant).toBe('contained')
  })

  it('should render `ButtonBase` component with a prop name `type`', () => {
    expect(login.find(ButtonBase).props().type).toBe('submit')
  })

  it('should render `CircularProgress` component', () => {
    expect(login.find(CircularProgress)).toBeDefined()
  })
})
