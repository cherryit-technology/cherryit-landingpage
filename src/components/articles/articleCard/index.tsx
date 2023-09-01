import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import * as React from "react";
import blog from "../../../../blog.json";
import { PreviewHtml } from "@cherryit/components";

interface IArticleCard {
  image?: any;
  title?: any;
  tag?: any;
  content?: any;
}

const TypographyCustom = styled(Typography)`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  color: #000000;
  margin-top: -15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const ArticleCard: React.FC<IArticleCard> = ({
  image,
  title,
  tag,
  content,
}) => {
  return (
    <Stack gap={3} sx={{ maxWidth: "371px" }}>
      <Box
        sx={{
          width: "100%",
          height: "248px",
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />
      <Stack flexDirection="row" gap={3}>
        <Typography
          sx={{
            fontFamily: "Red Hat Display",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "13px",
            lineHeight: "12px",
            letterSpacing: "1px",
            color: "#EF4230",
            textTransform: "uppercase",
          }}
        >
          {tag?.split(",")[0]}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Red Hat Display",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "13px",
            lineHeight: "12px",
            letterSpacing: "1px",
            color: "#EF4230",
            textTransform: "uppercase",
          }}
        >
          {tag?.split(",")[1]}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Red Hat Display",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "13px",
            lineHeight: "12px",
            letterSpacing: "1px",
            color: "#EF4230",
            textTransform: "uppercase",
          }}
        >
          {tag?.split(",")[2]}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Red Hat Display",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "12px",
            letterSpacing: "0.5px",
            color: "#48E49B",
            mixBlendMode: "normal",
          }}
        >
          Novo
        </Typography>
      </Stack>
      <Typography
        sx={{
          fontFamily: "Red Hat Display",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "22px",
          lineHeight: "130%",
          color: "#000000",
        }}
      >
        {title}
      </Typography>
      <TypographyCustom>
        <PreviewHtml
          content={content?.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 50)}
        />
      </TypographyCustom>
      <Stack justifyContent="flex-start" alignItems="flex-start">
        <Button
          endIcon={<ChevronRight />}
          sx={{
            fontFamily: "Red Hat Display",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "79.5%",
            color: "#7568FF",
            right: "8px",
          }}
        >
          Leia mais
        </Button>
      </Stack>
    </Stack>
  );
};

export { ArticleCard };
