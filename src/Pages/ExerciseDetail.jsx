import React ,{useEffect,useState}from 'react'
import {useParams} from 'react-router-dom'
import {Box}from"@mui/material"
import{exerciseOptions,fetchData,youtubeOptions} from "../Utils/fetchData"
import Details from "../Components/Detail"
import ExerciseVideos from "../Components/ExerciseVideos"
import SimilarExercises from "../Components/SimilarExercises"
const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail]=useState({})
  const [youtubeDetails,setYoutubeDetails]=useState([])
  const [targetMuscleExercises,setTargetMuscleExercises]=useState([]);
  const [equipmentExercises,setEquipmentExercises]=useState([]);

  const {id}=useParams();

  useEffect(()=>{
    const fetchExercisesData=async()=>{
      const exerciseDbUrl='https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com'

      const exercisedetaildata= await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
      setExerciseDetail(exercisedetaildata);

      const Youtubeviedo= await fetchData(`${youtubeSearchUrl}/search?query=${exercisedetaildata.name}`,youtubeOptions)
      setYoutubeDetails(Youtubeviedo.contents);

      const targetMuscleExercisesData= await fetchData(`${exerciseDbUrl}/exercises/target/${exercisedetaildata.target}`,exerciseOptions)
      setTargetMuscleExercises(targetMuscleExercisesData);
      const equipmentExercisesData= await fetchData(`${exerciseDbUrl}/exercises/equipment/${exercisedetaildata.equipment}`,exerciseOptions)
      console.log(equipmentExercisesData)
      setEquipmentExercises(equipmentExercisesData);
    }
    fetchExercisesData();
  },[id])
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos youtubeDetails={youtubeDetails} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail
