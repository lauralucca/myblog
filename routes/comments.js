const express = require('express')
const router = express.Router()

router.get('/comments/:postid', (req, res) => {
    res.json([{
        content: `I like this post.`,
        author: 'Anonymous'
    },
    {
        content: `I dislike this post`,
        author: 'Anonymous'
    }])
})

module.exports = router