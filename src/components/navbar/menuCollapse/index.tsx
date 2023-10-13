import { Menu } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Menu as MuiMenu } from "@mui/material";
import * as React from "react";

const MenuCollapse: React.FC = () => {
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
        <MenuItem>Início</MenuItem>
        {/* <MenuItem>O processo</MenuItem> */}
        <MenuItem>Artigos</MenuItem>
        <MenuItem>Sobre nós</MenuItem>
      </MuiMenu>
    </Box>
  );
};

export { MenuCollapse };
