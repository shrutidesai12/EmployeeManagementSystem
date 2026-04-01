
import React, { useState } from "react";
import KPICard from "../../components/ui/KPICard";
import {
    Calendar,
    Clock,
    FileText,
    ShieldCheck,
} from "lucide-react";
import { FaRegCalendarAlt } from "react-icons/fa";
import LeaveTypesTable from "./LeaveTypesTable";
import { useNavigate } from "react-router-dom";
import PendingLeavesContent from "../../components/ui/PendingLeavesContent";
import AllLeaveRequests from "./AllLeaveRequests";
import MyLeaves from "./MyLeaves";


/* ================= DATA ================= */

const leaveTypes = [
    {
        title: "Annual Leave",
        days: "21 days/year",
        desc: "Planned vacation and personal time off",
        carry: 5,
        forward: 2,
        progress: 70,
    },
    {
        title: "Sick Leave",
        days: "10 days/year",
        desc: "Medical and health-related leave",
        carry: 3,
        forward: 1,
        progress: 40,
    },
    {
        title: "Casual Leave",
        days: "12 days/year",
        desc: "Short-term personal leave",
        carry: 4,
        forward: 2,
        progress: 60,
    },
    {
        title: "Maternity Leave",
        days: "180 days",
        desc: "Leave for childbirth and recovery",
        carry: 0,
        forward: 0,
        progress: 20,
    },
    {
        title: "Paternity Leave",
        days: "10 days",
        desc: "Leave for new fathers",
        carry: 0,
        forward: 0,
        progress: 10,
    },
    {
        title: "Bereavement Leave",
        days: "5 days/year",
        desc: "Leave for family loss",
        carry: 1,
        forward: 0,
        progress: 30,
    },
    {
        title: "Work From Home",
        days: "Flexible",
        desc: "Remote working option",
        carry: 0,
        forward: 0,
        progress: 50,
    },
    {
        title: "Comp Off",
        days: "As earned",
        desc: "Compensatory leave for extra work",
        carry: 2,
        forward: 1,
        progress: 65,
    },
    {
        title: "Unpaid Leave",
        days: "Unlimited",
        desc: "Leave without salary",
        carry: 0,
        forward: 0,
        progress: 15,
    },
];

const pendingLeaves = [
    {
        name: "Priya Patel",
        initials: "PP",
        dept: "Engineering",
        type: "Annual Leave",
        days: 5,
        from: "2025-04-10",
        to: "2025-04-14",
    },
    {
        name: "Rahul Sharma",
        initials: "RS",
        dept: "HR",
        type: "Sick Leave",
        days: 2,
        from: "2025-04-05",
        to: "2025-04-06",
    },
];

/* ================= COMPONENT ================= */

export default function LeaveDashboard() {
    const [activeTab, setActiveTab] = useState("overview");
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        type: "",
        from: "",
        to: "",
        days: "",
        reason: "",
    });
    const [pendingLeavesState, setPendingLeavesState] = useState(pendingLeaves);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSave = () => {
        if (!formData.type || !formData.from || !formData.to || !formData.days) {
            alert("Please fill all required fields");
            return;
        }

        const newLeave = {
            name: "You", // replace with dynamic username if available
            initials: formData.type.charAt(0),
            dept: "Your Dept", // replace if you have real department
            type: formData.type,
            days: formData.days,
            from: formData.from,
            to: formData.to,
            reason: formData.reason || "Personal work",
        };

        setPendingLeavesState([newLeave, ...pendingLeavesState]);
        setFormData({ type: "", from: "", to: "", days: "", reason: "" });
        setShowModal(false);
    };

    const getColor = (progress) => {
        if (progress < 40) {
            return {
                bg: "bg-green-100",
                text: "text-green-600",
                bar: "bg-green-500",
            };
        } else if (progress < 70) {
            return {
                bg: "bg-yellow-100",
                text: "text-yellow-600",
                bar: "bg-yellow-500",
            };
        } else {
            return {
                bg: "bg-red-100",
                text: "text-red-600",
                bar: "bg-red-500",
            };
        }
    };

    return (
        <div className="min-h-screen bg-gray-200 p-6 space-y-6">

            {/* HEADER */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-semibold text-gray-900">
                        Leave Dashboard
                    </h1>
                    <p className="text-xs text-gray-500">
                        Manage leave types, requests and policies
                    </p>
                </div>

                {/* ✅ APPLY BUTTON */}
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-indigo-600 text-white text-xs px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                    + Apply Leave
                </button>
            </div>

            {/* KPI */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <KPICard icon={Calendar} label="Leave Types" value="8" color="bg-indigo-100 text-indigo-600" />
                <KPICard icon={Clock} label="Pending Reviews" value="2" color="bg-yellow-100 text-yellow-600" />
                <KPICard icon={FileText} label="Total Days Allocated" value="248" color="bg-green-100 text-green-600" />
                <KPICard icon={ShieldCheck} label="Leave Policies" value="2" color="bg-purple-100 text-purple-600" />
            </div>

            {/* TABS */}
            <div className="flex gap-6 border-b border-gray-300 text-xs">
                <Tab label="Overview" active={activeTab === "overview"} onClick={() => setActiveTab("overview")} />
                <Tab
                    label="Leave Types"
                    active={activeTab === "types"}
                    onClick={() => setActiveTab("types")}
                />
                <Tab label="Pending Reviews (2)" active={activeTab === "pending"} onClick={() => setActiveTab("pending")} />
                <Tab label="All Requests" active={activeTab === "all"} onClick={() => setActiveTab("all")} />
                <Tab
                    label="My Leaves"
                    active={activeTab === "myLeaves"}
                    onClick={() => setActiveTab("myLeaves")}
                />
            </div>

            {/* OVERVIEW */}
            {activeTab === "overview" && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {leaveTypes.map((item, i) => {
                            const colors = getColor(item.progress);

                            return (
                                <div
                                    key={i}
                                    className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
                                >
                                    {/* TOP */}
                                    <div className="flex items-start gap-2 mb-2">
                                        <div className={`w-8 h-8 ${colors.bg} ${colors.text} flex items-center justify-center rounded-md`}>
                                            <FaRegCalendarAlt size={14} />
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-800">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs text-gray-500">
                                                {item.days}
                                            </p>
                                        </div>
                                    </div>

                                    {/* DESC */}
                                    <p className="text-[11px] text-gray-500 mb-2">
                                        {item.desc}
                                    </p>

                                    {/* ROW */}
                                    <div className="flex items-center justify-between mt-2">

                                        {/* BADGES */}
                                        <div className="flex items-center gap-2 text-[10px]">
                                            <span className="bg-green-100 text-green-600 px-1.5 py-[2px] rounded-full">
                                                CarryFwd: {item.carry}
                                            </span>

                                            <span className="bg-green-100 text-green-600 px-1.5 py-[2px] rounded-full">
                                                Forward: {item.forward}
                                            </span>
                                        </div>

                                        {/* PROGRESS */}
                                        <div className="w-1/2">
                                            <div className="w-full h-1 bg-gray-200 rounded-full">
                                                <div
                                                    className={`h-1 ${colors.bar} rounded-full`}
                                                    style={{ width: `${item.progress}%` }}
                                                />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            );
                        })}


                    </div>


                    <PendingLeavesContent
                        data={pendingLeaves}
                        showHeader={true}
                        onViewAll={() => setActiveTab("pending")}
                    />
                </>
            )}
            {activeTab === "types" && (
                <LeaveTypesTable leaveTypes={leaveTypes} />
            )}
            {activeTab === "pending" && (
                <PendingLeavesContent
                    data={pendingLeaves}
                    showHeader={false}
                />
            )}
            {activeTab === "all" && (
                <AllLeaveRequests data={pendingLeaves} />
            )}

            {activeTab === "myLeaves" && <MyLeaves />}
            {showModal && (
                <div className="fixed inset-0 bg-black/50  bg-opacity-30 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-96 p-6 relative">
                        {/* Close button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        >
                            ✕
                        </button>

                        <h2 className="text-lg font-semibold mb-4">Apply Leave</h2>

                        <div className="space-y-3">
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="w-full border rounded px-2 py-1"
                            >
                                <option value="">Select Leave Type</option>
                                {leaveTypes.map((lt) => (
                                    <option key={lt.title} value={lt.title}>{lt.title}</option>
                                ))}
                            </select>

                            <input
                                type="date"
                                name="from"
                                value={formData.from}
                                onChange={handleChange}
                                className="w-full border rounded px-2 py-1"
                            />

                            <input
                                type="date"
                                name="to"
                                value={formData.to}
                                onChange={handleChange}
                                className="w-full border rounded px-2 py-1"
                            />

                            <input
                                type="number"
                                name="days"
                                value={formData.days}
                                onChange={handleChange}
                                placeholder="Number of Days"
                                className="w-full border rounded px-2 py-1"
                            />

                            <textarea
                                name="reason"
                                value={formData.reason}
                                onChange={handleChange}
                                placeholder="Reason"
                                className="w-full border rounded px-2 py-1"
                            />
                        </div>

                        <div className="flex justify-end mt-4 gap-2">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-3 py-1 rounded border"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}


/* TAB */
const Tab = ({ label, active, onClick }) => (
    <span
        onClick={onClick}
        className={`pb-2 cursor-pointer ${active
            ? "border-b-2 border-indigo-600 text-indigo-600"
            : "text-gray-500"
            }`}
    >
        {label}
    </span>
);