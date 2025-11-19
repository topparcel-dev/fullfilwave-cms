export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: env('STORAGE_S3_CDN_URL'),
        rootPath: env('STORAGE_S3_ROOT_PATH', ''),
        s3Options: {
          credentials: {
            accessKeyId: env('STORAGE_S3_KEY'),
            secretAccessKey: env('STORAGE_S3_SECRET'),
          },
          region: env('STORAGE_S3_REGION'),
          endpoint: env('STORAGE_S3_ENDPOINT'),
          forcePathStyle: env.bool('STORAGE_S3_FORCE_PATH_STYLE', true),
          params: {
            ACL: env('STORAGE_S3_ACL', 'public-read'),
            Bucket: env('STORAGE_S3_BUCKET'),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
