import axios from "axios";

const fetchData = async (path:string) => {
    const {data}:any = await axios.get(path).then(response => response)
    .catch(error => {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    })
    return data;
}

export default fetchData;