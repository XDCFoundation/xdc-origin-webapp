const AWS = require("aws-sdk");

class AWSServices {

    uploadFileToS3 = (key, body, s3Bucket, contentType) => {
        AWS.config.update({
            accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
            secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY
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
                    console.log("uploadFileToS3 error", err);
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
