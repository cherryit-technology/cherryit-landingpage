import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import table from "../../assets/table.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Section } from "../section";

interface IClockSection {}

const OurTeam: React.FC<IClockSection> = () => {
  const matches = useMediaQuery("(min-width:899px)");
  return (
    <Container sx={{ mt: 12, mb: 12 }} maxWidth="xl">
      <Stack
        gap={12}
        sx={{
          position: "relative",
          top: {
            xs: -190,
            sm: -180,
            md: -300,
            lg: -400,
            xl: -400,
          },
        }}
      >
        <Section>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography
                sx={{
                  textAlign: "left",
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: {
                    xs: 400,
                    sm: 400,
                    md: 500,
                    lg: 500,
                    xl: 500,
                  },
                  fontSize: {
                    xs: "16px",
                    sm: "16px",
                    md: "24px",
                    lg: "32px",
                    xl: "32px",
                  },
                  marginTop: {
                    xs: "16px",
                    sm: "16px",
                    md: "0px",
                    lg: "0px",
                    xl: "0px",
                  },
                  lineHeight: {
                    xs: "20px",
                    sm: "20px",
                    md: "20px",
                    lg: "35px",
                    xl: "35px",
                  },
                  color: "#1B1F1E",
                }}
              >
                Nossa equipe de profissionais seniores colabora para manter seus
                sistemas:
              </Typography>
              <Stack
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  },
                }}
              >
                <Typography
                  sx={{
                    textAlign: {
                      xs: "left",
                      sm: "center",
                      md: "left",
                      lg: "left",
                      xl: "left",
                    },
                    fontFamily: "Red Hat Display",
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: {
                      xs: "64px",
                      sm: "64px",
                      md: "64px",
                      lg: "80px",
                      xl: "100px",
                    },
                    lineHeight: {
                      xs: "64px",
                      sm: "64px",
                      md: "80px",
                      lg: "116px",
                      xl: "116px",
                    },
                    color: "#48E49B",
                  }}
                >
                  escaláveis
                </Typography>
                <Typography
                  sx={{
                    textAlign: {
                      xs: "left",
                      sm: "center",
                      md: "left",
                      lg: "left",
                      xl: "left",
                    },
                    fontFamily: "Red Hat Display",
                    fontStyle: "normal",
                    fontWeight: 700,
                    marginLeft: {
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                    fontSize: {
                      xs: "64px",
                      sm: "64px",
                      md: "64px",
                      lg: "80px",
                      xl: "100px",
                    },
                    lineHeight: {
                      xs: "64px",
                      sm: "64px",
                      md: "80px",
                      lg: "116px",
                      xl: "116px",
                    },
                    color: "#48E49B",
                  }}
                >
                  resilientes
                </Typography>
                <Typography
                  sx={{
                    textAlign: {
                      xs: "left",
                      sm: "center",
                      md: "left",
                      lg: "left",
                      xl: "left",
                    },
                    fontFamily: "Red Hat Display",
                    fontStyle: "normal",
                    marginLeft: {
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                    fontWeight: 300,
                    fontSize: {
                      xs: "64px",
                      sm: "64px",
                      md: "64px",
                      lg: "80px",
                      xl: "100px",
                    },
                    lineHeight: {
                      xs: "64px",
                      sm: "64px",
                      md: "80px",
                      lg: "116px",
                      xl: "116px",
                    },
                    color: "#48E49B",
                  }}
                >
                  seguros.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <Stack
                flex={1}
                sx={{
                  alignItems: {
                    xs: "flex-start",
                    sm: "flex-start",
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
                      md: 0,
                      lg: 0,
                      xl: 0,
                    },
                    height: {
                      xs: 150,
                      sm: 190,
                      md: 177,
                      lg: 178,
                      xl: 190,
                    },
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "100%",
                      lg: "100%",
                      xl: "827px",
                    },
                  }}
                >
                  <Image
                    src={table}
                    alt="clock"
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              xl={5}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                sx={{
                  textAlign: "left",
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: {
                    xs: "16px",
                    sm: "16px",
                    md: "24px",
                    lg: "24px",
                    xl: "24px",
                  },
                  lineHeight: "32px",
                  color: "#1B1F1E",
                  marginLeft: {
                    xs: "auto",
                    sm: "auto",
                    md: "26px",
                    lg: "26px",
                    xl: "26px",
                  },
                }}
              >
                Isso resulta em funcionalidades implantadas com{" "}
                {matches ? (
                  <span
                    style={{
                      color: "#7568FF",
                      fontSize: "24px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    agilidade
                  </span>
                ) : (
                  <span
                    style={{
                      color: "#7568FF",
                      fontSize: "16px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    agilidade
                  </span>
                )}
                , sua empresa reagindo mais rapidamente aos{" "}
                {matches ? (
                  <span
                    style={{
                      color: "#7568FF",
                      fontSize: "24px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    movimentos de mercado
                  </span>
                ) : (
                  <span
                    style={{
                      color: "#7568FF",
                      fontSize: "16px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    movimentos de mercado
                  </span>
                )}
                , e os{" "}
                {matches ? (
                  <span
                    style={{
                      color: "#7568FF",
                      fontSize: "24px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    clientes mais satisfeitos{" "}
                  </span>
                ) : (
                  <span
                    style={{
                      color: "#7568FF",
                      fontSize: "16px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    clientes mais satisfeitos{" "}
                  </span>
                )}
                ao interagir com os seus sites e aplicativos.
              </Typography>
            </Grid>
          </Grid>
        </Section>
      </Stack>
    </Container>
  );
};

export { OurTeam };
