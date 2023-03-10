/**
 * @swagger
 * components:
 *   schemas:
 *     OrderStates:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id: 
 *           type: number 
 *         title: 
 *           type: string
 *         active:
 *           type: boolean
 *         created_at:
 *           type: string  
 */

/**
 * @swagger
 * /orderStates/getAll:
 *  get:
 *      summary: Return the list of all the orderStates
 *      tags: [OrderStates]
 *      responses:
 *          200:
 *              description: The list of the orderStates
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:  
 *                              $ref: '#/components/schemas/OrderStates'
 *          500:
 *              description: Some servor error
 */


/**
 * @swagger
 * /orderStates/getOne/{id}:
 *  get:
 *      summary: Get a orderState by id
 *      tags: [OrderStates]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The orderState's id
 *      responses:
 *          200:
 *              description: The orderState description
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Orderstates'

 *          400:
 *              description: The parameter must be type number
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /orderStates/createOne:   
 *  post:
 *      summary: Create a new orderState
 *      tags: [OrderStates]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Orderstates'
 *      responses:
 *          201:
 *              description: The orderState was successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Orderstates'
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /orderStates/updateOnePatch/{id}:
 *  patch:
 *      summary: update a category by the id
 *      tags: [OrderStates]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The orderState's id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Orderstates'
 *      responses:
 *          200:
 *              description: The orderState was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Orderstates'        
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /orderStates/updateOnePut/{id}:
 *  put:
 *      summary: update a category by the id
 *      tags: [OrderStates]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The orderState's id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Orderstates'
 *      responses:
 *          200:
 *              description: The orderState was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Orderstates'   
 *          201:
 *              description: A new orderState was created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Orderstates'        
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /orderState/deleteOne/{id}:
 *  delete:
 *      summary: delete a orderState type by the id
 *      tags: [OrderStates]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The orderState's id
 *      responses:
 *          204:
 *              description: The data was deleted      
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */