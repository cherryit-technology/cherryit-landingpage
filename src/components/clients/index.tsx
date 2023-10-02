import { Box, Grid, Stack, Typography, Container } from "@mui/material";
import * as React from "react";
import { Slider } from "./slider";
import { Section } from "../section";
import { SectionTitle } from "../sectionTitle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "next/image";
import LogoBNDES from "../../assets/logo-bndes.png";
import LogoIDB from "../../assets/logo-idb.png";
import LogoCeara from "../../assets/logo-ceara.png";
import useMediaQuery from "@mui/material/useMediaQuery";

function SamplePrevArrow(props: any) {
  const { style, onClick } = props;
  return (
    <Box
      className="slick-arrow"
      onClick={onClick}
      sx={{
        ...style,
        color: "#7568FF",
        position: "absolute",
        width: "40px",
        height: "40px",
        background: "#E7E4FF",
        borderRadius: "50%",
        top: "65px",
        display: {
          xs: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex",
        },
        alignItems: "center",
        justifyContent: "center",
        left: "0px",
        cursor: "pointer",
        zIndex: 9999999999999,
      }}
    >
      <ArrowBackIosIcon sx={{ fontSize: "20px" }} />
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
        color: "#7568FF",
        position: "absolute",
        width: "40px",
        height: "40px",
        top: "65px",
        background: "#E7E4FF",
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
      <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
    </Box>
  );
}

const Clients: React.FC = () => {
  const matches = useMediaQuery("(min-width:899px)");
  const matchesMobile = useMediaQuery("(min-width:500px)");
  return (
    <Stack
      display="flex"
      gap={12}
      sx={{
        position: "relative",
        top: {
          xs: -470,
          sm: -430,
          md: -450,
          lg: -500,
          xl: -500,
        },
        height: {
          xs: "350px",
          sm: "380px",
          md: "420px",
          lg: "450px",
          xl: "500px",
        },
        background: "#FCFCFC",
        borderLeft: {
          xs: "none",
          sm: "none",
          md: "none",
          lg: "solid 10px #48E49B",
          xl: "solid 10px #48E49B",
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
              <SectionTitle type="gray">Clientes</SectionTitle>
              <Box
                sx={{
                  display: {
                    xs: "grid",
                    sm: "grid",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                  marginTop: {
                    xs: "0",
                    sm: "0",
                    md: "50px",
                    lg: "50px",
                    xl: "50px",
                  },
                  justifyContent: "center",
                }}
              >
                <Slider
                  settings={{
                    infinite: true,
                    slidesToShow: matchesMobile ? 3 : 2.5,
                    slidesToScroll: 1,
                    speed: 500,
                    autoplaySpeed: 5000,
                    autoplay: false,
                    centerMode: true,
                    centerPadding: "0",
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "20px",
                      background: "#FFF",
                      border: matches
                        ? "1px solid #EDEDED"
                        : "1px solid #7568FF",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        height: matchesMobile ? "50px" : "70px",
                        margin: "10px",
                        width: "auto",
                      }}
                    >
                      <Image
                        src={LogoBNDES}
                        alt="pCMockup"
                        fill
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        width: "auto",
                        textAlign: "center",
                        fontFamily: "Red Hat Display",
                        fontSize: "14px",
                        fontWeight: "400px",
                        letterSpacing: "0px",
                        color: matches ? "#1B1F1E" : "#fff",
                        opacity: 1,
                        padding: "5px",
                        background: matches ? "#F8F8F8" : "#7568FF",
                        borderRadius: "0 0 20px 20px",
                        textTransform: "capitalize",
                      }}
                    >
                      banco nacional de desenvolvimento
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "20px",
                      border: matches
                        ? "1px solid #EDEDED"
                        : "1px solid #7568FF",
                      background: "#FFF",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        height: "50px",
                        margin: "10px",
                        width: "auto",
                      }}
                    >
                      <Image
                        src={LogoIDB}
                        alt="pCMockup"
                        fill
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        width: "auto",
                        textAlign: "center",
                        fontFamily: "Red Hat Display",
                        fontSize: "14px",
                        fontWeight: "400px",
                        letterSpacing: "0px",
                        color: matches ? "#1B1F1E" : "#fff",
                        opacity: 1,
                        padding: "5px",
                        background: matches ? "#F8F8F8" : "#7568FF",
                        borderRadius: "0 0 20px 20px",
                        textTransform: "capitalize",
                      }}
                    >
                      Inter-American development Bank
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "20px",
                      border: matches
                        ? "1px solid #EDEDED"
                        : "1px solid #7568FF",
                      background: "#FFF",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        height: "50px",
                        margin: "10px",
                        width: "auto",
                      }}
                    >
                      <Image
                        src={LogoCeara}
                        alt="pCMockup"
                        fill
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        width: "auto",
                        textAlign: "center",
                        fontFamily: "Red Hat Display",
                        fontSize: "14px",
                        fontWeight: "400px",
                        letterSpacing: "0px",
                        color: matches ? "#1B1F1E" : "#fff",
                        opacity: 1,
                        padding: "5px",
                        background: matches ? "#F8F8F8" : "#7568FF",
                        borderRadius: "0 0 20px 20px",
                        textTransform: "capitalize",
                      }}
                    >
                      banco nacional de desenvolvimento
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "20px",
                      border: matches
                        ? "1px solid #EDEDED"
                        : "1px solid #7568FF",
                      background: "#FFF",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        height: "50px",
                        margin: "10px",
                        width: "auto",
                      }}
                    >
                      <Image
                        src={LogoIDB}
                        alt="pCMockup"
                        fill
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        width: "auto",
                        textAlign: "center",
                        fontFamily: "Red Hat Display",
                        fontSize: "14px",
                        fontWeight: "400px",
                        letterSpacing: "0px",
                        color: matches ? "#1B1F1E" : "#fff",
                        opacity: 1,
                        padding: "5px",
                        background: matches ? "#F8F8F8" : "#7568FF",
                        borderRadius: "0 0 20px 20px",
                        textTransform: "capitalize",
                      }}
                    >
                      Inter-American development Bank
                    </Typography>
                  </Box>
                </Slider>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Section>
    </Stack>
  );
};

export { Clients };
