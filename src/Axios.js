import axios from "axios";
import {baseUrl } from "./Constatnce/Constance";
const instance = axios.create({
    baseURL: baseUrl,
    
  });
  export default instance