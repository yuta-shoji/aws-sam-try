import {APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda";

export const lambdaHandler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    try {
        const {name} = event.queryStringParameters
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(`Hello ${name}!!!!!`)
        }
    } catch (error) {
        console.error(error)
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened'
            })
        }
    }
}

export const headers = {
    'Access-Control-Allow-Origin': '*',
}