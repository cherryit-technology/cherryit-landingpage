import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Section } from "@/components/section";
import { PreviewHtml } from "@cherryit/components";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import * as React from "react";
import blog from "../../../blog.json";

interface IArticles {
  article: any;
}

const Blog: NextPage<IArticles> = ({ article }) => {
  const [selectedArticle, setSelectedArticle] = React.useState<any>([]);

  React.useEffect(() => {
    const artigo = blog.artigos.filter(
      (art: any, index: any) => index == article
    );
    setSelectedArticle(artigo);
    console.log(artigo, "blog");
  }, [article]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar isHome={false} />
      <Container sx={{ mt: 12, mb: 12 }} maxWidth="xl">
        <Section>
          {selectedArticle?.map((art: any, index: any) => (
            <Stack key={index?.toString()}>
              <Box
                sx={{
                  width: "100%",
                  height: "400px",
                  backgroundImage: `url(${art.imagem})`,
                  backgroundPosition: "center",
                }}
              />
              <Stack flexDirection="row" gap={3} marginTop="20px">
                <Typography
                  sx={{
                    fontFamily: "Red Hat Display",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "13px",
                    lineHeight: "12px",
                    letterSpacing: "1px",
                    color: "#EF4230",
                    textTransform: "uppercase",
                  }}
                >
                  {art.tags?.split(",")[0]}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Red Hat Display",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "13px",
                    lineHeight: "12px",
                    letterSpacing: "1px",
                    color: "#EF4230",
                    textTransform: "uppercase",
                  }}
                >
                  {art.tags?.split(",")[1]}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Red Hat Display",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "13px",
                    lineHeight: "12px",
                    letterSpacing: "1px",
                    color: "#EF4230",
                    textTransform: "uppercase",
                  }}
                >
                  {art.tags?.split(",")[2]}
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: {
                    xs: "30px",
                    sm: "30px",
                    md: "35px",
                    lg: "38px",
                    xl: "38px",
                  },
                  lineHeight: "130%",
                  color: "#000000",
                  marginTop: "50px",
                }}
              >
                {art.titulo}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "22px",
                  lineHeight: "130%",
                  color: "#000000",
                  marginTop: "50px",
                }}
              >
                <PreviewHtml content={art.conteudo} />
              </Typography>
            </Stack>
          ))}
        </Section>
      </Container>
      <Divider />
      <Footer />
    </Box>
  );
};

export default Blog;

export const getStaticProps = async (ctx: any, auth: any) => {
  const { query } = ctx;
  const article = query.id;

  return {
    props: {
      article,
    },
  };
};
