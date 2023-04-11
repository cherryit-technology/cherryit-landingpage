import * as React from 'react';
import { AppBar, Box, Button, Container, Divider, Grid, Stack, Toolbar, Typography } from '@mui/material';
import marcaCherryItBranca from '../assets/Marca_CherryIt_Branca_2.png'

import pCMockup from '../assets/pc.png'
import grafico from '../assets/grafico.png'
import timeline from '../assets/timeline.png'
import chartBar33 from '../assets/chart-bar-33.png'


import Group44746 from '../assets/Group44746.png'
import Group447461 from '../assets/Group447461.png'
import Group44753 from '../assets/Group44753.png'
import Group44754 from '../assets/Group44754.png'

import Group8 from '../assets/Group8.png'

import Marca_CherryIt_Preta from '../assets/Marca_CherryIt_Preta 1.png'


import face from '../assets/face.png'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'


import Image from 'next/image';
import { ChevronRight, PlayCircle } from '@mui/icons-material';
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
            sx={{
              // display: 'none'
            }}
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

        <Grid container spacing={3}>

          <Grid item xs={12} sm={12} md={5} lg={5} xl={6}>
            <Typography
              sx={{
                fontFamily: 'Podkova',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: {
                  xs: '48.4px',
                  sm: '61.6px',
                  md: '70.4px',
                  lg: '79.2px',
                  xl: '88px',
                },
                lineHeight: {
                  xs: '48.4px',
                  sm: '61.6px',
                  md: '70.4px',
                  lg: '79.2px',
                  xl: '88px',
                },
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
                fontSize: {
                  xs: '26.4px',
                  sm: '33.6px',
                  md: '38.4px',
                  lg: '43.2px',
                  xl: '48px',
                },
                lineHeight: {
                  xs: '26.4px',
                  sm: '33.6px',
                  md: '38.4px',
                  lg: '43.2px',
                  xl: '48px',
                },
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
                fontSize: {
                  xs: '48.4px',
                  sm: '61.6px',
                  md: '70.4px',
                  lg: '79.2px',
                  xl: '88px',
                },
                lineHeight: {
                  xs: '48.4px',
                  sm: '61.6px',
                  md: '70.4px',
                  lg: '79.2px',
                  xl: '88px',
                },
                textTransform: 'uppercase',
                color: '#EF4230',
              }}
            >
              a vida
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={7} lg={7} xl={6}>
              
            <Stack
              sx={{ 
                position: "relative", 
                right: {
                  xs: 35,
                  sm: 50,
                  md: 0,
                  lg: 0,
                  xl: 0,
                },
                height: {
                  xs: 256.28,
                  sm: 417.2,
                  md: 417.2,
                  lg: 536.4,
                  xl: 596,
                },
                width: {
                  xs: 317.34,
                  sm: 516.6,
                  md: 516.6,
                  lg: 664.2,
                  xl: 738,
                }
              }}
            >
              <Image 
                src={pCMockup}
                alt="pCMockup"
                fill
                style={{
                  objectFit: 'contain'
                }}
              />
            </Stack>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Box
              sx={{
                position: 'relative',
                top: {
                  xs: 0,
                  sm: 0,
                  md: '-220px',
                  lg: '-320px',
                  xl: '-360px'
                }
              }}
            >
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
                gap={3}
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  },
                  alignItems: {
                    xs: "flex-start",
                    sm: "flex-start",
                    md: "center",
                    lg: "center",
                    xl: "center",
                  },
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
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

                    display: 'none',

                  }}
                >
                  Play video
                </Button>
              </Stack>
            </Box>
          </Grid>

          </Grid>

        <Stack
          gap={12}
          sx={{
            position: 'relative',
            top: {
              xs: 100,
              sm: 100,
              md: -120,
              lg: -160,
              xl: -160,
            }
          }}
        >

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

          <Section>
            <SectionTitle type='purple'>
              Nossos benefícios
            </SectionTitle>
            
            <Grid
              container
              spacing={11}
            >
              <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                <Stack 
                  gap={1}
                  alignItems="center"
                  sx={{
                    width: '100%',
                    borderRadius: '36px',
                    paddingLeft: '31px',
                    paddingRight: '31px',
                    paddingBottom: '30px',
                    paddingTop: '40px',
                    "&:hover": {
                      borderBottom: "1px solid #7568FF",
                      borderLeft: "1px solid #7568FF",
                      borderRight: "1px solid #7568FF",
                      boxShadow: 1,
                    },
                  }}
                >
                  <Image
                    src={Group44746}
                    alt="Group44746"
                    width={65}
                    height={65}
                  />
                  <Typography
                    sx={{
                      mt: 3,
                      fontFamily: 'Red Hat Display',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '24px',
                      textAlign: 'center',
                      color: '#1E1D4C',

                    }}
                  >
                    Aumento de produtividade e competitividade
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Red Hat Display',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '149%',
                      textAlign: 'center',
                      color: '#5E6282',

                    }}
                  >
                    Soluções de software avançadas permitem que as empresas se tornem mais eficientes, lucrativas e atualizadas no mercado
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                <Stack 
                  gap={1}
                  alignItems="center"
                  sx={{
                    width: '100%',
                    borderRadius: '36px',
                    paddingLeft: '31px',
                    paddingRight: '31px',
                    paddingBottom: '30px',
                    paddingTop: '40px',
                    "&:hover": {
                      borderBottom: "1px solid #7568FF",
                      borderLeft: "1px solid #7568FF",
                      borderRight: "1px solid #7568FF",
                      boxShadow: 1,
                    },
                  }}
                >
                  <Image
                    src={Group447461}
                    alt="Group447461"
                    width={65}
                    height={65}
                  />
                  <Typography
                    sx={{
                      mt: 3,
                      fontFamily: 'Red Hat Display',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '24px',
                      textAlign: 'center',
                      color: '#1E1D4C',

                    }}
                  >
                    Redução de custos
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Red Hat Display',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '149%',
                      textAlign: 'center',
                      color: '#5E6282',

                    }}
                  >
                    Soluções de software avançadas permitem que as empresas se tornem mais eficientes, lucrativas e atualizadas nSoluções de software customizadas podem ajudar as empresas a economizar tempo e recursos, resultando em melhoria dos resultados operacionais através da redução de custoso mercado
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                <Stack
                  gap={1}
                  alignItems="center"
                  sx={{
                    width: '100%',
                    borderRadius: '36px',
                    paddingLeft: '31px',
                    paddingRight: '31px',
                    paddingBottom: '30px',
                    paddingTop: '40px',
                    "&:hover": {
                      borderBottom: "1px solid #7568FF",
                      borderLeft: "1px solid #7568FF",
                      borderRight: "1px solid #7568FF",
                      boxShadow: 1,
                    },
                  }}
                >
                  <Image
                    src={Group44753}
                    alt="Group44753"
                    width={65}
                    height={65}
                  />
                  <Typography
                    sx={{
                      mt: 3,
                      fontFamily: 'Red Hat Display',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '24px',
                      textAlign: 'center',
                      color: '#1E1D4C',

                    }}
                  >
                    Melhoria da satisfação do cliente final
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Red Hat Display',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '149%',
                      textAlign: 'center',
                      color: '#5E6282',

                    }}
                  >
                    Soluções de software personalizadas podem ajudar as empresas a atender às necessidades de seus clientes de forma mais eficaz, resultando em uma melhoria da satisfação do cliente.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                <Stack 
                  gap={1}
                  alignItems="center"
                  sx={{
                    width: '100%',
                    borderRadius: '36px',
                    paddingLeft: '31px',
                    paddingRight: '31px',
                    paddingBottom: '30px',
                    paddingTop: '40px',
                    "&:hover": {
                      borderBottom: "1px solid #7568FF",
                      borderLeft: "1px solid #7568FF",
                      borderRight: "1px solid #7568FF",
                      boxShadow: 1,
                    },
                  }}
                >
                  <Image
                    src={Group44754}
                    alt="Group44754"
                    width={65}
                    height={65}
                  />
                  <Typography
                    sx={{
                      mt: 3,
                      fontFamily: 'Red Hat Display',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '24px',
                      textAlign: 'center',
                      color: '#1E1D4C',

                    }}
                  >
                    Experiência comprovada
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Red Hat Display',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '149%',
                      textAlign: 'center',
                      color: '#5E6282',

                    }}
                  >
                    Com anos de experiência no setor de desenvolvimento de software, a Cherry IT possui um histórico comprovado de entrega de projetos de sucesso.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          
          </Section>
          
          <Section>
            <SectionTitle type='green'>
              Metodologia
            </SectionTitle>

            <Grid container spacing={6}>
              <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                <Stack
                  sx={{
                    width: '100%',
                    alignItems: {
                      xs: 'center',
                      sm: 'center',
                      md: 'flex-start',
                      lg: 'flex-start',
                      xl: 'flex-start',
                    }
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: {
                        xs: '272.25px',
                        sm: '495.01px',
                        md: '495.01px',
                        lg: '660.02px',
                        xl: '825.02px',
                      },
                      height: {
                        xs: '272.25px',
                        sm: '495px',
                        md: '495px',
                        lg: '660px',
                        xl: '825px',
                      }
                    }}
                  >
                    <Image 
                      src={grafico}
                      alt="Transparent Dell Opti Plex 7400 Allin One Mockup"
                      fill
                      style={{
                        objectFit: 'contain'
                      }}
                    />
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                <Stack
                  sx={{
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      marginTop: {
                        xs: "0px",
                        sm: "0px",
                        md: "0px",
                        lg: "100px",
                        xl: "120px",
                      },
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "300px",
                        lg: "365px",
                        xl: "365px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'Red Hat Display',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        lineHeight: '147.6%',
                        color: '#1B1F1E',
                      }}
                    >
                      Nossa metodologia
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Red Hat Display',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '16px',
                        lineHeight: '147.6%',
                        color: '#1B1F1E',
                        mb: 3,
                      }}
                    >
                      O seu contexto de negócio é único, e portanto soluções pré moldadas muitas vezes não são o suficiente. Podem cobrir certos casos de uso, mas sempre haverá aquela sensação de que algo está incompleto.
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Red Hat Display',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '16px',
                        lineHeight: '147.6%',
                        color: '#1B1F1E',
                      }}
                    >
                      Nossa metodologia de aprendizado e ação informada aliado a nosso domínio de alta tecnologia aplicada, garante que conseguimos endereçar a crescente complexidade não-linear das relações pós pandemia na busca de soluções simples e eficazes para seus desafios de negócio.
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Stack
                  flexDirection="row"
                  gap={3}
                >
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      src={Group8}
                      alt="Group8"
                      width={25}
                      height={25}
                    />
                  </Stack>
                  <Stack
                    flex={1}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'Red Hat Display',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        lineHeight: '26px',
                        color: '#000000',
                      }}
                    >
                      Equipe dedicada 
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Red Hat Display',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '20px',
                        lineHeight: '26px',
                        color: '#000000',
                      }}
                    >
                      Uma equipe técnica altamente capacitada e experiente que poderá ser alocada exclusivamente para a sua empresa.
                    </Typography>
                  </Stack>  
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Stack
                  flexDirection="row"
                  gap={3}
                >
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      src={Group8}
                      alt="Group8"
                      width={25}
                      height={25}
                    />
                  </Stack>
                  <Stack
                    flex={1}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'Red Hat Display',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        lineHeight: '26px',
                        color: '#000000',
                      }}
                    >
                      Controle de qualidade
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Red Hat Display',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '20px',
                        lineHeight: '26px',
                        color: '#000000',
                      }}
                    >
                      Nossos processos de controle de qualidade garantem que as soluções de software sejam entregues com alta qualidade.
                    </Typography>
                  </Stack>  
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Stack
                  flexDirection="row"
                  gap={3}
                >
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      src={Group8}
                      alt="Group8"
                      width={25}
                      height={25}
                    />
                  </Stack>
                  <Stack
                    flex={1}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'Red Hat Display',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        lineHeight: '26px',
                        color: '#000000',
                      }}
                    >
                      Agilidade na criação de produtos
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Red Hat Display',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '20px',
                        lineHeight: '26px',
                        color: '#000000',
                      }}
                    >
                      A equipe de desenvolvimento da Cherry IT usa metodologias ágeis para garantir que os projetos sejam entregues rapidamente e com alta qualidade.
                    </Typography>
                  </Stack>  
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Stack
                  flexDirection="row"
                  gap={3}
                >
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      src={Group8}
                      alt="Group8"
                      width={25}
                      height={25}
                    />
                  </Stack>
                  <Stack
                    flex={1}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'Red Hat Display',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        lineHeight: '26px',
                        color: '#000000',
                      }}
                    >
                      Suporte técnico
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Red Hat Display',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '20px',
                        lineHeight: '26px',
                        color: '#000000',
                      }}
                    >
                      Suporte técnico contínuo pode ser fornecido para garantir que a sua empresa possa obter o máximo de suas soluções de software.
                    </Typography>
                  </Stack>  
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Stack
                  flexDirection="row"
                  gap={3}
                >
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      src={Group8}
                      alt="Group8"
                      width={25}
                      height={25}
                    />
                  </Stack>
                  <Stack
                    flex={1}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'Red Hat Display',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        lineHeight: '26px',
                        color: '#000000',
                      }}
                    >
                      Flexibilidade
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Red Hat Display',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '20px',
                        lineHeight: '26px',
                        color: '#000000',
                      }}
                    >
                      A equipe estará focada nas necessidades específicas da sua empresa, incluindo horários, projetos e tecnologias.
                    </Typography>
                  </Stack>  
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Button
                  endIcon={<ChevronRight />}
                  variant="contained"
                  sx={{
                    '&:hover': {
                      background: '#7568FF',
                    },
                    padding: '16px 20px',
                    gap: '10px',
                    height: '59px',
                    background: '#7568FF',
                    boxShadow: '2px 3px 15px rgba(0, 0, 0, 0.17)',
                    borderRadius: '10px',

                    fontFamily: 'Red Hat Display',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: {
                      xs: '18px',
                      sm: '18px',
                      md: '14px',
                      lg: '18px',
                      xl: '18px',
                    },
                    lineHeight: '149%',
                    letterSpacing: '0.02em',
                    color: '#FFFFFF',
                  }}
                >
                  Fale com um especialista de soluções
                </Button>
              </Grid>
            </Grid>           

          </Section>
          
          {/* <Section>
            <SectionTitle type='black'>
              Artigos
            </SectionTitle>
            <Box sx={{ height: 200, width: '100%', backgroundColor: 'blue' }}/>
          </Section> */}

          {/* <Section>
            <Box sx={{ height: 200, width: '100%', backgroundColor: 'blue' }}/>
          </Section> */}

          {/* <Section>
            <SectionTitle type='red'>
              Entre em contato
            </SectionTitle>
            <Box sx={{ height: 200, width: '100%', backgroundColor: 'blue' }}/>
          </Section> */}

        </Stack>
        
      </Container>
    
      <Divider />

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

    </Box>
  );
}
