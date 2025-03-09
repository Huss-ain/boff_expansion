"use client";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Top row with logo and description */}
        <div className="flex flex-col items-center text-center mb-10">
          {/* Logo and brand */}
          <div className="flex items-center justify-center mb-4">
            {/* Logo icon */}
            <div className="relative mr-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-md">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Heart icon and SVG elements */}
                  <path 
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path d="M17 8.5C17 7.12 16.38 6.5 15.5 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M7 8.5C7 7.12 7.62 6.5 8.5 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M9.5 12.5C9.5 12.5 10.5 13.5 12 13.5C13.5 13.5 14.5 12.5 14.5 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="20" cy="4" r="0.5" fill="white" />
                  <circle cx="4" cy="4" r="0.5" fill="white" />
                  <circle cx="20" cy="20" r="0.5" fill="white" />
                  <circle cx="4" cy="20" r="0.5" fill="white" />
                </svg>
              </div>
            </div>
            
            {/* Logo text */}
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Boff AI
              </h2>
              <span className="text-sm text-purple-200 font-medium tracking-wide">
                Empathetic outreach
              </span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-purple-100/80 mb-8 max-w-md">
            AI-powered empathetic outreach that builds relationships and converts prospects into customers.
          </p>
        </div>
        
        {/* Row with navigation and CTA button */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0">
          {/* CTA Button */}
          <a href="https://calendly.com/hussain-softbase/30min" 
             className="bg-white text-purple-800 hover:bg-purple-100 transition-colors px-6 py-3 rounded-lg font-medium md:mr-10">
            Book a call
          </a>
          
          {/* Horizontal Navigation */}
          <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            <a href="#product" className="text-purple-200 hover:text-white transition-colors whitespace-nowrap">Product</a>
            <a href="#features" className="text-purple-200 hover:text-white transition-colors whitespace-nowrap">Features</a>
            <a href="#testimonials" className="text-purple-200 hover:text-white transition-colors whitespace-nowrap">Testimonials</a>
            <a href="#pricing" className="text-purple-200 hover:text-white transition-colors whitespace-nowrap">Pricing</a>
          </nav>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent my-8"></div>
        
        {/* Copyright */}
        <div className="text-center text-purple-200/60">
          <p>&copy; Boff AI {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
