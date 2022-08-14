import React, { useState } from "react";
import "./Search.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";


export default function Search({setFiltered,item,getQuery}) {
  const [searchText, setsearchText] = useState("");
  
  const handleInput = (e) => {
    setsearchText(e);
   getQuery(e)

const filter = item.filter((movie) => {
    if (e === "") {
      return item;
    }else if(movie.fullTitle.toLowerCase().includes(e.toLowerCase())){
      return movie.fullTitle;
    }return false
      
  });

setFiltered(filter)
  };

  // if (searchText === " ") {
  //   return item;
  // }

  

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        mt: 5,
      }}
    >
      <Typography variant="h2" component="div" >
        Search Your Movie
      </Typography>
      <Box mb={2} sx={{ display: "flex", alignItems: "flex-end" }}>
        <TextField
          size="small"
          type="text"
          placeholder="Search Box"
          value={searchText}
          onChange={(e)=>handleInput(e.target.value)}
        />
      </Box>
    </Box>
  );
}
