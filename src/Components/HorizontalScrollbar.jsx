import React from "react";
import { Box } from "@mui/material";
import Bodyparts from "./BodyParts";
import ExerciseCard from "./ExerciseCard"
export default function HorizontalScrollbar({ data, bodyPart, setBodyPart ,isbodyParts}) {
  return (
    <div
      style={{
        display: "flex",
        overflow: "auto",
        overflowY:"hidden"
      }}
    >
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
         { isbodyParts?<Bodyparts
            item={item}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />:<ExerciseCard exercise={item}/>}
        </Box>
      ))}
    </div>
  );
}
