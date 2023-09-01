import {
  AppBar,
  Button,
  Stack,
  Theme,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import * as React from "react";
import marcaCherryItBranca from "../../assets/Marca_CherryIt_Branca_2.png";
import { Menu } from "./menu";
import { MenuCollapse } from "./menuCollapse";

interface IMenu {
  isHome?: any;
}

const Navbar: React.FC<IMenu> = ({ isHome }) => {
  const upSm = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return (
    <AppBar position="static">
      <Toolbar>
        <Stack justifyContent="center" sx={{ flexGrow: 1 }}>
          <Image
            src={marcaCherryItBranca}
            alt="Marca CherryIt Branca"
            width={147}
            height={48.38}
          />
        </Stack>
        {upSm ? <Menu isHome={isHome} /> : <MenuCollapse />}
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
