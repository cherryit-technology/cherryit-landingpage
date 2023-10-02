import * as React from "react";
import { Section } from "../section";
import { SectionTitle } from "../sectionTitle";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CherryIt from "../../assets/cherryit-avatar.png";
import FormaLeft from "../../assets/forma-aboutus-left.png";
import FormaRight from "../../assets/forma-aboutus-right.png";
import useMediaQuery from "@mui/material/useMediaQuery";

interface IAboutUs {}

const AboutUs: React.FC<IAboutUs> = () => {
  const matchesMobile = useMediaQuery("(min-width:900px)");
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
        height: "auto",
        background: "#FCFCFC",
        marginBottom: "-500px",
        borderLeft: {
          xs: "none",
          sm: "none",
          md: "none",
          lg: "solid 10px #EF4230",
          xl: "solid 10px #EF4230",
        },
      }}
    >
      <Container sx={{ mt: 12, mb: 12 }} maxWidth="xl">
        <Section>
          <SectionTitle type="red">Sobre nós</SectionTitle>
          <Stack
            alignItems="center"
            justifyContent="center"
            gap={6}
            sx={{
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
              marginTop: "70px",
            }}
          >
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
                left: {
                  xs: "20%",
                  sm: "20%",
                  md: "20%",
                  lg: "10%",
                  xl: "25%",
                },
                top: "190px",
                position: "absolute",
              }}
            >
              <Image src={FormaLeft} alt="Forma" width={198} height={198} />
            </Box>
            <Image
              src={CherryIt}
              alt="CherryIt"
              width={matchesMobile ? 221 : 335}
              height={matchesMobile ? 221 : 335}
              style={{ zIndex: 9 }}
            />
            <Stack
              sx={{
                flexDirection: "column",
              }}
              gap={3}
            >
              <Typography
                sx={{
                  minHeight: 130,
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "24px",
                  color: "#000000",
                  maxWidth: "435px",
                  zIndex: 9,
                }}
              >
                A Cherry IT é uma software house que domina a utilização da
                tecnologia para facilitar a vida de empresas, criando soluções
                digitais que ajudam a posicionar parceiros como lideranças em
                seus segmentos.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  "&:hover": {
                    color: "#48E49B",
                    backgroundColor: "#FFFFFF",
                    border: "2px solid #48E49B",
                  },
                  background: "#48E49B",
                  border: "2px solid #48E49B",
                  boxShadow: "2px 3px 15px rgba(0, 0, 0, 0.17)",
                  borderRadius: "10px",
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: {
                    xs: "20px",
                    sm: "20px",
                    md: "22px",
                    lg: "22px",
                    xl: "22px",
                  },
                  lineHeight: "149%",
                  letterSpacing: "0.02em",
                  textTransform: "none",
                  padding: "16px 20px",
                  width: "364px",
                  color: "#FFFFFF",
                  marginBottom: "0x",
                  zIndex: 9,
                }}
              >
                Saiba mais sobre a cherryit
              </Button>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  },
                  right: {
                    xs: "20%",
                    sm: "20%",
                    md: "20%",
                    lg: "20%",
                    xl: "30%",
                  },
                  bottom: "90px",
                  position: "absolute",
                }}
              >
                <Image src={FormaRight} alt="Forma" width={198} height={198} />
              </Box>
            </Stack>
          </Stack>
        </Section>
      </Container>
    </Stack>
  );
};

export { AboutUs };
