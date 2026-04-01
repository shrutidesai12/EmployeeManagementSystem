import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiMoreHorizontal } from "react-icons/fi";
import RequestReplacementDrawer from "./RequestReplacementDrawer";
import AssetRequests from "./AssetRequests";

const dummyAssignedAssets = [
    {
        id: 1,
        type: "Laptop",
        name: "MacBook Pro",
        assetId: "AS001",
        category: "Electronics",
        assignedOn: "2023-08-01",
        acknowledgement: "Yes",
        condition: "Good",
    },
    {
        id: 2,
        type: "Monitor",
        name: "Dell 27 inch",
        assetId: "AS002",
        category: "Electronics",
        assignedOn: "2023-08-05",
        acknowledgement: "No",
        condition: "Good",
    },
    {
        id: 3,
        type: "Chair",
        name: "Ergonomic Chair",
        assetId: "AS003",
        category: "Furniture",
        assignedOn: "2023-09-01",
        acknowledgement: "Yes",
        condition: "Request placement",
    },
];

export default function AssetScreen() {
    const [activeTab, setActiveTab] = useState("Assigned Asset");
    const [searchTerm, setSearchTerm] = useState("");
    const [popupOpenId, setPopupOpenId] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedAsset, setSelectedAsset] = useState(null);
    const popupRef = useRef(null);
    const filteredAssets = dummyAssignedAssets.filter(
        (asset) =>
            asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            asset.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            asset.assetId.toLowerCase().includes(searchTerm.toLowerCase())
    );


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setPopupOpenId(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const handleCreateRequest = () => {
  setSelectedAsset(null);   // empty drawer
  setIsDrawerOpen(true);    // open drawer
};

    return (
        <div className=" min-h-screen  pt-2 bg-gray-100">
            {/* Tabs */}
            <div className="flex  mb-6 -mt-7 bg-white max-w-8xl">
                {["Assigned Asset", "Asset Requests"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2  font-medium ${activeTab === tab
                            ? "bg-blue-100 border-gray-300 text-blue-800"
                            : " text-gray-600"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>



            {activeTab === "Assigned Asset" && (
                <>
                    {/* Heading outside table */}
                    <div className="mb-2">
                        <h2 className="text-xl font-semibold text-gray-800">Assigned Assets</h2>
                        <p className="text-gray-500 text-sm mt-1">
                            Assets that are currently assigned to you
                        </p>
                    </div>

                    {/* Table container with search bar at top-right */}
                    <div className="bg-white rounded-sm shadow relative pt-4">
                        {/* Search bar at top-right */}
                        <div className="absolute right-4 top-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search assets..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        {/* Table with margin-top to avoid overlap with search bar */}
                        <div className="overflow-x-auto mt-12">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 text-gray-500 text-sm ">
                                        <th className="p-3 text-sm">Asset Type</th>
                                        <th className="p-3 text-sm">Asset Name</th>
                                        <th className="p-3 text-sm">Asset ID</th>
                                        <th className="p-3 text-sm">Asset Category</th>
                                        <th className="p-3 text-sm">Assigned On</th>
                                        <th className="p-3 text-sm">Acknowledgements</th>
                                        <th className="p-3 text-sm">Current Condition</th>
                                        <th className="p-3 text-sm">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredAssets.map((asset) => (
                                        <tr key={asset.id} className="hover:bg-gray-50 border-b border-gray-200 text-sm">
                                            <td className="p-3  ">{asset.type}</td>
                                            <td className="p-3 ">{asset.name}</td>
                                            <td className="p-3 ">{asset.assetId}</td>
                                            <td className="p-3 ">{asset.category}</td>
                                            <td className="p-3 ">{asset.assignedOn}</td>
                                            <td className="p-3 pl-10">{asset.acknowledgement}</td>
                                            <td className="p-3 ">{asset.condition}</td>

                                            <td className=" px-0 py-1 relative">
                                                <button
                                                    onClick={() =>
                                                        setPopupOpenId(popupOpenId === asset.id ? null : asset.id)
                                                    }
                                                    className="hover:bg-gray-200"
                                                >
                                                    <FiMoreHorizontal className="w-4 h-4" />
                                                </button>

                                                {/* Popup Menu */}
                                                {popupOpenId === asset.id && (
                                                    <div
                                                        ref={popupRef}
                                                        className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50"
                                                    >
                                                        <button
                                                            onClick={() => {
                                                                setPopupOpenId(null);
                                                                alert("Marked as Good");
                                                            }}
                                                            className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                                        >
                                                            Good
                                                        </button>

                                                        <button
                                                            onClick={() => {
                                                                setPopupOpenId(null);
                                                                setSelectedAsset(asset);   // pass selected asset
                                                                setIsDrawerOpen(true);     // open drawer// 🔥 open drawer
                                                            }}
                                                            className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                                        >
                                                            Request Replacement
                                                        </button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}

                                    {filteredAssets.length === 0 && (
                                        <tr>
                                            <td colSpan={8} className="p-3 text-center text-gray-500">
                                                No assets found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}

           {activeTab === "Asset Requests" && (
  <AssetRequests onCreateRequest={handleCreateRequest} />
)}

           <RequestReplacementDrawer
  isOpen={isDrawerOpen}
  onClose={() => setIsDrawerOpen(false)}
  asset={selectedAsset}
/>
        </div>
    );
}