// src/components/Tabs.tsx
import React from "react";
import { EventStatus } from "./data/events";

const Tabs: React.FC<{
  value: EventStatus;
  onChange: (status: EventStatus) => void;
}> = ({ value, onChange }) => {
  const tabs: { id: EventStatus; label: string }[] = [
    { id: "upcoming", label: "Upcoming Events" },
    { id: "ongoing", label: "Ongoing Events" },
    { id: "past", label: "Past Events" },
  ];

  return (
    <div className="flex border-b border-neutral-200 gap-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`pb-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
            tab.id === value
              ? "border-[#ff0004] text-[#ff0004]"
              : "border-transparent text-neutral-600 hover:text-neutral-900"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
