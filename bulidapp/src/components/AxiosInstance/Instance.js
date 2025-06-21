import axios from "axios";
let BaseURL="http://localhost:5000/api/user"
let axiosInstance=axios.create({
    baseURL:BaseURL
})
export default axiosInstance