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
          <Stack alignItems="left" gap={6}>
            <Stack alignItems="center">
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
            </Stack>
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
                  xs: "-90px",
                  sm: "-90px",
                  md: "-50px",
                  lg: "-50px",
                  xl: "-50px",
                },
              }}
            >
              Política de Segurança da Informação
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
              A CHERRY IT COMPUTING TECHNOLOGY se compromete em proteger a
              confidencialidade, integridade e disponibilidade das informações
              da empresa, seus clientes e colaboradores, através da
              implementação de medidas de segurança adequadas e em conformidade
              com a legislação aplicável. Esta política de segurança da
              informação se aplica a todos os colaboradores da empresa. Esta
              política reflete o compromisso da CHERRY IT COMPUTING TECHNOLOGY
              em garantir a segurança e confidencialidade das informações dos
              nossos clientes. Todos os funcionários são incentivados a
              familiarizar-se com esta política e a incorporá-la em suas
              atividades diárias.
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
                textAlign: "center",
                color: "#000000",
                marginBottom: "-30px",
              }}
            >
              Definições
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
              1. Informação confidencial: qualquer informação que não deve ser
              divulgada para terceiros não autorizados. <br />
              2. Integridade: garantia de que a informação não foi alterada ou
              corrompida sem autorização. <br />
              3. Disponibilidade: garantia de que a informação e os recursos de
              TI estão disponíveis para uso sempre que necessário. <br />
              4. Infraestrutura de TI: hardware, software, redes e outros
              recursos de TI. <br />
              5. Colaborador: qualquer funcionário ou contratado da CHERRY IT.
              <br />
              6. Cliente: qualquer indivíduo ou organização que contrata os
              serviços da CHERRY IT.
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
                textAlign: "center",
                color: "#000000",
                marginBottom: "-30px",
              }}
            >
              Confidencialidade
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
              A CHERRY IT COMPUTING TECHNOLOGY se compromete a manter a
              confidencialidade de todas as informações fornecidas pelos
              clientes, incluindo dados, códigos e segredos de negócio. Os
              funcionários são proibidos de compartilhar ou divulgar informações
              confidenciais a terceiros sem a autorização explícita dos
              clientes.
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
                textAlign: "center",
                color: "#000000",
                marginBottom: "-30px",
              }}
            >
              Profissionalismo e Ética
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
              A CHERRY IT COMPUTING TECHNOLOGY segue rigorosos padrões de
              profissionalismo e ética em todas as interações com os clientes e
              na gestão de suas informações.
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
                textAlign: "center",
                color: "#000000",
                marginBottom: "-30px",
              }}
            >
              Treinamento e Conscientização
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
              Todos os funcionários da CHERRY IT COMPUTING TECHNOLOGY passam por
              treinamento regular em boas práticas de conscientização de
              segurança e desenvolvimento seguro. <br />
              <br /> É responsabilidade de cada funcionário manter-se atualizado
              sobre as melhores práticas de segurança da informação.
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
                textAlign: "center",
                color: "#000000",
                marginBottom: "-30px",
              }}
            >
              Gerenciamento de Incidentes
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
              Qualquer vazamento de dados ou incidente de segurança será
              imediatamente avaliado e comunicado aos clientes afetados,
              conforme exigido pela lei e regulamentos pertinentes.
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
                textAlign: "center",
                color: "#000000",
                marginBottom: "-30px",
              }}
            >
              Revisão e Melhoria Contínua
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
              Esta política será revisada periodicamente para garantir sua
              eficácia e relevância. A CHERRY IT COMPUTING TECHNOLOGY se
              compromete a melhorar constantemente suas práticas de segurança da
              informação.
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
                textAlign: "center",
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
              A CHERRY IT COMPUTING TECHNOLOGY se compromete a cumprir todas as
              leis e regulamentos aplicáveis relacionados à segurança da
              informação e proteção de dados.
            </Typography>
          </Stack>
        </Section>
      </Container>
      <Divider />
      <Footer />
    </Box>
  );
}
