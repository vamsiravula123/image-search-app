const express=require('express')
const cors=require('cors')
const axios=require('axios')
const app=express()
app.use(cors({origin:'*'}))
//x7zKfjMc-MfUhyi9RZPBHYgSXRVIKEMO0vSRf8lZrI0
app.get("/",async (req,res)=>{
    const searchKeyword=req.query.searchKeyword
    const url=`https://api.unsplash.com/search/photos/?client_id=x7zKfjMc-MfUhyi9RZPBHYgSXRVIKEMO0vSRf8lZrI0&query=${searchKeyword}&per_page=20`
    console.log(url)
    
    const imagesUrls=[]
    try{
        const data=await axios.get(url)
        // const res=await data.json()
        // console.log()
        const results=data.data.results
        for(let i=0;i<results.length;i++){
            imagesUrls.push(results[i].urls.raw)
        }
        res.send({message:"sucessfull",data:imagesUrls})

    }catch(e){
        console.log("exception is ",e)
        res.send({message:"failed",data:[]})
    }

    
})

app.listen(5000,()=>{
    console.log("app is running on localhost 5000")
})