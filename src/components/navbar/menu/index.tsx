import { Box, Button, Stack } from '@mui/material'
import * as React from 'react'

interface IMenu {

}

const Menu: React.FC<IMenu> = () => {
  return (
    <Stack
      flexDirection="row"
      alignItems='center'
      gap={3}
    >
      <Button
        color="inherit"
        sx={{
          fontFamily: 'Red Hat Display',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '130%',
          color: '#FFFFFF',
          textTransform: 'none',
        }}
      >
        Início
      </Button>
      <Button 
        color="inherit"
        sx={{
          fontFamily: 'Red Hat Display',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '130%',
          color: '#FFFFFF',
          textTransform: 'none',
        }}
      >
        O processo
      </Button>
      <Button 
        color="inherit"
        sx={{
          fontFamily: 'Red Hat Display',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '130%',
          color: '#FFFFFF',
          textTransform: 'none',
        }}
      >
        Artigos
      </Button>
      <Button 
        color="inherit"
        sx={{
          fontFamily: 'Red Hat Display',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '130%',
          color: '#FFFFFF',
          textTransform: 'none',
        }}
      >
        Sobre nós
      </Button>
    </Stack>
  )
}

export { Menu }