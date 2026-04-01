import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import { Check,Award } from "lucide-react";


/* ================= DATA ================= */

const skills = [
  {
    name: "AWS",
    level: "Intermediate",
    progress: 60,
    tag: "Cloud",
    certified: true,
    sub: "AWS Solutions Architect · Expires 2025-12-01",
  },
  {
    name: "Node.js",
    level: "Advanced",
    progress: 80,
    tag: "Backend",
  },
  {
    name: "PostgreSQL",
    level: "Advanced",
    progress: 80,
    tag: "Database",
  },
  {
    name: "React",
    level: "Expert",
    progress: 95,
    tag: "Frontend",
  },
  {
    name: "TypeScript",
    level: "Expert",
    progress: 95,
    tag: "Frontend",
    certified: true,
    sub: "TypeScript Expert · Expires 2026-06-01",
  },
];

const radarData = [
  { skill: "AWS", value: 60 },
  { skill: "Node.js", value: 80 },
  { skill: "PostgreSQL", value: 75 },
  { skill: "React", value: 95 },
  { skill: "TypeScript", value: 90 },
];

const skillGaps = ["Leadership", "Cloud Architecture", "Data Analysis"];

const certifications = [
  {
    name: "AWS Solutions Architect",
    sub: "AWS · Cloud",
    expiry: "Expires 2025-12-01",
  },
  {
    name: "TypeScript Expert",
    sub: "TypeScript · Frontend",
    expiry: "Expires 2026-06-01",
  },
];

/* ================= SEGMENT BAR ================= */

const SegmentedBar = ({ value }) => {
  const totalBars = 5;
  const filledBars = Math.round(value / (100 / totalBars));

  return (
    <div className="flex gap-1 mt-1">
      {Array.from({ length: totalBars }).map((_, i) => (
        <div
          key={i}
          className={`h-1 w-20 rounded-sm ${i < filledBars ? "bg-indigo-500" : "bg-gray-200"
            }`}
        />
      ))}
    </div>
  );
};
/* ================= COMPONENT ================= */

export default function EmployeeSkill() {
  return (
    <div className="space-y-6">

      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT: SKILLS */}
         <div className="lg:col-span-2 bg-white border rounded-xl p-5 border-gray-200 max-w-3xl">
            <h2 className="font-semibold mb-4">Skills & Proficiency</h2>

          <div className="space-y-5">
            {skills.map((skill, i) => (
              <div key={i}>
                {/* Header */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{skill.name}</span>

                    <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                      {skill.tag}
                    </span>

                    {skill.certified && (
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                        Certified
                      </span>
                    )}
                  </div>

                  <span className="text-xs text-gray-500">
                    {skill.level}
                  </span>
                </div>

                {/* Segmented Progress Bar */}
                <SegmentedBar value={skill.progress} />

                {/* Sub text */}
                {skill.sub && (
                  <p className="text-xs text-gray-400 mt-1">
                    {skill.sub}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">

          {/* RADAR */}
          <div className="bg-white border rounded-xl p-4 border-gray-200">
            <h3 className="text-sm font-semibold mb-3">Skill Radar</h3>

            <ResponsiveContainer width="100%" height={220}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <Radar
                  dataKey="value"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* SKILL GAPS */}
          <div className="bg-white border rounded-xl p-4 border-gray-200">
            <h3 className="text-sm font-semibold mb-3">Skill Gaps</h3>

            <div className="space-y-2">
              {skillGaps.map((gap, i) => (
                <div
                  key={i}
                  className="border border-yellow-200 bg-yellow-50 text-sm px-3 py-2 rounded flex items-center gap-2 bg-yellow-50"
                >
                  ⚠ {gap}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="bg-white border rounded-xl p-5 border-gray-200">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full border border-green-500 text-green-700 bg-green-100">
            <Check size={14} />
          </span>
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="border rounded-lg p-4 flex items-start gap-3 border-gray-200 bg-blue-50"
            >
              <div className="text-indigo-500 text-xl"><Award/></div>

              <div>
                <h4 className="font-medium">{cert.name}</h4>
                <p className="text-xs text-gray-500">{cert.sub}</p>
                <p className="text-xs text-gray-400 mt-1">
                  ⏱ {cert.expiry}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}