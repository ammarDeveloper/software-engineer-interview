import { Stack, StackProps } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class S3LambdaStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const s3Bucket = new s3.Bucket(this, 'MyS3Bucket', {
            versioned: true
        })

        new lambda.Function(this, "MyS3Function", {
            functionName: 'MyS3Function',
            code: lambda.Code.fromBucket(s3Bucket, 'lambda-code.zip'),
            handler: 'index.handler',
            runtime: lambda.Runtime.NODEJS_22_X
        })
    }
}