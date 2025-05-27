import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

export default function ProductImages({
  images,
  newimageFiles,
  errors,
  handleFileChange,
  removeImage,
  removeUploadedImage,
}: any) {
  return (
    <div className="flex flex-col">
      <label className="block text-sm font-medium">Images</label>
      <input
        type="file"
        id="images"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <label
        htmlFor="images"
        className="cursor-pointer border border-gray-400 rounded-lg p-2 flex items-center gap-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-custom-800"
      >
        <MdOutlineDriveFolderUpload className="text-2xl" />
        Choose product images
      </label>

      <div className="mt-3 flex gap-4">
        {images.map((image: string, index: number) => (
          <div
            key={index}
            className="relative w-14 h-14 bg-background-b2 p-2 flex items-center justify-center rounded-md"
          >
            <img
              src={image}
              alt="uploaded"
              className="w-full h-full object-cover rounded-md"
            />
            <button
              onClick={() => removeUploadedImage(index)}
              type="button"
              className="absolute top-[-7px] right-[-7px] w-5 h-5 rounded-full bg-background-b2 flex justify-center items-center hover:text-red-500"
            >
              <AiOutlineClose />
            </button>
          </div>
        ))}
        {newimageFiles.map((file: File, index: number) => (
          <div
            key={index}
            className="relative w-14 h-14 bg-background-b2 p-2 flex items-center justify-center rounded-md"
          >
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className="w-full h-full object-cover rounded-md"
            />
            <button
              onClick={() => removeImage(index)}
              type="button"
              className="absolute top-[-7px] right-[-7px] w-5 h-5 rounded-full bg-background-b2 flex justify-center items-center hover:text-red-500"
            >
              <AiOutlineClose />
            </button>
          </div>
        ))}
      </div>

      {errors.images && (
        <p className="text-red-500 text-sm">{String(errors.images.message)}</p>
      )}
    </div>
  );
}
