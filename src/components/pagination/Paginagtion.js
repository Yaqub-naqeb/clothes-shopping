import  React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ListCards from '../card/ListCards';
import { useFetch } from '../Hook/useFetch';
const Paginagtion = () => {

    const {data,isPending,error}=useFetch('https://fronttask.techeyeco.com/api/ClientSide/GetProducts')
    console.log(data);

    const [page, setPage] =useState(1);
const [dt,setDt]=useState(true);
const [ld,setLd]=useState(false);


    const handleChange = (event, value) => {
   
setDt(false)
setLd(true)

     setTimeout(() => {
        setDt(true)
        setLd(false)
        setPage(value);
        console.log(dt)
     }, 100);
console.log(dt);
    };

  return (
   <div className=''>
    
    
        <Stack spacing={2}>
    <Typography>Page: {page}</Typography>

<Typography>{ld&&<h1 className='text-center text-3xl items-center'>Loding...</h1>}</Typography>

    <Typography> {error&& <h1 className='text-center text-3xl items-center'>{error}</h1>}</Typography>
    <Typography>{isPending&& <h1 className='text-center text-3xl items-center '>Loding...</h1>}</Typography>
    <Typography> <div className='grid grid-cols-3 gap-x-[-10rem] gap-y-10'>
        
        
          { dt && data&&data.map((dtt)=><ListCards dt={dtt}/>)}


       

      </div>
      </Typography>




    <Pagination className='flex justify-center  ' count={10} page={page} onChange={handleChange} />
  </Stack>
   </div>
  )
}

export default Paginagtion
