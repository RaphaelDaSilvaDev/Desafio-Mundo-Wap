import axios from "axios";

const url = process.env.REACT_APP_LINK_API

export default axios.create({
    baseURL: url
})