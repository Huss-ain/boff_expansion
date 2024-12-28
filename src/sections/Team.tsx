import Image from "next/image";
import DrAbdullah from "@/assets/Dr_Abdullah_Profile.png";
import Hussain from "@/assets/Hussain_profile.png";

// Explicitly type the props for TeamMember
interface TeamMemberProps {
  image: string;
  name: string;
  title: string;
  description: string;
  alt: string;
}

const TeamMember = ({ image, name, title, description, alt }: TeamMemberProps) => (
  <div className="flex flex-col items-center p-6 max-w-sm">
    <Image
      src={image}
      alt={alt}
      height={360}
      width={360}
      className="rounded-xl w-full h-auto object-cover mb-4"
    />
    <h3 className="text-xl md:text-2xl font-bold mt-4 text-gray-900">{name}</h3>
    <p className="text-sm md:text-base font-light text-gray-600 mb-2">{title}</p>
    <p className="text-sm md:text-base text-center text-gray-700">{description}</p>
  </div>
);

export const Team = () => {
  const teamMembers = [
    {
      image: Hussain,
      name: "Hussain Ayed",
      title: "Director",
      description: "Seasoned tech founder in the R&D, education, life sciences and marketing sectors across EMEA",
      alt: "Hussain"
    },
    {
      image: DrAbdullah,
      name: "Prof. Abdullah Al-Hashem",
      title: "Chairman of the advisory board",
      description: "Held the role of deputy secretary general in the GCC for environmental and human affairs as well as diplomatic positions in Washington.",
      alt: "Dr Abdullah"
    }
  ];

  return (
    <section id="team" className="py-8 md:py-16 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_40%)] overflow-x-clip">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="tag mb-4">Team</div>
        </div>
        
        <div className="max-w-[740px] mx-auto mb-12">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#D8AE7E] text-transparent bg-clip-text">
            Advisory Board
          </h2>
          <p className="section-description">
            Our connections in the Middle East are deeply rooted across government
            and industry to accelerate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
