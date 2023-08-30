import * as React from "react";

import { styled, Link as MuiLink } from "@mui/material";

interface LinkProps {
  children: any;
  href: any;
  sx?: any;
  target?: string;
  download?: boolean;
}

const CustomLink = styled(MuiLink)({
  fontFamily: "Red Hat Display",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "149%",
  letterSpacing: "0.02em",
  color: "#FFFFFF",
  textDecoration: "none",
});

const Link: React.FC<LinkProps> = ({ href, children, ...rest }) => {
  return (
    <CustomLink href={href} {...rest}>
      {children}
    </CustomLink>
  );
};

export { Link };
