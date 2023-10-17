// Пишем все через requier можно все прописать через import но для этого нужны дополнительно настройки
// через type module

import express from 'express'
import dotenv from 'dotenv'
const app = express()
const port = 5000
async function start(){
    try{
        app.listen(port, ()=> {
            console.log(`server starter om port ${port}` || 3000)
        })
    } catch(e){
        console.log(e)
    }
}

start()