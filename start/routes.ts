/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ClasseController from '#controllers/classes_controller';
import JogadorController from '#controllers/jogadors_controller';
import PersonagemPodersController from '#controllers/personagem_poders_controller';
import PersonagemController from '#controllers/personagems_controller';
import PoderController from '#controllers/poders_controller';
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/classes', ClasseController).apiOnly();
router.resource('/jogadores', JogadorController).apiOnly();
router.resource('/personagem-poder', PersonagemPodersController).apiOnly();
router.resource('/personagens', PersonagemController).apiOnly();
router.resource('/poderes', PoderController).apiOnly();