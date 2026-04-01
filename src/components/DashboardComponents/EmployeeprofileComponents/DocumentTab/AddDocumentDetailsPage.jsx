// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Upload } from "lucide-react";

// export default function AddDocumentDetailsPage() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const selectedDoc = location.state?.selectedDoc || { name: "Document" };

//   return (
//     <div className="min-h-screen bg-gray-100 px-4 py-6">
//       <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6">
        
//         {/* Header */}
//         <div className="border-b border-gray-200 pb-4 mb-6">
//           <button
//             onClick={() => navigate(-1)}
//             className="text-sm text-blue-600 hover:underline mb-2"
//           >
//             ← Back
//           </button>
//           <h1 className="text-2xl font-semibold text-gray-800">
//             Add {selectedDoc.name}
//           </h1>
//           <p className="text-sm text-gray-500 mt-1">
//             Fill in the document details and upload the attachment.
//           </p>
//         </div>

//         {/* Main Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
//           {/* Left Upload Section */}
//           <div className="bg-gray-100 rounded-xl p-6 flex flex-col justify-between min-h-[500px]">
//             <div>
//               <h2 className="text-lg font-semibold text-gray-700 mb-4">
//                 Add Attachment File
//               </h2>

//               <div className="border-2 border-dashed border-gray-300 rounded-xl bg-white p-10 flex flex-col items-center justify-center text-center">
//                 <Upload className="w-10 h-10 text-gray-400 mb-3" />
//                 <p className="text-gray-600 font-medium">
//                   Drag & drop file here
//                 </p>
//                 <p className="text-sm text-gray-400 mt-1">or</p>

//                 <label className="mt-4 inline-block bg-[#718FC2] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700">
//                   Browse File
//                   <input type="file" className="hidden" />
//                 </label>
//               </div>

//               <p className="text-sm text-gray-500 mt-4">
//                 Max file size allowed: <span className="font-medium">120 MB</span>
//               </p>
//             </div>
//           </div>

//           {/* Right Form Section */}
//           <div>
//             <h2 className="text-lg font-semibold text-gray-700 mb-6">
//               Document Details
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               {/* Degree */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   Degree
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter degree"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#718FC2]"
//                 />
//               </div>

//               {/* Batch */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   Batch
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter batch"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#718FC2]"
//                 />
//               </div>

//               {/* Specialization */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   Specialization
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter specialization"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#718FC2]"
//                 />
//               </div>

//               {/* Year of Joining */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   Year of Joining
//                 </label>
//                 <input
//                   type="number"
//                   placeholder="Enter joining year"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#718FC2]"
//                 />
//               </div>

//               {/* Year of Completion */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   Year of Completion
//                 </label>
//                 <input
//                   type="number"
//                   placeholder="Enter completion year"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#718FC2]"
//                 />
//               </div>

//               {/* CGPA / Percentage */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   CGPA / Percentage
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter CGPA or percentage"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#718FC2]"
//                 />
//               </div>

//               {/* University / College */}
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   University / College
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter university or college name"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#718FC2]"
//                 />
//               </div>
//             </div>

//             {/* Save Button */}
//             <div className="mt-8 flex justify-end">
//               <button className="bg-[#718FC2] text-white px-6 py-2.5 rounded-lg hover:bg-blue-700">
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";

export default function AddDocumentDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedDoc = location.state?.selectedDoc || { name: "Document" };

  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    degree: "",
    batch: "",
    specialization: "",
    joiningYear: "",
    completionYear: "",
    cgpa: "",
    university: "",
  });

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setUploadProgress(0);

    // Simulate upload progress
    setIsUploading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
      }
    }, 200); // increments every 200ms
  };

  // Handle form input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Save (dummy)
  const handleSave = () => {
    if (!file) {
      alert("Please select a file!");
      return;
    }
    const dummyData = {
      ...formData,
      fileName: file.name,
      uploadProgress,
    };
    console.log("Saved Document Details:", dummyData);
    alert("Document saved successfully!\nCheck console for dummy data.");
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6">
        {/* Header */}
        <div className="border-b border-gray-200 pb-4 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-blue-600 hover:underline mb-2"
          >
            ← Back
          </button>
          <h1 className="text-2xl font-semibold text-gray-800">
            Add {selectedDoc.name}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Fill in the document details and upload the attachment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upload Section */}
          <div className="bg-gray-100 rounded-xl p-6 flex flex-col justify-between min-h-[500px]">
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Add Attachment File
              </h2>
              <div className="border-2 border-dashed border-gray-300 rounded-xl bg-white p-10 flex flex-col items-center justify-center text-center">
                <Upload className="w-10 h-10 text-gray-400 mb-3" />
                <p className="text-gray-600 font-medium">Drag & drop file here</p>
                <p className="text-sm text-gray-400 mt-1">or</p>

                <label className="mt-4 inline-block bg-[#718FC2] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700">
                  Browse File
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>

              {file && (
                <div className="mt-4">
                  <p className="text-sm text-gray-700 font-medium">{file.name}</p>
                  <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {uploadProgress}% uploaded
                  </p>
                </div>
              )}

              <p className="text-sm text-gray-500 mt-4">
                Max file size allowed: <span className="font-medium">120 MB</span>
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-6">
              Document Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: "Degree", name: "degree", type: "text" },
                { label: "Batch", name: "batch", type: "text" },
                { label: "Specialization", name: "specialization", type: "text" },
                { label: "Year of Joining", name: "joiningYear", type: "number" },
                { label: "Year of Completion", name: "completionYear", type: "number" },
                { label: "CGPA / Percentage", name: "cgpa", type: "text" },
                { label: "University / College", name: "university", type: "text", full: true },
              ].map((field) => (
                <div key={field.name} className={field.full ? "md:col-span-2" : ""}>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#718FC2]"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={handleSave}
                disabled={isUploading}
                className={`bg-[#718FC2] text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 ${
                  isUploading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isUploading ? "Uploading..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}