'use client';
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

// Define types for testimonial data
interface Testimonial {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Boff AI's empathetic outreach has transformed our European expansion. We're seeing 3x higher response rates because the messages actually connect with prospects as humans first, not just targets.",
    imageSrc: avatar1.src,
    name: "Riv Maddison",
    username: "@RivMedicine",
  },
  {
    text: "I was skeptical about AI for sales outreach, but Boff's emotional intelligence is incredible. Our SDRs are building genuine relationships in APAC markets where cultural nuance is critical.",
    imageSrc: avatar2.src,
    name: "Michele Von Haltz",
    username: "@Mvh1990",
  },
  {
    text: "The empathetic approach has completely changed how we engage with financial institutions. Compliance officers actually want to talk to us now, and our sales cycle in regulated markets is 40% shorter.",
    imageSrc: avatar3.src,
    name: "David Hammers",
    username: "@HammersDJ1666",
  },
  {
    text: "Boff AI understands that selling to government and defense sectors requires exceptional trust-building. Their empathetic outreach has opened doors we've been knocking on for years with traditional approaches.",
    imageSrc: avatar5.src,
    name: "Isaac Cohen",
    username: "@militarymile",
  },
  {
    text: "The personalization at scale is remarkable. We've entered three new clinical markets in South America with half the BDR team we'd normally need. The emotional intelligence in the outreach makes all the difference.",
    imageSrc: avatar4.src,
    name: "Trevor AbdulKareem",
    username: "@abdulkareem1985",
  },
  {
    text: "Revolutionary for healthcare sales. Boff AI's empathetic approach respects the unique pressures medical professionals face. Our Middle East expansion is 6 months ahead of schedule thanks to this human-first outreach.",
    imageSrc: avatar6.src,
    name: "Dr. Rianne Molsley",
    username: "@drswanseahill23",
  },
  {
    text: "Selling cybersecurity solutions requires deep trust. Boff AI's empathetic outreach has helped us navigate sensitive conversations with energy sector leaders across Northern Europe. Game-changing technology.",
    imageSrc: avatar7.src,
    name: "Michael Ings",
    username: "@ingscybersec",
  },
  {
    text: "Expanding from Hong Kong to Western markets was challenging until we tried Boff AI. Their empathetic approach bridges cultural gaps that our standard outreach couldn't. Our SDRs now have consistent meetings with ideal prospects.",
    imageSrc: avatar8.src,
    name: "Daphne Li",
    username: "@lilicheng2021",
  },
  {
    text: "The follow-up capabilities are extraordinary. Boff AI knows exactly when and how to reconnect with prospects who've gone quiet. We've resurrected deals we thought were dead across five different African markets.",
    imageSrc: avatar9.src,
    name: "Yuri Bilov",
    username: "@bilovyurialexander",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// Individual testimonial card component
const TestimonialCard = ({ text, imageSrc, name, username }: Testimonial) => (
  <div className="card p-6 min-h-[220px] max-w-[340px] mb-8">
    <div className="text-base">{text}</div>
    <div className="flex items-center gap-3 mt-6">
      <Image 
        src={imageSrc} 
        alt={name}
        width={48}
        height={48} 
        className="h-12 w-12 rounded-full"
      />
      <div className="flex flex-col">
        <div className="font-medium tracking-tight leading-5">{name}</div>
        <div className="leading-5 tracking-tight text-purple-700">{username}</div>
      </div>
    </div>
  </div>
);

// Define props type for TestimonialColumn
interface TestimonialColumnProps {
  className?: string;
  testimonials: Testimonial[];
  speed?: number;
}

// Smooth scrolling testimonial column
const TestimonialColumn = ({ className = "", testimonials, speed = 1 }: TestimonialColumnProps) => {
  const columnRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  useEffect(() => {
    const scrollHeight = columnRef.current ? columnRef.current.scrollHeight / 2 : 1000;
    
    const smoothScroll = async () => {
      // Reset to top instantly but invisibly
      await controls.set({ y: 0 });
      
      // Smooth scroll down
      await controls.start({
        y: -scrollHeight,
        transition: {
          duration: scrollHeight * 0.03 * (1 / speed), // Adjust speed factor
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0
        }
      });
    };
    
    smoothScroll();
  }, [controls, speed]);

  return (
    <div className={`overflow-hidden relative max-h-[700px] ${className}`}>
      <motion.div ref={columnRef} animate={controls} className="pb-8">
        {/* Duplicate testimonials for seamless looping */}
        {testimonials.map((testimonial: Testimonial, index: number) => (
          <TestimonialCard key={`${testimonial.username}-1-${index}`} {...testimonial} />
        ))}
        {testimonials.map((testimonial: Testimonial, index: number) => (
          <TestimonialCard key={`${testimonial.username}-2-${index}`} {...testimonial} />
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return ( 
    <section id="testimonials" className="bg-white py-20">
      <div className="container mx-auto">
        {/* Section heading with styled underline similar to ProductShowcase */}
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-black">
            What our users say
          </h3>
          <div className="h-1.5 w-40 mt-3 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full"></div>
        </div>
        
        {/* Larger, black subheading */}
        <div className="max-w-[800px] mx-auto mb-16">
          <p className="text-xl md:text-2xl text-center text-black font-normal">
            Boff AI is transforming how sales teams connect with prospects through
            empathetic, human-centered outreach that builds authentic relationships
          </p> 
        </div>
        
        <div className="flex justify-center gap-8 mt-12 px-4">
          <TestimonialColumn testimonials={firstColumn} speed={0.8} className="" />
          <TestimonialColumn 
            testimonials={secondColumn} 
            speed={1.2}
            className="hidden md:block"
          />
          <TestimonialColumn 
            testimonials={thirdColumn} 
            speed={1}
            className="hidden lg:block"
          />
        </div>
      </div>

      <style jsx global>{`
        .card {
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(100, 100, 100, 0.08);
          transition: all 0.3s ease;
        }
        
        .card:hover {
          box-shadow: 0 6px 28px rgba(0, 0, 0, 0.12);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};
