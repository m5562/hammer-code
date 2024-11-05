import AWS from "aws-sdk";

const S3_BUCKET = process.env.NEXT_PUBLIC_AWS_BUCKET;
const REGION = process.env.NEXT_PUBLIC_AWS_REGION;

const s3Client = new AWS.S3({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: REGION,
});

export default s3Client;

export { S3_BUCKET, REGION };
