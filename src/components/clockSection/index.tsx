import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import clock from "../../assets/clock.png";
import clockMobile from "../../assets/clock-mobile.png";
import useMediaQuery from "@mui/material/useMediaQuery";

interface IClockSection {}

const ClockSection: React.FC<IClockSection> = () => {
  const matches = useMediaQuery("(min-width:899px)");
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
        <Stack
          flex={1}
          sx={{
            alignItems: {
              xs: "flex-start",
              sm: "center",
              md: "flex-start",
              lg: "flex-start",
              xl: "flex-start",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              right: {
                xs: 0,
                sm: 0,
                md: 80,
                lg: 150,
                xl: 200,
              },
              height: {
                xs: 300,
                sm: 300,
                md: 480,
                lg: 650,
                xl: 800,
              },
              width: {
                xs: "100%",
                sm: "100%",
                md: 900,
                lg: 1300,
                xl: 1710,
              },
              marginTop: {
                xs: "16px",
                sm: "16px",
                md: "50px",
                lg: "-110px",
                xl: "-250px",
              },
            }}
          >
            {matches ? (
              <Image
                src={clock}
                alt="clock"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            ) : (
              <Image
                src={clockMobile}
                alt="clock"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            )}
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5} xl={5} zIndex={2}>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Red Hat Display",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: {
              xs: "16px",
              sm: "16px",
              md: "20px",
              lg: "20px",
              xl: "20px",
            },
            marginTop: {
              xs: "16px",
              sm: "16px",
              md: "80px",
              lg: "80px",
              xl: "80px",
            },
            lineHeight: "normal",
            color: "#1B1F1E",
          }}
        >
          Evoluir apps e sistemas de qualquer empresa é uma tarefa intimidadora.
          Exige a dose certa de qualificação, experiência, liderança,
          criatividade e constante reciclagem.
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Red Hat Display",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: {
              xs: "16px",
              sm: "16px",
              md: "20px",
              lg: "20px",
              xl: "20px",
            },
            marginTop: {
              xs: "16px",
              sm: "16px",
              md: "80px",
              lg: "80px",
              xl: "80px",
            },
            lineHeight: "normal",
            color: "#1B1F1E",
          }}
        >
          E conforme os problemas vão se acumulando, tanto os clientes quanto a
          diretoria perdem a confiança na TI para avançar o negócio. A equipe
          fica desmotivada e o que deveria ser a jornada de transformação
          digital da sua organização se torna um pesadelo.
        </Typography>
      </Grid>
    </Grid>
  );
};

export { ClockSection };
