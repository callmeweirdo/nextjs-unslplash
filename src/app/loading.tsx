import { CircularProgress } from "@mui/joy";
import { Report } from "@mui/icons-material";


const Loading = () => {
    return (
        <CircularProgress color="danger" sx={{ '--CircularProgress-size': '80px' }}>
  <Report  />
</CircularProgress>
    )
}

export default Loading; 