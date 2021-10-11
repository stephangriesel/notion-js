const dotenv = require("dotenv").config()
const {Client} = require("@notionhq/client")

//init client
const notion = new Client({
    auth:process.env.NOTION_TOKEN
})

// const listDatabases = async () => {
//     const res = await notion.databases.list()
//     console.log("list database response:", res)
// }
// listDatabases()

const database_id = process.env.NOTION_DATABASE_ID

const getVideos = async () => {

    const payload = {
        path: `databases/${database_id}/query`,
        method: 'POST'
    }

    const {results} = await notion.request(payload)
    console.log("get results", results)

    const videos = results.map(page => {
        console.log("get pages:", page.properties.Description.rich_text[0].text.content)
    })


}

getVideos()