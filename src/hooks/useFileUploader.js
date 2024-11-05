import { useState } from 'react';
import s3Client, { S3_BUCKET } from '@/config/aws';

const useFileUploader = (file, path, key) => {

    const [s3Path, setS3Path] = useState(null);
    const [error, setError] = useState(null);
    const upload = () => {
        if (!file) return;
        const fileType = file.type.split("/")[1]
        const filepath = path ? `${path}${Number(new Date())}.${fileType}` : key

        const params = {
            Bucket: S3_BUCKET,
            Key: filepath,
            Body: file
        };

        s3Client.upload(params, (err, data) => {
            if (err) {
                setError(err);
            } else {
                setS3Path(data.Location);
            }
        });
    }

    return [upload, s3Path, error];
};

export default useFileUploader;