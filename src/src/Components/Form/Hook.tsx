import { useForm } from "react-hook-form";
import { useState } from "react";

function HookFormInput() {
  const [submitted, setSubmitted] = useState({
    inputValue: "",
    cvFileName: ""
  });
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    watch 
  } = useForm();

  const cvFile = watch("cvFile");

  const onSubmit = async (data) => {
    // Simulate API call with 2-second delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted({
      inputValue: data.inputValue,
      cvFileName: data.cvFile?.[0]?.name || "No file uploaded"
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Hook Form
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Text Input */}
          <div className="mb-4">
            <label
              htmlFor="nameInput"
              className="block font-medium text-gray-700 mb-1 text-xl"
            >
              INPUT
            </label>
            <input
              id="nameInput"
              type="text"
              placeholder="Type something"
              className={`w-full px-4 py-2 border text-xl ${
                errors.inputValue ? "border-red-500" : "border-gray-300"
              }`}
              {...register("inputValue", { 
                required: "Input is required",
                minLength: {
                  value: 2,
                  message: "Input must be at least 2 characters"
                }
              })}
            />
            {errors.inputValue && (
              <p className="text-red-500 text-sm mt-1">
                {errors.inputValue.message}
              </p>
            )}
          </div>

          {/* PDF Upload */}
          <div className="mb-4">
            <label
              htmlFor="cvUpload"
              className="block font-medium text-gray-700 mb-1 text-xl"
            >
              Upload CV (PDF only)
            </label>
            <input
              id="cvUpload"
              type="file"
              accept=".pdf"
              className={`w-full px-4 py-2 border text-base ${
                errors.cvFile ? "border-red-500" : "border-gray-300"
              }`}
              {...register("cvFile", {
                required: "CV is required",
                validate: {
                  isPDF: files => 
                    files[0]?.type === 'application/pdf' || 
                    'Only PDF files are allowed'
                }
              })}
            />
            {errors.cvFile && (
              <p className="text-red-500 text-sm mt-1">
                {errors.cvFile.message}
              </p>
            )}
            {cvFile?.[0] && (
              <p className="text-green-600 text-sm mt-1">
                Selected: {cvFile[0].name}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 ${
              isSubmitting 
                ? "opacity-50 cursor-not-allowed" 
                : "hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            Input Value:
          </h2>
          <p className="text-xl text-blue-600 font-medium">{submitted.inputValue}</p>
          
          <h2 className="text-lg font-semibold text-gray-800 mt-3 mb-1">
            CV File:
          </h2>
          <p className="text-xl text-blue-600 font-medium">
            {submitted.cvFileName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HookFormInput;