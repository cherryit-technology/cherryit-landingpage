import * as React from 'react';
import { Box, Container, Divider, Stack } from '@mui/material';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Main } from '@/components/main';
import { AboutUs } from '@/components/aboutUs';
import { OurBenefits } from '@/components/ourBenefits';
import { Methodology } from '@/components/methodology';
// import { Articles } from '@/components/articles';
import { Testimonials } from '@/components/testimonials';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <Container
        sx={{ mt: 12, mb: 12 }}
        maxWidth='xl'
      >
        <Main />
        <Stack
          gap={12}
          sx={{
            position: 'relative',
            top: {
              xs: 100,
              sm: 100,
              md: -120,
              lg: -160,
              xl: -160,
            }
          }}
        >
          
          <AboutUs />

          <OurBenefits />
          
          <Methodology />
      
          {/* <Articles /> */}

          <Testimonials />

          <Contact />

        </Stack>
        
      </Container>
    
      <Divider />

      <Footer />

    </Box>
  );
}
