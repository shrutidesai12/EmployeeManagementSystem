// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { Search, Folder, MoreVertical, Info, X } from "lucide-react";

// export default function EmployeeDocumentsSettings() {
//     const [selectedDoc, setSelectedDoc] = useState("Imported Documents");
//     const [query, setQuery] = useState("");
//     const [showDotsMenu, setShowDotsMenu] = useState(false);
//     const [showManageDrawer, setShowManageDrawer] = useState(false);
//     const [drawerPermissions, setDrawerPermissions] = useState({});
//     const [savedFolders, setSavedFolders] = useState({});


//     const dotsMenuRef = useRef(null);

//     const documentCategories = [
//         { name: "Imported Documents", subtitle: "Bulk Import Type", count: null, locked: true },
//         { name: "Degrees & Certificates", subtitle: null, count: 1 },
//         { name: "Previous Experience", subtitle: null, count: 1 },
//         { name: "Employee Letters", subtitle: null, count: 0 },
//         { name: "Identity", subtitle: null, count: 0 },
//     ];

//     // Per-folder settings
//     const [folderSettings, setFolderSettings] = useState({
//         "Imported Documents": {
//             allowEmployeesMove: false,
//         },
//         "Degrees & Certificates": {
//             folderName: "Degrees & Certificates",
//             description:
//                 "This section contains details about all the Degrees & Certificates of an employee.",
//             isConfidential: false,
//             permissions: {
//                 Employee: { view: true, edit: false },
//                 "HR Executive": { view: true, edit: true },
//                 "HR Manager": { view: true, edit: true },
//                 "Global Admin": { view: true, edit: true },
//             },
//         },
//         "Previous Experience": {
//             folderName: "Previous Experience",
//             description: "This section contains previous experience documents of an employee.",
//             isConfidential: false,
//             permissions: {},

//         },
//         "Employee Letters": {
//             folderName: "Employee Letters",
//             description: "This section contains employee letter documents.",
//             isConfidential: false,
//             permissions: {},
//         },
//         "Identity": {
//             folderName: "Identity",
//             description: "This section contains identity documents of an employee.",
//             isConfidential: false,
//             permissions: {},
//         },
//     });

//     // Drawer temp states
//     const [drawerAllowEmployeesMove, setDrawerAllowEmployeesMove] = useState(false);
//     const [drawerFolderName, setDrawerFolderName] = useState("");
//     const [drawerDescription, setDrawerDescription] = useState("");
//     const [drawerIsConfidential, setDrawerIsConfidential] = useState(false);

//     const filteredDocs = useMemo(() => {
//         if (!query.trim()) return documentCategories;
//         return documentCategories.filter((doc) =>
//             doc.name.toLowerCase().includes(query.toLowerCase())
//         );
//     }, [query]);

//     const activeDoc =
//         documentCategories.find((doc) => doc.name === selectedDoc) || documentCategories[0];

//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (dotsMenuRef.current && !dotsMenuRef.current.contains(event.target)) {
//                 setShowDotsMenu(false);
//             }
//         }

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     const openManageDrawer = () => {
//         const current = folderSettings[selectedDoc];

//         setDrawerAllowEmployeesMove(current?.allowEmployeesMove || false);
//         setDrawerFolderName(current?.folderName || selectedDoc);
//         setDrawerDescription(current?.description || "");
//         setDrawerIsConfidential(current?.isConfidential || false);
//         setDrawerPermissions(current?.permissions || {});

//         setShowManageDrawer(true);
//         setShowDotsMenu(false);
//     };
//     const handleUpdateSettings = () => {
//         const updatedFolder = {
//             folderName: drawerFolderName || selectedDoc,
//             description: drawerDescription || "",
//             isConfidential: drawerIsConfidential,
//             allowEmployeesMove: drawerAllowEmployeesMove,
//             permissions: drawerPermissions,
//         };

//         // Save in folder settings
//         setFolderSettings((prev) => ({
//             ...prev,
//             [selectedDoc]: {
//                 ...prev[selectedDoc],
//                 ...updatedFolder,
//             },
//         }));

//         // Save separate block for currently selected document
//         setSavedFolders((prev) => ({
//             ...prev,
//             [selectedDoc]: {
//                 name: selectedDoc,
//                 ...updatedFolder,
//             },
//         }));

//         setShowManageDrawer(false);
//     };

//     const renderDrawerContent = () => {
//         // Imported Documents Drawer
//         if (selectedDoc === "Imported Documents") {
//             return (
//                 <div className="p-5 flex-1">
//                     <p className="text-[14px] text-[#394150] mb-5 leading-6">
//                         Who can move documents from the{" "}
//                         <span className="font-medium">{selectedDoc}</span> folder to respective folders
//                     </p>

//                     <label className="flex items-start gap-3 cursor-pointer">
//                         <input
//                             type="checkbox"
//                             checked={drawerAllowEmployeesMove}
//                             onChange={(e) => setDrawerAllowEmployeesMove(e.target.checked)}
//                             className="mt-1 h-4 w-4 rounded border border-[#c7ccd4]"
//                         />

//                         <div className="flex items-start gap-2">
//                             <span className="text-[14px] text-[#394150]">
//                                 Allow employees to move imported documents
//                             </span>

//                             <Info size={15} className="text-[#9ca3af] mt-[2px]" />
//                         </div>
//                     </label>
//                 </div>
//             );
//         }

//         // EXACT Degrees & Certificates UI
//         if (selectedDoc === "Degrees & Certificates") {
//             return (
//                 <div className="p-5 flex-1 bg-white">
//                     <div className="grid grid-cols-2 gap-7">
//                         {/* Name of Folder */}
//                         <div>
//                             <label className="block text-[11px] font-normal text-[#4b5563] mb-2">
//                                 Name of the Folder
//                             </label>
//                             <input
//                                 type="text"
//                                 value={drawerFolderName}
//                                 onChange={(e) => setDrawerFolderName(e.target.value)}
//                                 className="w-full h-[36px] px-3 border border-[#d9dee7] rounded-[2px] text-[12px] text-[#394150] bg-white outline-none focus:border-[#7f63ff]"
//                             />
//                         </div>

//                         {/* Description */}
//                         <div>
//                             <label className="block text-[11px] font-normal text-[#4b5563] mb-2">
//                                 Description
//                             </label>
//                             <input
//                                 type="text"
//                                 value={drawerDescription}
//                                 onChange={(e) => setDrawerDescription(e.target.value)}
//                                 className="w-full h-[36px] px-3 border border-[#d9dee7] rounded-[2px] text-[12px] text-[#394150] bg-white outline-none focus:border-[#7f63ff]"
//                             />
//                         </div>
//                     </div>

//                     {/* Confidential checkbox */}
//                     <div className="mt-5 flex items-center gap-2">
//                         <input
//                             type="checkbox"
//                             checked={drawerIsConfidential}
//                             onChange={(e) => setDrawerIsConfidential(e.target.checked)}
//                             className="h-[13px] w-[13px] rounded-[2px] border border-[#c7ccd4]"
//                         />
//                         <span className="text-[12px] text-[#4b5563]">
//                             Mark folder as confidential
//                         </span>
//                         <Info size={13} className="text-[#b8bec9]" />
//                     </div>

//                     {/* Folder permissions */}
//                     <div className="mt-7">
//                         <h3 className="text-[13px] font-medium text-[#394150]">
//                             Folder permissions
//                         </h3>
//                         <p className="mt-1 text-[12px] text-[#9ca3af] leading-[18px]">
//                             The below permissions can be configured for each role.
//                         </p>

//                         <div className="mt-5 border border-[#e5e7eb] rounded-[3px] overflow-hidden">
//                             {/* Table Header */}
//                             <div className="grid grid-cols-[1.4fr_1fr_1.2fr] bg-[#f7f8fb] border-b border-[#e5e7eb]">
//                                 <div className="px-4 py-3 text-[12px] font-medium text-[#6b7280]">Role</div>
//                                 <div className="px-4 py-3 text-[12px] font-medium text-[#6b7280] text-center">
//                                     View Documents
//                                 </div>
//                                 <div className="px-4 py-3 text-[12px] font-medium text-[#6b7280] text-center">
//                                     Add / Update Documents
//                                 </div>
//                             </div>

//                             {/* Table Rows */}
//                             {Object.entries(drawerPermissions).map(([role, perms], index) => (
//                                 <div
//                                     key={role}
//                                     className={`grid grid-cols-[1.4fr_1fr_1.2fr] items-center ${index !== Object.entries(drawerPermissions).length - 1
//                                         ? "border-b border-[#e5e7eb]"
//                                         : ""
//                                         }`}
//                                 >
//                                     <div className="px-4 py-3 text-[12.5px] text-[#394150]">{role}</div>

//                                     <div className="px-4 py-3 flex justify-center">
//                                         <input
//                                             type="checkbox"
//                                             checked={perms.view}
//                                             onChange={(e) =>
//                                                 setDrawerPermissions((prev) => ({
//                                                     ...prev,
//                                                     [role]: {
//                                                         ...prev[role],
//                                                         view: e.target.checked,
//                                                     },
//                                                 }))
//                                             }
//                                             className="h-4 w-4 rounded border border-[#c7ccd4]"
//                                         />
//                                     </div>

//                                     <div className="px-4 py-3 flex justify-center">
//                                         <input
//                                             type="checkbox"
//                                             checked={perms.edit}
//                                             onChange={(e) =>
//                                                 setDrawerPermissions((prev) => ({
//                                                     ...prev,
//                                                     [role]: {
//                                                         ...prev[role],
//                                                         edit: e.target.checked,
//                                                     },
//                                                 }))
//                                             }
//                                             className="h-4 w-4 rounded border border-[#c7ccd4]"
//                                         />
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             );
//         }

//         // Other folders
//         return (
//             <div className="p-5 flex-1 bg-white">
//                 <div className="grid grid-cols-2 gap-7">
//                     <div>
//                         <label className="block text-[11px] font-normal text-[#4b5563] mb-2">
//                             Name of the Folder
//                         </label>
//                         <input
//                             type="text"
//                             value={drawerFolderName}
//                             onChange={(e) => setDrawerFolderName(e.target.value)}
//                             className="w-full h-[36px] px-3 border border-[#d9dee7] rounded-[2px] text-[12px] text-[#394150] bg-white outline-none focus:border-[#7f63ff]"
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-[11px] font-normal text-[#4b5563] mb-2">
//                             Description
//                         </label>
//                         <input
//                             type="text"
//                             value={drawerDescription}
//                             onChange={(e) => setDrawerDescription(e.target.value)}
//                             className="w-full h-[36px] px-3 border border-[#d9dee7] rounded-[2px] text-[12px] text-[#394150] bg-white outline-none focus:border-[#7f63ff]"
//                         />
//                     </div>
//                 </div>

//                 <div className="mt-5 flex items-center gap-2">
//                     <input
//                         type="checkbox"
//                         checked={drawerIsConfidential}
//                         onChange={(e) => setDrawerIsConfidential(e.target.checked)}
//                         className="h-[13px] w-[13px] rounded-[2px] border border-[#c7ccd4]"
//                     />
//                     <span className="text-[12px] text-[#4b5563]">
//                         Mark folder as confidential
//                     </span>
//                     <Info size={13} className="text-[#b8bec9]" />
//                 </div>

//                 <div className="mt-7">
//                     <h3 className="text-[13px] font-medium text-[#394150]">
//                         Folder permissions
//                     </h3>
//                     <p className="mt-1 text-[12px] text-[#9ca3af] leading-[18px]">
//                         The below permissions in permissions can be changed in
//                     </p>
//                 </div>
//             </div>
//         );
//     };
//     return (
//         <div className="w-full min-h-screen bg-[#f6f7fb] text-[#2f3441]">
//             <div className="w-full px-2 pt-3 pb-0">
//                 {/* Header */}
//                 <div className="flex items-start justify-between mb-4">
//                     <div>
//                         <h1
//                             className="font-semibold tracking-[-0.01em] text-[#2f3441]"
//                             style={{ fontSize: 28, lineHeight: "34px" }}
//                         >
//                             Employee document settings
//                         </h1>
//                         <p
//                             className="mt-1 text-[#7f8796] max-w-[860px]"
//                             style={{ fontSize: 12.5, lineHeight: "18px" }}
//                         >
//                             Documents in these folders can be uploaded/filled by employee or generated from
//                             letter templates by HR/Managers. They are visible in each employee&apos;s profile.
//                         </p>
//                     </div>

//                     <button
//                         className="shrink-0 rounded-[3px] border border-[#7f63ff] bg-white text-[#7f63ff] font-medium shadow-[0_0_0_3px_rgba(127,99,255,0.18)] hover:bg-[#faf8ff] transition"
//                         style={{ height: 44, padding: "0 18px", fontSize: 14 }}
//                     >
//                         +Add Document Folder
//                     </button>
//                 </div>

//                 {/* Main area */}
//                 <div className="grid grid-cols-[210px_1fr] gap-6 items-start">
//                     {/* Sidebar */}
//                     <div className="bg-white border border-[#e6e8ef] overflow-hidden h-[276px]">
//                         <div className="h-[42px] border-b border-[#eceef3] px-10 relative flex items-center bg-white">
//                             <Search
//                                 size={15}
//                                 strokeWidth={2.1}
//                                 className="absolute left-10 -translate-x-6 text-[#a7adba]"
//                             />
//                             <input
//                                 value={query}
//                                 onChange={(e) => setQuery(e.target.value)}
//                                 placeholder="Search"
//                                 className="w-full bg-transparent outline-none text-[12.5px] text-[#5d6574] placeholder:text-[#b2b8c4]"
//                             />
//                         </div>

//                         <div className="h-[234px] overflow-y-auto">
//                             {filteredDocs.map((doc) => {
//                                 const active = selectedDoc === doc.name;
//                                 return (
//                                     <button
//                                         key={doc.name}
//                                         onClick={() => {
//                                             setSelectedDoc(doc.name);
//                                             setShowDotsMenu(false);
//                                         }}
//                                         className={`w-full h-[49px] px-14 pr-4 border-b border-[#eceef3] flex items-center text-left relative transition-colors ${active ? "bg-[#efebf7]" : "bg-white hover:bg-[#fafbfc]"
//                                             }`}
//                                     >
//                                         <span className="absolute left-4 inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#63c9d2]">
//                                             <Folder size={14} strokeWidth={2.1} className="text-white" />
//                                         </span>

//                                         <div className="min-w-0">
//                                             <div className="truncate text-[12.8px] leading-[16px] font-medium text-[#3a4150]">
//                                                 {doc.name}
//                                             </div>
//                                             <div className="truncate mt-[2px] text-[11.5px] leading-[14px] text-[#8f96a3]">
//                                                 {doc.subtitle
//                                                     ? doc.subtitle
//                                                     : `${doc.count} document${doc.count !== 1 ? "s" : ""}`}
//                                             </div>
//                                         </div>
//                                     </button>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                     {/* Right side column */}
//                     <div className="space-y-6">
//                         {/* Content panel */}
//                         <div className="bg-white border border-[#e6e8ef] min-h-[116px] relative">                        <div className="absolute right-3 top-3 z-30" ref={dotsMenuRef}>
//                             <button
//                                 onClick={() => setShowDotsMenu((prev) => !prev)}
//                                 className="text-[#9ca3af] hover:text-[#6b7280] p-1 rounded"
//                             >
//                                 <MoreVertical size={16} />
//                             </button>

//                             {showDotsMenu && (
//                                 <div className="absolute right-0 top-8 w-[220px] rounded-[4px] border border-[#e6e8ef] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)] overflow-hidden">
//                                     <button
//                                         className="w-full px-4 py-3 text-left text-[13px] text-[#394150] hover:bg-[#f7f8fb] transition"
//                                         onClick={openManageDrawer}
//                                     >
//                                         Manage Folder Settings
//                                     </button>
//                                 </div>
//                             )}
//                         </div>

//                             <div className="px-4 py-4">
//                                 <div className="flex items-start gap-3">
//                                     <span className="mt-[2px] inline-flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#63c9d2]">
//                                         <Folder size={12} strokeWidth={2.1} className="text-white" />
//                                     </span>

//                                     <div>
//                                         <h2 className="text-[14px] leading-[18px] font-semibold text-[#394150]">
//                                             {activeDoc.name}
//                                         </h2>
//                                         <p className="mt-1 text-[11.5px] leading-[15px] text-[#98a0ad]">
//                                             {folderSettings[selectedDoc]?.description ||
//                                                 `This folder is used to manage ${activeDoc.name.toLowerCase()} documents.`}
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <div className="mt-8 pl-[36px]">
//                                     <div className="text-[10px] font-semibold tracking-[0.08em] text-[#9aa1ae] uppercase">
//                                         Permissions
//                                     </div>
//                                     <p className="mt-2 text-[12.5px] leading-[18px] text-[#4c5563] max-w-[720px]">
//                                         {selectedDoc === "Imported Documents"
//                                             ? folderSettings[selectedDoc]?.allowEmployeesMove
//                                                 ? "HR Manager, HR Executive, Global Admin and Employees can move the documents into the respective folder."
//                                                 : "Only HR Manager, HR Executive and Global Admin can move the documents into the respective folder."
//                                             : folderSettings[selectedDoc]?.isConfidential
//                                                 ? "This folder is marked as confidential."
//                                                 : "This folder follows standard employee document access permissions."}
//                                     </p>
//                                 </div>
//                             </div>

//                         </div>
//                         {savedFolders[selectedDoc] && (
//                             <div className="bg-white border border-[#e6e8ef] p-5">
//                                 <div className="mb-4">
//                                     <h3 className="text-[14px] font-semibold text-[#394150]">
//                                         Saved Folder Block
//                                     </h3>
//                                     <p className="mt-1 text-[12px] text-[#8f96a3]">
//                                         This saved section belongs to {selectedDoc}.
//                                     </p>
//                                 </div>

//                                 <div className="border border-[#e6e8ef] rounded-[6px] bg-[#fafbff] p-5">
//                                     <div className="flex items-start justify-between">
//                                         <div>
//                                             <h3 className="text-[15px] font-semibold text-[#394150]">
//                                                 {savedFolders[selectedDoc].folderName || savedFolders[selectedDoc].name}
//                                             </h3>
//                                             <p className="mt-1 text-[12.5px] text-[#7f8796] leading-[18px]">
//                                                 {savedFolders[selectedDoc].description || "No description added."}
//                                             </p>
//                                         </div>

//                                         {savedFolders[selectedDoc].isConfidential && (
//                                             <span className="text-[11px] px-2 py-1 rounded bg-red-50 text-red-600 border border-red-200">
//                                                 Confidential
//                                             </span>
//                                         )}
//                                     </div>

//                                     <div className="mt-4 pt-4 border-t border-[#eceef3]">
//                                         <p className="text-[12.5px] text-[#4c5563]">
//                                             {savedFolders[selectedDoc].allowEmployeesMove
//                                                 ? "Employees are allowed to move documents."
//                                                 : "Employees are not allowed to move documents."}
//                                         </p>

//                                         <button className="mt-4 rounded-[4px] border border-[#7f63ff] bg-white text-[#7f63ff] font-medium px-4 py-2 text-[13px] hover:bg-[#faf8ff] transition">
//                                             + Add Folder
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//             {showManageDrawer && (
//                 <div
//                     className="fixed inset-0 z-50 flex justify-end bg-black/20"
//                     onClick={() => setShowManageDrawer(false)}
//                 >
//                     <div
//                         className="w-[760px] h-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.12)] flex flex-col"
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         {/* Drawer Header */}
//                         <div className="bg-gray-800 px-5 py-4 border-b border-[#e5e7eb] flex items-center justify-between">
//                             <h2 className="text-[16px] font-semibold text-white">
//                                 Edit {selectedDoc}
//                             </h2>

//                             <button
//                                 onClick={() => setShowManageDrawer(false)}
//                                 className="text-white hover:text-gray-300"
//                             >
//                                 <X size={18} />
//                             </button>
//                         </div>

//                         {/* Dynamic Drawer Content */}
//                         {renderDrawerContent()}

//                         {/* Drawer Footer */}
//                         <div className="px-5 py-4 border-t border-[#e5e7eb] flex justify-end gap-3">
//                             <button
//                                 onClick={() => setShowManageDrawer(false)}
//                                 className="px-4 py-2 text-[14px] font-medium text-[#394150] bg-white border border-[#d1d5db] rounded hover:bg-gray-50 transition"
//                             >
//                                 Cancel
//                             </button>

//                             <button
//                                 onClick={handleUpdateSettings}
//                                 className="px-5 py-2 text-[14px] font-medium text-white bg-[#7f63ff] rounded hover:bg-[#6e55e6] transition"
//                             >
//                                 Update
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }



import React, { useEffect, useMemo, useRef, useState } from "react";
import { Search, Folder, MoreVertical, Info, X } from "lucide-react";

export default function EmployeeDocumentsSettings() {
    const [selectedDoc, setSelectedDoc] = useState("Imported Documents");
    const [query, setQuery] = useState("");
    const [showDotsMenu, setShowDotsMenu] = useState(false);
    const [showManageDrawer, setShowManageDrawer] = useState(false);
    const [drawerPermissions, setDrawerPermissions] = useState({});
    const [savedFolders, setSavedFolders] = useState({});


    const dotsMenuRef = useRef(null);

    const documentCategories = [
        { name: "Imported Documents", subtitle: "Bulk Import Type", count: null, locked: true },
        { name: "Degrees & Certificates", subtitle: null, count: 1 },
        { name: "Previous Experience", subtitle: null, count: 1 },
        { name: "Employee Letters", subtitle: null, count: 0 },
        { name: "Identity", subtitle: null, count: 0 },
    ];

    // Per-folder settings
    const [folderSettings, setFolderSettings] = useState({
        "Imported Documents": {
            allowEmployeesMove: false,
        },
        "Degrees & Certificates": {
            folderName: "Degrees & Certificates",
            description:
                "This section contains details about all the Degrees & Certificates of an employee.",
            isConfidential: false,
            permissions: {
                Employee: { view: true, edit: false },
                "HR Executive": { view: true, edit: true },
                "HR Manager": { view: true, edit: true },
                "Global Admin": { view: true, edit: true },
            },
        },
        "Previous Experience": {
            folderName: "Previous Experience",
            description: "This section contains previous experience documents of an employee.",
            isConfidential: false,
            permissions: {},

        },
        "Employee Letters": {
            folderName: "Employee Letters",
            description: "This section contains employee letter documents.",
            isConfidential: false,
            permissions: {},
        },
        "Identity": {
            folderName: "Identity",
            description: "This section contains identity documents of an employee.",
            isConfidential: false,
            permissions: {},
        },
    });

    // Drawer temp states
    const [drawerAllowEmployeesMove, setDrawerAllowEmployeesMove] = useState(false);
    const [drawerFolderName, setDrawerFolderName] = useState("");
    const [drawerDescription, setDrawerDescription] = useState("");
    const [drawerIsConfidential, setDrawerIsConfidential] = useState(false);

    const filteredDocs = useMemo(() => {
        if (!query.trim()) return documentCategories;
        return documentCategories.filter((doc) =>
            doc.name.toLowerCase().includes(query.toLowerCase())
        );
    }, [query]);

    const activeDoc =
        documentCategories.find((doc) => doc.name === selectedDoc) || documentCategories[0];

    useEffect(() => {
        function handleClickOutside(event) {
            if (dotsMenuRef.current && !dotsMenuRef.current.contains(event.target)) {
                setShowDotsMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const openManageDrawer = () => {
        const current = folderSettings[selectedDoc];

        setDrawerAllowEmployeesMove(current?.allowEmployeesMove || false);
        setDrawerFolderName(current?.folderName || selectedDoc);
        setDrawerDescription(current?.description || "");
        setDrawerIsConfidential(current?.isConfidential || false);
        setDrawerPermissions(current?.permissions || {});

        setShowManageDrawer(true);
        setShowDotsMenu(false);
    };
    const handleUpdateSettings = () => {
        const updatedFolder = {
            folderName: drawerFolderName || selectedDoc,
            description: drawerDescription || "",
            isConfidential: drawerIsConfidential,
            allowEmployeesMove: drawerAllowEmployeesMove,
            permissions: drawerPermissions,
        };

        // Save in folder settings
        setFolderSettings((prev) => ({
            ...prev,
            [selectedDoc]: {
                ...prev[selectedDoc],
                ...updatedFolder,
            },
        }));

        // Save separate block for currently selected document
        setSavedFolders((prev) => ({
            ...prev,
            [selectedDoc]: {
                name: selectedDoc,
                ...updatedFolder,
            },
        }));

        setShowManageDrawer(false);
    };

    const renderDrawerContent = () => {
        // Imported Documents Drawer
        if (selectedDoc === "Imported Documents") {
            return (
                <div className="p-5 flex-1">
                    <p className="text-[14px] text-[#394150] mb-5 leading-6">
                        Who can move documents from the{" "}
                        <span className="font-medium">{selectedDoc}</span> folder to respective folders
                    </p>

                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={drawerAllowEmployeesMove}
                            onChange={(e) => setDrawerAllowEmployeesMove(e.target.checked)}
                            className="mt-1 h-4 w-4 rounded border border-[#c7ccd4]"
                        />

                        <div className="flex items-start gap-2">
                            <span className="text-[14px] text-[#394150]">
                                Allow employees to move imported documents
                            </span>

                            <Info size={15} className="text-[#9ca3af] mt-[2px]" />
                        </div>
                    </label>
                </div>
            );
        }

        // EXACT Degrees & Certificates UI
        if (selectedDoc === "Degrees & Certificates") {
            return (
                <div className="p-5 flex-1 bg-white">
                    <div className="grid grid-cols-2 gap-7">
                        {/* Name of Folder */}
                        <div>
                            <label className="block text-[11px] font-normal text-[#4b5563] mb-2">
                                Name of the Folder
                            </label>
                            <input
                                type="text"
                                value={drawerFolderName}
                                onChange={(e) => setDrawerFolderName(e.target.value)}
                                className="w-full h-[36px] px-3 border border-[#d9dee7] rounded-[2px] text-[12px] text-[#394150] bg-white outline-none focus:border-[#7f63ff]"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-[11px] font-normal text-[#4b5563] mb-2">
                                Description
                            </label>
                            <input
                                type="text"
                                value={drawerDescription}
                                onChange={(e) => setDrawerDescription(e.target.value)}
                                className="w-full h-[36px] px-3 border border-[#d9dee7] rounded-[2px] text-[12px] text-[#394150] bg-white outline-none focus:border-[#7f63ff]"
                            />
                        </div>
                    </div>

                    {/* Confidential checkbox */}
                    <div className="mt-5 flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={drawerIsConfidential}
                            onChange={(e) => setDrawerIsConfidential(e.target.checked)}
                            className="h-[13px] w-[13px] rounded-[2px] border border-[#c7ccd4]"
                        />
                        <span className="text-[12px] text-[#4b5563]">
                            Mark folder as confidential
                        </span>
                        <Info size={13} className="text-[#b8bec9]" />
                    </div>

                    {/* Folder permissions */}
                    <div className="mt-7">
                        <h3 className="text-[13px] font-medium text-[#394150]">
                            Folder permissions
                        </h3>
                        <p className="mt-1 text-[12px] text-[#9ca3af] leading-[18px]">
                            The below permissions can be configured for each role.
                        </p>

                        <div className="mt-5 border border-[#e5e7eb] rounded-[3px] overflow-hidden">
                            {/* Table Header */}
                            <div className="grid grid-cols-[1.4fr_1fr_1.2fr] bg-[#f7f8fb] border-b border-[#e5e7eb]">
                                <div className="px-4 py-3 text-[12px] font-medium text-[#6b7280]">Role</div>
                                <div className="px-4 py-3 text-[12px] font-medium text-[#6b7280] text-center">
                                    View Documents
                                </div>
                                <div className="px-4 py-3 text-[12px] font-medium text-[#6b7280] text-center">
                                    Add / Update Documents
                                </div>
                            </div>

                            {/* Table Rows */}
                            {Object.entries(drawerPermissions).map(([role, perms], index) => (
                                <div
                                    key={role}
                                    className={`grid grid-cols-[1.4fr_1fr_1.2fr] items-center ${index !== Object.entries(drawerPermissions).length - 1
                                        ? "border-b border-[#e5e7eb]"
                                        : ""
                                        }`}
                                >
                                    <div className="px-4 py-3 text-[12.5px] text-[#394150]">{role}</div>

                                    <div className="px-4 py-3 flex justify-center">
                                        <input
                                            type="checkbox"
                                            checked={perms.view}
                                            onChange={(e) =>
                                                setDrawerPermissions((prev) => ({
                                                    ...prev,
                                                    [role]: {
                                                        ...prev[role],
                                                        view: e.target.checked,
                                                    },
                                                }))
                                            }
                                            className="h-4 w-4 rounded border border-[#c7ccd4]"
                                        />
                                    </div>

                                    <div className="px-4 py-3 flex justify-center">
                                        <input
                                            type="checkbox"
                                            checked={perms.edit}
                                            onChange={(e) =>
                                                setDrawerPermissions((prev) => ({
                                                    ...prev,
                                                    [role]: {
                                                        ...prev[role],
                                                        edit: e.target.checked,
                                                    },
                                                }))
                                            }
                                            className="h-4 w-4 rounded border border-[#c7ccd4]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        // Other folders
        return (
            <div className="p-5 flex-1 bg-white">
                <div className="grid grid-cols-2 gap-7">
                    <div>
                        <label className="block text-[11px] font-normal text-[#4b5563] mb-2">
                            Name of the Folder
                        </label>
                        <input
                            type="text"
                            value={drawerFolderName}
                            onChange={(e) => setDrawerFolderName(e.target.value)}
                            className="w-full h-[36px] px-3 border border-[#d9dee7] rounded-[2px] text-[12px] text-[#394150] bg-white outline-none focus:border-[#7f63ff]"
                        />
                    </div>

                    <div>
                        <label className="block text-[11px] font-normal text-[#4b5563] mb-2">
                            Description
                        </label>
                        <input
                            type="text"
                            value={drawerDescription}
                            onChange={(e) => setDrawerDescription(e.target.value)}
                            className="w-full h-[36px] px-3 border border-[#d9dee7] rounded-[2px] text-[12px] text-[#394150] bg-white outline-none focus:border-[#7f63ff]"
                        />
                    </div>
                </div>

                <div className="mt-5 flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={drawerIsConfidential}
                        onChange={(e) => setDrawerIsConfidential(e.target.checked)}
                        className="h-[13px] w-[13px] rounded-[2px] border border-[#c7ccd4]"
                    />
                    <span className="text-[12px] text-[#4b5563]">
                        Mark folder as confidential
                    </span>
                    <Info size={13} className="text-[#b8bec9]" />
                </div>

                <div className="mt-7">
                    <h3 className="text-[13px] font-medium text-[#394150]">
                        Folder permissions
                    </h3>
                    <p className="mt-1 text-[12px] text-[#9ca3af] leading-[18px]">
                        The below permissions in permissions can be changed in
                    </p>
                </div>
            </div>
        );
    };
    return (
        <div className="w-full min-h-screen bg-[#f6f7fb] text-[#2f3441]">
            <div className="w-full px-2 pt-3 pb-0">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h1
                            className="font-semibold tracking-[-0.01em] text-[#2f3441]"
                            style={{ fontSize: 28, lineHeight: "34px" }}
                        >
                            Employee document settings
                        </h1>
                        <p
                            className="mt-1 text-[#7f8796] max-w-[860px]"
                            style={{ fontSize: 12.5, lineHeight: "18px" }}
                        >
                            Documents in these folders can be uploaded/filled by employee or generated from
                            letter templates by HR/Managers. They are visible in each employee&apos;s profile.
                        </p>
                    </div>

                    <button
                        className="shrink-0 rounded-[3px] border border-[#7f63ff] bg-white text-[#7f63ff] font-medium shadow-[0_0_0_3px_rgba(127,99,255,0.18)] hover:bg-[#faf8ff] transition"
                        style={{ height: 44, padding: "0 18px", fontSize: 14 }}
                    >
                        +Add Document Folder
                    </button>
                </div>

                {/* Main area */}
                <div className="grid grid-cols-[210px_1fr] gap-6 items-start">
                    {/* Sidebar */}
                    <div className="bg-white border border-[#e6e8ef] overflow-hidden h-[276px]">
                        <div className="h-[42px] border-b border-[#eceef3] px-10 relative flex items-center bg-white">
                            <Search
                                size={15}
                                strokeWidth={2.1}
                                className="absolute left-10 -translate-x-6 text-[#a7adba]"
                            />
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search"
                                className="w-full bg-transparent outline-none text-[12.5px] text-[#5d6574] placeholder:text-[#b2b8c4]"
                            />
                        </div>

                        <div className="h-[234px] overflow-y-auto">
                            {filteredDocs.map((doc) => {
                                const active = selectedDoc === doc.name;
                                return (
                                    <button
                                        key={doc.name}
                                        onClick={() => {
                                            setSelectedDoc(doc.name);
                                            setShowDotsMenu(false);
                                        }}
                                        className={`w-full h-[49px] px-14 pr-4 border-b border-[#eceef3] flex items-center text-left relative transition-colors ${active ? "bg-[#efebf7]" : "bg-white hover:bg-[#fafbfc]"
                                            }`}
                                    >
                                        <span className="absolute left-4 inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#63c9d2]">
                                            <Folder size={14} strokeWidth={2.1} className="text-white" />
                                        </span>

                                        <div className="min-w-0">
                                            <div className="truncate text-[12.8px] leading-[16px] font-medium text-[#3a4150]">
                                                {doc.name}
                                            </div>
                                            <div className="truncate mt-[2px] text-[11.5px] leading-[14px] text-[#8f96a3]">
                                                {doc.subtitle
                                                    ? doc.subtitle
                                                    : `${doc.count} document${doc.count !== 1 ? "s" : ""}`}
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    {/* Right side column */}
                    <div className="space-y-6">
                        {/* Content panel */}
                        <div className="bg-white border border-[#e6e8ef] min-h-[116px] relative">                        <div className="absolute right-3 top-3 z-30" ref={dotsMenuRef}>
                            <button
                                onClick={() => setShowDotsMenu((prev) => !prev)}
                                className="text-[#9ca3af] hover:text-[#6b7280] p-1 rounded"
                            >
                                <MoreVertical size={16} />
                            </button>

                            {showDotsMenu && (
                                <div className="absolute right-0 top-8 w-[220px] rounded-[4px] border border-[#e6e8ef] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)] overflow-hidden">
                                    <button
                                        className="w-full px-4 py-3 text-left text-[13px] text-[#394150] hover:bg-[#f7f8fb] transition"
                                        onClick={openManageDrawer}
                                    >
                                        Manage Folder Settings
                                    </button>
                                </div>
                            )}
                        </div>

                            <div className="px-4 py-4">
                                <div className="flex items-start gap-3">
                                    <span className="mt-[2px] inline-flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#63c9d2]">
                                        <Folder size={12} strokeWidth={2.1} className="text-white" />
                                    </span>

                                    <div>
                                        <h2 className="text-[14px] leading-[18px] font-semibold text-[#394150]">
                                            {activeDoc.name}
                                        </h2>
                                        <p className="mt-1 text-[11.5px] leading-[15px] text-[#98a0ad]">
                                            {folderSettings[selectedDoc]?.description ||
                                                `This folder is used to manage ${activeDoc.name.toLowerCase()} documents.`}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 pl-[36px]">
                                    <div className="text-[10px] font-semibold tracking-[0.08em] text-[#9aa1ae] uppercase">
                                        Permissions
                                    </div>
                                    <p className="mt-2 text-[12.5px] leading-[18px] text-[#4c5563] max-w-[720px]">
                                        {selectedDoc === "Imported Documents"
                                            ? folderSettings[selectedDoc]?.allowEmployeesMove
                                                ? "HR Manager, HR Executive, Global Admin and Employees can move the documents into the respective folder."
                                                : "Only HR Manager, HR Executive and Global Admin can move the documents into the respective folder."
                                            : folderSettings[selectedDoc]?.isConfidential
                                                ? "This folder is marked as confidential."
                                                : "This folder follows standard employee document access permissions."}
                                    </p>
                                </div>
                            </div>

                        </div>
                        {savedFolders[selectedDoc] && (
                            <div className="bg-white border border-[#e6e8ef] p-5">
                                <div className="mb-4">
                                    <h3 className="text-[14px] font-semibold text-[#394150]">
                                        Saved Folder Block
                                    </h3>
                                    <p className="mt-1 text-[12px] text-[#8f96a3]">
                                        This saved section belongs to {selectedDoc}.
                                    </p>
                                </div>

                                <div className="border border-[#e6e8ef] rounded-[6px] bg-[#fafbff] p-5">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-[15px] font-semibold text-[#394150]">
                                                {savedFolders[selectedDoc].folderName || savedFolders[selectedDoc].name}
                                            </h3>
                                            <p className="mt-1 text-[12.5px] text-[#7f8796] leading-[18px]">
                                                {savedFolders[selectedDoc].description || "No description added."}
                                            </p>
                                        </div>

                                        {savedFolders[selectedDoc].isConfidential && (
                                            <span className="text-[11px] px-2 py-1 rounded bg-red-50 text-red-600 border border-red-200">
                                                Confidential
                                            </span>
                                        )}
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-[#eceef3]">
                                        <p className="text-[12.5px] text-[#4c5563]">
                                            {savedFolders[selectedDoc].allowEmployeesMove
                                                ? "Employees are allowed to move documents."
                                                : "Employees are not allowed to move documents."}
                                        </p>

                                        <button className="mt-4 rounded-[4px] border border-[#7f63ff] bg-white text-[#7f63ff] font-medium px-4 py-2 text-[13px] hover:bg-[#faf8ff] transition">
                                            + Add Folder
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {showManageDrawer && (
                <div
                    className="fixed inset-0 z-50 flex justify-end bg-black/20"
                    onClick={() => setShowManageDrawer(false)}
                >
                    <div
                        className="w-[760px] h-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.12)] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Drawer Header */}
                        <div className="bg-gray-800 px-5 py-4 border-b border-[#e5e7eb] flex items-center justify-between">
                            <h2 className="text-[16px] font-semibold text-white">
                                Edit {selectedDoc}
                            </h2>

                            <button
                                onClick={() => setShowManageDrawer(false)}
                                className="text-white hover:text-gray-300"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Dynamic Drawer Content */}
                        {renderDrawerContent()}

                        {/* Drawer Footer */}
                        <div className="px-5 py-4 border-t border-[#e5e7eb] flex justify-end gap-3">
                            <button
                                onClick={() => setShowManageDrawer(false)}
                                className="px-4 py-2 text-[14px] font-medium text-[#394150] bg-white border border-[#d1d5db] rounded hover:bg-gray-50 transition"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleUpdateSettings}
                                className="px-5 py-2 text-[14px] font-medium text-white bg-[#7f63ff] rounded hover:bg-[#6e55e6] transition"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}