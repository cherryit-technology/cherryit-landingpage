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
          width={180.25}
          height={33.73} 
        />
      )
    case 'purple':
      return (
        <Image
          src={titlePurple}
          alt="Title Purple Right"
          width={180.25}
          height={33.73} 
        />
      )
    case 'green':
      return (
        <Image
          src={titleGreen}
          alt="Title Green Right"
          width={180.25}
          height={33.73} 
        />
      )
    case 'black':
      return (
        <Image
          src={titleBlack}
          alt="Title Black Right"
          width={180.25}
          height={33.73} 
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
    <Stack gap={4} flexDirection="row" justifyContent="center" alignItems="center">
      {componentTitle(type)}
      <Typography
        sx={{
          fontFamily: 'Podkova',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '50px',
          lineHeight: '55px',
          textAlign: 'center',
          color: '#14183E',
        }}
      >
        {children}
      </Typography>
      {componentTitle(type)}
    </Stack>
  )
}

export { SectionTitle }