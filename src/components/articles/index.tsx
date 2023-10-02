import { Box, Grid, Stack, Container, Button } from "@mui/material";
import * as React from "react";
import { Slider } from "./slider";
import { Section } from "../section";
import { SectionTitle } from "../sectionTitle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useMediaQuery from "@mui/material/useMediaQuery";
import blog from "../../../blog.json";
import { useRouter } from "next/router";
import { Link } from "../link";
import { ArticleCard } from "./articleCard";
import { ChevronRight } from "@mui/icons-material";

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
        top: {
          xs: "500px",
          sm: "500px",
          md: "200px",
          lg: "200px",
          xl: "200px",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        left: {
          xs: "80px",
          sm: "80px",
          md: "-50px",
          lg: "0px",
          xl: "0px",
        },
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
        top: {
          xs: "500px",
          sm: "500px",
          md: "200px",
          lg: "200px",
          xl: "200px",
        },
        background: "#E7E4FF",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: {
          xs: "80px",
          sm: "80px",
          md: "-50px",
          lg: "0px",
          xl: "0px",
        },
        cursor: "pointer",
        zIndex: 9999999999999,
      }}
    >
      <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
    </Box>
  );
}

const Articles: React.FC = () => {
  const router = useRouter();
  const [articles, setArticles] = React.useState<any>([]);

  React.useEffect(() => {
    const latestArticles = blog.artigos;
    setArticles(latestArticles);
  }, []);

  const matches = useMediaQuery("(min-width:899px)");
  const matchesMobile = useMediaQuery("(min-width:500px)");
  return (
    <Stack
      display="flex"
      gap={12}
      sx={{
        position: "relative",
        top: {
          xs: -570,
          sm: -530,
          md: -450,
          lg: -500,
          xl: -500,
        },
        height: {
          xs: "700px",
          sm: "700px",
          md: "800px",
          lg: "800px",
          xl: "800px",
        },
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
              marginBottom: "500px",
            }}
          >
            <Container sx={{ mt: 12, mb: 12 }} maxWidth="xl">
              <SectionTitle type="green">Artigos</SectionTitle>
              <Box
                sx={{
                  display: {
                    xs: "grid",
                    sm: "grid",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                  marginTop: "-50px",
                  justifyContent: "center",
                }}
              >
                <Slider
                  settings={{
                    infinite: true,
                    slidesToShow: matchesMobile ? 3 : 1,
                    slidesToScroll: 1,
                    speed: 500,
                    autoplaySpeed: 5000,
                    autoplay: false,
                    centerMode: true,
                    centerPadding: "0",
                    dots: matches ? false : true,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                  }}
                >
                  {articles?.map((a: any, index: any) => (
                    <Box
                      key={index?.toString()}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0",
                        textAlign: "left",
                      }}
                    >
                      <Link href={`/blog/${index}`}>
                        <ArticleCard
                          image={a.imagem}
                          title={a.titulo}
                          tag={a.tags}
                          content={a.conteudo}
                        />
                      </Link>
                    </Box>
                  ))}
                </Slider>
              </Box>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Stack
                  sx={{
                    alignItems: {
                      xs: "center",
                      sm: "center",
                      md: "flex-end",
                      lg: "flex-end",
                      xl: "flex-end",
                    },
                  }}
                  justifyContent="flex-end"
                >
                  <Button
                    endIcon={<ChevronRight />}
                    onClick={() => router.push("/blog")}
                    sx={{
                      fontFamily: "Red Hat Display",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "149%",
                      letterSpacing: "0.02em",
                      color: "#48E49B",
                      marginTop: {
                        xs: "50px",
                        sm: "50px",
                        md: "-30px",
                        lg: "0px",
                        xl: "0px",
                      },
                      right: {
                        xs: "0px",
                        sm: "0px",
                        md: "0px",
                        lg: "50px",
                        xl: "150px",
                      },
                    }}
                  >
                    Veja todos os artigos
                  </Button>
                </Stack>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Section>
    </Stack>
  );
};

export { Articles };
