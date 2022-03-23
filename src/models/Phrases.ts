import {Model, DataTypes} from 'sequelize'
import {Request, Response} from 'express'
import {sequelize} from '../instances/mysql'
import dotenv from 'dotenv'


 // este aquivo serve para especificar oque meu banco esta preparado para receber 

 export interface PhrasesInterface extends Model {
     id:number;
     author:string;
     txt:string;
 }
//especificações da instacia
 export const Phrase = sequelize.define<PhrasesInterface>('Phrase',{
     id:{
         primaryKey:true,
         autoIncrement:true,
         type:DataTypes.INTEGER
     },
     author:{
         type:DataTypes.STRING
     },
     txt:{
         type:DataTypes.STRING
     }
 },{
     //nome da tabela
     tableName:'phrases',
     timestamps:false
 })