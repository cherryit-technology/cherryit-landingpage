import { Box, Stack } from '@mui/material'
import * as React from 'react'

interface ISection {
  children: React.ReactNode
}

const Section: React.FC<ISection> = ({
  children,
}) => {
  return (
    <Box
      component="section"
    >
      <Stack 
        gap={6}
        sx={{
          mb: 6
        }}
      >
        {children}
      </Stack>
    </Box>
  )
}

export { Section }