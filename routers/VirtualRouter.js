//criando o  roteador e impostando o express
const express = require("express");
const AdmController = require("../controller/AdmController");

//impostando o controller
const VirtualController= require('../controller/VirtualController');

//criando roteador e exportando o roteador
const router=express.Router();

//definindo rotas
router.get('/',VirtualController.home);
router.get('/ModeloDePaginas',VirtualController.ModeloPaginas);
router.get('/beta/planobasico',VirtualController.PlanoBasico);

module.exports= router