import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SelectBox from "./components/select-tag";
import Post from "./components/post";


export default function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // calling API :
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data.posts);
      });
  }, []);

  // filtering post by their tag names :
  let filteredData = data; // default value if their is no selected tag/or de-select tag
  if (searchTerm) {
    filteredData = data.filter((post) =>
      post.tags.some((tag) => tag.includes(searchTerm))
    );
  }

  return (
    <div className="App">
      {/* material ui component Box used to apply flex property on all post */}
      <Box
        className="App"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "50px"
        }}
      > 
        
      {/*  SelectBox/> ,component created for selecting tag : */}
        <SelectBox value={searchTerm} onChange={setSearchTerm} />
       
        {/* for accessing all post ,map() called : */}
        {filteredData.map((item) => (
          <Post key={item.id} title={item.title} body={item.body} /> // separate <Post/> component created so that it would reuse also it has some styling :
        ))}
      </Box>
    </div>
  );
}
