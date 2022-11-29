/**
 * @swagger
 * components:
 *   schemas:
 *     OrderTypeAdress:
 *       type: object
 *       required: 
 *         - order_id
 *         - adress_id
 *         - adress_type_id
 *       properties:
 *         order_id:
 *           type: number
 *         adress_id:
 *           type: number  
 *         adress_type_id:
 *           type: number    
 *     GetOrderTypeAdress:
 *       type: object
 *       properties:
 *         order_id:
 *           type: number
 *         order:
 *             $ref: '#/components/schemas/Orders'
 *         adress_id:
 *           type: number
 *         adress:
 *           $ref: '#/components/schemas/Adresses'    
 *         adress_type_id:
 *           type: number  
 *         adress_type:
 *           $ref: '#/components/schemas/AdressTypes' 
 */

/**
 * @swagger
 * /orderTypeAdress/getAll:
 *  get:
 *      summary: Return the list of all the orderTypeAdress
 *      tags: [OrderTypeAdress]
 *      responses:
 *          200:
 *              description: The list of the orderTypeAdress
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:  
 *                              $ref: '#/components/schemas/GetOrderTypeAdress'
 *          404:
 *              description: The data was not found
 */

/**
 * @swagger
 * /orderTypeAdress/getByOrder:
 *  get:
 *      summary: Return the list of all the orderTypeAdress by order's id
 *      tags: [OrderTypeAdress]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The order's id
 *      responses:
 *          200:
 *              description: The list of the orderTypeAdress
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:  
 *                              $ref: '#/components/schemas/GetOrderTypeAdress'
 *          404:
 *              description: The data was not found
 */

/**
 * @swagger
 * /orderTypeAdress/createOne:   
 *  post:
 *      summary: Create a new orderTypeAdress
 *      tags: [OrderTypeAdress]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/OrderTypeAdress'
 *      responses:
 *          200:
 *              description: The orderTypeAdress was successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/OrderTypeAdress'
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /orderTypeAdress/deleteOne:
 *  delete:
 *      summary: delete a order type 
 *      tags: [Orders]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                        - adress_id
 *                        - order_id
 *                        - adress_type_id  
 *                      properties:
 *                        adress_id:
 *                          type: number
 *                        order_id:
 *                          type: number
 *                        adress_type_id:
 *                          type: number   
 *      responses:
 *          204:
 *              description: The data and all the associations were deleted   
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */





