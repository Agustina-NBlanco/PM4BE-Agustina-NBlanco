import { Injectable } from "@nestjs/common";
import * as dotenv from 'dotenv'
import { v2 as cloudinary, UploadApiOptions } from "cloudinary";

@Injectable()
export class CloudinaryService {
    constructor() {
        dotenv.config({
            path: '.env'
        })
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        })
    }

    async uploadFile(buffer: Buffer, originalName?: string): Promise<string> {
        const option: UploadApiOptions = {
            folder: 'upload',
            public_id: originalName,
            resource_type: 'auto'
        }
        return new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(option, (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result.secure_url)
            })

            stream.write(buffer)
            stream.end()
        })
    }

    async getUrl(public_id: string): Promise<String> {
        const result = await cloudinary.api.resource(public_id)
        return result
    }
}
