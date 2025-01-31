'use client';
import Tag from "@/components/Tag";
import Image from "next/image";
import FeatureCard from "@/components/FeatureCards"; 
import Avatar from "@/components/Avatar";
import avatar1 from "@/assets/arabman 1.jpg";
import avatar2 from "@/assets/arabman2.jpg";
import avatar3 from "@/assets/arabwoman 1.jpg";
import avatar4 from "@/assets/arabwoman 2.jpg";
import middleEast from "@/assets/middle-east map.jpg";
import leads from "@/assets/leads image.png";

// Define a type for features
type Feature = {
  title: string;
  description: string;
  image: JSX.Element; // Store the JSX structure for the image
};

const features: Feature[] = [
  {
    title: "Warm intros and vetted leads",
    description: "We'll start the discovery process to find you potential customers.",
    image: (
      <Image
        src={leads}
        alt="sales leads image"
        height={260}
        width={260}
        className="rounded"
      />
    ),
  },
  {
    title: "Local BDR professionals",
    description: "Culture and language-aware professionals that can take care of pre- and post-sales support.",
    image: (
      <div className="aspect-video flex items-center justify-center">
        <Avatar className="border-yellow-100 z-40">
          <Image 
            src={avatar1} 
            alt="picture of arab man"
            className="w-16 h-16 object-cover"
          />
        </Avatar>
        <Avatar className="-ml-6 border-yellow-500 z-30">
          <Image 
            src={avatar3} 
            alt="picture of arab woman"
            className="w-16 h-16 object-cover"
          />
        </Avatar>
        <Avatar className="-ml-6 z-20">
          <Image 
            src={avatar2} 
            alt="picture of arab man 2"
            className="w-16 h-16 object-cover"
          />
        </Avatar>
        <Avatar className="-ml-6 border-yellow-700">
          <Image 
            src={avatar4} 
            alt="picture of arab woman 2"
            className="w-16 h-16 object-cover"
          />
        </Avatar>
      </div>
    ),
  },
  {
    title: "Fully compliant across the region",
    description: "In a matter of days, you'll be ready to sell wherever the opportunities exist.",
    image: (
      <div className="relative">
        <div className="absolute inset-0 bg-yellow-100 opacity-20"></div>
        <Image
          src={middleEast}
          alt="map of middle east"
          className="rounded aspect-square border border-yellow-950 h-56"
        />
      </div>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="tag">Features</div>
        </div>
        <div className="max-w-[740px] mx-auto">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#D8AE7E] text-transparent bg-clip-text mt-7 ml-6">
            A new method for <span>market entry</span>
          </h2>
          <p className="section-description">
            Don&apos;t wait months for feasibility plans and assessments, start testing the market immediately
            with Neogulf. Our AI and professional human BDR in the loop will prepare you to close the deal. 
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch items-center justify-items-center">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description}>
              {feature.image}
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}
