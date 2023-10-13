import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Section } from "@/components/section";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import FormaLeft from "../../assets/forma-aboutus-left.png";
import FormaRight from "../../assets/forma-aboutus-right.png";
import GrafismoCenter from "../../assets/grafis_about_center.png";
import * as React from "react";

export default function Ethic() {
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
          left: 0,
          marginTop: "100px",
          zIndex: -1,
          position: "absolute",
          width: "194px",
          height: "294px",
        }}
      >
        <Image
          src={FormaLeft}
          alt="Grafismo"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
      <Container sx={{ mt: 12, mb: 12 }} maxWidth="xl">
        <Section>
          <Stack alignItems="center" gap={6}>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
                marginRight: "-800px",
                zIndex: -1,
                top: "390px",
                position: "absolute",
              }}
            >
              <Image src={FormaRight} alt="Forma" width={198} height={198} />
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
                marginTop: "520px",
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
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: {
                  xs: "24px",
                  sm: "24px",
                  md: "40px",
                  lg: "40px",
                  xl: "40px",
                },
                lineHeight: "26px",
                textAlign: "center",
                color: "#1B1F1E",
                marginTop: {
                  xs: "-50px",
                  sm: "-50px",
                  md: "-20px",
                  lg: "-20px",
                  xl: "-20px",
                },
              }}
            >
              Código de Ética
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                },
                lineHeight: "28px",
                textAlign: "left",
                color: "#000000",
              }}
            >
              A Cherry IT é uma empresa especializada em desenvolvimento de
              software e consultoria em tecnologia. Acreditamos que o sucesso de
              nossa empresa depende não apenas da qualidade do trabalho que
              entregamos, mas também de como conduzimos nossas atividades e
              relacionamentos. Este Código de Ética estabelece os valores e
              princípios que orientam nossas atividades e define as normas de
              conduta esperadas de todos os funcionários.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                },
                lineHeight: "28px",
                textAlign: "left",
                color: "#000000",
                marginBottom: "-30px",
              }}
            >
              Valores e Princípios
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                },
                lineHeight: "28px",
                textAlign: "left",
                color: "#000000",
              }}
            >
              A Cherry IT valoriza a preservação da sustentabilidade como
              estratégia de negócio. Nosso compromisso com a sustentabilidade
              inclui a minimização do impacto ambiental de nossas atividades, a
              promoção da diversidade e inclusão em nossas equipes e a prática
              de uma ética de negócios responsável. Além disso, acreditamos na
              importância da saúde mental e na necessidade de manter uma
              perspectiva contemporânea de trabalho, especialmente no ambiente
              do home office.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                },
                lineHeight: "28px",
                textAlign: "left",
                color: "#000000",
                marginBottom: "-30px",
              }}
            >
              Normas de Conduta
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                },
                lineHeight: "28px",
                textAlign: "left",
                color: "#000000",
              }}
            >
              Na Cherry IT, esperamos que todos os funcionários sejam éticos,
              honestos e responsáveis em suas atividades. Os funcionários devem
              tratar todos os clientes, colegas de trabalho e fornecedores com
              respeito e consideração. É esperado que os funcionários trabalhem
              em equipe, comuniquem-se de forma clara e transparente e mantenham
              a confidencialidade de informações confidenciais de clientes e da
              empresa. Além disso, os funcionários devem agir de acordo com as
              leis e regulamentos aplicáveis.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                },
                lineHeight: "28px",
                textAlign: "left",
                color: "#000000",
                marginBottom: "-30px",
              }}
            >
              Responsabilidades e Obrigações
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                },
                lineHeight: "28px",
                textAlign: "left",
                color: "#000000",
              }}
            >
              Os funcionários da Cherry IT são responsáveis por cumprir seus
              deveres e obrigações de maneira diligente e eficiente. Eles devem
              agir com integridade, honestidade e transparência em todas as suas
              atividades, representando a empresa da melhor maneira possível.
              Além disso, os funcionários devem informar seus superiores ou o
              departamento responsável caso suspeitem de violações do Código de
              Ética ou de outras políticas da empresa.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                },
                lineHeight: "28px",
                textAlign: "left",
                color: "#000000",
                marginBottom: "-30px",
              }}
            >
              Conformidade Legal
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                },
                lineHeight: "28px",
                textAlign: "left",
                color: "#000000",
              }}
            >
              A Cherry IT está comprometida em cumprir todas as leis e
              regulamentos aplicáveis às nossas atividades e operações. Todos os
              funcionários são obrigados a cumprir as leis e regulamentos
              aplicáveis e a informar seus superiores ou o departamento
              responsável caso suspeitem de violações das leis e regulamentos
              aplicáveis.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                },
                lineHeight: "28px",
                textAlign: "left",
                color: "#000000",
                marginBottom: "-30px",
              }}
            >
              Proteção de Informações Confidenciais
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                },
                lineHeight: "28px",
                textAlign: "left",
                color: "#000000",
              }}
            >
              A Cherry IT reconhece a importância da proteção de informações
              confidenciais de clientes e da empresa. Todos os funcionários
              devem proteger as informações confidenciais e evitar o acesso, uso
              ou divulgação não autorizados. Informações confidenciais incluem,
              mas não se limitam a, informações financeiras, informações de
              clientes, informações de propriedade intelectual e informações de
              negócios.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                },
                lineHeight: "28px",
                textAlign: "left",
                color: "#000000",
                marginBottom: "-30px",
              }}
            >
              Conflito de Interesses
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                },
                lineHeight: "28px",
                textAlign: "left",
                color: "#000000",
              }}
            >
              Os funcionários da Cherry IT devem evitar conflitos de interesse
              que possam prejudicar o desempenho de suas atividades. Eles devem
              informar seus superiores ou o departamento responsável caso
              identifiquem ou suspeitem de conflitos de interesse. Além disso,
              os funcionários não devem usar informações ou recursos da empresa
              em benefício próprio ou em benefício de terceiros, a menos que
              isso seja permitido pelas políticas da empresa.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                },
                lineHeight: "28px",
                textAlign: "left",
                color: "#000000",
                marginBottom: "-30px",
              }}
            >
              Diversidade e Inclusão
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                },
                lineHeight: "28px",
                textAlign: "left",
                color: "#000000",
              }}
            >
              A Cherry IT valoriza e promove a diversidade e inclusão em todas
              as nossas equipes e atividades. Nós respeitamos a diversidade de
              culturas, etnias, gêneros, orientações sexuais, crenças religiosas
              e valores pessoais de nossos funcionários e clientes. A
              discriminação, o assédio ou qualquer outra forma de tratamento
              injusto ou desrespeitoso não serão tolerados.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                },
                lineHeight: "28px",
                textAlign: "left",
                color: "#000000",
                marginBottom: "-30px",
              }}
            >
              Observações Finais
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                },
                lineHeight: "28px",
                textAlign: "left",
                color: "#000000",
              }}
            >
              O Código de Ética da Cherry IT é um guia para a conduta ética e
              responsável de todos os funcionários da empresa. Nós esperamos que
              este código seja seguido de forma diligente e que todos os
              funcionários da empresa trabalhem juntos para promover um ambiente
              de trabalho ético, transparente e respeitoso.
            </Typography>
          </Stack>
        </Section>
      </Container>
      <Divider />
      <Footer />
    </Box>
  );
}
