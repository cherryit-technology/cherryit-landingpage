import { Box, Grid, Stack, Typography, Container } from "@mui/material";
import * as React from "react";
/* import { Slider } from "./slider"; */
import Slider from "react-slick";
import { Section } from "../section";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "next/image";
import Rafael from "../../assets/rafael.jpg";
import Marcelo from "../../assets/marcelo.jpg";
import William from "../../assets/william.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

function SamplePrevArrow(props: any) {
  const { style, onClick } = props;
  return (
    <Box
      className="slick-arrow"
      onClick={onClick}
      sx={{
        ...style,
        position: "absolute",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        top: "200px",
        display: {
          xs: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex",
        },
        alignItems: "center",
        justifyContent: "center",
        right: "0px",
        cursor: "pointer",
        zIndex: 9999999999999,
      }}
    >
      <ArrowBackIosIcon sx={{ fontSize: "20px", transform: "rotate(90deg)" }} />
    </Box>
  );
}

function SampleNextArrow(props: any) {
  const { onClick, style } = props;
  return (
    <Box
      className="slick-arrow"
      onClick={onClick}
      sx={{
        ...style,
        position: "absolute",
        width: "40px",
        height: "40px",
        top: "265px",
        borderRadius: "50%",
        display: {
          xs: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex",
        },
        alignItems: "center",
        justifyContent: "center",
        right: "0px",
        cursor: "pointer",
        zIndex: 9999999999999,
      }}
    >
      <ArrowForwardIosIcon
        sx={{ fontSize: "20px", transform: "rotate(90deg)" }}
      />
    </Box>
  );
}

const Slide = styled(Slider)(() => ({
  ".slick-dots": {
    bottom: "50px",
    marginLeft: "-950px",
    "@media (max-width: 1545px)": { marginLeft: "-850px" },
    "@media (max-width: 1400px)": { marginLeft: "-550px" },
    "@media (max-width: 1200px)": { marginLeft: "0px", bottom: "-20px" },
    position: "absolute",
    li: {
      button: {
        color: "#7568FF",
        width: "8px",
        height: "22px",
        "&:before": {
          opacity: "3",
          color: "#D9D9D9",
          fontSize: "10px",
          width: "8px",
          height: "22px",
          verticalAlign: "middle",
        },
      },
    },
  },
}));

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Testimonials: React.FC = () => {
  return (
    <Stack
      display="flex"
      gap={12}
      sx={{
        position: "relative",
        top: {
          xs: -500,
          sm: -430,
          md: -450,
          lg: -500,
          xl: -500,
        },
        height: {
          xs: "800px",
          sm: "800px",
          md: "600px",
          lg: "600px",
          xl: "600px",
        },
        background: "#FCFCFC",
        borderRight: {
          xs: "none",
          sm: "none",
          md: "none",
          lg: "solid 10px #7568FF",
          xl: "solid 10px #7568FF",
        },
      }}
    >
      <Section>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              marginTop: {
                xs: "-50px",
                sm: "-50px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
            }}
          >
            <Container sx={{ mt: 12, mb: 12 }} maxWidth="xl">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <Typography
                    sx={{
                      fontFamily: "Red Hat Display",
                      fontSize: {
                        xs: "16px",
                        sm: "16px",
                        md: "18px",
                        lg: "18px",
                        xl: "18px",
                      },
                      fontWeight: 600,
                      color: "#5E6282",
                      textTransform: "uppercase",
                    }}
                  >
                    Testimoniais
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Red Hat Display",
                      fontSize: {
                        xs: "32px",
                        sm: "32px",
                        md: "32px",
                        lg: "50px",
                        xl: "50px",
                      },
                      fontWeight: 700,
                      color: "#14183E",
                      lineHeight: "55px",
                    }}
                  >
                    O que as pessoas falam de nós
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Slide {...settings}>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          width: "68px",
                          height: "68px",
                        }}
                      >
                        <Image
                          src={Rafael}
                          alt="Rafael"
                          fill
                          style={{
                            objectFit: "contain",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          borderRadius: "10px",
                          background: "#FFF",
                          boxShadow:
                            "0px 1.85185px 3.14815px 0px rgba(0, 0, 0, 0.00), 0px 8.14815px 6.51852px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.51852px 25.48148px 0px rgba(0, 0, 0, 0.01), 0px 64.81481px 46.85185px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)",
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                          width: {
                            xs: "95%",
                            sm: "95%",
                            md: "95%",
                            lg: "70%",
                            xl: "70%",
                          },
                          height: "auto",
                          marginLeft: {
                            xs: "0px",
                            sm: "0px",
                            md: "35px",
                            lg: "35px",
                            xl: "35px",
                          },
                          padding: "34px",
                          marginBottom: "50px",
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: "left",
                            fontFamily: "Red Hat Display",
                            fontSize: "16px",
                            fontWeight: 500,
                            lineHeight: "32px",
                          }}
                        >
                          &#34;Gostaria de deixar registrado a satisfação com a
                          equipe Cherry. nossa evolução nas soluções web foram
                          da nossa organização foram exponenciais após a
                          contratação dos serviços. que essa parceria possa ser
                          longa e duradoura.&#34;
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: "left",
                            fontFamily: "Red Hat Display",
                            fontSize: "18px",
                            fontWeight: 500,
                            lineHeight: "32px",
                            marginTop: "34px",
                          }}
                        >
                          Rafael Luiz de Souza Alonso
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: "left",
                            fontFamily: "Red Hat Display",
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: "32px",
                          }}
                        >
                          CTO / Mobilidade na Transfácil
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          width: "68px",
                          height: "68px",
                        }}
                      >
                        <Image
                          src={Marcelo}
                          alt="Marcelo"
                          fill
                          style={{
                            objectFit: "contain",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          borderRadius: "10px",
                          background: "#FFF",
                          boxShadow:
                            "0px 1.85185px 3.14815px 0px rgba(0, 0, 0, 0.00), 0px 8.14815px 6.51852px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.51852px 25.48148px 0px rgba(0, 0, 0, 0.01), 0px 64.81481px 46.85185px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)",
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                          width: {
                            xs: "95%",
                            sm: "95%",
                            md: "95%",
                            lg: "70%",
                            xl: "70%",
                          },
                          height: "auto",
                          marginLeft: {
                            xs: "0px",
                            sm: "0px",
                            md: "35px",
                            lg: "35px",
                            xl: "35px",
                          },
                          padding: "34px",
                          marginBottom: "50px",
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: "left",
                            fontFamily: "Red Hat Display",
                            fontSize: "16px",
                            fontWeight: 500,
                            lineHeight: "32px",
                          }}
                        >
                          &#34;Nossa plataforma está agora mais resiliente a
                          contínuos e downtimes, garantindo que possamos prestar
                          serviços ininterruptos aos nossos clientes, 24 horas
                          por dia, 7 dias por semana. Quero expressar minha
                          sincera gratidão à equipe da Cherry IT.&#34;
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: "left",
                            fontFamily: "Red Hat Display",
                            fontSize: "18px",
                            fontWeight: 500,
                            lineHeight: "32px",
                            marginTop: "34px",
                          }}
                        >
                          Marcelo Duarte
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: "left",
                            fontFamily: "Red Hat Display",
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: "32px",
                          }}
                        >
                          CEO / Healthtech
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          width: "68px",
                          height: "68px",
                        }}
                      >
                        <Image
                          src={William}
                          alt="Rafael"
                          fill
                          style={{
                            objectFit: "contain",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          borderRadius: "10px",
                          background: "#FFF",
                          boxShadow:
                            "0px 1.85185px 3.14815px 0px rgba(0, 0, 0, 0.00), 0px 8.14815px 6.51852px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.51852px 25.48148px 0px rgba(0, 0, 0, 0.01), 0px 64.81481px 46.85185px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)",
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                          width: {
                            xs: "95%",
                            sm: "95%",
                            md: "95%",
                            lg: "70%",
                            xl: "70%",
                          },
                          height: "auto",
                          marginLeft: {
                            xs: "0px",
                            sm: "0px",
                            md: "35px",
                            lg: "35px",
                            xl: "35px",
                          },
                          padding: "34px",
                          marginBottom: "50px",
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: "left",
                            fontFamily: "Red Hat Display",
                            fontSize: "16px",
                            fontWeight: 500,
                            lineHeight: "32px",
                          }}
                        >
                          &#34;Muito além de aplicar tecnologias conhecidas, foi
                          desenvolvido treinamento e construção de uma rede
                          neural própria para processamento de um volume
                          gigantesco de dados. O projeto foi um sucesso e a sua
                          eficácia só foi possível graças à parceria e dedicação
                          dos profissionais da Cherry.&#34;
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: "left",
                            fontFamily: "Red Hat Display",
                            fontSize: "18px",
                            fontWeight: 500,
                            lineHeight: "32px",
                            marginTop: "10px",
                          }}
                        >
                          William
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: "left",
                            fontFamily: "Red Hat Display",
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: "32px",
                          }}
                        >
                          Tech Lead / Inovação e Marketing
                        </Typography>
                      </Box>
                    </Box>
                  </Slide>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Section>
    </Stack>
  );
};

export { Testimonials };
