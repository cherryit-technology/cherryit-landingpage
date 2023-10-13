import { ArticleCard } from "@/components/articles/articleCard";
import { Footer } from "@/components/footer";
import { Link } from "@/components/link";
import { Navbar } from "@/components/navbar";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/sectionTitle";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import timeline from "../../assets/timeline.png";
import chartBar33 from "../../assets/chart-bar-33.png";
import aboutUsImg from "../../assets/img_aboutus.png";
import GrafismoCenter from "../../assets/grafis_about_center.png";
import GrafismoRight from "../../assets/grafis_about_right.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";

import * as React from "react";

export default function AboutUsPage() {
  const router = useRouter();
  const matchesMobile = useMediaQuery("(min-width:900px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
          right: 0,
          marginTop: "320px",
          zIndex: -1,
          position: "absolute",
          width: "194px",
          height: "294px",
        }}
      >
        <Image
          src={GrafismoRight}
          alt="Grafismo"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
      <Container sx={{ mt: 12, mb: 12 }} maxWidth="xl">
        <Section>
          <SectionTitle type="red">Sobre nós</SectionTitle>

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
              {matchesMobile ? (
                <Image
                  src={aboutUsImg}
                  alt="sobre nós"
                  width={497}
                  height={265}
                />
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    height: matchesMobile ? "265px" : "205px",
                    width: "auto",
                  }}
                >
                  <Image
                    src={aboutUsImg}
                    alt="sobre nós"
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Box>
              )}

              <Typography
                sx={{
                  minHeight: 130,
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
                  lineHeight: "24px",
                  color: "#000000",
                  maxWidth: "435px",
                }}
              >
                Em nossa trajetória beneficiamos startups disruptivas, órgãos
                governamentais brasileiros e empresas de consultoria
                consolidadas. <br />
                <br />
                <br />A cerejeira é uma das árvores que frutificam no início da
                primavera, marcando o período das estações mais alegres, e, nas
                regiões mais frias, onde o inverno é rigoroso, traz uma
                simbologia de renovação da vida que ciclicamente se adapta e se
                renova ano após ano. 
              </Typography>
            </Stack>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
                marginTop: "320px",
                zIndex: -1,
                position: "absolute",
                width: "163px",
                height: "203px",
              }}
            >
              <Image
                src={GrafismoCenter}
                alt="Grafismo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>

            <Stack
              sx={{
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                },
                marginTop: {
                  xs: "30px",
                  sm: "30px",
                  md: "50px",
                  lg: "50px",
                  xl: "50px",
                },
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
                  borderRadius: "33px",
                  boxShadow: "-1px 2px 5px 0px rgba(117, 104, 255, 0.50);",
                  border: "2px solid var(--cinza-cherryit, #C3D1D1)",
                  maxWidth: "435px",
                  height: {
                    xs: "247px",
                    sm: "247px",
                    md: "328px",
                    lg: "328px",
                    xl: "328px",
                  },
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
                    fontFamily: "Red Hat Display",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "26px",
                    textAlign: "center",
                    textTransform: "capitalize",
                    color: "#000000",
                  }}
                >
                  Missão
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Red Hat Display",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "28px",
                    textAlign: "center",
                    color: "#000000",
                  }}
                >
                  Trazer um ar humano e integrado com a vida através da
                  tecnologia aliada a criatividade humana
                </Typography>
              </Stack>
              <Stack
                justifyContent="center"
                alignItems="center"
                gap={2}
                p={6}
                height="100%"
                sx={{
                  borderRadius: "33px",
                  boxShadow: "-1px 2px 5px 0px rgba(117, 104, 255, 0.50);",
                  border: "2px solid var(--cinza-cherryit, #C3D1D1)",
                  maxWidth: "435px",
                  height: {
                    xs: "247px",
                    sm: "247px",
                    md: "328px",
                    lg: "328px",
                    xl: "328px",
                  },
                }}
              >
                <Image src={timeline} alt="timeline" width={40} height={40} />
                <Typography
                  sx={{
                    fontFamily: "Red Hat Display",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "26px",
                    textAlign: "center",
                    textTransform: "capitalize",
                    color: "#000000",
                  }}
                >
                  Valores
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Red Hat Display",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "28px",
                    textAlign: "center",
                    color: "#000000",
                  }}
                >
                  Preservar a sustentabilidade como estratégia de negócio.
                  Manter a perspectiva contemporânea de trabalho:{" "}
                  <strong>
                    {" "}
                    preservar e enfatizar a importância da saúde mental dentro
                    do home office.
                  </strong>
                </Typography>
              </Stack>
            </Stack>
            <Stack
              gap={3}
              sx={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={() => router.push("/#contato")}
                sx={{
                  "&:hover": {
                    color: "#FFFFFF",
                    backgroundColor: "#7568FF",
                  },
                  background: "#7568FF",
                  border: "2px solid #7568FF",
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
                }}
              >
                Consulte um especialista
              </Button>
            </Stack>
          </Stack>
        </Section>
      </Container>
      <Divider />
      <Footer />
    </Box>
  );
}
