import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import table from "../../assets/table.png";
import iconStart from "../../assets/icon-start.png";
import iconPeople from "../../assets/icon-people.png";
import iconContract from "../../assets/icon-contract.png";
import iconCode from "../../assets/icon-code-small.png";
import useMediaQuery from "@mui/material/useMediaQuery";

interface IClockSection {}

const OurTeam: React.FC<IClockSection> = () => {
  const scrollToInfo = React.useCallback(() => {
    const sectionElement = document.getElementById("contato");
    sectionElement?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const matches = useMediaQuery("(min-width:899px)");
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Red Hat Display",
            fontStyle: "normal",
            fontWeight: {
              xs: 400,
              sm: 400,
              md: 500,
              lg: 500,
              xl: 500,
            },
            fontSize: {
              xs: "16px",
              sm: "16px",
              md: "24px",
              lg: "32px",
              xl: "32px",
            },
            marginTop: {
              xs: "16px",
              sm: "16px",
              md: "80px",
              lg: "80px",
              xl: "80px",
            },
            lineHeight: {
              xs: "20px",
              sm: "20px",
              md: "20px",
              lg: "35px",
              xl: "35px",
            },
            color: "#1B1F1E",
          }}
        >
          Nossa equipe de profissionais seniores colabora para manter seus
          sistemas:
        </Typography>
        <Stack
          sx={{
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
          }}
        >
          <Typography
            sx={{
              textAlign: {
                xs: "left",
                sm: "center",
                md: "left",
                lg: "left",
                xl: "left",
              },
              fontFamily: "Red Hat Display",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: {
                xs: "64px",
                sm: "64px",
                md: "64px",
                lg: "80px",
                xl: "100px",
              },
              lineHeight: {
                xs: "64px",
                sm: "64px",
                md: "80px",
                lg: "116px",
                xl: "116px",
              },
              color: "#48E49B",
            }}
          >
            escaláveis
          </Typography>
          <Typography
            sx={{
              textAlign: {
                xs: "left",
                sm: "center",
                md: "left",
                lg: "left",
                xl: "left",
              },
              fontFamily: "Red Hat Display",
              fontStyle: "normal",
              fontWeight: 700,
              marginLeft: {
                md: "16px",
                lg: "16px",
                xl: "16px",
              },
              fontSize: {
                xs: "64px",
                sm: "64px",
                md: "64px",
                lg: "80px",
                xl: "100px",
              },
              lineHeight: {
                xs: "64px",
                sm: "64px",
                md: "80px",
                lg: "116px",
                xl: "116px",
              },
              color: "#48E49B",
            }}
          >
            resilientes
          </Typography>
          <Typography
            sx={{
              textAlign: {
                xs: "left",
                sm: "center",
                md: "left",
                lg: "left",
                xl: "left",
              },
              fontFamily: "Red Hat Display",
              fontStyle: "normal",
              marginLeft: {
                md: "16px",
                lg: "16px",
                xl: "16px",
              },
              fontWeight: 300,
              fontSize: {
                xs: "64px",
                sm: "64px",
                md: "64px",
                lg: "80px",
                xl: "100px",
              },
              lineHeight: {
                xs: "64px",
                sm: "64px",
                md: "80px",
                lg: "116px",
                xl: "116px",
              },
              color: "#48E49B",
            }}
          >
            seguros.
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
        <Stack
          flex={1}
          sx={{
            alignItems: {
              xs: "flex-start",
              sm: "flex-start",
              md: "flex-start",
              lg: "flex-start",
              xl: "flex-start",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              right: {
                xs: 0,
                sm: 0,
                md: 0,
                lg: 0,
                xl: 0,
              },
              height: {
                xs: 150,
                sm: 190,
                md: 177,
                lg: 178,
                xl: 190,
              },
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "827px",
              },
            }}
          >
            <Image
              src={table}
              alt="clock"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        lg={5}
        xl={5}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Red Hat Display",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: {
              xs: "16px",
              sm: "16px",
              md: "24px",
              lg: "24px",
              xl: "24px",
            },
            lineHeight: "32px",
            color: "#1B1F1E",
            marginLeft: {
              xs: "auto",
              sm: "auto",
              md: "26px",
              lg: "26px",
              xl: "26px",
            },
          }}
        >
          Isso resulta em funcionalidades implantadas com{" "}
          {matches ? (
            <span
              style={{
                color: "#7568FF",
                fontSize: "24px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              agilidade
            </span>
          ) : (
            <span
              style={{
                color: "#7568FF",
                fontSize: "16px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              agilidade
            </span>
          )}
          , sua empresa reagindo mais rapidamente aos{" "}
          {matches ? (
            <span
              style={{
                color: "#7568FF",
                fontSize: "24px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              movimentos de mercado
            </span>
          ) : (
            <span
              style={{
                color: "#7568FF",
                fontSize: "16px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              movimentos de mercado
            </span>
          )}
          , e os{" "}
          {matches ? (
            <span
              style={{
                color: "#7568FF",
                fontSize: "24px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              clientes mais satisfeitos{" "}
            </span>
          ) : (
            <span
              style={{
                color: "#7568FF",
                fontSize: "16px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              clientes mais satisfeitos{" "}
            </span>
          )}
          ao interagir com os seus sites e aplicativos.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          sx={{
            flexDirection: "row",
            flexWrap: {
              xs: "wrap",
              sm: "wrap",
              md: "wrap",
              lg: "inherit",
              xl: "inherit",
            },
            marginTop: {
              xs: "59px",
              sm: "59px",
              md: "166px",
              lg: "166px",
              xl: "166px",
            },
            alignItems: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
              xl: "flex-start",
            },
          }}
          justifyContent="center"
          gap={{
            xs: 4,
            sm: 4,
            md: 2,
            lg: 2,
            xl: 8,
          }}
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            gap={2}
            p={4}
            height="270px"
            sx={{
              borderRadius: "36px",
              boxShadow:
                "0px 1.85185px 3.14815px 0px rgba(0, 0, 0, 0.00), 0px 8.14815px 6.51852px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.51852px 25.48148px 0px rgba(0, 0, 0, 0.01), 0px 64.81481px 46.85185px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)",
              width: {
                xs: "90%",
                sm: "90%",
                md: "280px",
                lg: "280px",
                xl: "306px",
              },
              borderRight: "1px solid #EDEDED",
              borderBottom: "1px solid #EDEDED",
              borderLeft: "1px solid #EDEDED",
              background: "#FFF",
            }}
          >
            <Image src={iconPeople} alt="icon people" width={65} height={65} />
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "26px",
                textAlign: "center",
                color: "#000000",
                marginTop: "21px",
              }}
            >
              4 milhões
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "23px",
                textAlign: "center",
                color: "#000000",
                marginTop: "-13px",
              }}
            >
              de pessoas impactadas por nossos projetos
            </Typography>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            gap={2}
            p={4}
            height="314px"
            sx={{
              borderRadius: "36px",
              boxShadow:
                "0px 1.85185px 3.14815px 0px rgba(0, 0, 0, 0.00), 0px 8.14815px 6.51852px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.51852px 25.48148px 0px rgba(0, 0, 0, 0.01), 0px 64.81481px 46.85185px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)",
              width: {
                xs: "100%",
                sm: "100%",
                md: "330px",
                lg: "330px",
                xl: "356px",
              },
              borderRight: "2px solid #7568FF",
              borderBottom: "2px solid #7568FF",
              borderLeft: "2px solid #7568FF",
              background: "#FFF",
            }}
          >
            <Image src={iconStart} alt="icon people" width={65} height={65} />
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "26px",
                textAlign: "center",
                color: "#000000",
                marginTop: "21px",
              }}
            >
              9.99
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "23px",
                textAlign: "center",
                color: "#000000",
                marginTop: "-13px",
              }}
            >
              NPS
            </Typography>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            gap={2}
            p={4}
            height="270px"
            sx={{
              borderRadius: "36px",
              boxShadow:
                "0px 1.85185px 3.14815px 0px rgba(0, 0, 0, 0.00), 0px 8.14815px 6.51852px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.51852px 25.48148px 0px rgba(0, 0, 0, 0.01), 0px 64.81481px 46.85185px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)",
              width: {
                xs: "90%",
                sm: "90%",
                md: "280px",
                lg: "280px",
                xl: "306px",
              },
              borderRight: "1px solid #EDEDED",
              borderBottom: "1px solid #EDEDED",
              borderLeft: "1px solid #EDEDED",
              background: "#FFF",
            }}
          >
            <Image
              src={iconContract}
              alt="icon people"
              width={65}
              height={65}
            />
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "26px",
                textAlign: "center",
                color: "#000000",
                marginTop: "21px",
              }}
            >
              100%
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "23px",
                textAlign: "center",
                color: "#000000",
                marginTop: "-13px",
              }}
            >
              dos clientes nos contratam mais de 1 vez
            </Typography>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            gap={2}
            p={4}
            height="270px"
            sx={{
              borderRadius: "36px",
              boxShadow:
                "0px 1.85185px 3.14815px 0px rgba(0, 0, 0, 0.00), 0px 8.14815px 6.51852px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.51852px 25.48148px 0px rgba(0, 0, 0, 0.01), 0px 64.81481px 46.85185px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)",
              width: {
                xs: "90%",
                sm: "90%",
                md: "280px",
                lg: "280px",
                xl: "306px",
              },
              borderRight: "1px solid #EDEDED",
              borderBottom: "1px solid #EDEDED",
              borderLeft: "1px solid #EDEDED",
              background: "#FFF",
            }}
          >
            <Image src={iconCode} alt="icon people" width={65} height={65} />
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "26px",
                textAlign: "center",
                color: "#000000",
                marginTop: "21px",
              }}
            >
              25 milhões
            </Typography>
            <Typography
              sx={{
                fontFamily: "Red Hat Display",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "23px",
                textAlign: "center",
                color: "#000000",
                marginTop: "-13px",
              }}
            >
              de linhas de código em produção
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        {!matches && (
          <Typography
            sx={{
              fontFamily: "Red Hat Display",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "26px",
              textAlign: "left",
              color: "#1B1F1E",
            }}
          >
            Nossa equipe de profissionais seniores colabora para manter seus
            sistemas escaláveis, resilientes e seguros. Isso resulta em
            funcionalidades implantadas com agilidade, sua empresa reagindo mais
            rapidamente aos movimentos de mercado, e os clientes mais
            satisfeitos ao interagir com os seus sites e aplicativos.
          </Typography>
        )}
        <Stack
          gap={3}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "26px",
          }}
        >
          <Button
            variant="contained"
            onClick={() => scrollToInfo()}
            sx={{
              "&:hover": {
                color: "#FFFFFF",
                backgroundColor: "#7568FF",
              },
              background: "#7568FF",
              border: "2px solid #7568FF",
              boxShadow: "2px 3px 15px rgba(0, 0, 0, 0.17)",
              borderRadius: "10px",
              fontFamily: "Red Hat Display",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: {
                xs: "20px",
                sm: "20px",
                md: "22px",
                lg: "22px",
                xl: "22px",
              },
              lineHeight: "149%",
              letterSpacing: "0.02em",
              textTransform: "none",
              padding: "16px 20px",
              width: "364px",
              color: "#FFFFFF",
            }}
          >
            {matches
              ? "Agende reunião estratégica"
              : "Consulte um especialista"}
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export { OurTeam };
