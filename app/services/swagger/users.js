/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - firstname
 *         - lastname
 *         - email
 *         - password
 *         - role_id
 *       properties:
 *         firstname:
 *           type: string
 *         lastname:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         role_id:
 *           type: number
 *         active:
 *           type: boolean
 *         created_at:
 *           type: string
 *     GetUsers:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *         lastname:
 *           type: string
 *         email:
 *           type: string
 *         role_id:
 *           type: number
 *         roles:
 *            $ref: '#/components/schemas/Roles'
 *         adresses:
 *           type: array
 *           items: 
 *             $ref: '#/components/schemas/Adresses'   
 *         active:
 *           type: boolean
 *         created_at:
 *           type: string 
 */

/**
 * @swagger
 * /users/getAll:
 *  get:
 *      summary: Return the list of all the users
 *      tags: [Users]
 *      responses:
 *          200:
 *              description: The list of the users
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:  
 *                              $ref: '#/components/schemas/GetUsers'
 *          500:
 *              description: Some servor error
 */


/**
 * @swagger
 * /users/getOne/{id}:
 *  get:
 *      summary: Get a user by id
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The user's id
 *      responses:
 *          200:
 *              description: The user description
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/GetUsers'
 *          400:
 *              description: The parameter must be type number
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /users/login:
 *  post:
 *      summary: Return the list of all the users
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                        - email
 *                        - password
 *                      properties:
 *                        email:
 *                          type: string
 *                        password:
 *                          type: string   
 *      responses:
 *          200:
 *              description: The list of the users
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:  
 *                              $ref: '#/components/schemas/GetUsers'
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /users/createOne:   
 *  post:
 *      summary: Create a new user
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *          201:
 *              description: The user was successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Users'
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /users/updateOnePut/{id}:
 *  put:
 *      summary: update a user by the id
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The user's id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *          200:
 *              description: The user was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Users'  
 *          201:
 *              description: A new user was created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Users'        
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /users/updateOnePatch/{id}:
 *  patch:
 *      summary: update a user by the id
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The user's id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *          200:
 *              description: The user was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Users'     
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /users/deleteOne/{id}:
 *  delete:
 *      summary: delete a user type by the id
 *      tags: [User]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The user's id
 *      responses:
 *          204:
 *              description: The data was deleted      
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */


