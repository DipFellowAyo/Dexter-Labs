import React from 'react'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import toJson from 'enzyme-to-json'
import { Link } from 'react-router-dom'
import { shallow } from 'enzyme'

import NavBar from '../../components/navbar'
import NotificationBadge from '../../components/notification-badge'
import MessageBadge from '../../components/message-badge'
import { LANDING_ROUTE } from '../../utils/routes'

describe('Navbar component', () => {
  let navBar

  beforeEach(() => {
    navBar = shallow(<NavBar />)
  })

  it('renders correctly', () => {
    expect(toJson(navBar)).toMatchSnapshot()
  })

  it('renders a Box component', () => {
    expect(navBar.find(Box).exists()).toBe(true)
  })

  it('renders a Box component with a prop name `component` at node 0', () => {
    expect(
      navBar
        .find(Box)
        .at(0)
        .props().component
    ).toEqual('nav')
  })

  it('renders a Box component with a prop name `className` at node 0', () => {
    expect(
      navBar
        .find(Box)
        .at(0)
        .props().className
    ).toEqual('makeStyles-appBarStyles-1')
  })

  it('renders a Link component', () => {
    expect(navBar.find(Link).exists()).toBe(true)
  })

  it('renders a Link component with a prop name `to`', () => {
    expect(navBar.find(Link).props().to).toEqual(LANDING_ROUTE)
  })

  it('renders a Box component with a prop name `component` at node 1', () => {
    expect(
      navBar
        .find(Box)
        .at(1)
        .props().component
    ).toEqual('img')
  })

  it('renders a Box component with a prop name `src` at node 1', () => {
    expect(
      navBar
        .find(Box)
        .at(1)
        .props().src
    ).toEqual('/vectors/dexter.svg')
  })

  it('renders a Box component with a prop name `alt` at node 1', () => {
    expect(
      navBar
        .find(Box)
        .at(1)
        .props().alt
    ).toEqual('dexter')
  })

  it('renders a Box component with a prop name `className` at node 1', () => {
    expect(
      navBar
        .find(Box)
        .at(1)
        .props().className
    ).toEqual('makeStyles-logo-5')
  })

  it('renders a Box component with a prop name `component` at node 2', () => {
    expect(
      navBar
        .find(Box)
        .at(2)
        .props().component
    ).toEqual('img')
  })

  it('renders a Box component with a prop name `src` at node 2', () => {
    expect(
      navBar
        .find(Box)
        .at(2)
        .props().src
    ).toEqual('/vectors/logo.svg')
  })

  it('renders a Box component with a prop name `alt` at node 2', () => {
    expect(
      navBar
        .find(Box)
        .at(2)
        .props().alt
    ).toEqual('logo')
  })

  it('renders a Box component with a prop name `className` at node 2', () => {
    expect(
      navBar
        .find(Box)
        .at(2)
        .props().className
    ).toEqual('makeStyles-mobile-6')
  })

  it('renders a Box component with a prop name `display` at node 3', () => {
    expect(
      navBar
        .find(Box)
        .at(3)
        .props().display
    ).toEqual('flex')
  })

  it('renders a Box component with a prop name `alignItems` at node 3', () => {
    expect(
      navBar
        .find(Box)
        .at(3)
        .props().alignItems
    ).toEqual('center')
  })

  it('renders a form', () => {
    expect(navBar.find('form').exists()).toBe(true)
  })

  it('render a Box component with a prop name `className` at node 4', () => {
    expect(
      navBar
        .find(Box)
        .at(4)
        .props().className
    ).toBe('makeStyles-searchField-2')
  })

  it('renders an input field', () => {
    expect(navBar.find('input').exists()).toBe(true)
  })

  it('renders an input field with a prop name `type`', () => {
    expect(navBar.find('input').props().type).toEqual('text')
  })

  it('renders an input field with a prop name `placeholder`', () => {
    expect(navBar.find('input').props().placeholder).toEqual('Search')
  })

  it('renders an input field with a prop name `className`', () => {
    expect(navBar.find('input').props().className).toEqual(
      'makeStyles-inputStyle-3'
    )
  })

  it('renders a Box component with a prop name `component`', () => {
    expect(
      navBar
        .find(Box)
        .at(5)
        .props().component
    ).toEqual('img')
  })

  it('renders a Box component with a prop name `src`', () => {
    expect(
      navBar
        .find(Box)
        .at(5)
        .props().src
    ).toEqual('/vectors/search.svg')
  })

  it('renders a Box component with a prop name `alt`', () => {
    expect(
      navBar
        .find(Box)
        .at(5)
        .props().alt
    ).toEqual('search')
  })

  it('renders a NotificationBadge component', () => {
    expect(navBar.find(NotificationBadge).exists()).toBe(true)
  })

  it('renders a NotificationBadge component to match snapshots', () => {
    expect(navBar.find(NotificationBadge)).toMatchSnapshot()
  })

  it('renders a MessageBadge component', () => {
    expect(navBar.find(MessageBadge).exists()).toBe(true)
  })

  it('renders a MessageBadge component to match snapshot', () => {
    expect(navBar.find(MessageBadge)).toMatchSnapshot()
  })

  it('renders a MessageBadge component with a prop name `className`', () => {
    expect(navBar.find(MessageBadge).props().className).toEqual(
      'makeStyles-message-7'
    )
  })

  it('renders a NotificationBadge component with a prop name `className`', () => {
    expect(navBar.find(MessageBadge).props().img).toEqual(
      '/vectors/message.svg'
    )
  })

  it('renders a IconButton component', () => {
    expect(navBar.find(IconButton).exists()).toBe(true)
  })

  it('renders a IconButton component to match snapshot', () => {
    expect(navBar.find(IconButton)).toMatchSnapshot()
  })

  it('renders an IconButton with a prop name `className`', () => {
    expect(navBar.find(IconButton).props().className).toEqual(
      'makeStyles-iconButtonStyles-4'
    )
  })

  it('renders a Box with a prop name `component`', () => {
    expect(
      navBar
        .find(Box)
        .at(7)
        .props().component
    ).toEqual('img')
  })

  it('renders a Box component with a prop name `src` at node 7', () => {
    expect(
      navBar
        .find(Box)
        .at(7)
        .props().src
    ).toEqual('/vectors/avatar.svg')
  })

  it('renders a Box component with a prop name `alt` at node 7', () => {
    expect(
      navBar
        .find(Box)
        .at(7)
        .props().alt
    ).toEqual('avatar')
  })
})
