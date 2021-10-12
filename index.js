const express = require('express')
const getVideos = require('./services/notion')
const PORT = process.env.PORT || 5000

// Test Data
// ;(async () => {
//     const nVideos = await getVideos()
//     console.log(nVideos)
// })()

const app = express()

// Front end goes here:
app.use(express.static('public'))

app.get('/videos', async(req,res) => {
    const videos = await getVideos()
    res.json(videos)
})

app.listen(PORT, console.log(`Server started on port ${PORT}`));

