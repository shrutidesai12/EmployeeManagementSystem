// import React, { useState } from "react";
// import { FileText, File, FileSignature, ClipboardList, Award } from "lucide-react";
// import { FaGraduationCap } from "react-icons/fa";
// import { GrNotes } from "react-icons/gr";
// import { IoIdCard } from "react-icons/io5";
// import { CiLock } from "react-icons/ci";
// import { useNavigate } from "react-router-dom";




// // Dummy document data
// const documents = [
//     {
//         name: "Degree Certificate",
//         type: "Degrees & Certificates",
//         icon: (
//             <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2ACBE1]">
//                 <FaGraduationCap className="w-4 h-4 text-white" />
//             </div>
//         )
//     },
//     {
//         name: "Previous Employer Letter",
//         type: "Previous Experience",
//         icon: (
//             <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2ACBE1]">
//                 <GrNotes className="w-4 h-4 text-white" />
//             </div>
//         )
//     },
//     {
//         name: "Identity Proof",
//         type: "Identity",
//         icon: (
//             <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2ACBE1]">
//                 <IoIdCard className="w-4 h-4 text-white" />
//             </div>
//         )
//     },
//     {
//         name: "Offer Letter",
//         type: "Offer Letters",
//         icon: (
//             <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2ACBE1]">
//                 <FileText className="w-4 h-4 text-white" />
//             </div>
//         )
//     },
//     {
//         name: "Signature",
//         type: "Signatures",
//         icon: (
//             <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2ACBE1]">
//                 <FileSignature className="w-4 h-4 text-white" />
//             </div>
//         )
//     },
// ];

// export default function EmployeeDocuments() {
//     const [selectedDoc, setSelectedDoc] = useState(documents[0]);
//     const navigate = useNavigate();

//     return (
//         <div className="flex min-h-screen  p-6 gap-6 ">

//             {/* Left: Document List */}
//             <div className="w-80 bg-white rounded-lg shadow h-fit border border-gray-200">
//                 <h2 className="text-lg  p-4 border-b border-gray-200 text-gray-800">Employee Documents Folder</h2>
//                 <ul>
//                     {documents.map((doc, index) => (
//                         <li
//                             key={index}
//                             onClick={() => setSelectedDoc(doc)}
//                             className={`flex items-center justify-between p-4 cursor-pointer transition-colors border-b border-gray-100 last:border-0
//                 ${selectedDoc.name === doc.name ? "bg-blue-50 border-l-4 border-l-[#2ACBE1]" : "hover:bg-gray-50"}`}
//                         >
//                             <div className="flex items-center gap-3">
//                                 {/* Directly rendering doc.icon since it already contains the wrapper */}
//                                 {doc.icon}
//                                 <span className={`text-sm ${selectedDoc.name === doc.name ? "font-semibold text-gray-900" : "text-gray-600"}`}>
//                                     {doc.name}
//                                 </span>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Right: Two separate sections */}
//             <div className="flex-1 flex flex-col gap-6">

//                 {/* Section 1 - With Dynamic Icon */}
//                 <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
//                     {/* Dynamic Icon from selection */}
//                     <div className="transform scale-125 mt-1">
//                         {selectedDoc.icon}
//                     </div>

//                     <div>
//                         <h2 className="text-xl  text-gray-800">{selectedDoc.name}</h2>
//                         <p className="text-gray-500 text-sm mt-1">
//                             This section contains details about the {selectedDoc.name} document.
//                         </p>
//                         <p className="text-[#2ACBE1] font-medium text-sm mt-3 flex items-center gap-1">
//                             <span className="flex items-center gap-1.5 bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded border border-green-100 uppercase tracking-wider shadow-sm">
//                                 <CiLock className="w-3.5 h-3.5" />
//                                 Secure
//                             </span>
//                             <span className="w-2 h-2 rounded-full bg-[#2ACBE1]"></span>
//                             Only selected people can view this information
//                         </p>
//                     </div>
//                 </div>
//                 {/* Section 2 */}
//                 <div className="bg-white rounded-lg shadow p-6">
//                     <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
//                         <h3 className="font-medium text-gray-700">{selectedDoc.name} Actions</h3>
//                         <span className="text-xs font-semibold bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
//                             MANDATORY
//                         </span>
//                     </div>
//                     <div className="flex gap-3">
//                        <button
//   type="button"
//   onClick={() => {
//     console.log("clicked", selectedDoc);
//     navigate("/add-document-details", { state: { selectedDoc } });
//   }}
//   className="bg-[#718FC2] text-white px-4 py-2 rounded hover:bg-blue-700"
// >
//   + Add Details
// </button>
//                         <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200">
//                             Download
//                         </button>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }



import React, { useState } from "react";
import { FileText, FileSignature } from "lucide-react";
import { FaGraduationCap } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoIdCard } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

// Dummy document data
const documents = [
    {
        name: "Degree Certificate",
        type: "Degrees & Certificates",
        icon: (
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2ACBE1]">
                <FaGraduationCap className="w-4 h-4 text-white" />
            </div>
        ),
    },
    {
        name: "Previous Employer Letter",
        type: "Previous Experience",
        icon: (
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2ACBE1]">
                <GrNotes className="w-4 h-4 text-white" />
            </div>
        ),
    },
    {
        name: "Identity Proof",
        type: "Identity",
        icon: (
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2ACBE1]">
                <IoIdCard className="w-4 h-4 text-white" />
            </div>
        ),
    },
    {
        name: "Offer Letter",
        type: "Offer Letters",
        icon: (
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2ACBE1]">
                <FileText className="w-4 h-4 text-white" />
            </div>
        ),
    },
    {
        name: "Signature",
        type: "Signatures",
        icon: (
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2ACBE1]">
                <FileSignature className="w-4 h-4 text-white" />
            </div>
        ),
    },
];

export default function EmployeeDocuments() {
    const [selectedDoc, setSelectedDoc] = useState(documents[0]);
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen p-6 gap-6 relative z-10">
            {/* Left: Document List */}
            <div className="w-80 bg-white rounded-lg shadow h-fit border border-gray-200 relative z-20">
                <h2 className="text-lg p-4 border-b border-gray-200 text-gray-800">
                    Employee Documents Folder
                </h2>
                <ul>
                    {documents.map((doc, index) => (
                        <li
                            key={index}
                            onClick={() => setSelectedDoc(doc)}
                            className={`flex items-center justify-between p-4 cursor-pointer transition-colors border-b border-gray-100 last:border-0
              ${selectedDoc.name === doc.name
                                    ? "bg-blue-50 border-l-4 border-l-[#2ACBE1]"
                                    : "hover:bg-gray-50"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                {doc.icon}
                                <span
                                    className={`text-sm ${selectedDoc.name === doc.name
                                            ? "font-semibold text-gray-900"
                                            : "text-gray-600"
                                        }`}
                                >
                                    {doc.name}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right: Two separate sections */}
            <div className="flex-1 flex flex-col gap-6 relative z-30">
                {/* Section 1 */}
                <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4 relative z-30">
                    <div className="transform scale-125 mt-1">{selectedDoc.icon}</div>

                    <div>
                        <h2 className="text-xl text-gray-800">{selectedDoc.name}</h2>
                        <p className="text-gray-500 text-sm mt-1">
                            This section contains details about the {selectedDoc.name} document.
                        </p>
                        <p className="text-[#2ACBE1] font-medium text-sm mt-3 flex items-center gap-1">
                            <span className="flex items-center gap-1.5 bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded border border-green-100 uppercase tracking-wider shadow-sm">
                                <CiLock className="w-3.5 h-3.5" />
                                Secure
                            </span>
                            <span className="w-2 h-2 rounded-full bg-[#2ACBE1]"></span>
                            Only selected people can view this information
                        </p>
                    </div>
                </div>

                {/* Section 2 */}
                <div
                    className="bg-white rounded-lg shadow p-6 relative z-50"
                    style={{ pointerEvents: "auto" }}
                >
                    <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
                        <h3 className="font-medium text-gray-700">{selectedDoc.name} Actions</h3>
                        <span className="text-xs font-semibold bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
                            MANDATORY
                        </span>
                    </div>

                    <div className="flex gap-3 relative z-50">
                        <button
                            type="button"
                            onClick={() => {
                                alert("uploads the documents");
                                window.location.href = "/add-document-details";
                            }}
                            className="bg-[#718FC2] text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            + Add Details
                        </button>

                        <button
                            type="button"
                            className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 cursor-pointer"
                        >
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}