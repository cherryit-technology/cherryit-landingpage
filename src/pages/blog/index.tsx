import { ArticleCard } from "@/components/articles/articleCard";
import { Footer } from "@/components/footer";
import { Link } from "@/components/link";
import { Navbar } from "@/components/navbar";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/sectionTitle";
import { Box, Container, Divider, Grid } from "@mui/material";
import * as React from "react";
import blog from "../../../blog.json";

export default function Blog() {
  const [articles, setArticles] = React.useState<any>([]);

  React.useEffect(() => {
    const latestArticles = blog.artigos.slice(-3);
    setArticles(latestArticles);
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <Container sx={{ mt: 12, mb: 12 }} maxWidth="xl">
        <Section>
          <SectionTitle type="black">Artigos</SectionTitle>

          <Grid container spacing={6}>
            {articles?.map((a: any, index: any) => (
              <Grid
                key={index?.toString()}
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={4}
              >
                <Link href={`/blog/${index}`}>
                  <ArticleCard
                    image={a.imagem}
                    title={a.titulo}
                    tag={a.tags}
                    content={a.conteudo}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Section>
      </Container>
      <Divider />
      <Footer />
    </Box>
  );
}
