import React, { useMemo, useState } from "react";
import {
    FaSearch,
    FaFolder,
    FaPlus,
    FaEllipsisV,
    FaRegTrashAlt,
    FaRegEdit,
} from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import { TbFolderOpen } from "react-icons/tb";
import AddDocumentFolderDrawer from "./AddFolderDrawer";
import AddOrganizationDocumentDrawer from "./AddDocumentDrawer";

const organizationFolders = [
    {
        name: "Offer Letter",
        count: "2 documents",
        warning: true,
        description: "Offer Letter Submitted by the employees",
    },
    {
        name: "Employee Agreement",
        count: "1 document",
        warning: true,
        description: "Employee agreements and signed contracts",
    },
    {
        name: "Employee Medical Records",
        count: "1 document",
        warning: false,
        description: "Medical and health related employee records",
    },
    {
        name: "Payroll Information",
        count: "1 document",
        warning: false,
        description: "Payroll and salary related information",
    },
    {
        name: "Employee Handbook",
        count: "1 document",
        warning: false,
        description: "Company handbook and internal policies",
    },
];

const organizationDocuments = {
    "Offer Letter": [
        {
            title: "Offer Letter",
            description: "Offer Letters of the employee",
            acknowledgement: "No",
            views: "1 of 147",
            viewedText: "Viewed",
            expiration: "EXPIRED",
            expirationDate: "30 Sept 2025",
            size: "25.00 KB",
            updatedDate: "04 Sep 2025",
            updatedBy: "Mark Scottfield",
        },
        {
            title: "Offer Letter Sample",
            description: "-",
            acknowledgement: "No",
            views: "0 of 147",
            viewedText: "Viewed",
            expiration: "No",
            expirationDate: "",
            size: "22.57 KB",
            updatedDate: "13 May 2023",
            updatedBy: "Mark Scottfield",
        },
    ],
    "Employee Agreement": [
        {
            title: "Employment Contract",
            description: "Signed employee contract",
            acknowledgement: "Yes",
            views: "14 of 147",
            viewedText: "Acknowledged",
            expiration: "No",
            expirationDate: "",
            size: "18.12 KB",
            updatedDate: "21 Jan 2025",
            updatedBy: "HR Admin",
        },
    ],
    "Employee Medical Records": [
        {
            title: "Medical Insurance Form",
            description: "Medical enrollment form",
            acknowledgement: "No",
            views: "5 of 147",
            viewedText: "Viewed",
            expiration: "No",
            expirationDate: "",
            size: "14.76 KB",
            updatedDate: "02 Mar 2025",
            updatedBy: "Health Team",
        },
    ],
    "Payroll Information": [
        {
            title: "Payroll Structure",
            description: "Salary and payroll breakdown",
            acknowledgement: "No",
            views: "23 of 147",
            viewedText: "Viewed",
            expiration: "No",
            expirationDate: "",
            size: "16.45 KB",
            updatedDate: "15 Feb 2025",
            updatedBy: "Finance Team",
        },
    ],
    "Employee Handbook": [
        {
            title: "Company Handbook 2025",
            description: "Employee rules and guidelines",
            acknowledgement: "Yes",
            views: "147 of 147",
            viewedText: "Acknowledged",
            expiration: "No",
            expirationDate: "",
            size: "31.09 KB",
            updatedDate: "05 Apr 2025",
            updatedBy: "People Ops",
        },
    ],
};

const accessInfo = [
    ["Departments with access", "All Departments Selected"],
    ["Locations with access", "All Locations Selected"],
    ["Legal entities with access", "All Legal Entities Selected"],
    ["Business Units with access", "All Business Units Selected"],
    ["Worker types with access", "All Worker Types Selected"],
];

const OrganizationDocument = () => {
    const [selectedFolder, setSelectedFolder] = useState("Offer Letter");
    const [search, setSearch] = useState("");
    const [isAddDocumentOpen, setIsAddDocumentOpen] = useState(false);
    const [isAddOrganizationDocumentOpen, setIsAddOrganizationDocumentOpen] = useState(false);

    const selectedFolderData = organizationFolders.find(
        (folder) => folder.name === selectedFolder
    );

    const filteredFolders = useMemo(() => {
        return organizationFolders.filter((folder) =>
            folder.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    const documents = organizationDocuments[selectedFolder] || [];

    return (
        <div
            className="w-full p-3 md:p-4 text-[12px]"
            style={{ backgroundColor: "var(--page-bg, #f8fafc)" }}
        >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div className="max-w-3xl">
                    <h1
                        className="document-heading "
                        style={{ color: "var(--text-color)" }}
                    >
                        Organization documents
                    </h1>
                    <p
                        className="text-[12px] leading-5"
                        style={{ color: "var(--muted-text)" }}
                    >
                        Documents in these folders can be uploaded/filled by admin. All
                        these documents are available for viewing by all employees.
                    </p>
                </div>

                <button
                    onClick={() => setIsAddDocumentOpen(true)}
                    className="px-3 py-2 rounded-md text-[12px] border flex items-center gap-2"
                    style={{
                        borderColor: "var(--primary-color)",
                        color: "var(--primary-color)",
                        backgroundColor: "var(--white)",
                    }}
                >
                    <FaPlus size={9} />
                    Add document folder
                </button>
            </div>

            {/* Layout */}
            <div className="grid grid-cols-12 gap-4">
                {/* Sidebar */}
                <div className="col-span-12 lg:col-span-2">
                    <div
                        className="rounded-xl overflow-hidden shadow-md"
                        style={{
                            backgroundColor: "var(--white)",
                            border: "1px solid var(--border-color)",
                        }}
                    >
                        {/* Search */}
                        <div className="p-3">
                            <div
                                className="flex items-center gap-2 px-3 py-2 rounded-md border"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--white)",
                                }}
                            >
                                <FaSearch size={11} style={{ color: "var(--muted-text)" }} />
                                <input
                                    type="text"
                                    placeholder="Search folder"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full text-[12px] outline-none bg-transparent"
                                    style={{ color: "var(--text-color)" }}
                                />
                            </div>
                        </div>

                        {/* Folder List */}
                        <div className="px-2 pb-3 max-h-[550px] overflow-y-auto">
                            {filteredFolders.length > 0 ? (
                                filteredFolders.map((folder, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedFolder(folder.name)}
                                        className="flex items-start justify-between gap-2 px-3 py-3 rounded-lg cursor-pointer mb-1 transition-all"
                                        style={{
                                            backgroundColor:
                                                selectedFolder === folder.name
                                                    ? "var(--table-head-bg)"
                                                    : "transparent",
                                            border:
                                                selectedFolder === folder.name
                                                    ? "1px solid var(--border-color)"
                                                    : "1px solid transparent",
                                        }}
                                    >
                                        <div className="flex gap-2 min-w-0">
                                            <div
                                                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                                                style={{ backgroundColor: "#9ADBE8" }}
                                            >
                                                <TbFolderOpen
                                                    size={13} style={{ color: "white" }} />
                                            </div>
                                            <div className="min-w-0">
                                                <p
                                                    className="text-[12px] font-semibold truncate"
                                                    style={{ color: "var(--text-color)" }}
                                                >
                                                    {folder.name}
                                                </p>
                                                <p
                                                    className="text-[11px]"
                                                    style={{ color: "var(--muted-text)" }}
                                                >
                                                    {folder.count}
                                                </p>
                                            </div>
                                        </div>

                                        {folder.warning && (
                                            <IoWarningOutline
                                                size={13}
                                                style={{ color: "#ef4444", marginTop: 2 }}
                                            />
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p
                                    className="px-3 py-4 text-[12px]"
                                    style={{ color: "var(--muted-text)" }}
                                >
                                    No folders found
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-span-12 lg:col-span-10 space-y-4">
                    {/* Folder Info */}
                    <div
                        className="rounded-xl p-4 shadow-sm"
                        style={{
                            backgroundColor: "var(--white)",
                            border: "1px solid var(--border-color)",
                        }}
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="flex gap-3">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                                    style={{ backgroundColor: "#9adbe8" }}
                                >
                                    <FaFolder size={15} color="white" />
                                </div>

                                <div>
                                    <h3
                                        className="text-[15px] font-semibold mb-1"
                                        style={{ color: "var(--text-color)" }}
                                    >
                                        {selectedFolder}
                                    </h3>
                                    <p
                                        className="text-[12px]"
                                        style={{ color: "var(--muted-text)" }}
                                    >
                                        {selectedFolderData?.description || "Folder details"}
                                    </p>
                                </div>
                            </div>

                            <button className="self-start">
                                <FaEllipsisV
                                    size={12}
                                    style={{ color: "var(--muted-text)" }}
                                />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mt-5">
                            {accessInfo.map(([label, value], idx) => (
                                <div key={idx}>
                                    <p
                                        className="text-[11px] mb-1"
                                        style={{ color: "var(--muted-text)" }}
                                    >
                                        {label}
                                    </p>
                                    <p
                                        className="text-[12px] font-medium leading-5"
                                        style={{ color: "var(--text-color)" }}
                                    >
                                        {value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Table Card */}
                    <div
                        className="rounded-xl overflow-hidden shadow-sm"
                        style={{
                            backgroundColor: "var(--white)",
                            border: "1px solid var(--border-color)",
                        }}
                    >
                        {/* Action Buttons */}
                        <div
                            className="p-3 flex flex-wrap gap-2"
                            style={{
                                borderBottom: "1px solid var(--border-color)",
                            }}
                        >
                            <button
                                className="px-3 py-2 rounded-md text-[12px] border"
                                style={{
                                    borderColor: "#d6ccfa",
                                    color: "#8b7de0",
                                    backgroundColor: "#faf8ff",
                                }}
                            >
                                Remind pending acknowledgements
                            </button>

                            <button
  onClick={() => setIsAddOrganizationDocumentOpen(true)}
  className="px-3 py-2 rounded-md text-[12px] border flex items-center gap-2"
  style={{
    borderColor: "var(--primary-color)",
    color: "var(--primary-color)",
    backgroundColor: "var(--white)",
  }}
>
  <FaPlus size={9} />
  Add document
</button>
                            <button
                                className="px-3 py-2 rounded-md text-[12px] border"
                                style={{
                                    borderColor: "var(--primary-color)",
                                    color: "var(--primary-color)",
                                    backgroundColor: "var(--white)",
                                }}
                            >
                                View expired documents (1)
                            </button>
                        </div>

                        {/* Table */}
                        <div className="w-full ">
                            <table className="w-full table-fixed text-[11px] ">
                                <thead style={{ backgroundColor: "var(--table-head-bg)" }}>
                                    <tr>

                                        <th className="px-4 py-3 text-left font-medium">
                                            DOCUMENT TITLE
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium">
                                            DESCRIPTION
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium">
                                            ACKNOWLEDGEMENT REQ
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium">
                                            VIEWS / ACKNOWLEDGEMENT
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium">
                                            EXPIRATION DATE
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium">SIZE</th>
                                        <th className="px-4 py-3 text-left font-medium">
                                            LAST UPDATED
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium">
                                            ACTIONS
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {documents.length > 0 ? (
                                        documents.map((doc, index) => (
                                            <tr
                                                key={index}
                                                style={{
                                                    backgroundColor: "var(--white)",
                                                    borderTop: `1px solid var(--border-color)`,
                                                }}
                                                className="hover:bg-slate-50"
                                            >


                                                <td
                                                    className="px-4 py-4 align-top font-semibold whitespace-nowrap"
                                                    style={{ color: "var(--primary-color)" }}
                                                >
                                                    {doc.title}
                                                </td>

                                                <td
                                                    className="px-4 py-4 align-top"
                                                    style={{ color: "var(--text-color)" }}
                                                >
                                                    {doc.description}
                                                </td>

                                                <td
                                                    className="px-4 py-4 align-top"
                                                    style={{ color: "var(--text-color)" }}
                                                >
                                                    {doc.acknowledgement}
                                                </td>

                                                <td className="px-4 py-4 align-top">
                                                    <p
                                                        className="font-medium"
                                                        style={{ color: "var(--primary-color)" }}
                                                    >
                                                        {doc.views}
                                                    </p>
                                                    <p
                                                        className="text-[11px]"
                                                        style={{ color: "var(--muted-text)" }}
                                                    >
                                                        {doc.viewedText}
                                                    </p>
                                                </td>

                                                <td className="px-4 py-4 align-top">
                                                    {doc.expiration === "EXPIRED" ? (
                                                        <>
                                                            <span
                                                                className="inline-block px-2 py-1 rounded-full text-[10px] mb-1 font-medium"
                                                                style={{
                                                                    backgroundColor: "#fde8e8",
                                                                    color: "#ef4444",
                                                                }}
                                                            >
                                                                EXPIRED
                                                            </span>
                                                            <p
                                                                className="text-[11px]"
                                                                style={{ color: "var(--muted-text)" }}
                                                            >
                                                                {doc.expirationDate}
                                                            </p>
                                                        </>
                                                    ) : (
                                                        <span style={{ color: "var(--text-color)" }}>No</span>
                                                    )}
                                                </td>

                                                <td
                                                    className="px-4 py-4 align-top whitespace-nowrap"
                                                    style={{ color: "var(--text-color)" }}
                                                >
                                                    {doc.size}
                                                </td>

                                                <td className="px-4 py-4 align-top whitespace-nowrap">
                                                    <p style={{ color: "var(--text-color)" }}>
                                                        {doc.updatedDate}
                                                    </p>
                                                    <p
                                                        className="text-[11px]"
                                                        style={{ color: "var(--muted-text)" }}
                                                    >
                                                        {doc.updatedBy}
                                                    </p>
                                                </td>

                                                <td className="px-4 py-4 align-top">
                                                    <div className="flex items-center gap-3">
                                                        <button>
                                                            <FaRegEdit
                                                                size={13}
                                                                style={{ color: "var(--muted-text)" }}
                                                            />
                                                        </button>
                                                        <button>
                                                            <FaRegTrashAlt
                                                                size={13}
                                                                style={{ color: "var(--muted-text)" }}
                                                            />
                                                        </button>
                                                        <button>
                                                            <FaEllipsisV
                                                                size={12}
                                                                style={{ color: "var(--muted-text)" }}
                                                            />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="9"
                                                className="px-4 py-8 text-center text-[12px]"
                                                style={{ color: "var(--muted-text)" }}
                                            >
                                                No documents found in this folder
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Footer */}
                        <div
                            className="px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-6 text-[12px]"
                            style={{
                                borderTop: "1px solid var(--border-color)",
                                color: "var(--muted-text)",
                            }}
                        >
                            <span>
                                1 to {documents.length} of {documents.length}
                            </span>
                            <span style={{ color: "var(--text-color)" }}>Page 1 of 1</span>
                        </div>
                    </div>
                </div>
            </div>
            <AddDocumentFolderDrawer
                isOpen={isAddDocumentOpen}
                onClose={() => setIsAddDocumentOpen(false)}
            />
            <AddOrganizationDocumentDrawer
  isOpen={isAddOrganizationDocumentOpen}
  onClose={() => setIsAddOrganizationDocumentOpen(false)}
/>
        </div>
    );
};

export default OrganizationDocument;