/**
 * @swagger
 * components:
 *   schemas:
 *     Adresses:
 *       type: object
 *       required:
 *         - entitled
 *         - number
 *         - street
 *         - postal_code
 *         - city
 *         - country
 *       properties:
 *         id: 
 *           type: number
 *         entitled: 
 *           type: string
 *         number:
 *           type: number
 *         number_complement:
 *           type: string
 *         street:
 *           type: string
 *         postal_code:
 *           type: number
 *         city:
 *           type: string
 *         country:
 *           type: string
 *         complement: 
 *           type: string
 *         active:
 *           type: boolean
 *         user_id:
 *           type: number
 *         created_at:
 *           type: string
  *     GetAdresses:
 *       type: object
 *       properties:
 *         id: 
 *           type: number
 *         entitled: 
 *           type: string
 *         number:
 *           type: number
 *         number_complement:
 *           type: string
 *         street:
 *           type: string
 *         postal_code:
 *           type: number
 *         city:
 *           type: string
 *         country:
 *           type: string
 *         complement: 
 *           type: string
 *         active:
 *           type: boolean
 *         user_id:
 *           type: number
 *         users:
 *           $ref: '#/components/schemas/Users'    
 *         created_at:
 *           type: string
 */

/**
 * @swagger
 * /adresses/getAll:
 *  get:
 *      summary: Return the list of all the adresses
 *      tags: [Adresses]
 *      responses:
 *          200:
 *              description: The list of the adresses
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:  
 *                              $ref: '#/components/schemas/GetAdresses'
 *          500:
 *              description: Some servor error
 */


/**
 * @swagger
 * /adresses/getOne/{id}:
 *  get:
 *      summary: Get a adress by id
 *      tags: [Adresses]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The adress's id
 *      responses:
 *          200:
 *              description: The adress description by id
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/GetAdresses'

 *          400:
 *              description: The parameter must be type number
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */


/**
 * @swagger
 * /adresses/getByUser/{id}:
 *  get:
 *      summary: Get a adress by user id
 *      tags: [Adresses]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The user's id
 *      responses:
 *          200:
 *              description: The list of user's adresses
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:  
 *                              $ref: '#/components/schemas/GetAdresses'

 *          400:
 *              description: The parameter must be type number
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /adresses/createOne:   
 *  post:
 *      summary: Create a new adress
 *      tags: [Adresses]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Adresses'
 *      responses:
 *          201:
 *              description: The adress was successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Adresses'
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /adresses/updateOnePut/{id}:
 *  put:
 *      summary: update a adress by the id
 *      tags: [Adresses]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The adress's id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Adresses'
 *      responses:
 *          200:
 *              description: The adress was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Adresses'        
 *          201:
 *              description: A new adress was created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Adresses' 
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /adresses/updateOnePatch/{id}:
 *  patch:
 *      summary: update a adress by the id
 *      tags: [Adresses]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The adress's id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Adresses'
 *      responses:
 *          200:
 *              description: The adress was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Adresses'        
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /adresses/deleteOne/{id}:
 *  delete:
 *      summary: delete an adress by the id
 *      tags: [Adresses]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The adress's id
 *      responses:
 *          204:
 *              description: The adress was deleted      
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */



