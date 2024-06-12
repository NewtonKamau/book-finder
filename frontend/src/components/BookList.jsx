import React from "react";
import { Grid } from "@mui/material";
import Card from "./Card";

function BookList({ books, onAdd, isSearch }) {
  return (
    <Grid container spacing={2} justifyContent="center">
      {books.map((book, index) => (
        <Grid item key={index} xs={12} sm={6} md={isSearch ? 12 : 3}>
          <Card book={book} onAdd={onAdd} isSearch={isSearch} />
        </Grid>
      ))}
    </Grid>
  );
}

export default BookList;
