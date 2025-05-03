import { Stack, StackProps } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as path from 'path';

export class LambdaLayerCdkStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        // Lambda layer
        const utilLayer = new lambda.LayerVersion(this, 'UtilsLayer', {
            layerVersionName: 'UtilsLayer',
            code: lambda.Code.fromAsset(path.join(__dirname, '../layers/my-layer')),
            compatibleRuntimes: [lambda.Runtime.NODEJS_22_X],
            description: 'Utility functions, layer'
        });

        const myFunction = new lambda.Function(this, 'HelloFunction', {
            functionName: 'HelloFunction',
            code: lambda.Code.fromAsset(path.join(__dirname, '../lambda')),
            handler: 'hello.handler',
            runtime: lambda.Runtime.NODEJS_22_X,
            layers: [utilLayer],
        })
    }
}

