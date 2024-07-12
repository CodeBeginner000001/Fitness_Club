import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
export default function ExerciseCard({ exercise }) {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`} 
    onClick={()=>{
      setBodyPart(item);
      window.scrollTo({top:1800,left:100,behavior:"smooth"});
      
  }}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
            {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
            {exercise.target}
        </Button>
      </Stack>
      <Typography ml="21px" textTransform="capitalize" pb="10px" mt="11px" color="#000" fontWeight="bold">
        {exercise.name}
      </Typography>
    </Link>
  );
}
