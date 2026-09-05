export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "VP of Product Engineering",
    company: "Apex Cloud",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    content: "Alex is one of those rare engineers who operates at an elite level across both backend architecture and visual design. He transformed our entire user dashboard and improved core loading times by over 60%.",
    rating: 5
  },
  {
    id: "2",
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "Vortex Labs",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
    content: "Working with Alex was an absolute game-changer. He delivered our Next.js platform ahead of schedule with zero flaws, impeccably styled design tokens, and pristine TypeScript code.",
    rating: 5
  },
  {
    id: "3",
    name: "Elena Rostova",
    role: "Design Director",
    company: "PixelCraft Studio",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    content: "Alex has a phenomenal eye for detail. His component micro-animations feel natural, polished, and delight every single user who touches the software.",
    rating: 5
  }
];
