/**
 * @swagger
 * components:
 *   schemas:
 *     Roles:
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
 * /roles/getAll:
 *  get:
 *      summary: Return the list of all the roles
 *      tags: [Roles]
 *      responses:
 *          200:
 *              description: The list of the roles
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:  
 *                              $ref: '#/components/schemas/Roles'
 *          500:
 *              description: Some servor error
 */


/**
 * @swagger
 * /roles/getOne/{id}:
 *  get:
 *      summary: Get a role by id
 *      tags: [Roles]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The role's id
 *      responses:
 *          200:
 *              description: The role description
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Roles'

 *          400:
 *              description: The parameter must be type number
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /roles/createOne:   
 *  post:
 *      summary: Create a new role
 *      tags: [Roles]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Roles'
 *      responses:
 *          201:
 *              description: The role was successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Roles'
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /roles/updateOnePut/{id}:
 *  put:
 *      summary: update a category by the id
 *      tags: [Roles]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The role's id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Roles'
 *      responses:
 *          200:
 *              description: The role was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Roles' 
 *          201:
 *              description: A new role was created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Roles'       
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /roles/updateOnePatch/{id}:
 *  patch:
 *      summary: update a category by the id
 *      tags: [Roles]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The role's id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Roles'
 *      responses:
 *          200:
 *              description: The role was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Roles'     
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */

/**
 * @swagger
 * /roles/deleteOne/{id}:
 *  delete:
 *      summary: delete a role type by the id
 *      tags: [Roles]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The role's id
 *      responses:
 *          204:
 *              description: The data was deleted      
 *          404:
 *              description: The data was not found
 *          500:
 *              description: Some servor error
 */