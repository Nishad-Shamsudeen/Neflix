import axios from "axios";
import { API_CALL,baseUrl } from "./Constatnce/Constance";
const instance = axios.create({
    baseURL: baseUrl,
    
  });
  export default instance