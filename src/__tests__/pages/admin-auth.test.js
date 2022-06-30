import React from 'react'
import Box from '@material-ui/core/Box'
import toJson from 'enzyme-to-json'
import { mount } from 'enzyme'
import { Form, Formik } from 'formik'
import { Link, MemoryRouter } from 'react-router-dom'

import AdminAuth from '../../pages/admin-auth'
import AuthPageLayout from '../../layouts/authpage.layout'
import ButtonBase from '../../components/buttons/button-base'
import InputField from '../../components/forms/input-field'
import { LOGIN_ROUTE } from '../../utils/routes'
import adminAuthFormValidator, {
  PASSWORD
} from '../../utils/validators/admin-auth-form-validator'

describe('Admin Auth Page', () => {
  let adminAuth

  const initialValues = {
    [PASSWORD]: ''
  }

  const handleSubmit = jest.fn()
  const handleBlur = jest.fn()

  beforeEach(() => {
    adminAuth = mount(
      <MemoryRouter>
        <AdminAuth />
      </MemoryRouter>
    )
  })
  afterAll(() => jest.resetAllMocks())

  it('should render correctly', () => {
    expect(toJson(adminAuth)).toMatchSnapshot()
  })

  it('should render `AuthPageLayout with the prop title `Admin Authentication`', () => {
    expect(adminAuth.find(AuthPageLayout).props().title).toEqual(
      'Admin Authentication'
    )
  })

  it('`Formik` should be present', () => {
    expect(adminAuth.find(Formik)).toBeTruthy()
  })

  it('should render `Formik` with the prop name `initialValues`', () => {
    expect(adminAuth.find(Formik).props().initialValues).toEqual(initialValues)
  })

  it('should render `Formik` with the prop validationSchema', () => {
    expect(adminAuth.find(Formik).props().validationSchema).toBeTruthy()
  })

  it('should render `Formik` with the prop onSubmit ``', () => {
    expect(adminAuth.find(Formik).props().validationSchema).toEqual(
      adminAuthFormValidator
    )
  })

  it('should render `Form`', () => {
    expect(adminAuth.find(Form)).toBeTruthy()
  })

  it('should render `InputField` component', () => {
    expect(adminAuth.find(InputField)).toBeTruthy()
  })

  it('should render `InputField` with a prop name `placeholder`', () => {
    expect(adminAuth.find(InputField).props().placeholder).toBe('Password')
  })

  it('should render `InputField` with a prop name `name`', () => {
    expect(adminAuth.find(InputField).props().name).toBe(PASSWORD)
  })

  // it('should update password field on change', () => {
  //   const passwordInput = adminAuth.find('input')

  //   passwordInput.simulate('change', {
  //     persist: () => {},
  //     target: {
  //       name: PASSWORD,
  //       value: 'Password2019#'
  //     }
  //   })

  //   expect(passwordInput.html()).toMatch('Password2019#')
  // })

  it('should render `InputField` with a prop name `type`', () => {
    expect(adminAuth.find(InputField).props().type).toBe('password')
  })

  it('should render `ButtonBase`', () => {
    expect(adminAuth.find(ButtonBase)).toBeTruthy()
  })

  it('should render `ButtonBase` with a prop name `type`', () => {
    expect(adminAuth.find(ButtonBase).props().type).toBe('submit')
  })

  it('should render `ButtonBase` with a prop name `variant`', () => {
    expect(adminAuth.find(ButtonBase).props().variant).toBe('contained')
  })

  it('should render `ButtonBase` with a prop name `color`', () => {
    expect(adminAuth.find(ButtonBase).props().color).toBe('primary')
  })

  it('should render `ButtonBase` with a prop name `text`', () => {
    expect(adminAuth.find(ButtonBase).props().text).toBeTruthy()
  })

  it('should render `ButtonBase` with a prop name `disabled`', () => {
    expect(adminAuth.find(ButtonBase).props().disabled).toBe(false)
  })

  it('should render `Box` with a prop name `children`', () => {
    expect(
      adminAuth
        .find(Box)
        .at(13)
        .props().children
    ).toBe('Sign In')
  })

  it('should render `Box` with a prop name `to', () => {
    expect(
      adminAuth
        .find(Box)
        .at(13)
        .props().to
    ).toBe(LOGIN_ROUTE)
  })

  it('should render `Box` with a prop name `fontWeight`', () => {
    expect(
      adminAuth
        .find(Box)
        .at(13)
        .props().fontWeight
    ).toBe('bolder')
  })

  it('should render `Box` with a prop name `fontSize`', () => {
    expect(
      adminAuth
        .find(Box)
        .at(13)
        .props().fontSize
    ).toBe('1rem')
  })

  it('should render `Box` with a prop name `component`', () => {
    expect(
      adminAuth
        .find(Box)
        .at(13)
        .props().component
    ).toBe(Link)
  })

  it('should render `Box` with a prop name `component` at node 12', () => {
    expect(
      adminAuth
        .find(Box)
        .at(12)
        .props().component
    ).toBe('p')
  })

  it('should render `Box` with a prop name `textAlign` at node 12', () => {
    expect(
      adminAuth
        .find(Box)
        .at(12)
        .props().textAlign
    ).toBe('center')
  })

  it('should render `Box` with a prop name `color` at node 12', () => {
    expect(
      adminAuth
        .find(Box)
        .at(12)
        .props().color
    ).toBe('#6f6f6f')
  })

  it('should render `Box` with a prop name `mt` at node 12', () => {
    expect(
      adminAuth
        .find(Box)
        .at(12)
        .props().mt
    ).toBe(23)
  })

  it('should render `Box` with a prop name `mb` at node 12', () => {
    expect(
      adminAuth
        .find(Box)
        .at(12)
        .props().mb
    ).toBe(13)
  })

  it('should render `Box` with a prop name `className` at node 12', () => {
    expect(
      adminAuth
        .find(Box)
        .at(12)
        .props().className
    ).toBe('makeStyles-textStyles-2')
  })

  it('should render `Box` with a prop name `mt` at node 11', () => {
    expect(
      adminAuth
        .find(Box)
        .at(11)
        .props().mt
    ).toBe(8)
  })

  it('should render `Box` with a prop name `mb` at node 11', () => {
    expect(
      adminAuth
        .find(Box)
        .at(11)
        .props().className
    ).toBe('makeStyles-buttonStyles-1')
  })

  it('should render `InputField` with a prop name `onBlur` as a function', () => {
    expect(adminAuth.find(InputField).props().onBlur).toBeDefined()
  })

  it('should render `InputFied` with a prop name `onChange` as a function', () => {
    expect(adminAuth.find(InputField).props().onChange).toBeDefined()
  })
})
