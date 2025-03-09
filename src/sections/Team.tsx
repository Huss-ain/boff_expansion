"use client";

// Pricing tier component
interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

const PricingTier = ({ name, price, description, features, isPopular, ctaText, ctaLink }: PricingTierProps) => (
  <div className={`relative p-8 rounded-2xl shadow-lg transition-all duration-300 h-full ${
    isPopular 
      ? 'bg-gradient-to-b from-white to-purple-50 border-2 border-purple-200 scale-105 z-10' 
      : 'bg-white border border-gray-100'
  }`}>
    {/* Badge - Now absolutely positioned */}
    {isPopular && (
      <div className="absolute top-3 left-8 inline-block px-3 py-1 text-xs font-semibold tracking-wide text-purple-800 bg-purple-100 rounded-full">
        <div className="flex items-center">
          {/* Star icon SVG */}
          <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
              fill="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          MOST POPULAR
        </div>
      </div>
    )}
    
    {/* Add padding top when popular to ensure consistent content positioning */}
    <div className={`${isPopular ? 'pt-2' : ''}`}>
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      
      {/* Price */}
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        {price !== 'Custom' && <span className="text-gray-500 ml-1">/month</span>}
      </div>
      
      {/* Description */}
      <div className="mb-6">
        <p className="text-gray-600">{description}</p>
      </div>
      
      {/* Features */}
      <div className="mb-24"> {/* Extra padding at bottom for button */}
        <p className="font-medium text-sm uppercase text-gray-500 tracking-wider mb-4">WHAT'S INCLUDED</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className={`mt-1 mr-3 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full ${
                isPopular ? 'bg-purple-100 text-purple-600' : 'bg-blue-50 text-blue-500'
              }`}>
                {/* Check icon SVG */}
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    {/* CTA Button - Absolute positioned at bottom */}
    <div className="absolute bottom-8 left-8 right-8">
      <a 
        href={ctaLink}
        className={`py-3 px-6 rounded-lg text-center font-medium transition-colors w-full block ${
          isPopular 
            ? 'bg-purple-600 hover:bg-purple-700 text-white' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
        }`}
      >
        {ctaText}
      </a>
    </div>
  </div>
);

export const Team = () => {
  const pricingTiers = [
    {
      name: "Individual",
      price: "£99.99",
      description: "Perfect for freelancers, salespeople, and entrepreneurs looking to expand their reach.",
      features: [
        "Up to 500 monthly prospects",
        "Fully managed empathetic outreach",
        "We handle all email communication",
        "Lead introductions when qualified",
        "Monthly performance reports",
        "Email support"
      ],
      ctaText: "Get started",
      ctaLink: "https://calendly.com/hussain-softbase/30min"
    },
    {
      name: "Small Teams",
      price: "£399.99",
      description: "Ideal for sales teams, BDRs, SMBs, and startups needing scalable prospect engagement.",
      features: [
        "Up to 2,500 monthly prospects",
        "All Individual features",
        "Multiple campaign management",
        "Team performance dashboards",
        "More personalized outreach",
        "Campaign strategy consultation",
        "Priority email support"
      ],
      isPopular: true,
      ctaText: "Get started",
      ctaLink: "https://calendly.com/hussain-softbase/30min"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for larger organizations with complex sales requirements.",
      features: [
        "Custom prospect volume",
        "All Teams features",
        "Multiple campaign management",
        "Custom integrations",
        "Advanced analytics & reporting",
        "Dedicated account manager",
        "Premium support",
        "Quarterly strategy reviews"
      ],
      ctaText: "Contact sales",
      ctaLink: "https://calendly.com/hussain-softbase/30min"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white via-white to-purple-50 overflow-x-clip">
      <div className="container mx-auto px-4">
        {/* Section heading with styled underline similar to ProductShowcase */}
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-black">
            Simple, transparent pricing
          </h3>
          <div className="h-1.5 w-40 mt-3 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full"></div>
        </div>
        
        {/* Larger, black subheading */}
        <div className="max-w-[800px] mx-auto mb-16">
          <p className="text-xl md:text-2xl text-center text-black font-normal">
            We handle all the outreach — you focus on closing deals
          </p> 
        </div>

        {/* Pricing cards with equal heights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="h-full">
              <PricingTier {...tier} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center text-gray-600 max-w-3xl mx-auto">
          <p className="text-lg">
            All plans include our empathetic outreach approach and lead qualification.
            <br/>We handle the entire communication process and introduce you to prospects when they're ready.
            <br />Need a custom solution? <a href="https://calendly.com/hussain-softbase/30min" className="text-purple-600 font-medium">Contact our sales team</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
