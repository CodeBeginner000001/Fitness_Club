import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import HorizontalScrollbar from "../Components/HorizontalScrollbar"
import { exerciseOptions, fetchData } from "../Utils/fetchData";
export default function SearchExercises({setExercises,bodyPart,setBodyPart}) {
  const [query, setQuery] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyPart = async () => {
      const bodypartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(['all',...bodypartData]);
    };
    fetchBodyPart();
  }, []);
  /*
  The default return size for endpoints that return a list or array is 10 items. 
  This is done to enhance the speed of data transfer to users. 
  This setting can be overridden by including a limit query parameter in your request and 
  setting the value to any number or integer you desire. There is also an offset query parameter. 
  If you send a query with limit=0, all available data will be returned with no length limit.
  */
  const handleSearch = async () => {
    if (query) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=0",
        exerciseOptions
      );
      const searchedExercise = exerciseData.filter((exercise) =>
          exercise.name.includes(query)||
          exercise.secondaryMuscles.includes(query)||
          exercise.equipment.includes(query)||
          exercise.bodyPart.includes(query)||
          exercise.target.includes(query)
          );
      // console.log(searchedExercise);
      setExercises("");
      setExercises(searchedExercise);
    }
  };


  return (
    <Stack alignItems="center" justifyContent="center" p="20px" mt="37px">
      <Typography
        fontWeight={700}
        mb="50px"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        textAlign="center"
      >
        Awesome Exercise You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value.toLowerCase());
          }}
          placeholder="Search Exercise"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{position:'relative',width:"100vw",p:"20px"}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isbodyParts/>
      </Box>
    </Stack>
  );
}
