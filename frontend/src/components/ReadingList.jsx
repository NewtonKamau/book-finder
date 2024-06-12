import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ReadingList({ books, onRemove }) {
  return (
    <List>
      {books.map((book) => (
        <ListItem key={book.title}>
          <ListItemText primary={book.title} secondary={book.author} sx={{
            '& .MuiListItemText-primary': {
              color: '#4AA088',
            },
            '& .MuiListItemText-secondary': {
              color: '#000', 
            },
          }} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="remove"
              onClick={() => onRemove(book)}
              sx={{ color: '#F76343' }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default ReadingList;
