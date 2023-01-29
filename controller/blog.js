const blogModel = require('../models/blog')

exports.addBlog = async (req, res) => {
    const { title, description } = req.body.formData
    try {
        if (!req.body) return res.status(400).json({ message: "plese fill all fields" })
        const blog = await new blogModel({ title, description }).save()
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json(error)
    }
}
exports.getAllBlog = async (req, res) => {
    try {
        const allBlogs = await blogModel.find()
        res.status(200).json(allBlogs)

    } catch (error) {
        res.status(500).json(error)

    }

}
exports.getBlog = async (req, res) => {
    const { id } = req.params
    try {
        const blog = await blogModel.findById(id)
        res.status(200).json(blog)

    } catch (error) {
        res.status(500).json(error)

    }
}