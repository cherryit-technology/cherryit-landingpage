import { Stack, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'
import Marca_CherryIt_Preta from '../../assets/Marca_CherryIt_Preta 1.png'
import face from '../../assets/face.png'
import insta from '../../assets/insta.png'
import twitter from '../../assets/twitter.png'

const FooterHome: React.FC = () => {
  return (
    <Stack
      gap={6}
      sx={{
        padding: '40px',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row',
        },
        justifyContent: 'space-around'  
      }}
    >
      <Stack>
        <Image
          src={Marca_CherryIt_Preta}
          alt="Marca CherryIt Preta"
          width={131}
          height={44.18}
        />
        <Typography
          sx={{
            fontFamily: 'Red Hat Display',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '20px',
            color: '#1B1F1E',
            mb: 3
          }}
        >
          Tecnologia que semea sonhos
        </Typography>
        <Typography
            sx={{
            fontFamily: 'Red Hat Display',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '20px',
            color: '#1B1F1E',
          }}
        >
          All rights reserved@cherryit
        </Typography>
      </Stack>
      
      <Stack>
        <Typography
          sx={{
            fontFamily: 'Red Hat Display',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '21px',
            color: '#1B1F1E',
            mb: 3
          }}
        >
          Política
        </Typography>
        <Typography
            sx={{
            fontFamily: 'Red Hat Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px',
            color: '#1B1F1E',
            mb: 3
          }}
        >
          Política de segurança da informação
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Red Hat Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px',
            color: '#1B1F1E',
          }}
        >
          Código de ética
        </Typography>
      </Stack>

      <Stack
        gap={1}
        flexDirection="row"
      >
        <Image
          src={face}
          alt="Facebook"
          width={41}
          height={41}
        />
        <Image
          src={insta}
          alt="Instagram"
          width={41}
          height={41}
        />
        <Image
          src={twitter}
          alt="Twitter"
          width={41}
          height={41}
        />
      </Stack>

    </Stack>
  )
}

export { FooterHome }