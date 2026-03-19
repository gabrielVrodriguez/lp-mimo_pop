import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

export class CloudinaryProvider {

    constructor() {
        cloudinary.config({
            cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
            
        });
    }

    
    public generateImageUrl(publicId: string, transformations= 'f_auto,q_auto'): string {
        console.log("Generating Cloudinary URL with publicId:", publicId);
        return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${transformations}/${publicId}`;
    }
}

//