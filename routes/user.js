const express = require('express')
const router = express.Router();
const userController = require("../controller/auth");
const { checkToken } = require('../middlewares/auth');


/**
 * @swagger
 *  /sign-up:
 *      post:
 *          tags:
 *              -   Auth
 *          description: Signup
 *          parameters:
 *              -   in: body
 *                  name : request body
 *                  description: All fields are required.
 *                  type: object
 *                  schema:
 *                      properties:
 *                          name:
 *                              type: string
 *                              required: true,
 *                              example: "jaz"
 *                          email:
 *                              type: string
 *                              required: true,
 *                              example: "test@mailinator.com"
 *                          password:
 *                              type: string,
 *                              required: true,
 *                              example: "123456"                   
 *                          role:
 *                              type: integer,
 *                              required: true,
 *                              example: "2"  
 *                                         
 *          responses:
 *              200 :
 *                  description: login successfull
 *
 *
 */
 router.post('/sign-up', userController.signUp);


/**
 * @swagger
 *  /login:
 *      post:
 *          tags:
 *              -   Auth
 *          description: Login
 *          parameters:
 *              -   in: body
 *                  name : request body
 *                  description: All fields are required.
 *                  type: object
 *                  schema:
 *                      properties:
 *                          email:
 *                              type: string
 *                              required: true,
 *                              example: "test@mailinator.com"
 *                          password:
 *                              type: string,
 *                              required: true,
 *                              example: "123456"                   
 *          responses:
 *              200 :
 *                  description: login successfull
 *
 *
 */
router.post('/login', userController.doLogin)

/**
  * @swagger
  *  /admin-seed:
  *      get:
  *          
  *          tags:
  *              -   Seed's Admin
  *          description: Admin seed                           
  *          responses:
  *              200 :
  *                  description: Admin seeded
  *
  *
  */
 router.get('/admin-seed', userController.adminSeed)

 module.exports = router;