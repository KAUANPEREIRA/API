import {Router} from 'express'
import {Request,Response} from 'express'
//criação de enpoints da api

const router = Router()
//estrura da api ping pong para teste ver se esta tudo ok
router.get('/ping',(req:Request,res:Response)=>{
    res.json({pong:true,})
})

router.get('/random',(req:Request,res:Response)=>{
    let n:number =Math.floor(Math.random()* 10+1)
    res.json({numero:n})
})

router.get('/nome/:nome',(req:Request,res:Response)=>{
    let nome:string = req.params.nome
    res.json({nome})

})

export default router;