import React from "react";
import { IconButton, Box, Slider } from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Box className="player">
        <Slider
          value={50}
          // onChange={handleChange}
          // aria-labelledby="continuous-slider"
          className="slider"
        />
        <div className="Button">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <SkipPreviousIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PlayCircleFilledIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <SkipNextIcon fontSize="large" />
          </IconButton>
        </div>
      </Box>
    </div>
  );
}

export default App;
