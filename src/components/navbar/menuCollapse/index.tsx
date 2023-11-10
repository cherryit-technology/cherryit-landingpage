import { Menu } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Menu as MuiMenu } from "@mui/material";
import * as React from "react";
import { useRouter } from "next/router";

const MenuCollapse: React.FC = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        onClick={handleClick}
        id="menu-button"
        color="inherit"
        aria-controls={open ? "menu-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Menu />
      </IconButton>
      <MuiMenu
        open={open}
        onClose={handleClose}
        id="basic-menu"
        anchorEl={anchorEl}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          right: 10,
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {/*<MenuItem onClick={() => router.push("/")}>Início</MenuItem>
         <MenuItem>O processo</MenuItem>
        <MenuItem onClick={() => router.push("/blog")}>Artigos</MenuItem>
        <MenuItem onClick={() => router.push("/sobre")}>Sobre nós</MenuItem>  */}
      </MuiMenu>
    </Box>
  );
};

export { MenuCollapse };
