import { Construct } from "constructs";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Fn, Stack, StackProps } from "aws-cdk-lib";

export class PhotosStack extends Stack {
  private stackSuffix: string;
  public readonly photosBucketArn: string;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.initializeSuffix();

    const photosBucket = new Bucket(this, "PhotosBucket", {
      bucketName: `photos-bucket-${this.stackSuffix}`,
    });

    this.photosBucketArn = photosBucket.bucketArn;
  }

  private initializeSuffix() {
    const shortStackId = Fn.select(2, Fn.split("/", this.stackId));
    this.stackSuffix = Fn.select(4, Fn.split("-", shortStackId));
  }
}
