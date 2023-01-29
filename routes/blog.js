const { addBlog, getAllBlog, getBlog } = require('../controller/blog')

const router=require('express').Router()


router.post('/addBlog',addBlog)
router.get('/getAllBlog',getAllBlog)
router.get('/getOnePost/:id',getBlog)

module.exports=router;