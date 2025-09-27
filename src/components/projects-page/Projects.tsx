import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AIRAGBOOTCAMP from "../../assets/nskai-bootcamp-images/AI RAG BOOTCAMP.zip - 6.png";

type TabKey = "ongoing" | "past";

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("ongoing");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;

  // Dynamic events data
  const eventsData: Record<
    TabKey,
    { id: number; title: string; description: string; image: string }[]
  > = {
    ongoing: [],
    past: [
      {
        id: 1,
        title: "AI RAG Bootcamp - 2025",
        description:
          "After the successful completion of our AI RAG Bootcamp, We are excited to announce that our participants gained hands-on experience building Retrieval-Augmented Generation systems, sharpening their skills in AI, data, and real-world applications. Stay tuned for the next edition!",
        image: AIRAGBOOTCAMP,
      },
    ],
  };

  const events = eventsData[activeTab];
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil(events.length / eventsPerPage);

  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      {/* Tabs */}
      <div className="flex gap-6 border-b mb-8">
        {(["ongoing", "past"] as TabKey[]).map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setCurrentPage(1);
            }}
            className={`pb-2 capitalize text-sm ${
              activeTab === tab
                ? "border-b-2 border-[#ff0004] text-[#ff0004]"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Events */}
      <div className="space-y-8">
        {currentEvents.length > 0 ? (
          currentEvents.map((event) => (
            <div
              key={event.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button
                  onClick={() => navigate(`/bootcamp`)}
                  className="px-4 py-2 rounded-lg bg-[#ff0004] text-white hover:bg-[#ff0004]/85 transition duration-300 cursor-pointer"
                >
                  Learn More
                </button>
              </div>
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-70 object-cover rounded-lg"
              />
            </div>
          ))
        ) : (
          <div className="text-center text-black py-16 border rounded-lg">
            <h2 className="text-2xl font-bold mb-2">
              No {activeTab} projects right now
            </h2>
            <p>
              Stay tuned — we’ll update this space once a new project or
              bootcamp begins.
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-2 text-lg"
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 rounded-full ${
                currentPage === i + 1
                  ? "bg-[#ff0004] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-2 text-lg"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
