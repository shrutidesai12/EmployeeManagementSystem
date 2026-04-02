import React, { useMemo, useState } from "react";
import { FaSearch, FaRegFolderOpen } from "react-icons/fa";
import { LiaStickyNoteSolid } from "react-icons/lia";
import { MdOutlineWatchLater } from "react-icons/md";
import OrganizationDocument from "./OrganizationDocument";
import EmployeeDocuments from "../Documents/EmployeeDocuments/EmployeeDocuments";


const documentTemplatesData = [
    {
        name: "Employment Agreement",
        folder: "HR Docs",
        actionType: "Generate",
        lastUsed: "2026-03-30",
    },
    {
        name: "NDA Template",
        folder: "Legal",
        actionType: "Edit",
        lastUsed: "Not Generated",
    },
    {
        name: "Leave Policy",
        folder: "HR Docs",
        actionType: "View",
        lastUsed: "2026-03-29",
    },
];


const DocumentScreen = () => {
    const [activeTab, setActiveTab] = useState("templates");
    const [actionTypeFilter, setActionTypeFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [search, setSearch] = useState("");
    const [isAddDocumentOpen, setIsAddDocumentOpen] = useState(false);

    const filteredData = useMemo(() => {
        return documentTemplatesData.filter((item) => {
            return (
                (actionTypeFilter ? item.actionType === actionTypeFilter : true) &&
                (statusFilter ? item.status === statusFilter : true) &&
                (search
                    ? item.name.toLowerCase().includes(search.toLowerCase())
                    : true)
            );
        });
    }, [actionTypeFilter, statusFilter, search]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setActionTypeFilter("");
        setStatusFilter("");
        setSearch("");
    };

    return (
        <div
            className="document-screen"
            style={{ backgroundColor: "var(--bg-color)" }}
        >
            {/* FULL WIDTH TABS */}
            <div
                className="w-full bg-white border-b"
                style={{ borderColor: "var(--border-color)" }}
            >
                <div className="flex flex-wrap gap-8 px-6">
                    {[
                        { key: "templates", label: "Document Templates" },
                        { key: "employee", label: "Employee Document" },
                        { key: "organization", label: "Organization Document" },
                    ].map((tab) => {
                        const isActive = activeTab === tab.key;

                        return (
                            <div
                                key={tab.key}
                                className="relative flex items-center justify-center"
                            >
                                <button
                                    onClick={() => handleTabChange(tab.key)}
                                    className="py-4 text-sm font-medium transition-colors duration-200"
                                    style={{
                                        color: isActive
                                            ? "var(--primary-color)"
                                            : "var(--muted-text)",
                                    }}
                                >
                                    {tab.label}
                                </button>

                                {isActive && (
                                    <div
                                        className="absolute left-1/2 -translate-x-1/2 bottom-[1px] w-0 h-0"
                                        style={{
                                            borderLeft: "7px solid transparent",
                                            borderRight: "7px solid transparent",
                                            borderBottom: "7px solid var(--primary-color)",
                                        }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            {activeTab === "templates" && (
                <div className="document-content">
                    {/* Heading */}
                    <div className="document-header">
                        <h1
                            className="document-heading"
                            style={{ color: "var(--text-color)" }}
                        >
                            Document Templates
                        </h1>
                        <p
                            className="document-subheading"
                            style={{ color: "var(--muted-text)" }}
                        >
                            Generate Agreement,employee  letters or  compliance forms and  send for signiture/upload/acknowledgement
                        </p>
                    </div>

                    {/* ONE SINGLE CONTAINER */}
                    <div
                        className="rounded-lg shadow overflow-hidden"
                        style={{
                            backgroundColor: "var(--white)",
                            border: "1px solid var(--border-color)",
                        }}
                    >
                        {/* Filter Section */}
                        <div
                            className="p-4 flex flex-col md:flex-row md:items-end gap-4"
                            style={{
                                borderBottom: "1px solid var(--border-color)",
                            }}
                        >
                            <div className="document-filter-item">
                                <select
                                    value={actionTypeFilter}
                                    onChange={(e) => setActionTypeFilter(e.target.value)}
                                    className="document-control"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        backgroundColor: "var(--white)",
                                        color: actionTypeFilter ? "var(--text-color)" : "var(--muted-text)",
                                    }}
                                >
                                    <option value="" disabled hidden>
                                        Action Type
                                    </option>
                                    <option value="Generate">Generate</option>
                                    <option value="Edit">Edit</option>
                                    <option value="View">View</option>
                                    <option value="Upload">Upload</option>
                                </select>
                            </div>

                            <div className="document-filter-item">
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className="document-control"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        backgroundColor: "var(--white)",
                                        color: statusFilter ? "var(--text-color)" : "var(--muted-text)",
                                    }}
                                >
                                    <option value="" disabled hidden>
                                        Template Status
                                    </option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="document-search-wrapper">
                                <div
                                    className="document-search-box"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        backgroundColor: "var(--white)",
                                    }}
                                >
                                    <FaSearch
                                        size={14}
                                        style={{
                                            color: "var(--muted-text)", marginLeft: "4px",
                                        }}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="document-search-input"
                                        style={{
                                            color: "var(--text-color)",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table
                                className="document-table"
                                style={{ color: "var(--text-color)" }}
                            >
                                <thead style={{ backgroundColor: "var(--table-head-bg)" }}>
                                    <tr>
                                        <th className="document-th">Document Name</th>
                                        <th className="document-th">Folder</th>
                                        <th className="document-th">Action Type</th>
                                        <th className="document-th">Last Used</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredData.length > 0 ? (
                                        filteredData.map((doc, index) => (
                                            <tr
                                                key={index}
                                                style={{
                                                    backgroundColor: "var(--white)",
                                                }}
                                            >
                                                <td
                                                    className="document-td"
                                                    style={{
                                                        borderColor: "var(--border-color)",
                                                        color: "var(--primary-color)",
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    {doc.name}
                                                </td>
                                                <td
                                                    className="document-td"
                                                    style={{ borderColor: "var(--border-color)", color: "var(--muted-text)" }}
                                                >
                                                    <div className="document-folder-cell">
                                                        <FaRegFolderOpen
                                                            size={14}
                                                            style={{ color: "var(--muted-text)" }}
                                                        />
                                                        <span>{doc.folder}</span>
                                                    </div>
                                                </td>
                                                <td
                                                    className="document-td"
                                                    style={{ borderColor: "var(--border-color)", color: "var(--muted-text)" }}
                                                >
                                                    <div className="document-folder-cell">
                                                        <LiaStickyNoteSolid
                                                            size={14}
                                                            style={{ color: "var(--muted-text)" }}
                                                        />
                                                        <span>{doc.actionType}</span>
                                                    </div>
                                                </td>
                                                <td
                                                    className="document-td"
                                                    style={{ borderColor: "var(--border-color)", color: "var(--muted-text)" }}
                                                >
                                                    {doc.lastUsed !== "Not Generated" ? (
                                                        <div className="document-last-used-cell">
                                                            <MdOutlineWatchLater
                                                                size={16}
                                                                style={{ color: "var(--muted-text)" }}
                                                            />
                                                            <span>{doc.lastUsed}</span>
                                                        </div>
                                                    ) : (
                                                        <span>Not Generated</span>
                                                    )}
                                                </td>


                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="5"
                                                className="document-empty-state"
                                                style={{ color: "var(--muted-text)" }}
                                            >
                                                No records found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
            {activeTab === "employee" && (
                <div className="document-content">
                    <div className="document-header">
                        <h1
                            className="document-heading"
                            style={{ color: "var(--text-color)" }}
                        >
                            Employee Document
                        </h1>
                        <p
                            className="document-subheading"
                            style={{ color: "var(--muted-text)" }}
                        >
                            Employee document screen goes here
                        </p>
                    </div>

                    {/* 👇 Your actual screen */}
                    <EmployeeDocuments />
                </div>
            )}
            {activeTab === "organization" && <OrganizationDocument />}

        </div>
    );
};

export default DocumentScreen;


