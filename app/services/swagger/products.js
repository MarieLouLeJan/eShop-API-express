/**
 * @swagger
 * components:
 *   schemas:
 *     Products:
 *       type: object
 *       required: 
 *         - ref
 *         - title
 *         - description
 *         - image
 *         - priceHT
 *         - stock
 *         - category_id
 *         - tva_id
 *       properties:
 *         id: 
 *           type: number 
 *           description: The auto generated id of the product
 *         ref:
 *           type: string
 *         title: 
 *           type: string
 *         description:
 *           type: string
 *         image: 
 *           type: string
 *         priceHT:
 *           type: number
 *         stock:
 *           type: number
 *         active:
 *           type: boolean
 *         category_id:
 *           type: number
 *         tva_id:
 *           type: number
 *         created_at:
 *           type: string  
 *     GetProducts:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         ref:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         image:
 *           type: string
 *         priceHT:
 *           type: number
 *         stock:
 *           type: number
 *         active:
 *           type: boolean
 *         created_at:
 *           type: string
 *         category_id:
 *           type: number
 *         tva_id:
 *           type: number
 *         tva:
 *           $ref: '#/components/schemas/TVA'
 *         categories:
 *           $ref: '#/components/schemas/Categories'
 *         productReviews:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ProductReviews'
 */

/**
 * @swagger
 * /products/getAll:
 *  get:
 *      summary: Return the list of all the products
 *      tags: [Products]
 *      responses:
 *          200:
 *              description: The list of the products
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:  
 *                              $ref: '#/components/schemas/GetProducts'
 */


/**
 * @swagger
 * /products/getOne/{id}:
 *  get:
 *      summary: Get a product by id
 *      tags: [Products]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The product's id
 *      responses:
 *          200:
 *              description: The product description
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/GetProducts'
 *          400:
 *              description: The parameter must be type number
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /products/createOne:   
 *  post:
 *      summary: Create a new product
 *      tags: [Products]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Products'
 *      responses:
 *          201:
 *              description: The product was successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Products'
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /products/updateOnePut/{id}:
 *  put:
 *      summary: update a product by the id
 *      tags: [Products]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The product's id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Products'
 *      responses:
 *          200:
 *              description: The product was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Products' 
 *          201:
 *              description: A new product was created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Products'       
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /products/updateOnePatch/{id}:
 *  patch:
 *      summary: update a product by the id
 *      tags: [Products]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The product's id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Products'
 *      responses:
 *          200:
 *              description: The product was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Products'      
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /products/deleteOne/{id}:
 *  delete:
 *      summary: delete a product type by the id
 *      tags: [Products]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The product's id
 *      responses:
 *          204:
 *              description: The data was deleted      
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */