import * as React from 'react';
import { AppBar, Box, Button, Container, Divider, Grid, Paper, Stack, Toolbar, Typography } from '@mui/material';
import marcaCherryItBranca from '../assets/Marca_CherryIt_Branca_2.png'
import transparentDellOptiPlex7400AllinOneMockup from '../assets/TransparentDellOptiPlex7400AllinOneMockup.png'
import transparentiPhone14ProMockup from '../assets/TransparentiPhone14ProMockup.png'
import Image from 'next/image';
import { PlayCircle } from '@mui/icons-material';
import { Section } from '@/components/section';
import { SectionTitle } from '@/components/sectionTitle';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static">
        <Toolbar>
          <Stack 
            justifyContent='center'
            sx={{ flexGrow: 1 }}
          >
            <Image
              src={marcaCherryItBranca}
              alt="Marca CherryIt Branca"
              width={147}
              height={48.38}
            />
          </Stack>
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
        </Toolbar>
      </AppBar>

      <Container
        sx={{ mt: 12, mb: 12 }}
        maxWidth='xl'
      >

        <Stack
          gap={12}
        >

          <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <Typography
                sx={{
                  fontFamily: 'Podkova',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '88px',
                  lineHeight: '88px',
                  letterSpacing: '-0.04em',
                  textTransform: 'uppercase',
                  color: '#1B1F1E',
                  marginBottom: '7px'
                }}
              >
                Tecnologia
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Podkova',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '48px',
                  lineHeight: '48%',
                  textTransform: 'uppercase',
                  color: '#1B1F1E',
                  marginBottom: '7px'
                }}
              >
                que transforma
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Podkova',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '88px',
                  lineHeight: '88%',
                  textTransform: 'uppercase',
                  color: '#EF4230',
                  marginBottom: '44px'
                }}
              >
                a vida
              </Typography>
              <Typography
                sx={{
                  marginBottom: '70px',
                  fontFamily: 'Podkova',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '149%',
                  color: '#1B1F1E',
                  maxWidth: '418px',
                }}
              >
                Maximize seu potencial com soluções de software exclusivas, para empresas que buscam inovação e eficiência
              </Typography>
              <Stack
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
                gap={3}
              >
                <Button
                  variant="contained"
                  sx={{
                    '&:hover': {
                      color: '#FFFFFF',
                      backgroundColor: '#48E49B',
                    },
                    background: '#48E49B',
                    border: '2px solid #48E49B',
                    boxShadow: '2px 3px 15px rgba(0, 0, 0, 0.17)',
                    borderRadius: '10px',

                    fontFamily: 'Red Hat Display',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '149%',
                    letterSpacing: '0.02em',
                    color: '#FFFFFF',
                  }}
                >
                  Como podemos ajudar?
                </Button>
                <Button
                  startIcon={<PlayCircle sx={{ fontSize: '52px !important', color: "#B51D22" }} />}
                  sx={{
                    fontFamily: 'Red Hat Display',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '17px',
                    lineHeight: '22px',
                    color: '#686D77',
                    textTransform: 'none',
                  }}
                >
                  Play video
                </Button>
              </Stack>
            </Grid>
            <Grid sx={{ position: "relative" }} item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Image 
                  src={transparentDellOptiPlex7400AllinOneMockup}
                  alt="Transparent Dell Opti Plex 7400 Allin One Mockup"
                  width="692"
                  height="596"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 156,
                    right: 0,
                  }}
                >
                  <Image 
                    src={transparentiPhone14ProMockup}
                    alt="transparenti Phone 14 Pro Mockup"
                    width="224"
                    height="395"
                  />
                </Box>
            </Grid>
          </Grid>

          <Section>
            <SectionTitle type='red'>
              Sobre nós
            </SectionTitle>
            <Stack flexDirection="row" justifyContent="center" gap={6}>
              <Stack
                gap={6}
                maxWidth='435px'
              >
                <Typography
                  sx={{
                    minHeight: 130,
                    fontFamily: 'Red Hat Display',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    textTransform: 'capitalize',
                    color: '#000000',
                  }}
                >
                  A Cherry IT é uma software house que domina a utilização da tecnologia para facilitar a vida de empresas, criando soluções digitais que ajudam a posicionar parceiros como lideranças em seus segmentos. Em sua trajetória beneficiamos startups disruptivas, órgãos governamentais brasileiros e empresas de consultoria consolidadas.
                </Typography>

                <Stack
                  component={Paper}
                  justifyContent="center"
                  alignItems="center"
                  gap={2}
                  p={6}
                  borderRadius={10}
                  height="100%"
                >
                  <Box 
                    sx={{
                      height: 40,
                      width: 40,
                      borderRadius: 100,
                      backgroundColor: '#E6F7FF'
                    }}
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
                      textTransform: 'capitalize',
                      color: '#000000',
                    }}
                  >
                    trazer um ar humano e integrado com a vida através da tecnologia aliada a criatividade humana
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                gap={6}
                maxWidth='435px'
              >
                <Typography
                  sx={{
                    minHeight: 130,
                    fontFamily: 'Red Hat Display',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    textTransform: 'capitalize',
                    color: '#000000',
                  }}
                >
                  A cerejeira é uma das árvores que frutificam no início da primavera, marcando o período das estações mais alegres, e, nas regiões mais frias, onde o inverno é rigoroso, traz uma simbologia de renovação da vida que ciclicamente se adapta e se renova ano após ano.
                </Typography>

                <Stack
                  component={Paper}
                  justifyContent="center"
                  alignItems="center"
                  gap={2}
                  p={6}
                  borderRadius={10}
                  height="100%"
                >
                  <Box 
                    sx={{
                      height: 40,
                      width: 40,
                      borderRadius: 100,
                      backgroundColor: '#DBFFB7'
                    }}
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
                      textTransform: 'capitalize',
                      color: '#000000',
                    }}
                  >
                    Preservar a sustentabilidade como estratégia de negócio. Manter a perspectiva contemporânea de trabalho: preservar e enfatizar a importância da saúde mental dentro do home office.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Section>

          <Section>
            <SectionTitle type='purple'>
              Nossos benefícios
            </SectionTitle>
            <Box sx={{ height: 200, width: '100%', backgroundColor: 'blue' }}/>
          </Section>
          
          <Section>
            <SectionTitle type='green'>
              Metodologia
            </SectionTitle>
            <Box sx={{ height: 200, width: '100%', backgroundColor: 'blue' }}/>
          </Section>
          
          <Section>
            <SectionTitle type='black'>
              Artigos
            </SectionTitle>
            <Box sx={{ height: 200, width: '100%', backgroundColor: 'blue' }}/>
          </Section>

          <Section>
            <Box sx={{ height: 200, width: '100%', backgroundColor: 'blue' }}/>
          </Section>

          <Section>
            <SectionTitle type='red'>
              Entre em contato
            </SectionTitle>
            <Box sx={{ height: 200, width: '100%', backgroundColor: 'blue' }}/>
          </Section>

        </Stack>
        
      </Container>
    
      <Divider />

      <Box 
        sx={{
          height: 200,
          width: '100%',
          backgroundColor: 'blue',
        }}
      />

    </Box>
  );
}