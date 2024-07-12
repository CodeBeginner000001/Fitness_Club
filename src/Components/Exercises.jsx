import React,{useEffect,useState} from 'react'
import Pagination from "@mui/material/Pagination"
import { Box,Stack,Typography} from '@mui/material'
import ExerciseCard from './ExerciseCard';
import {exerciseOptions,fetchData} from "../Utils/fetchData"
export default function Exercises({exercises,setExercises,bodyPart}) {
  const [currentPage,setCurrentPage]=useState(1)
  const ExercisePerPage=9;

  const indexOfLastExercise=currentPage*ExercisePerPage;
  const indexOfFirstExercise=indexOfLastExercise-ExercisePerPage;
  const currentExercise=exercises.slice(indexOfFirstExercise,indexOfLastExercise);
  const paginate=(e,value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1700,behavior:"smooth"})
  }
  useEffect(()=>{
    const fetchExercisesData=async()=>{
      let exercisesData=[];
      console.log(bodyPart)
      if(bodyPart==="all"){
        exercisesData=await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=0",
          exerciseOptions
        );
      } else{
        exercisesData=await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=0`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    }
    fetchExercisesData();
  },[bodyPart])
  return (
    <Box id="exercises"
    sx={{mt:{lg:'110px'}}}
    mt="50px"
    p="20px"
    >
      <Typography variant="h3" mb="46px" textAlign="center">
        Showing Result
      </Typography>
      <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}}
      flexWrap="wrap" justifyContent="center">
        {currentExercise.map((exercise,index)=>(<ExerciseCard exercise={exercise} key={index}/>))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        { exercises.length > 9 && (
            <Pagination
            color="standard"
            shape="circular"
            defaultPage={1}
            count={Math.ceil(exercises.length/ExercisePerPage )}
            page={currentPage}
            onChange={paginate}
            size='large'
            />
          )
        }
      </Stack>
    </Box>
  )
}
