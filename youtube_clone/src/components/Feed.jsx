import { useState , useEffect} from 'react';
import { Box , Stack , Typography} from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Sidebar , Videos } from './';


const Feed = () => {

  const [selectedCategory,
    setSelectedCategory] = useState('New');
  const [videos,setVideos] = useState([]);  

  useEffect(() => {
    fetchFromAPI(`search? part=snippet&q=$
      {selectedCategory}`).then((data) => setVideos(data.items))
  },[selectedCategory])

  return (
    <Stack sx={{ flexDirection :{ sx:
      "column" , md:"row" }}}>
        <Box
         sx={{ 
          height: { xs: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d', 
          px: {xs: 0, md:2},
          overflowY: 'auto',
          }}>
          <Sidebar
           selectedCategory={selectedCategory}
           setSelectedCategory={setSelectedCategory}
          />
          <Typography className="copyright" 
          variant="body2" sx={{ mt: 1.5,
          color:"#fff"
          }}>
            Copyright 2022 Youtube clone
          </Typography>
        </Box>

        <Box p={2} sx={{ overflowY: 'auto',
          height: '90vh', flex:2 ,width:{ xs: '100%', md: 'auto' } }}>
          <Typography variant="h4"
          fontWeight = "bold" mb={2} sx={{
            color: 'white' }}>
            {selectedCategory} <span style={{ color: '#F31503'}}> 
              videos
            </span>
          </Typography>
          <Videos videos={videos}/>
          <h1>hi well</h1>
        </Box>
    </Stack>
  )
}

export default Feed