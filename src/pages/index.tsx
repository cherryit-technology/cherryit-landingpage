import * as React from 'react';
import { Box, Container, Divider, Stack } from '@mui/material';
import { FooterHome } from '@/components/footerHome';
import { NavHome } from '@/components/navHome';
import { Main } from '@/components/main';
import { AboutUs } from '@/components/aboutUs';
import { OurBenefits } from '@/components/ourBenefits';
import { Methodology } from '@/components/methodology';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavHome />
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
      
          {/* <Section>
            <SectionTitle type='black'>
              Artigos
            </SectionTitle>
            <Box sx={{ height: 200, width: '100%', backgroundColor: 'blue' }}/>
          </Section> */}

          {/* <Section>
            <Box sx={{ height: 200, width: '100%', backgroundColor: 'blue' }}/>
          </Section> */}

          {/* <Section>
            <SectionTitle type='red'>
              Entre em contato
            </SectionTitle>
            <Box sx={{ height: 200, width: '100%', backgroundColor: 'blue' }}/>
          </Section> */}

        </Stack>
        
      </Container>
    
      <Divider />

      <FooterHome />

    </Box>
  );
}
