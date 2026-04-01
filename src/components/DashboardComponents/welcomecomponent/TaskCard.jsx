import React from "react";

export default function IntroduceYourself() {
  const tasks = [
    "About",
    "What I love about my job",
    "My interests and hobbies",
    "Team"
  ];

  const handleAddResponse = (task) => {
    console.log(`Add Response clicked for ${task}`);
  };

  return (
    <div className="bg-white shadow  p-6 w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-700 text-lg">Introduce Yourself</h3>
        <span className="text-sm text-gray-600">{`0/${tasks.length}`}</span>
      </div>

      {/* Tasks */}
      <div className="space-y-4">
        {tasks.map((task, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center border rounded-lg p-3 border-gray-200"
          >
            <p className="text-sm text-gray-600">{task}</p>
            <button
              onClick={() => handleAddResponse(task)}
              className="text-green-500  text-sm"
            >
              Add Response
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}