import React from 'react'
import { Typography,Stack,Button } from '@mui/material'
import BodypartImage from "../assets/icons/body-part.png"
import targetImage from "../assets/icons/target.png"
import equipmentImage from "../assets/icons/equipment.png"
import {v4 as uuidv4} from 'uuid';

export default function Detail({exerciseDetail}) {
    const {bodyPart,gifUrl,name,target,equipment,instructions,id}=exerciseDetail;

    const extraDetails=[
        {
            icon:BodypartImage,
            name:bodyPart,
        },
        {
            icon:targetImage,
            name:target,
        },
        {
            icon:equipmentImage,
            name:equipment,
        }
    ]
  return (
    <Stack gap="60px" sx={{flexDirection:{lg:'row'},p:'20px',alignItems:'center'}}>
      <img src={gifUrl} alt={name}  loading="Lazy" className="detail-image"/>
      <Stack sx={{gap:{lg:'35px',xs:'20px'}}}>
        <Typography variant="h3" sx={{textTransform:"capitalize"}}>{name}</Typography>
        <Typography variant='h6'>{instructions}</Typography>
        {
            extraDetails.map((item)=>(
                <Stack key={uuidv4()} direction="row" gap="24px" alignItems="center">
                    <Button sx={{background:"#ffF2db",borderRadius:'50%',width:'60px',height:'60px'}}>
                        <img src={item.icon} alt={bodyPart} style={{width:'40px',height:"40px"}} />
                    </Button>
                    <Typography variant='h5' textTransform="capitalize">
                        {item.name}
                    </Typography>
                </Stack>
            ))
        }
      </Stack>
    </Stack>
  )
}
