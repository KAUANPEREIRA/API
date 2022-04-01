import {Request, Response} from 'express'
import{Phrase} from '../models/Phrases'
import {Sequelize} from 'sequelize'

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

export const createFrases = async(req:Request, res:Response)=>{
    let {author,txt} = req.body
    let newPhrase=await Phrase.create({author,txt})//esse Frase esta no model para fazer a conexão correta
    res.json({id:newPhrase.id,author,txt})
}

export const listFrases = async(req:Request, res:Response)=>{
    let frasesListed = await Phrase.findAll()
    res.json({frasesListed})

}
 export const oneFrase = async(req:Request, res:Response)=>{
    let {id}=req.params
    let frase = await Phrase.findByPk(id)//PK primary key
    if(frase){
        res.json({frase})
    }else{
        res.json({error:'ops não foi possivel encontrar esta frase'})
    }

 }

 export const updateFrase = async(req:Request, res:Response)=>{
    let {id}= req.params
    let {author,txt} = req.body
    let frase = await Phrase.findByPk(id)
    if(frase){
        frase.author= author
        frase.txt = txt
        res.json({frase})
        await frase.save()

    }else{
        res.json({error:'ops fase não encontrada'})
    }
 }

 export const deleteFrase = async(req:Request, res:Response)=>{
     let {id} = req.params
     let frase= await Phrase.findByPk(id)
     if(frase){
       await frase.destroy()
       res.json({message:'frase deleta com sucesso'})
     }else{
         res.json({error:'Não foi possivel localizar a Frase!!'})
     }
 }

 export const getFrase = async(req:Request, res:Response)=>{
     let {id}= req.params
     let frase = await Phrase.findByPk(id)

 }



