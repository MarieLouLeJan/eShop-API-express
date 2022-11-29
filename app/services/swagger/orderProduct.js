/**
 * @swagger
 * components:
 *   schemas:
 *     OrderProduct:
 *       type: object
 *       required:
 *         - product_id
 *         - order_id
 *         - quantity
 *         - priceHT
 *         - TVA
 *       properties:
 *         product_id:
 *           type: number   
 *         order_id:
 *           type: number
 *         quantity:
 *           type: number 
 *         priceHT:
 *           type: number 
 *         TVA:
 *           type: string    
 *     GetOrderProduct:
 *       type: object
 *       properties:
 *         product_id:
 *           type: number
 *         product:
 *           $ref: '#/components/schemas/Products'
 *         order_id:
 *           type: number
 *         quantity:
 *           type: number 
 *         priceHT:
 *           type: number 
 *         TVA:
 *           type: string
 */

/**
 * @swagger
 * /orderProduct/getAll:
 *  get:
 *      summary: Return the list of all the orderProduct
 *      tags: [OrderProduct]
 *      responses:
 *          200:
 *              description: The list of the orderProduct
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:  
 *                              $ref: '#/components/schemas/GetOrderProduct'
 */

/**
 * @swagger
 * /orderProduct/getByOrder/{id}:
 *  get:
 *      summary: Return the list of all the orderProduct by order
 *      tags: [OrderProduct]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The order's id
 *      responses:
 *          200:
 *              description: The list of the orderProduct
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:  
 *                              $ref: '#/components/schemas/GetOrderProduct'
 */



/**
 * @swagger
 * /orderProduct/getOne:
 *  post:
 *      summary: Get a orderProduct
 *      tags: [OrderProduct]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                        - product_id
 *                        - order_id
 *                      properties:
 *                        product_id:
 *                          type: number
 *                        order_id:
 *                          type: number   
 *      responses:
 *          200:
 *              description: The orderProduct description
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/GetOrderProduct'
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /orderProduct/createOne:   
 *  post:
 *      summary: Create a new orderProduct
 *      tags: [OrderProduct]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/OrderProduct'
 *      responses:
 *          200:
 *              description: The orderProduct was successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/OrderProduct'
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /orderProduct/updateOne:
 *  put:
 *      summary: update a category
 *      tags: [OrderProduct]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                        - product_id
 *                        - order_id
 *                      properties:
 *                        product_id:
 *                          type: number
 *                        order_id:
 *                          type: number
 *                        quantity:
 *                          type: number
 *                        TVA:
 *                          type: string   
 *      responses:
 *          201:
 *              description: The orderProduct was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/OrderProduct'        
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /orderProduct/deleteOne/{id}:
 *  delete:
 *      summary: delete a category type by the id
 *      tags: [OrderProduct]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                        - product_id
 *                        - order_id
 *                      properties:
 *                        product_id:
 *                          type: number
 *                        order_id:
 *                          type: number   
 *      responses:
 *          204:
 *              description: The data was deleted      
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */
