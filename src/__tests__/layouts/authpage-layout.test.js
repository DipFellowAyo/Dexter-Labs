import React from 'react'
import Box from '@material-ui/core/Box'
import toJson from 'enzyme-to-json'
import { Link } from 'react-router-dom'
import { shallow } from 'enzyme'

import AuthPageLayout from '../../layouts/authpage.layout'
import { LANDING_ROUTE } from '../../utils/routes'

describe('AuthPage Layout', () => {
  let authPageLayout

  beforeEach(() => {
    authPageLayout = shallow(<AuthPageLayout />)
  })
  afterAll(() => jest.resetAllMocks())

  it('should render without crashing', () => {
    expect(authPageLayout).toBeTruthy()
  })

  it('should match the snapshot', () => {
    expect(toJson(authPageLayout)).toMatchSnapshot()
  })

  it('should render the AuthPage Layout with a prop name `title`', () => {
    expect(authPageLayout.props().title).toBeUndefined()
  })

  it('should render Box component', () => {
    expect(authPageLayout.find(Box)).toBeTruthy()
  })

  it('should render the Box component with a prop name `flexGrow` at node 0', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(0)
        .props().flexGrow
    ).toBe('1')
  })

  it('should render the Box component with a prop name `className` at node 0', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(0)
        .props().className
    ).toBe('makeStyles-root-1')
  })

  it('should render the Box component with a prop name `className` at node 1', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(1)
        .props().className
    ).toBe('makeStyles-gridContainer-2')
  })

  it('should render the Box component with a prop name `className` at node 2', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(2)
        .props().className
    ).toBe('makeStyles-leftFrame-3')
  })

  it('should render a Link component', () => {
    expect(authPageLayout.find(Link).exists()).toBeTruthy()
  })

  it('should render the Link component with a prop name `to`', () => {
    expect(authPageLayout.find(Link).props().to).toBe(LANDING_ROUTE)
  })

  it('should render the Link component with a prop name `className`', () => {
    expect(authPageLayout.find(Link).props().className).toBe(
      'makeStyles-flexStyles-6'
    )
  })

  it('should render Box component with a prop name `component`', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(3)
        .props().component
    ).toEqual('img')
  })

  it('should render a Box component with a prop name `src`', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(3)
        .props().src
    ).toEqual('/vectors/logo.svg')
  })

  it('should render a Box component with a prop name `alt`', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(3)
        .props().alt
    ).toEqual('logo')
  })

  it('should render a Box component with a prop name `className` at node 4', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(4)
        .props().className
    ).toBe('makeStyles-imageContainer-4')
  })

  it('should render a Box component with a prop name `component` at node 5', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(5)
        .props().component
    ).toEqual('img')
  })

  it('should render a Box component with a prop name `src` at node 5', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(5)
        .props().src
    ).toEqual('/vectors/office.svg')
  })

  it('should render a Box component with a prop name `alt` at node 5', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(5)
        .props().alt
    ).toEqual('office')
  })

  it('should render a Box component with a prop name `display` at node 5', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(5)
        .props().display
    ).toEqual('block')
  })

  it('should render a Box component with a prop name `margin` at node 5', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(5)
        .props().margin
    ).toEqual('0 auto')
  })

  it('should render a Box component with a prop name `className` at node 6', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(6)
        .props().className
    ).toBe('makeStyles-rightFrame-5')
  })

  it('should render a Box component with a prop name `className` at node 7', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(7)
        .props().className
    ).toBe('makeStyles-formContainer-7')
  })

  it('should render a Box component with a prop name `component` at node 8', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(8)
        .props().component
    ).toEqual('h2')
  })

  it('should render a Box component with a prop name `my` at node 8', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(8)
        .props().my
    ).toEqual(0)
  })

  it('should render a Box component with a prop name `className` at node 8', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(8)
        .props().className
    ).toBe('makeStyles-title-8')
  })

  it('should render a Box component with a prop name `children` at node 8', () => {
    expect(
      authPageLayout
        .find(Box)
        .at(8)
        .props().children
    ).toBeUndefined()
  })
})
