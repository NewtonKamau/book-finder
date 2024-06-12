import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ value, onChange }) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search for books"
      value={value}
      onChange={onChange}
      sx={{
        backgroundColor: "white",
        borderRadius: "25px",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderRadius: "25px",
          },
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchBar;
