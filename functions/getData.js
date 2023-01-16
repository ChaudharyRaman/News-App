const { createClient } = require("@astrajs/collections");


exports.handler =async (event, context) => {
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });


    const messagesCollection = astraClient.namespace(process.env.ASTRA_DB_KEYSPACE).collection("messages");

    try {
        const { data } = await messagesCollection.find();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(e)
        }
    }

}
