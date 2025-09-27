import Anirudh from "../../assets/guestSpeakers/Anirudh-Mani.jpg";
import Avinash from "../../assets/guestSpeakers/Avinash-Siravuru.jpg";
import Benjamin from "../../assets/guestSpeakers/Benjamin-Schloss.jpg";
import Jesse from "../../assets/guestSpeakers/Jesse-Zwaan.jpg";
import Jose from "../../assets/guestSpeakers/Jose-D-Posada.jpg";
import Kevin from "../../assets/guestSpeakers/Kevin-Tuei.jpg";
import Marcos from "../../assets/guestSpeakers/Marcos-Perini.jpg";
import Matheus from "../../assets/guestSpeakers/Matheus-Hermsdorff.jpg";
import Nilanjan from "../../assets/guestSpeakers/Nilanjan-Raychaudhuri.jpg";
import Nimshi from "../../assets/guestSpeakers/Nimshi-Venkat.jpg";
import Prabhu from "../../assets/guestSpeakers/Prabhu-Rajendran.jpg";
import Rajshekar from "../../assets/guestSpeakers/Rajshekar-Prabhakar.jpg";
import Sai from "../../assets/guestSpeakers/Sai-Prabhakar.jpg";
import Teye from "../../assets/guestSpeakers/Teye-Richard-Gamah.jpg";

export type SpeakersTestimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  organization: string;
  feedback: string;
};

export const speakersTestimonials: SpeakersTestimonial[] = [
  {
    id: 1,
    name: "Anirudh Mani",
    role: "AI Researcher",
    image: Anirudh,
    organization: "Tech University",
    feedback:
      "The bootcamp was an eye-opener. I learned so much about AI in just a week!",
  },
  {
    id: 2,
    name: "Sai Prabhakar",
    role: "AI Researcher",
    organization: "Anterior AI",
    image: Sai,
    feedback:
      "The bootcamp provided me with the tools to excel in my career. Highly recommend!",
  },
  {
    id: 3,
    name: "Teye Richard Gamah",
    role: "Certified Data Science Associate",
    organization: "",
    image: Teye,
    feedback:
      "The bootcamp was a transformative experience. I gained practical skills that I could apply immediately.",
  },
  {
    id: 4,
    name: "Nilanjan Raychaudhuri",
    role: "Founder of Tublian",
    organization: "Tublian",
    image: Nilanjan,
    feedback:
      "The bootcamp was a game-changer for me. I now have a clear roadmap for my career.",
  },
  {
    id: 5,
    name: "Kevin Tuei",
    role: "AWG UG AL/ML Kenya Leader",
    organization: "",
    image: Kevin,
    feedback:
      "The bootcamp was an incredible journey. I learned so much and met amazing people.",
  },
  {
    id: 6,
    name: "Benjamin Schloss",
    role: "Senior ML Engineer",
    organization: "Swoop",
    image: Benjamin,
    feedback:
      "The bootcamp was a fantastic experience. I gained valuable insights and skills.",
  },
  {
    id: 7,
    name: "Matheus Hermsdorff",
    role: "GTM",
    organization: "Langchain",
    image: Matheus,
    feedback:
      "The bootcamp was a great opportunity to learn from industry experts and network with peers.",
  },
  {
    id: 8,
    name: "Rajshekar Prabhakar",
    role: "VP, Artificial Intelligence",
    organization: "Servicelink",
    image: Rajshekar,
    feedback:
      "The bootcamp was an enlightening experience. I gained a deeper understanding of AI technologies.",
  },
  {
    id: 9,
    name: "Anirudh Mani",
    role: "Co-founder, Lemonade Music",
    organization: "Lemonade Music",
    image: Anirudh,
    feedback:
      "The bootcamp was a fantastic experience. I gained valuable insights and skills.",
  },
  {
    id: 10,
    name: "Marcos Perini",
    role: "Deployed Engineer",
    organization: "Langchain",
    image: Marcos,
    feedback:
      "The bootcamp was a great opportunity to learn from industry experts and network with peers.",
  },
  {
    id: 11,
    name: "Prabhu Rajendran",
    role: "Senior Manager & Global Strategist",
    organization: "Thermo Fisher Scientific",
    image: Prabhu,
    feedback:
      "The bootcamp was a transformative experience. I gained practical skills that I could apply immediately.",
  },
  {
    id: 12,
    name: "Jose D. Posada",
    role: "PhD, Lead Biomedical Informatics Data Scientist",
    organization: "Stanford Healthcare",
    image: Jose,
    feedback:
      "The bootcamp was a great opportunity to learn from industry experts and network with peers.",
  },
  {
    id: 13,
    name: "Nimshi Venkat",
    role: "Senior ML Engineer",
    organization: "Apple",
    image: Nimshi,
    feedback:
      "The bootcamp was a fantastic experience. I gained valuable insights and skills.",
  },
  {
    id: 14,
    name: "Jesse Zwaan",
    role: "Software Engineer",
    organization: "Anterior AI",
    image: Jesse,
    feedback:
      "The bootcamp was a transformative experience. I gained practical skills that I could apply immediately.",
  },
  {
    id: 15,
    name: "Avinash Siravuru",
    role: "Staff, Deep Learning Engineer",
    organization: "Neptune Medical",
    image: Avinash,
    feedback:
      "The bootcamp was a game-changer for me. I now have a clear roadmap for my career.",
  },
];
