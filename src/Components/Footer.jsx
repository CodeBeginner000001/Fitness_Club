import React from 'react'
import {Box,Stack ,Typography} from '@mui/material'
import Logo from "../assets/images/Logo-1.png"
export default function Footer() {
  return (
    <Box mt="80x" bgcolor="#fff3f4">
      <Stack gap="10px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="50px" />
        <Typography variant='h5' pb="10px">
          Made for Practice and learning React vite
        </Typography>
      </Stack>
      
    </Box>
  )
}
