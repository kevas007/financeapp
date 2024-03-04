const DB_Define = require("../../utils/DB_Define");
const Model = require("../Model");

class DbModel extends Model {
    //table#1: users
    create_users_table(callback) {
        const users = DB_Define.USERS_TABLE
        let sql = `CREATE TABLE ${users}(
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name varchar(200),
            email varchar(200) UNIQUE,
            pass varchar(200),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`;
        this.db.query(sql, callback);
    }
    create_expenses_table(callback) {
        const expenses = DB_Define.EXPENSES_TABLE
        let sql = `CREATE TABLE ${expenses}(
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            title varchar(200),
            content text(200),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`;
        this.db.query(sql, callback);
    }
    create_category_table(callback) {
        const categories = DB_Define.CATEGORY_TABLE
        let sql = `CREATE TABLE ${categories}(
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            title varchar(200),
            content text(200),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`;
        this.db.query(sql, callback);
    }
    create_users_expenses_table(callback) {
        const users_expenses = DB_Define.USERS_EXPENSES_TABLE
        let sql = `CREATE TABLE ${users_expenses}(
            user_id INT UNSIGNED,
            expense_id INT UNSIGNED,
            PRIMARY KEY (user_id, expense_id),
            FOREIGN KEY (user_id) REFERENCES users(id),
            FOREIGN KEY (expense_id) REFERENCES expenses(id),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`;
        this.db.query(sql, callback);
    }
    create_expenses_categories_table(callback) {
        const expenses_categories = DB_Define.EXPENSES_CATEGORY_TABLE
        let sql = `CREATE TABLE ${expenses_categories}(
            expense_id INT UNSIGNED,
            category_id INT UNSIGNED,
            PRIMARY KEY (expense_id, category_id),
            FOREIGN KEY (expense_id) REFERENCES expenses(id),
            FOREIGN KEY (category_id) REFERENCES categories(id),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`;
        this.db.query(sql, callback);
    }

}
module.exports = DbModel;