const { createClient } = require("@astrajs/collections");




exports.handler = async function (event, context) {
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });

    const messagesCollection = astraClient.namespace(process.env.ASTRA_DB_KEYSPACE).collection("messages");


    try {
        const message = await messagesCollection.create("hello message", {
            text: "HELLO I AM RAMAN"
        })
        return {
            statusCode: 200,
            body: JSON.stringify(message)
        }

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(e)
        }
    }

}
