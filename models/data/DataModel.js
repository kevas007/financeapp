const DB_Define = require("../../utils/DB_Define");
const Model = require("../Model");

class DataModel extends Model {

    #table_name = DB_Define.USERS_TABLE

    /**
     * @description write your own code here.
     */

   users = DB_Define.USERS_TABLE
   expenses = DB_Define.EXPENSES_TABLE
   category= DB_Define.CATEGORIES_TABLE
   users_expense =  DB_Define.USERS_EXPENSES_TABLE
   expenses_category = DB_Define.EXPENSES_CATEGORY_TABLE

}

module.exports = DataModel