import Anirudh from "../../../assets/guestSpeakers/Anirudh-Mani.jpg";
import Avinash from "../../../assets/guestSpeakers/Avinash-Siravuru.jpg";
import Benjamin from "../../../assets/guestSpeakers/Benjamin-Schloss.jpg";
// import Chukwuebuka from "../../../assets/guestSpeakers/Chukwuebuka-Chukwudi.jpg";
// import Ifeanyi from "../../../assets/guestSpeakers/Ifeanyi=-Okala.jpg";
import Jesse from "../../../assets/guestSpeakers/Jesse-Zwaan.jpg";
import Jose from "../../../assets/guestSpeakers/Jose-D-Posada.jpg";
import Kevin from "../../../assets/guestSpeakers/Kevin-Tuei.jpg";
import Marcos from "../../../assets/guestSpeakers/Marcos-Perini.jpg";
import Matheus from "../../../assets/guestSpeakers/Matheus-Hermsdorff.jpg";
import Nilanjan from "../../../assets/guestSpeakers/Nilanjan-Raychaudhuri.jpg";
import Nimshi from "../../../assets/guestSpeakers/Nimshi-Venkat.jpg";
import Prabhu from "../../../assets/guestSpeakers/Prabhu-Rajendran.jpg";
import Rajshekar from "../../../assets/guestSpeakers/Rajshekar-Prabhakar.jpg";
import Sai from "../../../assets/guestSpeakers/Sai-Prabhakar.jpg";
import Teye from "../../../assets/guestSpeakers/Teye-Richard-Gamah.jpg";

export interface GuestSpeaker {
  id: number;
  name: string;
  role: string;
  company: string;
  img: string;
}

export const guestSpeakers: GuestSpeaker[] = [
  {
    id: 1,
    name: "Sai Prabhakar",
    role: "AI Researcher",
    company: "Anterior AI",
    img: Sai,
  },
  {
    id: 2,
    name: "Teye Richard Gamah",
    role: "Certified Data Science Associate",
    company: "",
    img: Teye,
  },
  {
    id: 3,
    name: "Nilanjan Raychaudhuri",
    role: "Founder of Tublian",
    company: "Tublian",
    img: Nilanjan,
  },
  // {
  //   id: 4,
  //   name: "Ifeanyi Okala",
  //   role: "Founder of Nsk.AI",
  //   company: "NSK.AI",
  //   img: Ifeanyi,
  // },
  // {
  //   id: 5,
  //   name: "Chukwuebuka Chukwudi",
  //   role: "Community Lead & NVIDIA DLI Instructor",
  //   company: "NSK.AI",
  //   img: Chukwuebuka,
  // },
  {
    id: 6,
    name: "Kevin Tuei",
    role: "AWG UG AL/ML Kenya Leader",
    company: "",
    img: Kevin,
  },
  {
    id: 7,
    name: "Benjamin Schloss",
    role: "Senior ML Engineer",
    company: "Swoop",
    img: Benjamin,
  },
  {
    id: 8,
    name: "Matheus Hermsdorff",
    role: "GTM",
    company: "Langchain",
    img: Matheus,
  },
  {
    id: 9,
    name: "Rajshekar Prabhakar",
    role: "VP, Artificial Intelligence",
    company: "Servicelink",
    img: Rajshekar,
  },
  {
    id: 10,
    name: "Anirudh Mani",
    role: "Co-founder, Lemonade Music",
    company: "Lemonade Music",
    img: Anirudh,
  },
  {
    id: 11,
    name: "Marcos Perini",
    role: "Deployed Engineer",
    company: "Langchain",
    img: Marcos,
  },
  {
    id: 12,
    name: "Prabhu Rajendran",
    role: "Senior Manager & Global Strategist",
    company: "Thermo Fisher Scientific",
    img: Prabhu,
  },
  {
    id: 13,
    name: "Jose D. Posada",
    role: "PhD, Lead Biomedical Informatics Data Scientist",
    company: "Stanford Healthcare",
    img: Jose,
  },
  {
    id: 14,
    name: "Nimshi Venkat",
    role: "Senior ML Engineer",
    company: "Apple",
    img: Nimshi,
  },
  {
    id: 15,
    name: "Jesse Zwaan",
    role: "Software Engineer",
    company: "Anterior AI",
    img: Jesse,
  },
  {
    id: 16,
    name: "Avinash Siravuru",
    role: "Staff, Deep Learning Engineer",
    company: "Neptune Medical",
    img: Avinash,
  },
];
