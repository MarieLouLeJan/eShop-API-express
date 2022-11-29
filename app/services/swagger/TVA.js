/**
 * @swagger
 * components:
 *   schemas:
 *     TVA:
 *       type: object
 *       required:
 *         - title
 *         - value
 *       properties:
 *         id: 
 *           type: number 
 *           description: The auto generated id of the TVA
 *         title: 
 *           type: string
 *           description: The % form of TVA
 *         value:
 *           type: number
 *           description: The multiplicator 
 *         created_at:
 *           type: string  
 */

/**
 * @swagger
 * /TVA/getAll:
 *  get:
 *      summary: Return the list of all the TVA
 *      tags: [TVA]
 *      responses:
 *          200:
 *              description: The list of the TVA
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:  
 *                              $ref: '#/components/schemas/TVA'
 */


/**
 * @swagger
 * /TVA/getOne/{id}:
 *  get:
 *      summary: Get a TVA by id
 *      tags: [TVA]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The TVA's id
 *      responses:
 *          200:
 *              description: The TVA description
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/TVA'

 *          400:
 *              description: The parameter must be type number
 *          404:
 *              description: The data was not found
 */

/**
 * @swagger
 * /TVA/createOne:   
 *  post:
 *      summary: Create a new TVA
 *      tags: [TVA]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/TVA'
 *      responses:
 *          200:
 *              description: The TVA was successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/TVA'
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /TVA/updateOne/{id}:
 *  put:
 *      summary: update a TVA by the id
 *      tags: [TVA]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The TVA's id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/TVA'
 *      responses:
 *          200:
 *              description: The TVA was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/TVA'        
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /TVA/deleteOne/{id}:
 *  delete:
 *      summary: delete a TVA type by the id
 *      tags: [TVA]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The TVA's id
 *      responses:
 *          204:
 *              description: The data was deleted      
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

