import {Router} from 'express'
import {Request,Response} from 'express'
import * as apiController from '../controllers/apiController' // irei consumir as api dessa importação
//criação de enpoints da api

const router = Router()
//estrura da api ping pong para teste ver se esta tudo ok

router.get('/ping', apiController.ping)//esse nome em amarelo e a função que estou utilizando no meu controller
router.get('/random',apiController.random)
router.get('/nome/:nome', apiController.nome)// /:para pegar o parametro passado na url
router.post('/frases', apiController.createFrases)
router.get('/frases',apiController.listFrases)
router.get('/frases/:id', apiController.oneFrase)//:parametro da url
router.put('/frase/:id', apiController.updateFrase)
router.delete('/frase/:id',apiController.deleteFrase)
router.get('/frasealeatoria/:id', apiController.getFrase)


export default router;