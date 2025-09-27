import Ifeanyi from "../../../assets/teamMembers/Founder-NSKAI.jpg";
import Ebuka from "../../../assets/teamMembers/chukwudi-chukwuebuka.jpg";
import Sai from "../../../assets/teamMembers/Sai-Prabhakar.jpg";

// The other members of the team
import member1 from "../../../assets/teamMembers/EmmanuelObasi-graphics-designer.jpg";
import member2 from "../../../assets/teamMembers/Ogbuefi-Ikemsinachi-graphic-designer.jpg";
import member3 from "../../../assets/teamMembers/Terfaren-Eunice-Community-manager.jpg";
import member4 from "../../../assets/teamMembers/Ugwoeke-Precious-Graphics-designer.jpg";
import member5 from "../../../assets/teamMembers/hero-img.jpg";
import member6 from "../../../assets/teamMembers/nkemdilim-whitney-graphics-designer.jpg";

export type TeamMember = {
  name: string;
  role: string;
  img?: string;
};

export const pioneers: TeamMember[] = [
  { name: "Ifeanyi Okala", role: "Founder, NSK.AI", img: Ifeanyi },
  { name: "Sai Prabhakar", role: "Lead Speaker", img: Sai },
  { name: "Chukwuebuka Chukwudi", role: "Community Lead", img: Ebuka },
];

export const members: TeamMember[] = [
  { name: "Emmanuel Obasi", role: "Graphics Designer", img: member1 },
  { name: "Ogbuefi Ikemsinachi", role: "Graphics Designer", img: member2 },
  {
    name: "Terfaren Eunice",
    role: "Community Manager & Content Marketing Lead",
    img: member3,
  },
  { name: "Ugwoeke Precious", role: "Graphics Designer", img: member4 },
  { name: "Lawrence LIO", role: "Full Stack Developer", img: member5 },
  { name: "Nkemdilim Whitney", role: "Graphics Designer", img: member6 },
];
