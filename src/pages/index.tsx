import * as React from "react";
import { Box, Container, Divider, Stack } from "@mui/material";
import { Footer } from "@/components/footer";

import { Navbar } from "@/components/navbar";
import { Main } from "@/components/main";
import { ClockSection } from "@/components/clockSection";
import { OurTeam } from "@/components/ourTeam";
import { AboutUs } from "@/components/aboutUs";
import { OurBenefits } from "@/components/ourBenefits";
import { Methodology } from "@/components/methodology";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Clients } from "@/components/clients";
import { OurNumbers } from "@/components/ourNumbers";
import { OurServices } from "@/components/ourServices";
import { Articles } from "@/components/articles";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar isHome={true} />
      <Main />
      <ClockSection />
      <OurTeam />
      <OurNumbers />
      <Clients />
      <OurServices />
      <Articles />
      <Testimonials />
      <AboutUs />
      <Contact />

      {/* <Container sx={{ mt: 12, mb: 12 }} maxWidth="xl">
        <Stack
          gap={2}
          sx={{
            position: "relative",
            top: {
              xs: -500,
              sm: -500,
              md: -500,
              lg: -500,
              xl: -500,
            },
          }}
        >
          
        </Stack>
      </Container> */}

      <Divider />

      <Footer />
    </Box>
  );
}
