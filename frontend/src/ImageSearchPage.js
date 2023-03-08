// html js -->jsx (react )

import React, { useState } from 'react'
import axios from 'axios'

import './ImageSearchPage.css'

const ImageSearchPage = () => {

    const [keyword,setKeyWord]=useState('')
    const [imageUrls,setIamgeUrls]=useState([])
    const [error,setError]=useState(false)

    const searchHandler=async ()=>{
        setError(false)
        setIamgeUrls([])
        if(keyword.length===0){
            setError(true)
            return
        }
        const data=await axios.get(`http://localhost:5000/?searchKeyword=${keyword}`)
        console.log('data is ',data.data.data)
        setIamgeUrls(data.data.data)
        // setKeyWord('')


        


    }

  return (
    <div className='main'>
        <div className='inputDiv'>
            <input placeholder='Please Enter the Search KeyWord' value={keyword} onChange={(e)=>setKeyWord(e.target.value)} onKeyDown={(e)=>e.key==='Enter'?searchHandler():()=>{}}></input>
            <button onClick={searchHandler}>Search</button>
        </div>
        <p style={{color:'red',textAlign:'center'}}>{error?"please enter search keyword":""}</p>

        <div className='images'>
            {
                imageUrls.map((data)=><img  src={data}></img>)
            }
        </div>
    </div>
  )
}

export default ImageSearchPage