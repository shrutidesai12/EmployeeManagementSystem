
import React, { useMemo, useState, useRef, useEffect } from "react";
import {
  Search,
  Download,
  User,
  Building2,
  ChevronUp,
  Plus,
  Minus,
  Move,
  Sparkles,
  MapPin,
} from "lucide-react";

const ORG_THEME = {
  bg: "#edf1f3",
  sidebar: "#f4f6f8",
  toolbar: "#edf1f3",
  card: "#ffffff",
  cardBorder: "#dde3e8",
  line: "#d7dde2",
  text: "#3a4350",
  muted: "#6f7a86",
  faint: "#9aa6b2",
  primary: "#7ca8d2",
  primarySoft: "#eaf2fb",
  accent: "#2f80ed",
  fab: "#374151",
  shadow: "0 1px 4px rgba(15,23,42,0.06)",
};

const EMPLOYEES = [
  { id: "aaron", name: "Eckerly, Aaron", title: "Finance", location: "Chennai", dept: "FINANCE", initials: "AE", avatar: "#9b6a4a", reports: [] },
  { id: "marie-h", name: "Hamm, Marie", title: "Finance", location: "Ahmedabad", dept: "FINANCE", initials: "MH", avatar: "#4f2f22", reports: [] },
  { id: "haleigh", name: "Girard, Haleigh", title: "Data Analyst", location: "UK-HO-London", dept: "FINANCE", initials: "HG", avatar: "#9ea7b4", reports: [] },
  { id: "mad-max", name: "Mad Max", title: "Filmmaker", location: "Hyderabad", dept: "FINANCE", initials: "MM", avatar: "#e2b93f", reports: ["clark", "ronald", "adam"] },
  { id: "clark", name: "Fuller, Clark", title: "Finance", location: "Hyderabad", dept: "FINANCE", initials: "FC", avatar: "#4c8bd2", reports: ["robert"] },
  { id: "ronald", name: "Ronald", title: "Data Analyst", location: "ME-HO-Dubai", dept: "FINANCE", initials: "R", avatar: "#8f5f43", reports: [] },
  { id: "adam", name: "Holt, Adam", title: "Data Analyst", location: "UK-HO-London", dept: "FINANCE", initials: "AH", avatar: "#70859a", reports: ["marie-curie"] },
  { id: "robert", name: "Jackson, Robert", title: "Finance", location: "Hyderabad", dept: "FINANCE", initials: "JR", avatar: "#225fa8", reports: [] },
  { id: "marie-curie", name: "Marie Curie", title: "Finance", location: "India HO -Delhi", dept: "FINANCE", initials: "MC", avatar: "#bfc5cf", reports: [] },
];

const employeeMap = Object.fromEntries(EMPLOYEES.map((e) => [e.id, e]));
const topRowIds = ["aaron", "marie-h", "haleigh", "mad-max"];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Avatar({ initials, color }) {
  return (
    <div
      className="flex h-[30px] w-[30px] shrink-0 items-center justify-center overflow-hidden rounded-full text-[10px] font-semibold text-white ring-1 ring-black/5"
      style={{ background: color }}
    >
      {initials}
    </div>
  );
}
function EmployeeCard({ person, expanded, onToggle, hasChildren }) {
  const childCount = person.reports?.length || 0;

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="relative w-[200px] rounded-[2px] border px-[14px] py-[10px]"
        style={{
          background: "var(--org-card)",
          borderColor: "var(--org-card-border)",
          boxShadow: "var(--org-shadow)",
        }}
      >
        <div className="flex items-start gap-[10px]">
          <Avatar initials={person.initials} color={person.avatar} />
          <div className="min-w-0 pt-[1px]">
            <div className="truncate text-[13px] font-semibold leading-[16px] text-[var(--org-text)]">
              {person.name}
            </div>
            <div className="mt-[3px] text-[11px] leading-[14px] text-[var(--org-muted)]">
              {person.title}
            </div>
            <div className="mt-[5px] text-[11px] leading-[14px] text-[var(--org-muted)]">
              {person.location}
            </div>
            <div className="mt-[5px] text-[10px] font-semibold leading-[12px] tracking-[0.04em] text-[var(--org-text)]">
              {person.dept}
            </div>
          </div>
        </div>
      </div>

      {hasChildren && (
        <button
          onClick={() => onToggle?.(person.id)}
          className="absolute -bottom-[12px] z-10 flex h-[22px] min-w-[22px] items-center justify-center rounded-full border-[2px] border-[var(--org-bg)] px-[5px] text-[10px] font-semibold text-white shadow-sm"
          style={{ background: "var(--org-accent)" }}
        >
          {expanded ? (
            <Minus size={12} strokeWidth={2.5} />
          ) : childCount > 0 ? (
            `+${childCount}` // ✅ Show +N when collapsed
          ) : (
            null
          )}
        </button>
      )}
    </div>
  );
}

function ChildRow({ childIds, expandedMap, onToggle, width = 620 }) {
  const children = childIds.map((id) => employeeMap[id]);
  const count = children.length;
  const segment = count === 1 ? 0 : width / (count - 1);

  return (
    <div className="relative -mt-[20px] flex flex-col items-center">
      <div className="relative" style={{ width }}>
        <div className="absolute left-1/2 top-[-26px] h-[52px] w-px -translate-x-1/2 bg-[var(--org-line)]" />
        {count > 1 && (
          <div className="absolute top-[26px] h-px bg-[var(--org-line)]" style={{ left: 0, width }} />
        )}

        <div className="relative flex items-start justify-between">
          {children.map((child, index) => {
            const hasChildren = child.reports.length > 0;
            const expanded = expandedMap[child.id] ?? true;
            const left = count === 1 ? width / 2 : index * segment;

            return (
              <div
                key={child.id}
                className="absolute top-[26px] flex -translate-x-1/2 flex-col items-center"
                style={{ left }}
              >
                <div className="h-[16px] w-px bg-[var(--org-line)]" />
                <EmployeeCard
                  person={child}
                  expanded={expanded}
                  onToggle={onToggle}
                  hasChildren={hasChildren}
                />

                {hasChildren && expanded && (
                  <div className="mt-[46px]">
                    <ChildRow
                      childIds={child.reports}
                      expandedMap={expandedMap}
                      onToggle={onToggle}
                      width={280}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TopOrgView({ query, expandedMap, toggleNode, groupByDepartment }) {
  const filteredTop = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return topRowIds;
    return topRowIds.filter((id) => {
      const person = employeeMap[id];
      const pool = [person, ...person.reports.map((r) => employeeMap[r])];
      return pool.some((item) =>
        [item.name, item.title, item.location, item.dept].join(" ").toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <div className="relative w-full pb-24 pt-[20px]">
      <div className="flex items-start gap-[28px] px-[18px]">
        {filteredTop.map((id) => {
          const person = employeeMap[id];
          const hasChildren = person.reports.length > 0;
          const expanded = expandedMap[id] ?? true;

          return (
            <div
              key={id}
              className="relative flex w-[200px] shrink-0 flex-col items-center"
              style={id === "mad-max" ? { marginLeft: "5px" } : {}}
            >
              <EmployeeCard
                person={person}
                expanded={expanded}
                onToggle={toggleNode}
                hasChildren={hasChildren}
              />

              {hasChildren && expanded && (
                <div className="mt-[38px]">
                  <ChildRow
                    childIds={person.reports}
                    expandedMap={expandedMap}
                    onToggle={toggleNode}
                    width={620}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DepartmentView({ query, expandedMap, toggleNode }) {
  return (
    <div className="relative w-full pb-24 pt-[20px] flex justify-center">
      <div className="flex items-start gap-[28px]">
        <div className="relative flex w-[200px] shrink-0 flex-col items-center">
          <EmployeeCard
            person={employeeMap["mad-max"]}
            expanded={expandedMap["mad-max"] ?? true}
            onToggle={toggleNode}
            hasChildren={true}
          />
          {(expandedMap["mad-max"] ?? true) && (
            <div className="mt-[38px]">
              <ChildRow
                childIds={["clark", "ronald", "adam"]}
                expandedMap={expandedMap}
                onToggle={toggleNode}
                width={620}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MeView({ expandedMap, toggleNode }) {
  const currentUser = employeeMap["aaron"];
  const manager = employeeMap["mad-max"];

  return (
    <div className="relative w-full pb-24 pt-[20px] flex justify-center">
      <div className="flex flex-col items-center gap-[28px]">

        {/* Manager Card */}
        <div className="relative flex flex-col items-center">
          <div className="mb-[20px] text-[11px] font-semibold text-[var(--org-muted)] uppercase tracking-[0.05em]">
            Your Manager
          </div>

          <EmployeeCard
            person={currentUser}
            expanded={expandedMap[currentUser.id]}
            onToggle={toggleNode}
            hasChildren={currentUser.reports?.length > 0} // 👈 correct
          />

          {/* Manager's Children */}
          {expandedMap[manager.id] && (
            <>
              {/* Connector Line */}
              <div className="w-px h-[40px] bg-[var(--org-line)] "></div>

              {/* Children (current user) */}
              <div className="flex gap-6 ">
                <EmployeeCard
                  person={currentUser}
                  expanded={expandedMap[currentUser.id]}
                  onToggle={toggleNode}
                  hasChildren={!!currentUser.children}
                />

                {/* If manager has other children, map here */}
                {manager.children?.filter(id => id !== currentUser.id).map(childId => {
                  const child = employeeMap[childId];
                  return (
                    <EmployeeCard
                      key={child.id}
                      person={child}
                      expanded={expandedMap[child.id]}
                      onToggle={toggleNode}
                      hasChildren={!!child.children}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
        {!expandedMap[manager.id] && (
          <div className="w-px h-[80px] bg-[var(--org-line)]"></div>
        )}

      </div>
    </div>
  );
}
export default function OrganizationTree() {
  const [query, setQuery] = useState("");
  const [groupByDepartment, setGroupByDepartment] = useState(true);
  const [downloadPopupOpen, setDownloadPopupOpen] = useState(false);
  const downloadRef = useRef(null);
  const [activeTab, setActiveTab] = useState("top");
  const [expandedMap, setExpandedMap] = useState({
    "mad-max": true,
    clark: true,
    adam: true,
  });

  const toggleNode = (id) => {
    setExpandedMap((prev) => ({ ...prev, [id]: !(prev[id] ?? true) }));
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (downloadRef.current && !downloadRef.current.contains(event.target)) {
        setDownloadPopupOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className="h-screen w-full overflow-hidden flex flex-col"
      style={{
        background: "var(--org-bg)",
        ...Object.fromEntries(
          Object.entries({
            "--org-bg": ORG_THEME.bg,
            "--org-sidebar": ORG_THEME.sidebar,
            "--org-toolbar": ORG_THEME.toolbar,
            "--org-card": ORG_THEME.card,
            "--org-card-border": ORG_THEME.cardBorder,
            "--org-line": ORG_THEME.line,
            "--org-text": ORG_THEME.text,
            "--org-muted": ORG_THEME.muted,
            "--org-faint": ORG_THEME.faint,
            "--org-primary": ORG_THEME.primary,
            "--org-primary-soft": ORG_THEME.primarySoft,
            "--org-accent": ORG_THEME.accent,
            "--org-fab": ORG_THEME.fab,
            "--org-shadow": ORG_THEME.shadow,
          })
        ),
      }}
    >
      {/* Toolbar */}
      <div className="sticky top-0 z-20 bg-[var(--org-toolbar)] px-[18px] py-[14px]  border-[var(--org-card-border)]">
        <div className="flex items-center justify-between gap-4">
          <div
            className="flex h-[34px] w-[220px] items-center gap-2 rounded-[2px] border bg-white px-3"
            style={{ borderColor: "var(--org-card-border)" }}
          >
            <Search size={14} className="text-[var(--org-faint)]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Employee"
              className="w-full bg-transparent text-[12px] text-[var(--org-text)] outline-none placeholder:text-[var(--org-faint)]"
            />
          </div>

          <div className="flex items-center gap-[6px] text-[12px]">
            <span className="mr-1 text-[var(--org-muted)]">Go to</span>

            <button
              onClick={() => setActiveTab("department")}
              className={cx(
                "inline-flex h-[34px] items-center gap-2 rounded-[2px] border px-4 transition-colors",
                activeTab === "department"
                  ? "border-[var(--org-card-border)] bg-[var(--org-primary-soft)] font-medium text-[var(--org-primary)]"
                  : "border-[var(--org-card-border)] bg-white text-[var(--org-text)] hover:bg-slate-50"
              )}
            >
              <Building2 size={13} />
              My Department
            </button>

            <button
              onClick={() => setActiveTab("top")}
              className={cx(
                "inline-flex h-[34px] items-center gap-2 rounded-[2px] border px-4 transition-colors",
                activeTab === "top"
                  ? "border-[var(--org-card-border)] bg-[var(--org-primary-soft)] font-medium text-[var(--org-primary)]"
                  : "border-[var(--org-card-border)] bg-white text-[var(--org-text)] hover:bg-slate-50"
              )}
            >
              <ChevronUp size={13} />
              Top of the Org
            </button>

            <button
              onClick={() => setActiveTab("me")}
              className={cx(
                "inline-flex h-[34px] items-center gap-2 rounded-[2px] border px-4 transition-colors",
                activeTab === "me"
                  ? "border-[var(--org-card-border)] bg-[var(--org-primary-soft)] font-medium text-[var(--org-primary)]"
                  : "border-[var(--org-card-border)] bg-white text-[var(--org-text)] hover:bg-slate-50"
              )}
            >
              <User size={13} />
              Me
            </button>

            <button
              onClick={() => setGroupByDepartment((v) => !v)}
              className="ml-[10px] inline-flex h-[34px] items-center gap-2 rounded-[2px] border border-[var(--org-card-border)] bg-white px-4 text-[12px] text-[var(--org-primary)] hover:bg-slate-50 transition-colors"
            >
              <div className={cx("relative h-[16px] w-[28px] rounded-full transition", groupByDepartment ? "bg-[#d8e4f2]" : "bg-slate-200")}>
                <div className={cx("absolute top-[2px] h-[12px] w-[12px] rounded-full bg-white shadow transition", groupByDepartment ? "left-[14px]" : "left-[2px]")} />
              </div>
              Group by department
            </button>
            <div className="relative" ref={downloadRef}>
              <button
                className="inline-flex h-[34px] items-center gap-2 rounded-[2px] border border-[var(--org-card-border)] bg-white px-4 text-[var(--org-primary)] hover:bg-slate-50 transition-colors"
                onClick={() => setDownloadPopupOpen((prev) => !prev)}
              >
                <Download size={13} />
                Download
              </button>

              {downloadPopupOpen && (
                <div className="absolute top-full mt-1 right-0 w-[140px] rounded-md border border-gray-200 bg-white shadow-lg z-50">
                  <button
                    className="w-full px-4 py-2 text-left text-[12px] hover:bg-gray-100"
                    onClick={() => {
                      setDownloadPopupOpen(false);
                      console.log("Download PDF clicked");
                    }}
                  >
                    Download PDF
                  </button>
                  <button
                    className="w-full px-4 py-2 text-left text-[12px] hover:bg-gray-100"
                    onClick={() => {
                      setDownloadPopupOpen(false);
                      console.log("Download Image clicked");
                    }}
                  >
                    Download Image
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative flex-1 overflow-y-auto overflow-x-hidden bg-[var(--org-bg)]">
        {activeTab === "top" && (
          <TopOrgView
            query={query}
            expandedMap={expandedMap}
            toggleNode={toggleNode}
            groupByDepartment={groupByDepartment}
          />
        )}

        {activeTab === "department" && (
          <DepartmentView
            query={query}
            expandedMap={expandedMap}
            toggleNode={toggleNode}
          />
        )}

        {activeTab === "me" && (
          <MeView
            expandedMap={expandedMap}
            toggleNode={toggleNode}
          />
        )}

        {/* Control Buttons */}
        <div className="absolute right-[10px] top-[58px] flex flex-col overflow-hidden rounded-[2px] border border-[var(--org-card-border)] bg-white shadow-sm">
          <button className="grid h-[34px] w-[34px] place-items-center border-b border-[var(--org-card-border)] text-[var(--org-faint)] hover:bg-slate-50 transition-colors">
            <Plus size={14} />
          </button>
          <button className="grid h-[34px] w-[34px] place-items-center border-b border-[var(--org-card-border)] text-[var(--org-faint)] hover:bg-slate-50 transition-colors">
            <Minus size={14} />
          </button>
          <button className="grid h-[34px] w-[34px] place-items-center text-[var(--org-faint)] hover:bg-slate-50 transition-colors">
            <Move size={14} />
          </button>
        </div>
{/* 
        <button className="absolute bottom-[16px] right-[14px] grid h-[36px] w-[36px] place-items-center rounded-[8px] bg-[var(--org-fab)] text-white shadow-md hover:opacity-90 transition-opacity">
          <Sparkles size={16} />
        </button> */}
      </main>
    </div>
  );
}