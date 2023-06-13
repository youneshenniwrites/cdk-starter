// import {
//   Stack,
//   StackProps,
//   Duration,
//   CfnOutput,
//   CfnParameter,
// } from "aws-cdk-lib";
// import { Bucket, CfnBucket } from "aws-cdk-lib/aws-s3";
// import { Construct } from "constructs";

// export class BucketL3 extends Construct {
//   bucketL3: Bucket;

//   constructor(scope: Construct, id: string, expiration: number) {
//     super(scope, id);

//     // Create an S3 bucket
//     new Bucket(this, "L3Bucket", {
//       lifecycleRules: [
//         {
//           expiration: Duration.days(expiration),
//         },
//       ],
//     });
//   }
// }

// export class CdkStarterStack extends Stack {
//   constructor(scope: Construct, id: string, props?: StackProps) {
//     super(scope, id, props);

//     // Create an S3 bucket
//     new CfnBucket(this, "MyL1Bucket", {
//       lifecycleConfiguration: {
//         rules: [
//           {
//             expirationInDays: 1,
//             status: "Enabled",
//           },
//         ],
//       },
//     });

//     const duration = new CfnParameter(this, "duration", {
//       default: 6,
//       minValue: 1,
//       maxValue: 10,
//       type: "Number",
//     });

//     const myL2Bucket = new Bucket(this, "MyL2Bucket", {
//       lifecycleRules: [
//         {
//           expiration: Duration.days(duration.valueAsNumber),
//         },
//       ],
//     });

//     new CfnOutput(this, "MyL2BucketName", {
//       value: myL2Bucket.bucketName,
//     });

//     new BucketL3(this, "MyL3Bucket", 3);
//   }
// }
