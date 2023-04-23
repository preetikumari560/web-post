import * as React from 'react';
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// the code syntax is provided by material UI for styling a grid along with Box

export default function SelectBox({ value, onChange }) {
  return (
    <Autocomplete
      style={{
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "white"
      }}
      disablePortal
      id="combo-box-demo"
      options={tagsList}
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      sx={{ width: "15rem", margin: "1.5rem 0" }}
      renderInput={(params) => (
        <TextField {...params} label="select-post-by-tag" />
      )}
    />
  );
}

const tagsList = [
  "history",
  "american",
  "crime",
  "french",
  "fiction",
  "english",
  "magical",
  "mystery",
  "love",
  "classic"
];
