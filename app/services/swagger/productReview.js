/**
 * @swagger
 * components:
 *   schemas:
 *     ProductReviews:
 *       type: object
 *       required: 
 *         - product_id
 *         - user_id
 *         - note
 *         - content
 *       properties:
 *         product_id:
 *           type: number
 *         user_id:
 *           type: number
 *         note:  
 *           type: number
 *         content:
 *           type: string
 *         created_at:
 *           type: string  
 *     GetProductReviews:
 *       type: object
 *       properties:
 *         product_id:
 *           type: number
 *         product:
 *           $ref: '#/components/schemas/Products'
 *         user_id:
 *           type: number
 *         user:
 *           $ref: '#/components/schemas/Users' 
 *         note:  
 *           type: number
 *         content:
 *           type: string
 *         created_at:
 *           type: string   
 */

/**
 * @swagger
 * /productReview/getAll:
 *  get:
 *      summary: Return the list of all the productReview
 *      tags: [ProductReviews]
 *      responses:
 *          200:
 *              description: The list of the productReview
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:  
 *                              $ref: '#/components/schemas/GetProductReviews'
 */


/**
 * @swagger
 * /productReview/getOne:
 *  post:
 *      summary: Get a productReview
 *      tags: [ProductReviews]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                        - product_id
 *                        - user_id
 *                      properties:
 *                        product_id:
 *                          type: number
 *                        user_id:
 *                          type: number  
 *      responses:
 *          200:
 *              description: The productReview description
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/GetProductReviews'

 *          400:
 *              description: The parameter must be type number
 *          404:
 *              description: The data was not found
 */

/**
 * @swagger
 * /productReview/getByProduct:
 *  post:
 *      summary: Get a productReview
 *      tags: [ProductReviews]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                        - product_id
 *                      properties:
 *                        product_id:
 *                          type: number
 *      responses:
 *          200:
 *              description: The productReview description
 *              content: 
 *                  application/json:
 *                      schema:
 *                        type: array  
 *                        items:
 *                          $ref: '#/components/schemas/GetProductReviews'
 *          400:
 *              description: The parameter must be type number
 *          404:
 *              description: The data was not found
 */

/**
 * @swagger
 * /productReview/createOne:   
 *  post:
 *      summary: Create a new productReview
 *      tags: [ProductReviews]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/ProductReviews'
 *      responses:
 *          200:
 *              description: The productReview was successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ProductReviews'
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /productReview/updateOne:
 *  put:
 *      summary: update a productReview by the id
 *      tags: [ProductReviews]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/ProductReviews'
 *      responses:
 *          200:
 *              description: The ProductReviewsroductReview was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ProductReviews'        
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /orderTypeAdress/deleteOne:
 *  delete:
 *      summary: delete a order type by the id
 *      tags: [Orders]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                        - product_id
 *                        - user_id
 *                      properties:
 *                        product_id:
 *                          type: number
 *                        user_id:
 *                          type: number
 *      responses:
 *          204:
 *              description: The data was deleted   
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */



