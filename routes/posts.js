const express = require('express')
const router = express.Router()

router.get('/posts', (req, res) => {
    res.json([{
        title: 'My First Post',
        content: `In my experience, there is no such thing as luck. The Force is strong with this one. I have you now. You're all clear, kid. Let's blow this thing and go home! The Force is strong with this one. I have you now. She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander.  There'll be no one to stop us this time! What good is a reward if you ain't around to use it? Besides, attacking that battle station ain't my idea of courage. It's more like... suicide. I find your lack of faith disturbing. I have traced the Rebel spies to her. Now she is my only link to finding their secret base. Red Five standing by. Red Five standing by.`,
        author: 'Laura de Lucca'
    },
    {
        title: 'My Second Post',
        content: `I'm nobody's taxi service; I'm not gonna be there to catch you every time you feel like jumping out of a spaceship. Heh-haa! Super squeaky bum time! I'm nobody's taxi service; I'm not gonna be there to catch you every time you feel like jumping out of a spaceship. It's art! A statement on modern society, 'Oh Ain't Modern Society Awful?'! No, I'll fix it. I'm good at fixing rot. Call me the Rotmeister. No, I'm the Doctor. Don't call me the Rotmeister. Did I mention we have comfy chairs`,
        author: 'Laura de Lucca'
    }])
})

module.exports = router