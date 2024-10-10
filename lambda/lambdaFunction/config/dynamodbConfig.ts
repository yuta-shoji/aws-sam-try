import {DynamoDBClient, DynamoDBClientConfig} from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";

const clientConfig: DynamoDBClientConfig = process.env.AWS_SAM_LOCAL
    ? {
        region: 'ap-northeast-1',
        endpoint: 'http://dynamodb-local:8000',
        credentials: {
            accessKeyId: 'dummy',
            secretAccessKey: 'dummy',
        },
    }
    : {}

// @ts-ignore
const client = new DynamoDBClient(clientConfig)
export const dynamo = DynamoDBDocumentClient.from(client)
