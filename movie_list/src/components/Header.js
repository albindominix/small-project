import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import { ButtonGroup, MenuItem, Select, TextField } from "@mui/material";
import Search from "./Search";
export default function Header() {
  return (<>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ height: 70, backgroundColor: "transparent" }}
      >
        <Toolbar>
          <MovieCreationIcon color="secondary" />
          <Typography
            color="black"
            variant="h6"
            component="div"
            sx={{ width: 250 }}
          >
            Movie Club
          </Typography>
          <Box component="div" sx={{ flexGrow: 1, display: "flex", width: 50 }}>
            <Button variant="outlined" sx={{ mx: 2 }}>
              Rent
            </Button>
            <Button variant="outlined" sx={{ mx: 2 }}>
              Buy
            </Button>
            <Button variant="outlined" sx={{ mx: 2 }}>
              Sell
            </Button>
            <Box sx={{ mx: 2 }}>
              <TextField
                size="small"
                select
                label="#1Static Genre"
                sx={{
                  width: 180,
                  "& label": {
                    color: "secondary.main",
                    fontWeight: "medium",
                    variant: "outlined",
                  },
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </TextField>
            </Box>
            <Box sx={{ mx: 2 }}>
              <TextField
                size="small"
                select
                label="#2Static Resources"
                sx={{
                  width: 190,
                  "& label": {
                    color: "secondary.main",
                    fontWeight: "medium",
                    variant: "outlined",
                  },
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </TextField>
            </Box>
          </Box>

          <Button variant="outlined" sx={{ mx: 0.5 }}>
            Register
          </Button>
          <Button
            sx={{ backgroundColor: "primary", mx: 0.5 }}
            variant="contained"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    
    </>
  );
}
