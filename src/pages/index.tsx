import * as React from "react";
import { Box, Container, Divider, Stack } from "@mui/material";
import { Footer } from "@/components/footer";
import Image from "next/image";
import codeIcon from "../../src/assets/icon-code.png";
import { Navbar } from "@/components/navbar";
import { Main } from "@/components/main";
import { ClockSection } from "@/components/clockSection";
import { OurTeam } from "@/components/ourTeam";
import { AboutUs } from "@/components/aboutUs";
import { OurBenefits } from "@/components/ourBenefits";
import { Methodology } from "@/components/methodology";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Articles } from "@/components/articles";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar isHome={true} />
      <Container sx={{ mt: 12, mb: 12 }} maxWidth="xl">
        <Main />
        <Stack
          gap={12}
          sx={{
            position: "relative",
            top: {
              xs: 100,
              sm: 100,
              md: -120,
              lg: -160,
              xl: -140,
            },
          }}
        >
          <ClockSection />
        </Stack>
      </Container>
      <Stack
        flex={1}
        sx={{
          alignItems: "flex-end",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            right: {
              xs: 0,
              sm: 0,
              md: 0,
              lg: 0,
              xl: 0,
            },
            height: {
              md: 160,
              lg: 160,
              xl: 160,
            },
            width: {
              md: 177,
              lg: 177,
              xl: 177,
            },
            marginTop: {
              md: "-450px",
              lg: "-520px",
              xl: "-550px",
            },
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
            src={codeIcon}
            alt="code"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
      </Stack>

      <Container sx={{ mt: 12, mb: 12 }} maxWidth="xl">
        <Stack
          gap={12}
          sx={{
            position: "relative",
            top: {
              xs: -30,
              sm: -30,
              md: -300,
              lg: -400,
              xl: -400,
            },
          }}
        >
          <OurTeam />

          <AboutUs />

          <OurBenefits />

          <Methodology />

          <Articles />

          <Testimonials />

          <Contact />
        </Stack>
      </Container>

      <Divider />

      <Footer />
    </Box>
  );
}
