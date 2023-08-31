import * as React from "react";
import { Section } from "../section";
import { SectionTitle } from "../sectionTitle";
import {
  Box,
  Button,
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
import { ContactForm } from "../contactForm";
import Link from "next/link";

interface IContact {}

const Contact: React.FC<IContact> = () => {
  return (
    <Section>
      <SectionTitle type="red">Entre em contato</SectionTitle>
      <Stack
        id="contato"
        flexDirection="row"
        sx={{ height: "84px" }}
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
        {/* <Divider orientation="vertical" />
        <Stack flex={1}>
          <Stack flexDirection="row" gap={3} alignItems="center">
            <Image
              src={Group44781}
              alt="Group44781"
              height={80}
              width={80}
            />
            <Box>
              <Typography
                sx={{
                  fontFamily: 'Red Hat Display',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '32px',
                  letterSpacing: '0.07em',
                  color: '#808080',
                }}
              >
                Endereço
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Red Hat Display',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '24px',
                  lineHeight: '32px',
                  letterSpacing: '0.07em',
                  color: '#160637',
                }}
              >
                Lorem ipsum
              </Typography>
            </Box>
          </Stack>
        </Stack> */}
      </Stack>
      <Stack justifyContent="center" alignItems="center" mt={6}>
        <Box
          sx={{
            width: "428px",
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
              Fale conosco
            </Typography>
          </Stack>

          <ContactForm />

          {/* <TextField
            placeholder="Nome"
            sx={{
              border: "1px solid #D9D9D9",
              borderRadius: "4px",
              // height: '53px',
              mb: 2,
            }}
            fullWidth
          />

          <TextField
            placeholder="Email"
            sx={{
              border: "1px solid #D9D9D9",
              borderRadius: "4px",
              // height: '53px',
              mb: 2,
            }}
            fullWidth
          />

          <TextField
            placeholder="Whatsapp"
            sx={{
              border: "1px solid #D9D9D9",
              borderRadius: "4px",
              // height: '53px',
              mb: 2,
            }}
            fullWidth
          />

          <TextField
            placeholder="Empresa"
            sx={{
              border: "1px solid #D9D9D9",
              borderRadius: "4px",
              // height: '53px',
              mb: 2,
            }}
            fullWidth
          />

          <TextField
            placeholder="Cargo"
            sx={{
              border: "1px solid #D9D9D9",
              borderRadius: "4px",
              // height: '53px',
              mb: 2,
            }}
            fullWidth
          />

          <Stack justifyContent="center" alignItems="center" mt={3} mb={2}>
            <Button
              sx={{
                width: "155px",
                height: "59px",
                background: "#7568FF",
                "&:hover": {
                  background: "#7568FF",
                },
                boxShadow: "2px 3px 15px rgba(0, 0, 0, 0.17)",
                borderRadius: "10px",
                color: "#FFFFFF",
              }}
            >
              Enviar
            </Button>
          </Stack> */}
        </Box>
      </Stack>
    </Section>
  );
};

export { Contact };
