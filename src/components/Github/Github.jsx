import React,{useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data =useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/m1-rawat')
    //     .then(response=> response.json()) 
    //     .then(data => {
    //         console.log(data); 
    //         setdata(data)
    // })
    // },[])
    
return (
    <div className='bg-gray-500 p-4 m-4 text-center text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
)
}

export default Github;

export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/m1-rawat')
    return response.json()
}