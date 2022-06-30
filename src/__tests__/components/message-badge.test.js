import React from 'react'
import Badge from '@material-ui/core/Badge'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'

import MessageBadge from '../../components/message-badge'

describe('Message Badge Component', () => {
  let messageBadge

  beforeEach(() => {
    messageBadge = shallow(<MessageBadge />)
  })
  afterAll(() => jest.resetAllMocks())

  it('renders without crashing', () => {
    expect(toJson(messageBadge)).toMatchSnapshot()
  })

  it('should render a IconButton with length of 1', () => {
    expect(messageBadge.find(IconButton)).toHaveLength(1)
  })

  it('should find IconButton to be present', () => {
    expect(messageBadge.find(IconButton).exists()).toBe(true)
  })

  it('should render a IconButton componnent with a prop name `aria-label`', () => {
    expect(messageBadge.find(IconButton).prop('aria-label')).toBe('message')
  })

  it('should render a badge', () => {
    expect(messageBadge.find(Badge).exists()).toBeDefined()
  })

  it('should render a Box component', () => {
    expect(messageBadge.find(Box).exists()).toBe(true)
  })

  it('should render a Box component with a prop name `component`', () => {
    expect(messageBadge.find(Box).prop('component')).toBe('img')
  })

  it('should render a Box component with a prop name `src`', () => {
    expect(messageBadge.find(Box).prop('src')).toBeUndefined()
  })

  it('should render a Box component with a prop name `alt`', () => {
    expect(messageBadge.find(Box).prop('alt')).toBe('message')
  })
})
