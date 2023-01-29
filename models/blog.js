const mongoose=require('mongoose')

const blogSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,'enter the title']
    },
    description:{
        type:String,
        required:[true,'enter the description']
    }
})

module.exports=mongoose.model('blog',blogSchema)

