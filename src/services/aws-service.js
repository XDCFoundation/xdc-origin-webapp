const AWS = require("aws-sdk");

class AWSServices {

    uploadFileToS3 = (key, body, s3Bucket, contentType) => {
        AWS.config.update({
            accessKeyId: '',
            secretAccessKey: ''
        });

        let params = {
            Bucket: s3Bucket,
            Key: key,
            Body: body,
            // ContentType: contentType,
        };

        let s3 = new AWS.S3();
        return new Promise(function (resolve, reject) {
            s3.upload(params, (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    let responseObj = {
                        sourceFileName: res.Key,
                    };
                    resolve(responseObj);
                }
            });
        });
    }
}
export default AWSServices;
