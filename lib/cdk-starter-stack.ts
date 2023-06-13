import { Stack, StackProps, Duration, CfnOutput } from "aws-cdk-lib";
import { Bucket, CfnBucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class BucketL3 extends Construct {
  bucketL3: Bucket;

  constructor(scope: Construct, id: string, expiration: number) {
    super(scope, id);

    // Create an S3 bucket
    this.bucketL3 = new Bucket(this, "L3Bucket", {
      lifecycleRules: [
        {
          expiration: Duration.days(expiration),
        },
      ],
    });
  }
}

export class CdkStarterStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
  }

  // Create an S3 bucket
  bucketL1 = new CfnBucket(this, "MyL1Bucket", {
    lifecycleConfiguration: {
      rules: [
        {
          expirationInDays: 1,
          status: "Enabled",
        },
      ],
    },
  });

  bucketL2 = new Bucket(this, "MyL2Bucket", {
    lifecycleRules: [
      {
        expiration: Duration.days(2),
      },
    ],
  });

  output = new CfnOutput(this, "MyL2BucketName", {
    value: this.bucketL2.bucketName,
  });

  bucketL3 = new BucketL3(this, "MyL3Bucket", 3);
}
