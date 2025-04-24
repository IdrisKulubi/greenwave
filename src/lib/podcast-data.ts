export interface Podcast {
  id: string;
  title: string;
  description: string;
  duration: string;
  tag: string;
  imageUrl: string;
}

export const podcasts: Podcast[] = [
  {
    id: "1",
    title: "The Carbon Footprint Dilemma",
    description: "Explore the complexities behind measuring carbon footprints and how innovative companies are creating new solutions for accurate tracking and reduction strategies.",
    duration: "32:15",
    tag: "Climate",
    imageUrl: "/podcast/carbon-footprint.jpg",
  },
  {
    id: "2",
    title: "Regenerative Agriculture Revolution",
    description: "Discover how farmers worldwide are adopting regenerative practices that restore soil health, increase biodiversity, and naturally sequester carbon from the atmosphere.",
    duration: "45:08",
    tag: "Farming",
    imageUrl: "/podcast/regenerative-agriculture.jpg",
  },
  {
    id: "3",
    title: "Ocean Plastic Solutions",
    description: "Meet the entrepreneurs and scientists developing groundbreaking technologies to remove plastic waste from our oceans and transform it into valuable resources.",
    duration: "28:42",
    tag: "Oceans",
    imageUrl: "/podcast/ocean-plastic.jpg",
  },
  {
    id: "4",
    title: "Future of Green Energy",
    description: "An in-depth look at the latest breakthroughs in renewable energy technologies and how they're reshaping our energy landscape for a sustainable future.",
    duration: "37:21",
    tag: "Energy",
    imageUrl: "/podcast/green-energy.jpg",
  },
  {
    id: "5",
    title: "Urban Forests: Cities of Tomorrow",
    description: "How urban planners are incorporating forests into city designs to combat air pollution, reduce urban heat islands, and improve quality of life for residents.",
    duration: "41:53",
    tag: "Reforestation",
    imageUrl: "/podcast/urban-forests.jpg",
  },
  {
    id: "6",
    title: "The Circular Economy Blueprint",
    description: "Explore how businesses are redesigning their products and processes to eliminate waste and pollution while regenerating natural systems.",
    duration: "33:27",
    tag: "Economy",
    imageUrl: "/podcast/circular-economy.jpg",
  },
  {
    id: "7",
    title: "Sustainable Fashion Forward",
    description: "Discover the innovative materials and ethical practices transforming the fashion industry from one of the biggest polluters to a leader in sustainability.",
    duration: "39:15",
    tag: "Fashion",
    imageUrl: "/podcast/sustainable-fashion.jpg",
  },
  {
    id: "8",
    title: "Water Conservation Technologies",
    description: "From smart irrigation to atmospheric water generators, learn about the cutting-edge technologies helping us preserve and create clean water sources.",
    duration: "26:49",
    tag: "Water",
    imageUrl: "/podcast/water-tech.jpg",
  },
  {
    id: "9",
    title: "Biodiversity's Hidden Value",
    description: "Scientists explain why preserving biodiversity is crucial not just for ecosystem health but for human medicine, agriculture, and innovation.",
    duration: "46:12",
    tag: "Biodiversity",
    imageUrl: "/podcast/biodiversity.jpg",
  },
]; 