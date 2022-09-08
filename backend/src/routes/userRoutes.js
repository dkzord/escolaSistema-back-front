﻿import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir.
// router.get('/', userController.index); // Falha de segurança
// router.get('/:id', userController.show); // Lista usuário.

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> Lista todos os usuários. -> GET
create/strore -> Cria um novo usuário. -> POST
delete -> Apaga um usuário. -> DELETE
show -> Mostra um usuário.  -> GET
update -> Atualiza um usuário. -> PATCH ou PUT
*/
