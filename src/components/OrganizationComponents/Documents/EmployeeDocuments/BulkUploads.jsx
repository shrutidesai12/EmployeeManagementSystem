import React, { useState, useRef, useEffect } from "react";
import { MoreVertical } from "lucide-react";

export default function BulkUploads() {
    const [openMenuIndex, setOpenMenuIndex] = useState(null);
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
    const menuRef = useRef(null);
    const data = [
        {
            id: "6839",
            uploadedBy: "Shruti Desai",
            uploadedOn: "01 Apr, 2026",
            success: 120,
            errors: 5,
        },

    ];
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenuIndex(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            {/* 🔹 Heading + Button */}
            <div className="flex items-start justify-between mb-2">

                {/* Left Side (Text) */}
                <div>
                    <h2 className="text-lg font-semibold mb-1">
                        Bulk upload documents
                    </h2>

                    <p className="text-sm text-gray-500">
                        You can upload multiple employee documents and track its status
                    </p>
                </div>

                {/* Right Side Button */}
                <button className="px-4 py-2 text-sm font-medium text-white bg-[#718FC2] rounded-md hover:bg-[#5f7fb5]">
                    + Add new documents
                </button>

            </div>

            {/* 🔹 Sub Heading */}
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Pending batches
            </h3>

            {/* 🔹 Table */}
            <div className="overflow-x-auto border rounded border-gray-300 bg-white">
                <table className="w-full text-sm">

                    {/* Header */}
                    <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                        <tr>
                            <th className="px-4 py-3 text-left">Docs</th>
                            <th className="px-4 py-3 text-left">Uploaded By</th>
                            <th className="px-4 py-3 text-left">Uploaded On</th>
                            <th className="px-4 py-3 text-left">Successful Documents</th>
                            <th className="px-4 py-3 text-left">Errors</th>
                            <th className="px-4 py-3 text-right"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, index) => (
                            <tr
                                key={index}
                                className="border-t hover:bg-gray-50 border-gray-200 bg-white"
                            >
                                <td className="px-4 py-3">{item.id}</td>
                                <td className="px-4 py-3">{item.uploadedBy}</td>
                                <td className="px-4 py-3">{item.uploadedOn}</td>

                                <td className="px-4 py-3">
                                    <div className="pl-10 text-gray-600 font-medium">
                                        {item.success}
                                    </div>
                                </td>

                                <td className="px-4 py-3">
                                    <div className="pl-4 text-gray-600 font-medium">
                                        {item.errors}
                                    </div>
                                </td>

                                {/* ACTION COLUMN */}
                                <td className="px-4 py-3 text-right relative">
                                    <div className="flex items-center justify-end gap-3">

                                        {/* Open Button */}
                                        <button className="px-3 py-1.5 text-sm text-blue-600 border border-blue-300 rounded-md hover:bg-blue-50">
                                            Open
                                        </button>

                                        {/* Menu Button */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation(); // ✅ VERY IMPORTANT

                                                const rect = e.currentTarget.getBoundingClientRect();

                                                setMenuPosition({
                                                    top: rect.bottom + window.scrollY,
                                                    left: rect.right - 200, // adjust width
                                                });

                                                setOpenMenuIndex(openMenuIndex === index ? null : index);
                                            }}
                                            className="p-1 rounded hover:bg-gray-200"
                                        >
                                            <MoreVertical size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            {openMenuIndex !== null && (
                <div
                    ref={menuRef}
                    className="fixed w-56 bg-white border rounded-md shadow-lg z-50 border-gray-200"
                    style={{
                        top: menuPosition.top,
                        left: menuPosition.left,
                    }}
                >
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                        Discard unmapped documents
                    </button>

                    <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                        🗑 Discard batch
                    </button>
                </div>
            )}
        </div>
    );
}