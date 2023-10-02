import * as React from "react";
import { Section } from "../section";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { SectionTitle } from "../sectionTitle";
import IframeResizer from "iframe-resizer-react";

interface ITestimonials {}

const TestimonialsOld: React.FC<ITestimonials> = () => {
  return (
    <Section>
      <SectionTitle type="purple">O que as pessoas falam de nós</SectionTitle>
      <IframeResizer
        id="testimonialto-carousel-all-cherry-it-tag-all-light"
        src="https://embed-v2.testimonial.to/carousel/all/cherry-it?theme=light&autoplay=on&showmore=on&one-row=on&hideDate=on&same-height=on&tag=all"
        style={{
          height: 400,
          borderWidth: 0,
          width: "1px",
          minWidth: "100%",
        }}
      />
      {/* <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography
            sx={{
              fontFamily: 'Red Hat Display',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '24px',
              textTransform: 'uppercase',
              color: '#5E6282',
            }}
          >
            Testimoniais
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Red Hat Display',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '50px',
              lineHeight: '55px',
              color: '#14183E',
              maxWidth: '415px'
            }}
          >
            O que as pessoas falam de nós
          </Typography>

          <Stack
            mt="102px"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            gap={6}
          >
            <Box sx={{ height: 12, width: 12, borderRadius: 100, backgroundColor: '#39425D' }} />
            <Box sx={{ height: 12, width: 12, borderRadius: 100, backgroundColor: '#E5E5E5' }} />
            <Box sx={{ height: 12, width: 12, borderRadius: 100, backgroundColor: '#E5E5E5' }} />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Stack 
            sx={{
              width: '504px',
              height: '245px',
              background: '#FFFFFF',
              boxShadow: '0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)',
              borderRadius: '10px',
            }}
          >
          </Stack>
        </Grid>
      </Grid> */}
    </Section>
  );
};

export { TestimonialsOld };
