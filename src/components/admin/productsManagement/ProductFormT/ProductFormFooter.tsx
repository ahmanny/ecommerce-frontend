import { BeatLoader } from "react-spinners";

interface ProductFormFooterProps {
  isLoading: boolean;
  isError?: boolean;
  errorMessage?: string;
  mode?: "add" | "edit";
}

export default function ProductFormFooter({
  isLoading,
  isError = false,
  errorMessage = "",
  mode = "add",
}: ProductFormFooterProps) {
  return (
    <div className="mt-8">
      {isError && <p className="text-red-500 text-sm mb-2">{errorMessage}</p>}
      <button type="submit" disabled={isLoading} className="btn !w-48 ">
        {isLoading ? (
          <BeatLoader color="#fff" size={8} />
        ) : mode === "edit" ? (
          "Update"
        ) : (
          "Add"
        )}
      </button>
    </div>
  );
}
