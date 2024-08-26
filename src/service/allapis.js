import axios from "axios";
export const addVideos=async(data)=>{
    return await axios.post("http://localhost:3000/videos",data)
}