import * as React from 'react'
import { Section } from '../section'
import { SectionTitle } from '../sectionTitle'
import { Stack, Typography } from '@mui/material'
import Image from 'next/image'
import timeline from '../../assets/timeline.png'
import chartBar33 from '../../assets/chart-bar-33.png'

interface IAboutUs {

}

const AboutUs: React.FC<IAboutUs> = () => {
  return (
    <Section>
      <SectionTitle type='red'>
        Sobre nós
      </SectionTitle>
      <Stack
        alignItems='center'
        gap={6} 
      >
        <Stack 
          sx={{
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            } 
          }}
          gap={6} 
        >
          <Typography
            sx={{
              minHeight: 130,
              fontFamily: 'Red Hat Display',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#000000',
              maxWidth: '435px',
            }}
          >
            A Cherry IT é uma software house que domina a utilização da tecnologia para facilitar a vida de empresas, criando soluções digitais que ajudam a posicionar parceiros como lideranças em seus segmentos. Em sua trajetória beneficiamos startups disruptivas, órgãos governamentais brasileiros e empresas de consultoria consolidadas.
          </Typography>
          <Typography
            sx={{
              minHeight: 130,
              fontFamily: 'Red Hat Display',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#000000',
              maxWidth: '435px',
            }}
          >
            A cerejeira é uma das árvores que frutificam no início da primavera, marcando o período das estações mais alegres, e, nas regiões mais frias, onde o inverno é rigoroso, traz uma simbologia de renovação da vida que ciclicamente se adapta e se renova ano após ano.
          </Typography>
        </Stack>
    
        <Stack 
          sx={{
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            } 
          }} 
          gap={6}
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            gap={2}
            p={6}
            height="100%"
            sx={{
              borderRadius: '36px',
              boxShadow: 2,
              maxWidth: '435px',
            }}
          >
            <Image
              src={chartBar33}
              alt="chart Bar 33"
              width={40}
              height={40}
            />
            <Typography
              sx={{
                fontFamily: 'Red Hat Display',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '26px',
                textAlign: 'center',
                textTransform: 'capitalize',
                color: '#000000',
              }}
            >
              Missão
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Red Hat Display',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '28px',
                textAlign: 'center',
                color: '#000000',
              }}
            >
              Trazer um ar humano e integrado com a vida através da tecnologia aliada a criatividade humana
            </Typography>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            gap={2}
            p={6}
            height="100%"
            sx={{
              borderRadius: '36px',
              boxShadow: 2,
              maxWidth: '435px',
            }}
          >
            <Image
              src={timeline}
              alt="timeline"
              width={40}
              height={40}
            />
            <Typography
              sx={{
                fontFamily: 'Red Hat Display',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '26px',
                textAlign: 'center',
                textTransform: 'capitalize',
                color: '#000000',
              }}
            >
              Valores
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Red Hat Display',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '28px',
                textAlign: 'center',
                color: '#000000',
              }}
            >
              Preservar a sustentabilidade como estratégia de negócio. Manter a perspectiva contemporânea de trabalho: preservar e enfatizar a importância da saúde mental dentro do home office.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Section>
  )
}

export { AboutUs }