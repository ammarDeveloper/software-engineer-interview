import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

export const handler = async (event) => {
    const command = new PutItemCommand({
        TableName: 'MyUsers',
        Item: {
            userId: { S: '123' },
            name: { S: 'Mohammed Ammar' }
        }
    })

    await client.send(command);
    return { statusCode: 200, body: 'User saved' }
}

handler({}).then(console.log)
.catch(console.error)