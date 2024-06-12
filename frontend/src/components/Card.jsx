import React from "react";
import { styled } from "@mui/system";
import { Box, Typography, Button } from "@mui/material";

const CardContainer = styled(Box)({
  position: "relative",
  maxWidth: "220px",
  margin: "0 auto 20px",
  borderRadius: "25px",
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

const BookImage = styled("img")({
  display: "block",
  userSelect: "none",
  margin: "auto",
  cursor: "zoom-in",
  backgroundColor: "rgb(230, 230, 230)",
  transition: "background-color 300ms ease 0s",
  height: "242px",
  width: "100%",
  borderTopLeftRadius: "25px",
  borderTopRightRadius: "25px",
});

const FavoriteIcon = styled("div")({
  position: "absolute",
  top: "12px",
  right: "12px",
  background: "white",
  borderRadius: "16px",
  padding: "7px 13px",
});

const CardContent = styled(Box)({
  background: "white",
  textAlign: "center",
  padding: "20px",
  borderBottomRightRadius: "25px",
  borderBottomLeftRadius: "25px",
  paddingTop: "10px",
  paddingBottom: "0px",
});

const CardTitle = styled(Typography)({
  margin: "0px",
  fontSize: "0.7rem",
});

const CardDescription = styled(Typography)({
  padding: "11px",
  fontSize: "0.8rem",
  lineHeight: "1",
  margin: "0px",
});

const CustomButton = styled(Button)({
  backgroundColor: "#5ACCCC",
  color: "white",
  "&:hover": {
    backgroundColor: "#4AA3A3",
  },
  borderRadius: "20px",
  padding: "10px 20px",
  marginTop: "10px",
  marginBottom: "20px",
  fontSize: "0.7rem",
});

function Card({ book, onAdd }) {
  const { coverPhotoURL, title, author, readingLevel } = book;
  const imageUrl = `${process.env.PUBLIC_URL}/${coverPhotoURL}`;

  return (
    <CardContainer>
      <BookImage src={imageUrl} alt={title} />
      <FavoriteIcon>
        <span style={{ color: "red", fontSize: "17px" }}>❤</span>
      </FavoriteIcon>
      <CardContent>
        <CardTitle variant="h1" sx={{ color: "#4AA088" }}>
          {title}
        </CardTitle>
        <CardDescription variant="body2">
          {author} - Reading Level: {readingLevel}
        </CardDescription>
        <CustomButton onClick={() => onAdd(book)}>
          Add to Reading List
        </CustomButton>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
