import React from "react";
import { RiShareBoxFill } from "react-icons/ri";

export default function QuickLinks() {
    const links = [
        "EPF UAN LOAN",
        "About Keka Technologies",
        "Tax and Deduction",
        "Income Tax E-Filing",
        "Guest Internet Access",
        "Hackathon"
    ];

    return (
        <div className="bg-white shadow  p-4 space-y-3 w-full max-w-7xl mx-auto">
            <h3 className="font-semibold text-gray-700 mb-2 text-lg">Quick Links</h3>
            <p className="text-sm text-gray-500">list of the links that is used to make faster </p>
            <div className="flex flex-wrap gap-2">
                {links.map((link) => (
                    <div
                        key={link}
                        className="flex items-center gap-1 border px-3 py-1 rounded text-xs text-green-600 border-gray-200"          >
                        <span>{link}</span>
                        <RiShareBoxFill size={14} className="text-green-600" />
                    </div>
                ))}
            </div>
        </div>
    );
}