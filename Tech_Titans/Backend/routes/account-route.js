const express=require('express');
const router=express.Router();
const {addBank}  = require('../controllers/addBank-controller')
const isAuthenticatedUser=require('../Middleware/authMiddleware');
const { addNewBank, deleteBank ,getBank} = require('../controllers/user-controller');


router.route('/addBank').post(isAuthenticatedUser,addNewBank);
router.route('/deleteBank').patch(isAuthenticatedUser,deleteBank);
router.route('/bank/:id').get(isAuthenticatedUser,getBank);
// for now
router.route('/admin/createAccount').post(addBank)

module.exports=router;