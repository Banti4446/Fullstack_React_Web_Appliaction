
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    const bucketName = 'amplify-myapp1-dev-1b360-deployment' // Replace with your bucket name
    const fileName = 'data.json'; // Your JSON file

    const params = {
        Bucket: bucketName,
        Key: fileName,
    };

    try {
        const data = await s3.getObject(params).promise();
        const jsonData = JSON.parse(data.Body.toString('utf-8'));
        return {
            statusCode: 200,
            body: JSON.stringify(jsonData),
        };
    } catch (err) {
        return { statusCode: 500, body: err.message };
    }
};

