import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import * as React from 'react'

interface IArticleCard {

}

const ArticleCard: React.FC<IArticleCard> = () => {
  return (
    <Stack gap={3} sx={{ maxWidth: '371px', }}>
      <Box 
        sx={{ 
          width: '100%',
          height: '248px',
          backgroundColor: 'red' 
        }} 
      />
      <Stack flexDirection="row" gap={3}>
        <Typography
          sx={{
            fontFamily: 'Red Hat Display',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '13px',
            lineHeight: '12px',
            letterSpacing: '1px',
            color: '#EF4230',
          }}
        >
          Arquitetura
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Red Hat Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '12px',
            letterSpacing: '0.5px',
            color: '#48E49B',
            mixBlendMode: 'normal',
          }}
        >
          Novo
        </Typography>
      </Stack>
      <Typography
        sx={{
          fontFamily: 'Red Hat Display',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '130%',
          color: '#000000',
        }}
      >
        Explorando os estilos arquiteturais na nuvem AWS
      </Typography>
      <Stack
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Button
          endIcon={<ChevronRight />}
          sx={{
            fontFamily: 'Red Hat Display',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '79.5%',
            color: '#7568FF',
            right: '8px',
          }}
        >
          Leia mais
        </Button>
      </Stack>
    </Stack>
  )
}

export { ArticleCard }