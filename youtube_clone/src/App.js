import { BrowserRouter, Routes , Route} from 'react-router-dom';
import { Box } from '@mui/material' ;

import { Navbar , Feed  , VideoDetail , SearchFeed , ChannelDetail } from "./components"

const App = () => (
    <div className="App">
      < BrowserRouter>
       <Box sx={{backgroundColor : "#000"}}>
        <Navbar />
        <Routes>
          <Route path ="/" exact element = {<Feed />} />
          <Route path ="/video/:id" element = {<VideoDetail/>} />
          <Route path ="/Channel/:id" element = {<ChannelDetail/>} />
          <Route path ="/Search/:searchTerm" element = {<SearchFeed />} />
        </Routes>
       </Box>
      </BrowserRouter> 
    </div>
  );


export default App;
