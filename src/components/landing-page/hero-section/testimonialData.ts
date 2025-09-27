export type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  feedback: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Martinez",
    role: "Software Engineer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    feedback:
      "The NSK.AI Bootcamp was life-changing. I learned practical AI skills and connected with amazing people who share the same mission.",
  },
  {
    id: 2,
    name: "David Kim",
    role: "AI Researcher",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    feedback:
      "I was blown away by the mentorship and real-world projects. This bootcamp truly prepared me for the future of technology.",
  },
  {
    id: 3,
    name: "Amara Johnson",
    role: "Data Scientist",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    feedback:
      "Working on scalable solutions during the bootcamp gave me the confidence to take on big challenges in my career.",
  },
  {
    id: 4,
    name: "Liam O’Connor",
    role: "Entrepreneur",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    feedback:
      "The collaboration and teamwork at NSK.AI Bootcamp were unmatched. I built both skills and lifelong friendships.",
  },
  {
    id: 5,
    name: "Chinonso Okafor",
    role: "Product Manager",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    feedback:
      "This was not just about coding — it was about creating meaningful impact. I’m proud to be part of the mission.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    role: "UX Designer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    feedback:
      "The bootcamp opened my eyes to how design and AI can work together to solve global problems. Truly inspiring!",
  },
];
