import cloudinary from "../configs/cloudinary";


class FileRepository {
  async uploadFile(fileBuffer: Buffer, fileType: string): Promise<string> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "uploads",
            resource_type: fileType === "pdf" ? "raw" : "image",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result?.secure_url || "");
          }
        )
        .end(fileBuffer);
    });
  }
}

export default new FileRepository();
