import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
import HorizontalScrollbar from "./HorizontalScrollbar"
import Loader from "./Loader"
export default function SimilarExercises({targetMuscleExercises,equipmentExercises}) {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
      <Typography variant='h3' mb={5} ml={3}>Exercise that <span style={{color:"#ff2625"}}>Target</span> the same muscle group</Typography>
      <Stack direction="row" sx={{p:'2',position:'relative',overflowY:"hidden"}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/>:<Loader/>}
      </Stack>

      <Typography variant='h3' mt={5} mb={5} ml={3}>Exercise that uses same <span style={{color:"#ff2625"}}>Equipment</span></Typography>
      <Stack direction="row" sx={{p:'2',position:'relative',overflowY:"hidden"}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/>:<Loader/>}
      </Stack>
    </Box>
  )
}
