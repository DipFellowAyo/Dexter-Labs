import React from 'react'
import Badge from '@material-ui/core/Badge'
import Box from '@material-ui/core/Box'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'

import NotificationBadge from '../../components/notification-badge'

describe('Notification Badge Component', () => {
  let notificationBadge

  beforeEach(() => {
    notificationBadge = shallow(<NotificationBadge />)
  })
  afterAll(() => jest.resetAllMocks())

  it('should render without crashing', () => {
    expect(notificationBadge).toBeTruthy()
  })

  it('should match the snapshot', () => {
    expect(toJson(notificationBadge)).toMatchSnapshot()
  })

  it('should render the notification badge with a variant props', () => {
    expect(notificationBadge.find(Box)).toBeTruthy()
  })

  it('should render the Box with a component props', () => {
    notificationBadge.setProps({ component: 'img' })
    expect(notificationBadge.find(Box).props().component).toBe('img')
  })

  it('should render the Box with a height props', () => {
    notificationBadge.setProps({ alt: 'notification' })
    expect(notificationBadge.find(Box).props().alt).toBe('notification')
  })

  it('should render the Box with a width props', () => {
    notificationBadge.setProps({ src: '/vectors/notification.svg' })
    expect(notificationBadge.find(Box).props().src).toBe(
      '/vectors/notification.svg'
    )
  })
})
