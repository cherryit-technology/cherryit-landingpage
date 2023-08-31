import { Box, Button, Stack } from "@mui/material";
import * as React from "react";

interface IMenu {}

const Menu: React.FC<IMenu> = () => {
  const scrollToInfo = React.useCallback(() => {
    const sectionElement = document.getElementById("contato");
    sectionElement?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <Stack flexDirection="row" alignItems="center" gap={3}>
      <Button
        variant="contained"
        onClick={() => scrollToInfo()}
        sx={{
          "&:hover": {
            background: "#7568FF",
          },
          padding: "16px 20px",
          gap: "10px",
          height: "45px",
          background: "#7568FF",
          boxShadow: "2px 3px 15px rgba(0, 0, 0, 0.17)",
          borderRadius: "10px",

          fontFamily: "Red Hat Display",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: {
            xs: "18px",
            sm: "18px",
            md: "14px",
            lg: "18px",
            xl: "18px",
          },
          lineHeight: "149%",
          letterSpacing: "0.02em",
          color: "#FFFFFF",
        }}
      >
        Agende uma reunião
      </Button>
      {/* <Button
        color="inherit"
        sx={{
          fontFamily: "Red Hat Display",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "20px",
          lineHeight: "130%",
          color: "#FFFFFF",
          textTransform: "none",
        }}
      >
        Início
      </Button>
      <Button
        color="inherit"
        sx={{
          fontFamily: "Red Hat Display",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "20px",
          lineHeight: "130%",
          color: "#FFFFFF",
          textTransform: "none",
        }}
      >
        O processo
      </Button>
      <Button
        color="inherit"
        sx={{
          fontFamily: "Red Hat Display",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "20px",
          lineHeight: "130%",
          color: "#FFFFFF",
          textTransform: "none",
        }}
      >
        Artigos
      </Button>
      <Button
        color="inherit"
        sx={{
          fontFamily: "Red Hat Display",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "20px",
          lineHeight: "130%",
          color: "#FFFFFF",
          textTransform: "none",
        }}
      >
        Sobre nós
      </Button> */}
    </Stack>
  );
};

export { Menu };
