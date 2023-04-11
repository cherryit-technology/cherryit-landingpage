import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'
import titleRed from '../../assets/titleRed.png'
import titlePurple from '../../assets/titlePurple.png'
import titleGreen from '../../assets/titleGreen.png'
import titleBlack from '../../assets/titleBlack.png'

interface ISectionTitle {
  type: string
  children: React.ReactNode
}

const componentTitle = (type: string) => {
  switch (type) {
    case 'red':
      return (
        <Image
          src={titleRed}
          alt="Title Red Right"
          fill
          style={{
            objectFit: 'contain'
          }} 
        />
      )
    case 'purple':
      return (
        <Image
          src={titlePurple}
          alt="Title Purple Right"
          fill
          style={{
            objectFit: 'contain'
          }} 
        />
      )
    case 'green':
      return (
        <Image
          src={titleGreen}
          alt="Title Green Right"
          fill
          style={{
            objectFit: 'contain'
          }} 
        />
      )
    case 'black':
      return (
        <Image
          src={titleBlack}
          alt="Title Black Right"
          fill
          style={{
            objectFit: 'contain'
          }} 
        />
      )
    default:
      return null
  }
}

const SectionTitle: React.FC<ISectionTitle> = ({
  type,
  children,
}) => {
  return (
    <Stack 
      width="100%" 
      gap={{
        xs: 2,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 4,
      }} 
      alignItems="center" 
      flexDirection="row" 
    >
      <Stack flex={1} sx={{ position: 'relative', height: '33.73px' }}>
        {componentTitle(type)}
      </Stack>
      <Typography
        sx={{
          fontFamily: 'Podkova',
          fontStyle: 'normal',
          fontWeight: 700,
          textAlign: 'center',
          maxWidth: {
            xs: '150px',
            sm: '200px',
            md: '212.5px',
            lg: '225px',
            xl: '250px',
          },
          fontSize: {
            xs: '30px',
            sm: '40px',
            md: '42.5px',
            lg: '45px',
            xl: '50px',
          },
          lineHeight: {
            xs: '30px',
            sm: '40px',
            md: '42.5px',
            lg: '45px',
            xl: '50px',
          },
          color: '#14183E',
        }}
      >
        {children}
      </Typography>
      <Stack flex={1} sx={{ position: 'relative', height: '33.73px' }}>
        {componentTitle(type)}
      </Stack>
    </Stack>
  )
}

export { SectionTitle }