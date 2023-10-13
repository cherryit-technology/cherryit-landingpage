import * as React from "react";
import { Section } from "../section";
import { SectionTitle } from "../sectionTitle";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import Group44780 from "../../assets/Group44780.png";
import Group44782 from "../../assets/Group44782.png";
import Group44781 from "../../assets/Group44781.png";
import Image from "next/image";
import GrafisLeft from "../../assets/grafis_form_left.png";
import GrafisRight from "../../assets/grafis_form_right.png";
import { ContactForm } from "../contactForm";
import Link from "next/link";

interface IContact {}

const Contact: React.FC<IContact> = () => {
  return (
    <Container sx={{ mt: 12, mb: 12 }} maxWidth="xl">
      <Section>
        <SectionTitle type="red">Entre em contato</SectionTitle>
        <Stack
          id="contato"
          sx={{
            height: {
              xs: "auto",
              sm: "auto",
              md: "auto",
              lg: "84px",
              xl: "84px",
            },
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
            alignItems: {
              xs: "flex-start",
              sm: "center",
              md: "center",
              lg: "center",
              xl: "center",
            },
          }}
          gap={6}
          mt={6}
        >
          <Stack flex={1}>
            <Stack flexDirection="row" gap={3} alignItems="center">
              <Image src={Group44780} alt="Group44780" height={80} width={80} />
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Red Hat Display",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "32px",
                    letterSpacing: "0.07em",
                    color: "#808080",
                  }}
                >
                  Telefone
                </Typography>

                <Link
                  href="https://web.whatsapp.com/send?phone=5531993539173"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Red Hat Display",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "24px",
                      lineHeight: "32px",
                      letterSpacing: "0.07em",
                      color: "#160637",
                    }}
                  >
                    55 31 993539173
                  </Typography>
                </Link>
              </Box>
            </Stack>
          </Stack>
          <Divider orientation="vertical" />
          <Stack flex={1}>
            <Stack flexDirection="row" gap={3} alignItems="center">
              <Image src={Group44782} alt="Group44782" height={80} width={80} />
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Red Hat Display",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "32px",
                    letterSpacing: "0.07em",
                    color: "#808080",
                  }}
                >
                  Email
                </Typography>

                <Link
                  href="mailto:contato@cherryit.co"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Red Hat Display",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "24px",
                      lineHeight: "32px",
                      letterSpacing: "0.07em",
                      color: "#160637",
                    }}
                  >
                    contato@cherryit.co
                  </Typography>
                </Link>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack justifyContent="center" alignItems="center" mt={6}>
          <Box
            sx={{
              width: "400px",
              height: "665px",
              background: "#FFFFFF",
              boxShadow: "4px 4px 12px rgba(137, 137, 162, 0.122)",
              borderRadius: "8px",
              p: 4,
            }}
          >
            <Stack justifyContent="center" alignItems="center" mb={3}>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "32px",
                  textAlign: "center",
                  color: "#160637",
                }}
              >
                AGENDE UMA REUNIÃO
              </Typography>
            </Stack>
            <Box
              sx={{
                marginLeft: "-240px",
                zIndex: -1,
                position: "absolute",
                width: "252px",
                height: "186px",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              <Image
                src={GrafisLeft}
                alt="Grafismo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box
              sx={{
                right: {
                  xs: 0,
                  sm: 0,
                  md: 130,
                  lg: 250,
                  xl: 400,
                },
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
                marginTop: "150px",
                zIndex: -1,
                position: "absolute",
                width: "341px",
                height: "246px",
              }}
            >
              <Image
                src={GrafisRight}
                alt="Grafismo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
            <ContactForm />
          </Box>
        </Stack>
      </Section>
    </Container>
  );
};

export { Contact };
