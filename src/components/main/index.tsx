import { PlayCircle } from "@mui/icons-material";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import pCMockup from "../../assets/pc.png";

interface IMain {}

const Main: React.FC<IMain> = () => {
  const scrollToInfo = React.useCallback(() => {
    const sectionElement = document.getElementById("contato");
    sectionElement?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={5} lg={5} xl={6}>
        <Typography
          sx={{
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
              lg: "left",
              xl: "left",
            },
            fontFamily: "Podkova",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: {
              xs: "48.4px",
              sm: "61.6px",
              md: "70.4px",
              lg: "79.2px",
              xl: "88px",
            },
            lineHeight: {
              xs: "48.4px",
              sm: "61.6px",
              md: "70.4px",
              lg: "79.2px",
              xl: "88px",
            },
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            color: "#1B1F1E",
            marginBottom: "7px",
          }}
        >
          criamos
        </Typography>
        <Typography
          sx={{
            fontFamily: "Podkova",
            fontStyle: "normal",
            fontWeight: 700,
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
              lg: "left",
              xl: "left",
            },
            fontSize: {
              xs: "26.4px",
              sm: "33.6px",
              md: "38.4px",
              lg: "43.2px",
              xl: "48px",
            },
            lineHeight: {
              xs: "26.4px",
              sm: "33.6px",
              md: "38.4px",
              lg: "43.2px",
              xl: "48px",
            },
            textTransform: "uppercase",
            color: "#1B1F1E",
            marginBottom: "7px",
          }}
        >
          o software que você
        </Typography>
        <Typography
          sx={{
            fontFamily: "Podkova",
            fontStyle: "normal",
            fontWeight: 700,
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
              lg: "left",
              xl: "left",
            },
            fontSize: {
              xs: "48.4px",
              sm: "61.6px",
              md: "70.4px",
              lg: "79.2px",
              xl: "88px",
            },
            lineHeight: {
              xs: "48.4px",
              sm: "61.6px",
              md: "70.4px",
              lg: "79.2px",
              xl: "88px",
            },
            textTransform: "uppercase",
            color: "#EF4230",
          }}
        >
          precisa
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12} md={7} lg={7} xl={6}>
        <Stack
          flex={1}
          sx={{
            alignItems: {
              xs: "center",
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
              },
            }}
          >
            <Image
              src={pCMockup}
              alt="pCMockup"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
        </Stack>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Stack
          sx={{
            position: "relative",
            alignItems: {
              xs: "center",
              sm: "center",
              md: "flex-start",
              lg: "flex-start",
              xl: "flex-start",
            },
            top: {
              xs: 0,
              sm: 0,
              md: "-220px",
              lg: "-320px",
              xl: "-360px",
            },
          }}
        >
          <Typography
            sx={{
              textAlign: {
                xs: "center",
                sm: "center",
                md: "left",
                lg: "left",
                xl: "left",
              },
              marginBottom: "70px",
              fontFamily: "Podkova",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "149%",
              color: "#1B1F1E",
              maxWidth: "418px",
            }}
          >
            Somos uma equipe de designers e desenvolvedores com um único
            objetivo: cuidar de todos os detalhes enquanto você se mantém focado
            em conduzir a mudança dentro da sua organização.
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
              onClick={() => scrollToInfo()}
              sx={{
                "&:hover": {
                  color: "#FFFFFF",
                  backgroundColor: "#48E49B",
                },
                background: "#48E49B",
                border: "2px solid #48E49B",
                boxShadow: "2px 3px 15px rgba(0, 0, 0, 0.17)",
                borderRadius: "10px",
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "149%",
                letterSpacing: "0.02em",
                color: "#FFFFFF",
              }}
            >
              Fale com um especialista
            </Button>

            <Button
              startIcon={
                <PlayCircle
                  sx={{ fontSize: "52px !important", color: "#B51D22" }}
                />
              }
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "17px",
                lineHeight: "22px",
                color: "#686D77",
                textTransform: "none",

                display: "none",
              }}
            >
              Play video
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export { Main };
