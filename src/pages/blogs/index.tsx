import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Box, Stack } from '@mui/material'
import * as React from 'react'

export default function Blogs() {
  return (
    <Box sx={{ flexGrow: 1 }}>

      <Navbar />

      <Box
        sx={{
          position: 'relative',
          height: '717px',
          width: '100%',
          backgroundColor: 'blue'
        }}
      >
        <Box 
          sx={{
            position: 'absolute',
            bottom: 63,
            left: 70,
            backgroundColor: 'green',
            width: '438px',
            height: '199px',
          }}
        />
      </Box>

      <Stack
        sx={{
          height: 300,
          width: '100%',
          backgroundColor: 'purple'
        }}
      >

      </Stack>

      <Stack
        sx={{
          height: 300,
          width: '100%',
          backgroundColor: 'orange'
        }}
      >

      </Stack>



      <Footer />
      
    </Box>
  )
}