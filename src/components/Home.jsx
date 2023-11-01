import { Typography } from '@material-ui/core'
import {useEffect,useState} from 'react'
import axios from 'axios'

axios.defaults.withCredentials = true;
const Home = () =>{
    const [user,setUser]=useState()
    const sendRequest = async () => {
        try {
          const res = await axios.get('https://keepnotesclone.onrender.com/v1/user', {
            withCredentials: true,
          });
      
          const data = res.data;  // Remove the unnecessary await here
          return data;
        } catch (error) {
          console.log(error);
          // Handle errors
        }
      };
      
      useEffect(() => {
        sendRequest().then((data) => {
          setUser(data.user);
        });
      }, []);
    // console.log("user>>",user);
    return (
        <>
            <Typography variant='h1'>welcome</Typography>
        </>
    )
}

export default Home