import * as React from 'react'
import { Section } from '../section'
import { SectionTitle } from '../sectionTitle'
import { Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Group44746 from '../../assets/Group44746.png'
import Group447461 from '../../assets/Group447461.png'
import Group44753 from '../../assets/Group44753.png'
import Group44754 from '../../assets/Group44754.png'

interface IOurBenefits {

}

const OurBenefits: React.FC<IOurBenefits> = () => {
  return (
    <Section>
      <SectionTitle type='purple'>
        Nossos benefícios
      </SectionTitle>
      
      <Grid
        container
        spacing={11}
      >
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
          <Stack 
            gap={1}
            alignItems="center"
            sx={{
              width: '100%',
              borderRadius: '36px',
              paddingLeft: '31px',
              paddingRight: '31px',
              paddingBottom: '30px',
              paddingTop: '40px',
              "&:hover": {
                borderBottom: "1px solid #7568FF",
                borderLeft: "1px solid #7568FF",
                borderRight: "1px solid #7568FF",
                boxShadow: 1,
              },
            }}
          >
            <Image
              src={Group44746}
              alt="Group44746"
              width={65}
              height={65}
            />
            <Typography
              sx={{
                mt: 3,
                fontFamily: 'Red Hat Display',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '24px',
                textAlign: 'center',
                color: '#1E1D4C',

              }}
            >
              Aumento de produtividade e competitividade
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Red Hat Display',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '149%',
                textAlign: 'center',
                color: '#5E6282',

              }}
            >
              Soluções de software avançadas permitem que as empresas se tornem mais eficientes, lucrativas e atualizadas no mercado
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
          <Stack 
            gap={1}
            alignItems="center"
            sx={{
              width: '100%',
              borderRadius: '36px',
              paddingLeft: '31px',
              paddingRight: '31px',
              paddingBottom: '30px',
              paddingTop: '40px',
              "&:hover": {
                borderBottom: "1px solid #7568FF",
                borderLeft: "1px solid #7568FF",
                borderRight: "1px solid #7568FF",
                boxShadow: 1,
              },
            }}
          >
            <Image
              src={Group447461}
              alt="Group447461"
              width={65}
              height={65}
            />
            <Typography
              sx={{
                mt: 3,
                fontFamily: 'Red Hat Display',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '24px',
                textAlign: 'center',
                color: '#1E1D4C',

              }}
            >
              Redução de custos
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Red Hat Display',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '149%',
                textAlign: 'center',
                color: '#5E6282',

              }}
            >
              Soluções de software avançadas permitem que as empresas se tornem mais eficientes, lucrativas e atualizadas nSoluções de software customizadas podem ajudar as empresas a economizar tempo e recursos, resultando em melhoria dos resultados operacionais através da redução de custoso mercado
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
          <Stack
            gap={1}
            alignItems="center"
            sx={{
              width: '100%',
              borderRadius: '36px',
              paddingLeft: '31px',
              paddingRight: '31px',
              paddingBottom: '30px',
              paddingTop: '40px',
              "&:hover": {
                borderBottom: "1px solid #7568FF",
                borderLeft: "1px solid #7568FF",
                borderRight: "1px solid #7568FF",
                boxShadow: 1,
              },
            }}
          >
            <Image
              src={Group44753}
              alt="Group44753"
              width={65}
              height={65}
            />
            <Typography
              sx={{
                mt: 3,
                fontFamily: 'Red Hat Display',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '24px',
                textAlign: 'center',
                color: '#1E1D4C',

              }}
            >
              Melhoria da satisfação do cliente final
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Red Hat Display',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '149%',
                textAlign: 'center',
                color: '#5E6282',

              }}
            >
              Soluções de software personalizadas podem ajudar as empresas a atender às necessidades de seus clientes de forma mais eficaz, resultando em uma melhoria da satisfação do cliente.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
          <Stack 
            gap={1}
            alignItems="center"
            sx={{
              width: '100%',
              borderRadius: '36px',
              paddingLeft: '31px',
              paddingRight: '31px',
              paddingBottom: '30px',
              paddingTop: '40px',
              "&:hover": {
                borderBottom: "1px solid #7568FF",
                borderLeft: "1px solid #7568FF",
                borderRight: "1px solid #7568FF",
                boxShadow: 1,
              },
            }}
          >
            <Image
              src={Group44754}
              alt="Group44754"
              width={65}
              height={65}
            />
            <Typography
              sx={{
                mt: 3,
                fontFamily: 'Red Hat Display',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '24px',
                textAlign: 'center',
                color: '#1E1D4C',

              }}
            >
              Experiência comprovada
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Red Hat Display',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '149%',
                textAlign: 'center',
                color: '#5E6282',

              }}
            >
              Com anos de experiência no setor de desenvolvimento de software, a Cherry IT possui um histórico comprovado de entrega de projetos de sucesso.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    
    </Section> 
  )
}

export { OurBenefits }