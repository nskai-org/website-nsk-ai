// src/data/events.ts
export type EventStatus = "upcoming" | "ongoing" | "past";

export interface EventItem {
  id: string;
  title: string;
  description: string;
  status: EventStatus;
  image: string;
}

export const events: EventItem[] = [
  // UPCOMING
  {
    id: "1",
    title: "AI Ethics Workshop",
    description:
      "Explore the ethical implications of AI and learn how to develop responsible AI solutions.",
    status: "upcoming",
    image: "/images/events/ethics.jpg",
  },
  {
    id: "2",
    title: "Scalable Tech Conference",
    description:
      "Attend our conference to discover the latest trends in scalable technologies and network with industry leaders.",
    status: "upcoming",
    image: "/images/events/conference.jpg",
  },
  {
    id: "3",
    title: "Tech for Good Hackathon",
    description:
      "Participate in our hackathon and build innovative solutions that address social and environmental challenges.",
    status: "upcoming",
    image: "/images/events/hackathon.jpg",
  },
  {
    id: "4",
    title: "AI and Society Webinar",
    description:
      "Join our webinar to discuss the impact of AI on society and the future of work.",
    status: "upcoming",
    image: "/images/events/webinar.jpg",
  },

  // ONGOING
  {
    id: "5",
    title: "AI in Healthcare Bootcamp",
    description:
      "Hands-on sessions to apply AI in diagnostics, patient care, and medical research.",
    status: "ongoing",
    image: "/images/events/healthcare.jpg",
  },
  {
    id: "6",
    title: "Machine Learning Sprint",
    description:
      "Collaborative sprint to build and optimize ML models with real-world datasets.",
    status: "ongoing",
    image: "/images/events/ml-sprint.jpg",
  },

  // PAST
  {
    id: "7",
    title: "Responsible AI Summit 2023",
    description:
      "Global summit bringing together thought leaders to shape the future of responsible AI.",
    status: "past",
    image: "/images/events/summit.jpg",
  },
  {
    id: "8",
    title: "AI for Climate Action",
    description:
      "Workshop exploring how AI can help mitigate climate change and support sustainability.",
    status: "past",
    image: "/images/events/climate.jpg",
  },
  {
    id: "9",
    title: "Data Science for Social Good",
    description:
      "Conference highlighting projects that used AI and data science for societal impact.",
    status: "past",
    image: "/images/events/social-good.jpg",
  },
];
