import * as React from "react";
import { Section } from "../section";
import { SectionTitle } from "../sectionTitle";
import { Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import servicePeople from "../../assets/service-people.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import serviceTi from "../../assets/service-ti.png";

interface IAboutUs {}

const OurServices: React.FC<IAboutUs> = () => {
  const matches = useMediaQuery("(min-width:899px)");
  const scrollToInfo = React.useCallback(() => {
    const sectionElement = document.getElementById("contato");
    sectionElement?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <Stack
      gap={12}
      sx={{
        position: "relative",
        top: {
          xs: -500,
          sm: -500,
          md: -500,
          lg: -500,
          xl: -500,
        },
        borderRight: {
          xs: "none",
          sm: "none",
          md: "none",
          lg: "solid 10px #7568FF",
          xl: "solid 10px #7568FF",
        },
      }}
    >
      <Container sx={{ mt: 12, mb: 12 }} maxWidth="xl">
        <Section>
          <SectionTitle type="red">Serviços</SectionTitle>
          <Stack alignItems="center" gap={6}>
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
              gap={6}
            >
              <Stack>
                <Image
                  src={servicePeople}
                  alt="people"
                  width={matches ? 269 : 157}
                  height={matches ? 195 : 114}
                />
              </Stack>
              <Stack
                sx={{
                  marginLeft: {
                    xs: "28px",
                    sm: "28px",
                    md: "-130px",
                    lg: "-130px",
                    xl: "-130px",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Red Hat Display",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: {
                      xs: "24px",
                      sm: "24px",
                      md: "28px",
                      lg: "28px",
                      xl: "28px",
                    },
                    lineHeight: "normal",
                    textAlign: "left",
                    color: "#7568FF",
                    marginTop: {
                      xs: "-100px",
                      sm: "-100px",
                      md: "81px",
                      lg: "81px",
                      xl: "81px",
                    },
                    zIndex: 1,
                  }}
                >
                  Alocação de equipe
                </Typography>
                <Typography
                  sx={{
                    minHeight: 130,
                    fontFamily: "Red Hat Display",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: {
                      xs: "16px",
                      sm: "16px",
                      md: "20px",
                      lg: "20px",
                      xl: "20px",
                    },
                    lineHeight: "26px",
                    color: "#1B1F1E",
                    maxWidth: "435px",
                    marginTop: "24px",
                  }}
                >
                  Ampliamos a capacidade de sua equipe acrescentando-se
                  habilidades específicas como desenvolvimento, qualidade e
                  arquitetura de software, segurança, devops, prototipagem etc.
                </Typography>
              </Stack>
              <Stack
                sx={{
                  marginLeft: {
                    xs: "0px",
                    sm: "0px",
                    md: "100px",
                    lg: "100px",
                    xl: "100px",
                  },
                }}
              >
                <Image
                  src={serviceTi}
                  alt="people"
                  width={matches ? 169 : 108}
                  height={matches ? 190 : 122}
                />
              </Stack>
              <Stack
                sx={{
                  marginLeft: {
                    xs: "28px",
                    sm: "28px",
                    md: "-130px",
                    lg: "-130px",
                    xl: "-130px",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Red Hat Display",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: {
                      xs: "24px",
                      sm: "24px",
                      md: "28px",
                      lg: "28px",
                      xl: "28px",
                    },
                    lineHeight: "normal",
                    textAlign: "left",
                    color: "#7568FF",
                    marginTop: {
                      xs: "-100px",
                      sm: "-100px",
                      md: "81px",
                      lg: "81px",
                      xl: "81px",
                    },
                    zIndex: 1,
                  }}
                >
                  Consultoria em TI
                </Typography>
                <Typography
                  sx={{
                    minHeight: 130,
                    fontFamily: "Red Hat Display",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: {
                      xs: "16px",
                      sm: "16px",
                      md: "20px",
                      lg: "20px",
                      xl: "20px",
                    },
                    lineHeight: "26px",
                    color: "#1B1F1E",
                    maxWidth: "435px",
                    marginTop: "24px",
                  }}
                >
                  Aplicando nossa metodologia única de diagnóstico e resolução
                  de problemas complexos, capacitamos sua equipe para atingir
                  seus objetivos únicos e superar os principais desafios.
                </Typography>
              </Stack>
            </Stack>
            <Stack
              gap={3}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: {
                  xs: "39px",
                  sm: "39px",
                  md: "61px",
                  lg: "61px",
                  xl: "61px",
                },
              }}
            >
              <Button
                variant="contained"
                onClick={() => scrollToInfo()}
                sx={{
                  "&:hover": {
                    color: "#FFFFFF",
                    backgroundColor: "#7568FF",
                  },
                  background: "#FFFFFF",
                  border: "2px solid #7568FF",
                  boxShadow: "2px 3px 15px rgba(0, 0, 0, 0.17)",
                  borderRadius: "10px",
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "22px",
                  lineHeight: "149%",
                  letterSpacing: "0.02em",
                  textTransform: "none",
                  padding: "16px 20px",
                  width: "auto",
                  color: "#7568FF",
                  marginBottom: "0x",
                }}
              >
                {matches
                  ? "SE TORNE O EXECUTIVO QUE LIDERA A MUDANÇA"
                  : "se torne o executivo que lidera a mudança"}
              </Button>
            </Stack>
          </Stack>
        </Section>
      </Container>
    </Stack>
  );
};

export { OurServices };
