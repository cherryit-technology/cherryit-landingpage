import * as React from 'react'
import { Section } from '../section'
import { SectionTitle } from '../sectionTitle'
import { Box, Button, Grid, Stack } from '@mui/material'
import { ArticleCard } from './articleCard'
import { ChevronRight } from '@mui/icons-material'

interface IArticles {

}

const Articles: React.FC<IArticles> = () => {
  return (
    <Section>
      <SectionTitle type='black'>
        Artigos
      </SectionTitle>
    
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <ArticleCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <ArticleCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <ArticleCard />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Stack
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button
              endIcon={<ChevronRight />}
              sx={{
                fontFamily: 'Red Hat Display',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '149%',
                letterSpacing: '0.02em',
                color: '#48E49B',
              }}
            >
              Veja todos os artigos
            </Button>
          </Stack>
        </Grid>
      </Grid>

    </Section> 
  )
}

export { Articles }