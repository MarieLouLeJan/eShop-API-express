/**
 * @swagger
 * components:
 *   schemas:
 *     Categories:
 *       type: object
 *       required: 
 *         - title
 *       properties:
 *         id: 
 *           type: number 
 *           description: The auto generated id of the category
 *         title: 
 *           type: string
 *           description: the category's title
 *         active:
 *           type: boolean
 *           description: is the category active or not
 *         created_at:
 *           type: string  
 * 
 *     GetCategories:
 *       type: object
 *       properties:
 *         id: 
 *           type: number 
 *         title: 
 *           type: string
 *           description: the category's title
 *         active:
 *           type: boolean
 *           description: is the category active or not
 *         products:
 *           $ref: '#/components/schemas/GetProducts'
 */

/**
 * @swagger
 * /categories/getAll:
 *  get:
 *      summary: Return the list of all the categories
 *      tags: [Categories]
 *      responses:
 *          200:
 *              description: The list of the categories
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:  
 *                              $ref: '#/components/schemas/GetCategories'
 *          500:
 *              description: Some servor error
 */


/**
 * @swagger
 * /categories/getOne/{id}:
 *  get:
 *      summary: Get a category by id
 *      tags: [Categories]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The category's id
 *      responses:
 *          200:
 *              description: The category description by id & the product of it
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/GetCategories'
 *          400:
 *              description: The parameter must be type number
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /categories/createOne:   
 *  post:
 *      summary: Create a new category
 *      tags: [Categories]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Categories'
 *      responses:
 *          201:
 *              description: The category was successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Categories'
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /categories/updateOnePut/{id}:
 *  put:
 *      summary: update a category by the id
 *      tags: [Categories]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The category's id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Categories'
 *      responses:
 *          200:
 *              description: The category was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Categories' 
 *          201:
 *              description: The new category was created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Categories'          
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /categories/deleteOne/{id}:
 *  delete:
 *      summary: delete a category type by the id
 *      tags: [Categories]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The category's id
 *      responses:
 *          204:
 *              description: The data was deleted      
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */



