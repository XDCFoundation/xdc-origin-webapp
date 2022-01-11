const AWS = require("aws-sdk");

class AWSServices {

    uploadFileToS3 = (key, body, contentType) => {
        AWS.config.update({
            accessKeyId: 'AKIASMMTV6PRCONJVAV7',
            secretAccessKey: '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'
        });

        let params = {
            Bucket: 'xdc-mycontract-s3-dev',
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
module.exports = AWSServices
