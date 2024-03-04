/**
 * @design by milon27
 */
const express = require('express')
const DbController = require('../../controllers/db/DbController')
const router = express.Router()

/**
 * @description 1. create users table
 * @endpoint http://localhost:2727/db/create-table/users
 * @example http://localhost:2727/db/create-table/users
 */
router.get('/create-table/users', DbController.create_users_table)

/**
 * @description 1. create  expenses table
 * @endpoint http://localhost:2727/db/create-table/expenses
 * @example http://localhost:2727/db/create-table/expenses
 */
router.get('/create-table/expenses', DbController.create_expenses_table)

/**
 * @description 1. create data category
 * @endpoint http://localhost:2727/db/create-table/categories
 * @example http://localhost:2727/db/create-table/categories
 */
router.get('/create-table/categories', DbController.create_category_table)

/**
 * @description 1. create data users_expenses
 * @endpoint http://localhost:2727/db/create-table/users_expenses
 * @example http://localhost:2727/db/create-table/users_expenses
 */
router.get('/create-table/users_expenses', DbController.create_users_expenses_table)

/**
 * @description 1. create data expenses_categories
 * @endpoint http://localhost:2727/db/create-table/expenses_categories
 * @example http://localhost:2727/db/create-table/expenses_categories
 */
router.get('/create-table/expenses_categories', DbController.create_expenses_categories_table)



module.exports = router