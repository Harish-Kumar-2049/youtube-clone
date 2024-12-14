import { Stack , Box } from "@mui/material"
import {VideoCard , ChannelCard} from "./"

const Videos = ({ videos}) => {
  //console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap"
    justifyContent="start" gap={2}>
      
      {videos.map((item, idx) => {
        console.log(item); // Debugging statement inside map function
        return (
          <Box key={idx}>
            {item.kind === "youtube#video" && <VideoCard video={item} />}
            {item.kind != "youtube#video" && <ChannelCard channelDetail={item} />}
          </Box>
        );
    })}
    </Stack>
  )
}

export default Videos;