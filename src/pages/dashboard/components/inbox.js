import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core'

import MessageBadge from '../../../components/message-badge'

const useStyles = makeStyles(theme => ({
  cards: {
    height: '55vh',
    overflowY: 'auto'
  },
  card: {
    border: '0.5px solid #ED7E81',
    borderRadius: 22,
    padding: '15px 15px',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    columnGap: '1rem',
    placeContent: 'center',
    placeItems: 'flex-start',
    boxShadow: '3px 3px 6px #ED7E8164',
    marginBottom: 28,
    '&:last-child': {
      marginBottom: 0
    }
  },
  searchField: {
    width: '100%',
    border: 'none'
  },
  imgStyle: {
    height: 70,
    width: 70,
    borderRadius: '50%',
    objectFit: 'cover'
  },
  composeMail: {
    background: '#ED7E81',
    cursor: 'pointer'
  },
  padding: {
    padding: 0
  }
}))

const inboxes = [
  {
    id: 1,
    profile_photo: '/abu.jpeg',
    subject: 'Sherryl Monroe',
    content: 'Return ticket to Monaco with + Free travel guide fir 1 week'
  },
  {
    id: 2,
    profile_photo: '/abu.jpeg',
    subject: 'Sherryl Monroe',
    content: 'Return ticket to Monaco with + Free travel guide fir 1 week'
  },
  {
    id: 3,
    profile_photo: '',

    subject: 'Sherryl Monroe',
    content: 'Return ticket to Monaco with + Free travel guide fir 1 week'
  },
  {
    id: 4,
    profile_photo: '/abu.jpeg',
    subject: 'Sherryl Monroe',
    content: 'Return ticket to Monaco with + Free travel guide fir 1 week'
  },
  {
    id: 5,
    profile_photo: '/abu.jpeg',
    subject: 'Sherryl Monroe',
    content: 'Return ticket to Monaco with + Free travel guide fir 1 week'
  }
]

const Inbox = ({ setPage }) => {
  const classes = useStyles()

  return (
    <Box>
      <form onSubmit={e => e.preventDefault()}>
        <Box
          height='40px'
          border='1px solid #A1A1AC'
          margin='2rem auto'
          display='flex'
          alignItems='center'
          borderRadius='20px'
          padding='1rem 0.5rem'
        >
          <input
            type='text'
            placeholder='Search inbox'
            className={classes.searchField}
          />
          <Box
            component='img'
            src='/vectors/search.svg'
            alt='search'
            marginLeft='0.5rem'
          />
        </Box>
      </form>
      <Box className={classes.cards}>
        {inboxes.map(({ id, subject, content, profile_photo }) => (
          <Box key={id} className={classes.card}>
            <Box
              component='img'
              src={`${
                profile_photo === '' ? '/vectors/photo.svg' : profile_photo
              }`}
              alt='avatar'
              className={classes.imgStyle}
            />
            <Box alignSelf='center'>
              <Box my={0} component='h2' color='#6F6F6F' fontWeight='700'>
                {subject}
              </Box>
              <Box component='p' my={0} color='#323740' fontWeight='300'>
                {content}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        margin='3rem auto 0'
        display='grid'
        gridTemplateColumns='1fr 1fr'
        gridColumnGap='1rem'
      >
        <Box
          height='50px'
          padding='0.5rem'
          border='0.25px solid #ED7E8164'
          boxShadow='2px 2px 2px #ED7E8164'
          borderRadius='19px'
          display='flex'
          alignItems='center'
        >
          <MessageBadge
            img='/vectors/message.svg'
            alt='message'
            className={classes.padding}
          />
          <Box my={0} component='p' color='#ED7E81' marginLeft='1rem'>
            Mails
          </Box>
        </Box>
        <Box
          height='50px'
          padding='1rem 0.5rem'
          border='0.25px solid #ED7E8164'
          boxShadow='2px 2px 2px #ED7E8164'
          borderRadius='19px'
          display='flex'
          alignItems='center'
          color='white'
          className={classes.composeMail}
          onClick={() => setPage(true)}
        >
          <Box component='img' src='/vectors/write.svg' alt='write' />
          <Box my={0} component='p' fontSize='0.75rem' marginLeft='0.5rem'>
            Compose mail
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Inbox
