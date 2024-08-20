import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { ApiError } from "./ApiError.js";
import { extractPublicId } from 'cloudinary-build-url'

console.log(process.env.CLOUDINARY_API_KEY)

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed.
    return null;
  }
};

const removeImageFromCloudinary = async (oldURL) => {
  try {
    if (!oldURL) {
      throw new ApiError(400, "Invalid avatar image url");
    }

    const publicId = extractPublicId(oldURL) 
    
    const response = await cloudinary.uploader.destroy(publicId);
  
    return response;
  } catch (error) {
    return null;
  }
}

export { uploadOnCloudinary, removeImageFromCloudinary };