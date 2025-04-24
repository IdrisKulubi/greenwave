export interface Podcast {
  id: string;
  title: string;
  description: string;
  duration: string;
  tag: string;
  imageUrl: string;
  audioSrc: string;
}

export const podcasts: Podcast[] = [
  {
    id: "1",
    title: "The Carbon Dilemma",
    description: "Unraveling the complexities of carbon emissions and exploring viable pathways to a low-carbon future. Our experts discuss the latest carbon capture technologies and their potential impact on climate change mitigation.",
    duration: "28:17",
    tag: "Climate",
    imageUrl: "/images/carbon.jpg",
    audioSrc: "/podcast/carbondilema.wav"
  },
  {
    id: "2",
    title: "Regenerative Food Systems",
    description: "Discovering how regenerative agriculture is revolutionizing food production and healing our planet. Learn about sustainable farming practices that restore soil health, increase biodiversity, and help combat climate change.",
    duration: "36:45",
    tag: "Farming",
    imageUrl: "/images/genfood.jpg",
    audioSrc: "/podcast/Regenerativefood.wav"
  },
  {
    id: "3",
    title: "Ocean Plastic Crisis",
    description: "Exploring innovative solutions to tackle the growing crisis of plastic pollution in our oceans. From cleanup technologies to policy changes, discover how we can turn the tide on marine plastic pollution.",
    duration: "1:15:32",
    tag: "Oceans",
    imageUrl: "/images/ocean.jpg",
    audioSrc: "/podcast/oceanplastic.wav"
  }
]; 