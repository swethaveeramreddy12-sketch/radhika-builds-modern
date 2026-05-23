import { Building, HardHat, Hammer, Ruler, Wrench, Home as HomeIcon, Factory, PaintBucket } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export const services = [
  { icon: HomeIcon, title: "Residential Construction", desc: "Premium villas, apartments, and gated communities engineered to last generations." },
  { icon: Building, title: "Commercial Buildings", desc: "Office towers, IT parks, and mixed-use developments with flagship finishes." },
  { icon: Factory, title: "Industrial Projects", desc: "Warehouses, factories and logistics hubs delivered on accelerated timelines." },
  { icon: Ruler, title: "Architecture & Design", desc: "In-house architects translating vision into precise, buildable drawings." },
  { icon: Hammer, title: "Renovation & Retrofit", desc: "Heritage restoration and structural upgrades without compromising character." },
  { icon: PaintBucket, title: "Interior Fit-Out", desc: "Turnkey interiors blending materiality, light and refined craftsmanship." },
  { icon: HardHat, title: "Project Management", desc: "Single-point accountability across design, procurement and execution." },
  { icon: Wrench, title: "MEP & Infrastructure", desc: "End-to-end mechanical, electrical, plumbing and civil infrastructure." },
];

export const projects = [
  { img: p1, title: "Skyline Residences", category: "Residential", location: "Mumbai" },
  { img: p2, title: "Meridian Corporate Tower", category: "Commercial", location: "Hyderabad" },
  { img: p3, title: "Aranya Luxury Villas", category: "Residential", location: "Bengaluru" },
  { img: p4, title: "Crescent Mall", category: "Retail", location: "Pune" },
  { img: p5, title: "Coastal Expressway Bridge", category: "Infrastructure", location: "Chennai" },
  { img: p6, title: "Vertex Logistics Park", category: "Industrial", location: "Gurugram" },
];

export const testimonials = [
  {
    quote: "Dileep delivered our 32-storey tower three months ahead of schedule. Their attention to finish quality is genuinely best-in-class.",
    name: "Arjun Mehta",
    role: "MD, Meridian Group",
  },
  {
    quote: "From the first blueprint to handover, every detail was managed with quiet precision. We've already commissioned them for our next campus.",
    name: "Priya Reddy",
    role: "COO, Vertex Industries",
  },
  {
    quote: "A construction partner that treats your project like their own legacy. The craftsmanship is visible in every joint and surface.",
    name: "Vikram Shah",
    role: "Principal Architect, Shah & Associates",
  },
];

export const stats = [
  { value: "250+", label: "Projects Delivered" },
  { value: "27", label: "Years of Craft" },
  { value: "18M", label: "Sq.ft Constructed" },
  { value: "40+", label: "Industry Awards" },
];
