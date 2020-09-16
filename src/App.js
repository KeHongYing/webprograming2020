import React, { useState } from "react";
import { IconButton, Box, Slider } from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const handleChange = (_, position) => {
    setTime(position);
  };
  const addOne = () => {
    setTime((t) => Math.min(t + 1, 100));
  };
  const deleteOne = () => {
    setTime((t) => Math.max(t - 1, 0));
  };
  return (
    <div className="App">
      <Box className="player">
        <Slider
          value={time}
          onChange={handleChange}
          // aria-labelledby="continuous-slider"
          className="slider"
        />
        <div className="Button">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={deleteOne}
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
            onClick={addOne}
          >
            <SkipNextIcon fontSize="large" />
          </IconButton>
        </div>
      </Box>
    </div>
  );
}

export default App;
