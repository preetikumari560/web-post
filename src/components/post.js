import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  margin: "0 1rem",
  textAlign: "center",
  color: theme.palette.text.secondary
}));

// the code syntax is provided by material UI for styling a grid along with Box,

export default function Post({ body, title }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs="12">
          <Item>
            <h2>{title}</h2>
            <p>{body}</p>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
