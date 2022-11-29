/**
 * @swagger
 * components:
 *   schemas:
 *     AdressTypes:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id: 
 *           type: number 
 *         title: 
 *           type: string
 *         active:
 *            type: boolean
 *         created_at:
 *           type: string
 * 
 */

/**
 * @swagger
 * /adressTypes/getAll:
 *  get:
 *      summary: Return the list of all the adresse types
 *      tags: [AdressTypes]
 *      responses:
 *          200:
 *              description: The list of the adresse types
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:  
 *                              $ref: '#/components/schemas/AdressTypes'
 */

/**
 * @swagger
 * /adressTypes/getOne/{id}:
 *  get:
 *      summary: Get a adress type by id
 *      tags: [AdressTypes]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The adress type id
 *      responses:
 *          200:
 *              description: The adress type description by id
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/AdressTypes'

 *          400:
 *              description: The parameter must be type number
 *          404:
 *              description: The data was not found
 */

/**
 * @swagger
 * /adressTypes/createOne:   
 *  post:
 *      summary: Create a new adress type
 *      tags: [AdressTypes]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/AdressTypes'
 *      responses:
 *          200:
 *              description: The adress type was successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/AdressTypes'
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /adressTypes/updateOne/{id}:
 *  put:
 *      summary: update a adress type by the id
 *      tags: [AdressTypes]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The adress type id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/AdressTypes'
 *      responses:
 *          200:
 *              description: The adress type was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/AdressTypes'        
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /adressTypes/deleteOne/{id}:
 *  delete:
 *      summary: delete an adress type by the id
 *      tags: [AdressTypes]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The adressType's id
 *      responses:
 *          204:
 *              description: The data was deleted      
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */
