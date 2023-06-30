import axios from "axios";

const newRequest = axios.create({
    // baseURL: "http://localhost:5000/api/",
    baseURL: "https://fiverr-clone-wdnk.onrender.com/api/",
    withCredentials: true,
})

export default newRequest;