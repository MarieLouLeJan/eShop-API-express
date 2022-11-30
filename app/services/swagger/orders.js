/**
 * @swagger
 * components:
 *   schemas:
 *     Orders:
 *       type: object
 *       required:
 *         - totalHT
 *         - tax
 *         - totalTTC
 *         - quantity
 *         - user_id
 *         - order_state_id
 *       properties:
 *         id: 
 *           type: number
 *         totalHT:
 *           type: number
 *         tax:
 *           type: number
 *         totalTTC:
 *           type: number
 *         quantity:
 *           type: number
 *         user_id:
 *           type: number
 *         order_state_id:
 *           type: number
 *         created_at:
 *           type: string
 *     GetOrders:
 *       type: object
 *       properties:
 *         order: 
 *           type: object
 *           properties:
 *             id: 
 *               type: number
 *             totalHT:
 *               type: number
 *             tax:
 *               type: number
 *             totalTTC:
 *               type: number
 *             quantity:
 *               type: number
 *             user_id:
 *               type: number
 *             users:
 *               $ref: '#/components/schemas/Users'
 *             order_state_id:
 *               type: number
 *             order_states:
 *               $ref: '#/components/schemas/OrderStates'
 *             created_at:
 *               type: string 
 *         products:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/GetOrderProduct'
 *         adresses:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/GetOrderTypeAdress' 
 */

/**
 * @swagger
 * /orders/getAll:
 *  get:
 *      summary: Return the list of all the orders
 *      tags: [Orders]
 *      responses:
 *          200:
 *              description: The list of the orders
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:  
 *                              $ref: '#/components/schemas/GetOrders'
 */


/**
 * @swagger
 * /orders/getOne/{id}:
 *  get:
 *      summary: Get a orders by id
 *      tags: [Orders]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The orders's id
 *      responses:
 *          200:
 *              description: The orders description
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/GetOrders'

 *          400:
 *              description: The parameter must be type number
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /orders/getByUser/{id}:
 *  get:
 *      summary: Get a orders by user id
 *      tags: [Orders]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The user's id
 *      responses:
 *          200:
 *              description: The orders description
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/GetOrders'

 *          400:
 *              description: The parameter must be type number
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /orders/createOne:   
 *  post:
 *      summary: Create a new order
 *      tags: [Orders]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Orders'
 *      responses:
 *          201:
 *              description: The order was successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Orders'
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /orders/updateOnePut/{id}:
 *  put:
 *      summary: update a category by the id
 *      tags: [Orders]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The order's id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Orders'
 *      responses:
 *          200:
 *              description: The order was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Orders'       
 *          201:
 *              description: A new order was created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Orders'  
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /orders/updateOnePatch/{id}:
 *  patch:
 *      summary: update a category by the id
 *      tags: [Orders]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The order's id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Orders'
 *      responses:
 *          200:
 *              description: The order was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Orders' 
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /orders/deleteOne/{id}:
 *  delete:
 *      summary: delete a order type by the id
 *      tags: [Orders]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The order's id
 *      responses:
 *          204:
 *              description: The data and all the associations were deleted   
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */