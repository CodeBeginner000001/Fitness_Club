import React from "react";
import { Box, Stack, Typography } from "@mui/material";
export default function ExerciseVideos({ youtubeDetails, name }) {
  console.log(youtubeDetails)
  if(!youtubeDetails.length) return "Loading...."
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {" "}
          {name}
        </span>{" "}
        Exercise Videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="nowrap"
        overflow="auto"
        alignItems="center"
        
        sx={{ flexDirection:{lg:"row"}, gap: { lg: "110px", xs: "0" },overflowY:"hidden"}}
      >
        {youtubeDetails?.slice(0, youtubeDetails.length).map((item, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={index}
            className="exercise-video"
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
}
