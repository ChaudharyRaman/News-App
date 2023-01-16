const { default: axios } = require("axios")

module.exports.handler = async(event,context)=>{

    try {

        const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=`+process.env.VITE_NEWS_API_KEY)

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}