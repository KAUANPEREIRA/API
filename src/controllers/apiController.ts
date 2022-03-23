import {Request, Response} from 'express'
import{Phrase} from '../models/Phrases'

export const ping =(req:Request, res:Response)=>{
    res.json({pong:true})//retorno que vira no meu json

}

export const random = (req:Request, res:Response)=>{
    let numero:number = Math.floor(Math.random()* 10+1)
    res.json({numero:numero})
}

export const nome = (req:Request , res:Response)=>{
    let nome:string = req.params.nome
    res.json({nome:nome})

}