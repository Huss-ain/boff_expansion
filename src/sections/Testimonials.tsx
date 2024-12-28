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
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "I didn\'t ever think accessing the UAE medical market would be this fast. This is innovation at its finest.",
    imageSrc: avatar1.src,
    name: "Riv Maddison",
    username: "@RivMedicine",
  },
  {
    text: "Sales teams in scaleups who navigate lots of markets need this tool that has become indespensible to us.",
    imageSrc: avatar2.src,
    name: "Michele Von Haltz",
    username: "@Mvh1990",
  },
  {
    text: "Running a fintech means we need to navigate so much local compliance, which now Neogulf does in days.",
    imageSrc: avatar3.src,
    name: "David Hammers",
    username: "@HammersDJ1666",
  },
  {
    text: "Kudos to Hussain and the team at Neogulf who opened opportunites for us in defence tech we could have only dreamed of. ",
    imageSrc: avatar5.src,
    name: "Isaac Cohen",
    username: "@militarymile",
  },
  {
    text: "Couldn\'t be happier with our expansion into the clinical trials market in the gulf.",
    imageSrc: avatar4.src,
    name: "Trevor AbdulKareem",
    username: "@abdulkareem1985",
  },
  {
    text: "We\'re really proud of our partnership with Neogulf to bring life-changing cancer diagnosis technologies to the Middle East, starting with Saudi Arabia.",
    imageSrc: avatar6.src,
    name: "Dr. Rianne Molsley",
    username: "@drswanseahill23",
  },
  {
    text: "Neogulf has been impressive in helping us find commercial deals to help protect critical infrastructure in the energy sector.",
    imageSrc: avatar7.src,
    name: "Michael Ings",
    username: "@ingscybersec",
  },
  {
    text: "Very pleased to work with Hussain and our dedicated team in Qatar who have made our growth journey from HK even more exciting.",
    imageSrc: avatar8.src,
    name: "Daphne Li",
    username: "@lilicheng2021",
  },
  {
    text: "Support is remarkable. This is how it\'s meant to be done. Even when prospects are slow to reply, the chasing up was very well thought through.",
    imageSrc: avatar9.src,
    name: "Yuri Bilov",
    username: "@bilovyurialexander",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonalColumn = (props: { className?: string; testimonials: typeof testimonials; duration?: number}) => (
  <div className={props.className}>
    <motion.div animate={{
      translateY: '-50%',
    }} 
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: 'linear',
        repeatType: "loop",
      }}
      
      className="items-center flex flex-col gap-6  ">
            
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {props.testimonials.map(({text, imageSrc, name, username }) => (
                  <div className="card" key={username}>
                    <div>{text}</div>
                    <div className="flex items-center gap-2 mt-5">
                      <Image 
                      src={imageSrc} 
                      alt={name}
                      width={40}
                      height={40} 
                      className="h-10 w-10 rounded-full"
                      />
                      <div className="flex flex-col">
                        <div className="font-medium tracking-tight leading-5">{name}</div>
                        <div className="leading-5 tracking-tight">{username}</div>
                      </div>



                    </div>
                  </div>
                  ))}
              </React.Fragment>
            ))}
            
            
          </motion.div> 
        </div>
)

export const Testimonials = () => {
  return ( 
  <section id="testimonials" className="bg-white">
    <div className="container mx-auto py-0">
      <div className="max-w-[740px] mx-auto ">
        <div className="flex justify-center">
          <div className="tag mt-10">Testimonials</div>
        </div>
        <h2 className="section-title  mt-7">What our users say</h2>
        <p className="section-description">Neogulf is the essential tool for CEO's and revenue teams with an eye
          for expansion into the lucrative Middle East market
        </p> 
      </div>
      <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden"> 
        <TestimonalColumn testimonials={firstColumn} duration={15} />
        <TestimonalColumn testimonials={secondColumn} duration={19} 
        className="hidden md:block"
        />
        <TestimonalColumn testimonials={thirdColumn} duration={17} 
        className="hidden lg:block"
        />
        
      </div> 
    </div>


  </section>
  );
};
