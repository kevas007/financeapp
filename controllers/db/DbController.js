/**
 * @design by milon27
 */
const DbModel = require('../../models/db/DbModel')
const Response = require('../../models/Response')


const DbController = {
    /**
     * @description  
     * @param { id,email, name, pass}
     * @response {error(boolean), message(String), response(object:USER)}
     */
    create_users_table: async (req, res) => {
        try {
            new DbModel().create_users_table((err, results) => {
                if (err) {
                    let response = new Response(true, err.message, err);
                    res.send(response);
                } else {
                    res.status(200).json(new Response(false, "user table created successfully", {}))
                }
            })
        } catch (e) {
            let response = new Response(true, e.message, e);
            res.send(response);
        }
    },//end create user.
    /**
     * @description  
     * @param { id,title,content}
     * @response {error(boolean), message(String), response(object:USER)}
     */
    create_expenses_table: async (req, res) => {
        try {
            new DbModel().create_expenses_table((err, results) => {
                if (err) {
                    let response = new Response(true, err.message, err);
                    res.send(response);
                } else {
                    res.status(200).json(new Response(false, "data table created successfully", {}))
                }
            })
        } catch (e) {
            let response = new Response(true, e.message, e);
            res.send(response);
        }
    },//end expenses user.
    /**
  * @description  
  * @param { id,title,content}
  * @response {error(boolean), message(String), response(object:USER)}
  */
    create_category_table: async (req, res) => {
        try {
            new DbModel().create_category_table((err, results) => {
                if (err) {
                    let response = new Response(true, err.message, err);
                    res.send(response);
                } else {
                    res.status(200).json(new Response(false, "data table created successfully", {}))
                }
            })
        } catch (e) {
            let response = new Response(true, e.message, e);
            res.send(response);
        }
    },//end create category .
    /**
   * @description  
   * @param { id,user_id,expense_id}
   * @response {error(boolean), message(String), response(object:USER)}
   */
    create_users_expenses_table: async (req, res) => {
        try {
            new DbModel().create_users_expenses_table((err, results) => {
                if (err) {
                    let response = new Response(true, err.message, err);
                    res.send(response);
                } else {
                    res.status(200).json(new Response(false, "data table created successfully", {}))
                }
            })
        } catch (e) {
            let response = new Response(true, e.message, e);
            res.send(response);
        }
    },//end create users_expenses .
    /**
  * @description  
  * @param { id,expense_id,category_id}
  * @response {error(boolean), message(String), response(object:USER)}
  */
    create_expenses_categories_table: async (req, res) => {
        try {
            new DbModel().create_expenses_categories_table((err, results) => {
                if (err) {
                    let response = new Response(true, err.message, err);
                    res.send(response);
                } else {
                    res.status(200).json(new Response(false, "data table created successfully", {}))
                }
            })
        } catch (e) {
            let response = new Response(true, e.message, e);
            res.send(response);
        }
    },//end create users_expenses .


}

module.exports = DbController