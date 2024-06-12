import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Box,
  CssBaseline,
  Grid,
} from "@mui/material";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import ReadingList from "./components/ReadingList";
import { gql, useQuery } from "@apollo/client";

// query to fetch books
const GET_BOOKS = gql`
  query GetBooks {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [readingList, setReadingList] = useState([]);
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredBooks(data.books);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const filtered = data.books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  }, [searchTerm, data]);

  const addToReadingList = (book) => {
    setReadingList((prevList) => [...prevList, book]);
  };

  const removeFromReadingList = (book) => {
    setReadingList((prevList) =>
      prevList.filter((b) => b.title !== book.title)
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading books.</p>;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Book Finder
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {readingList.length > 0 && (
            <Grid item xs={12} sm={4}>
              <Box sx={{ backgroundColor: "white", p: 2 }}>
                <Typography variant="h6" component="div" sx={{ mb: 2, color:"#288888" }}>
                  Reading List
                </Typography>
                <ReadingList
                  books={readingList}
                  onRemove={removeFromReadingList}
                  sx={{ backgroundColor:"F76434"}}
                />
              </Box>
            </Grid>
          )}
          <Grid item xs={12} sm={readingList.length > 0 ? 8 : 12}>
            <Box
              sx={{
                backgroundColor: "turquoise",
                p: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <SearchBar
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Box>
            <Box
              mt={4}
              sx={{
                maxHeight: "400px",
                overflow: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <BookList
                books={filteredBooks}
                onAdd={addToReadingList}
                isSearch={!!searchTerm}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
