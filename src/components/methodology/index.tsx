import * as React from "react";
import { Section } from "../section";
import { SectionTitle } from "../sectionTitle";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ChevronRight } from "@mui/icons-material";
import grafico from "../../assets/grafico.png";
import Group8 from "../../assets/Group8.png";

interface IMethodology {}

const Methodology: React.FC<IMethodology> = () => {
  const scrollToInfo = React.useCallback(() => {
    const sectionElement = document.getElementById("contato");
    sectionElement?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <Section>
      <SectionTitle type="green">Metodologia</SectionTitle>

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
          <Stack
            sx={{
              width: "100%",
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
                width: {
                  xs: "272.25px",
                  sm: "495.01px",
                  md: "495.01px",
                  lg: "660.02px",
                  xl: "825.02px",
                },
                height: {
                  xs: "272.25px",
                  sm: "495px",
                  md: "495px",
                  lg: "660px",
                  xl: "825px",
                },
              }}
            >
              <Image
                src={grafico}
                alt="Transparent Dell Opti Plex 7400 Allin One Mockup"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
          <Stack
            sx={{
              width: "100%",
            }}
          >
            <Box
              sx={{
                marginTop: {
                  xs: "0px",
                  sm: "0px",
                  md: "0px",
                  lg: "100px",
                  xl: "120px",
                },
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "300px",
                  lg: "365px",
                  xl: "365px",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "20px",
                  lineHeight: "147.6%",
                  color: "#1B1F1E",
                }}
              >
                Nossa metodologia
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "16px",
                  lineHeight: "147.6%",
                  color: "#1B1F1E",
                  mb: 3,
                }}
              >
                O seu contexto de negócio é único, e portanto soluções pré
                moldadas muitas vezes não são o suficiente. Podem cobrir certos
                casos de uso, mas sempre haverá aquela sensação de que algo está
                incompleto.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "16px",
                  lineHeight: "147.6%",
                  color: "#1B1F1E",
                }}
              >
                Nossa metodologia de aprendizado e ação informada aliado a nosso
                domínio de alta tecnologia aplicada, garante que conseguimos
                endereçar a crescente complexidade não-linear das relações pós
                pandemia na busca de soluções simples e eficazes para seus
                desafios de negócio.
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Stack flexDirection="row" gap={3}>
            <Stack justifyContent="center" alignItems="center">
              <Image src={Group8} alt="Group8" width={25} height={25} />
            </Stack>
            <Stack flex={1}>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "20px",
                  lineHeight: "26px",
                  color: "#000000",
                }}
              >
                Equipe dedicada
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "20px",
                  lineHeight: "26px",
                  color: "#000000",
                }}
              >
                Uma equipe técnica altamente capacitada e experiente que poderá
                ser alocada exclusivamente para a sua empresa.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Stack flexDirection="row" gap={3}>
            <Stack justifyContent="center" alignItems="center">
              <Image src={Group8} alt="Group8" width={25} height={25} />
            </Stack>
            <Stack flex={1}>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "20px",
                  lineHeight: "26px",
                  color: "#000000",
                }}
              >
                Controle de qualidade
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "20px",
                  lineHeight: "26px",
                  color: "#000000",
                }}
              >
                Nossos processos de controle de qualidade garantem que as
                soluções de software sejam entregues com alta qualidade.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Stack flexDirection="row" gap={3}>
            <Stack justifyContent="center" alignItems="center">
              <Image src={Group8} alt="Group8" width={25} height={25} />
            </Stack>
            <Stack flex={1}>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "20px",
                  lineHeight: "26px",
                  color: "#000000",
                }}
              >
                Agilidade na criação de produtos
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "20px",
                  lineHeight: "26px",
                  color: "#000000",
                }}
              >
                A equipe de desenvolvimento da Cherry IT usa metodologias ágeis
                para garantir que os projetos sejam entregues rapidamente e com
                alta qualidade.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Stack flexDirection="row" gap={3}>
            <Stack justifyContent="center" alignItems="center">
              <Image src={Group8} alt="Group8" width={25} height={25} />
            </Stack>
            <Stack flex={1}>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "20px",
                  lineHeight: "26px",
                  color: "#000000",
                }}
              >
                Suporte técnico
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "20px",
                  lineHeight: "26px",
                  color: "#000000",
                }}
              >
                Suporte técnico contínuo pode ser fornecido para garantir que a
                sua empresa possa obter o máximo de suas soluções de software.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Stack flexDirection="row" gap={3}>
            <Stack justifyContent="center" alignItems="center">
              <Image src={Group8} alt="Group8" width={25} height={25} />
            </Stack>
            <Stack flex={1}>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "20px",
                  lineHeight: "26px",
                  color: "#000000",
                }}
              >
                Flexibilidade
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "20px",
                  lineHeight: "26px",
                  color: "#000000",
                }}
              >
                A equipe estará focada nas necessidades específicas da sua
                empresa, incluindo horários, projetos e tecnologias.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Button
            endIcon={<ChevronRight />}
            variant="contained"
            onClick={() => scrollToInfo()}
            sx={{
              "&:hover": {
                background: "#7568FF",
              },
              padding: "16px 20px",
              gap: "10px",
              height: "59px",
              background: "#7568FF",
              boxShadow: "2px 3px 15px rgba(0, 0, 0, 0.17)",
              borderRadius: "10px",

              fontFamily: "Red Hat Display",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: {
                xs: "18px",
                sm: "18px",
                md: "14px",
                lg: "18px",
                xl: "18px",
              },
              lineHeight: "149%",
              letterSpacing: "0.02em",
              color: "#FFFFFF",
            }}
          >
            Fale com um especialista de soluções
          </Button>
        </Grid>
      </Grid>
    </Section>
  );
};

export { Methodology };
