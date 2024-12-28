import Logo from "@/assets/Neogulf-brown.png"
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-small py-10 text-center items-center">
      <div className="container mx-auto text-center">
        <div className="inline-flex relative">
        <Image src= {Logo} alt="Neogulf" height={40} />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#product">Product</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#team">Team</a>
        </nav>
        <p className="mt-10">
          &copy; Neogulf 2024. All rights reserved.
        </p>

      </div>
    </footer>
    
  );
};
