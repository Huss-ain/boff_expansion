import React from 'react';
import Link from 'next/link';

export const ServiceOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[800px] mx-auto mb-10">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl md:text-[42px] md:leading-[48px] font-bold tracking-tighter bg-gradient-to-r from-[#3c2a06] to-[#422301] text-transparent bg-clip-text">
              Market Expansion Without Borders
            </h2>
            <div className="h-1.5 w-40 mt-3 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"></div>
          </div>
          <p className="text-xl text-center text-black font-normal">
            Boff AI's specialized Middle East expansion service combines Arabic-native AI with human relationship-building to help you enter Middle Eastern markets without the overhead of establishing local offices.
          </p>
        </div>
        
        {/* Combined Chat Interface & Case Studies - Reversed order to make WhatsApp more prominent */}
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column: WhatsApp Chat (now larger and first) */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 pb-3 mb-5 border-b border-green-300 flex items-center">
                <span className="bg-[#25D366] text-white p-1 rounded-full mr-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 01-1.516-5.26c0-5.445 4.455-9.885 9.942-9.885a9.865 9.865 0 017.021 2.91 9.788 9.788 0 012.909 6.99c-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
                  </svg>
                </span>
                <span>Human + AI Business Development</span>
              </h3>
              
              <div className="bg-[#E5DDD5] rounded-2xl overflow-hidden shadow-lg border border-gray-200 transform transition-all hover:shadow-xl">
                {/* WhatsApp Header */}
                <div className="p-3 bg-[#075E54] text-white flex items-center">
                  <div className="mr-3 relative">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <svg className="h-7 w-7 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="absolute -right-1 -bottom-1 h-4 w-4 bg-green-500 rounded-full border-2 border-[#075E54]"></div>
                  </div>
                  <div>
                    <p className="font-medium">Abeer from Boff AI</p>
                    <div className="flex items-center text-xs text-white/80">
                      <span className="mr-2">AI + Human Team</span>
                      <span>•</span>
                      <span className="ml-2">Online</span>
                    </div>
                  </div>
                  <div className="ml-auto flex space-x-3">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z" />
                    </svg>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z" />
                    </svg>
                  </div>
                </div>
                
                {/* Chat Background with Pattern */}
                <div className="h-[480px] overflow-y-auto p-3 space-y-3" style={{
                  backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHTSURBVEhLtZa9S8NAGMbfJqXaQlEHcRTEobhUHPxYnPwHpE7iLg7FQRzEQRxEEEQQRQQVRRCLowgiIoj4TYtitVrbpDXJebnkuCbk0lZ9IKR5v57nPXLJ+WAYhk5vqCu2rBEYx11k+JVz3eV2u01XDfq+D6Ai4CUJ4AkHQOIHsRvP8yi5iHa7TQsOOXHA9QH3CXAiMjgKSZJYn5GEBLwBgWkT2yQMx3HY1UTlctnI5/Ocw7maoAI7oeJsRi5YlmXoO7vMgHpZpLgDMuLrbWhFCwllnxSLoK5tURwyajWnS5jHmrO1wIO8HxTYXqSxp3d6LRv5wr7EAhbJBYyXUhCcxMTkGtR21fUG9nGfV4BVc0a8jXxhH4T6dJNYZ1y1nYHl/nSiADH0qKQCpEm2jF6qx7bEJXMMsIyQRID0QeQCiqWJK7EAN9L70MNr5c5FYzpcRu/PZcGcT7K59OB4oWYCxJYsR7UlFUDpQixKGx3rQtJx5QJ05kMviu3XJKxwQXMBkibZMkJu5XtcAakNycRHJkCsWnfwLrjQfOJbzYt8XkP1sW9bEPNkXXKR0RkuYL//4+3GBcxiJxsppWIxhy+A4B/0/gHrJxO6/+UbNgAAAABJRU5ErkJggg==')"
                }}>
                  {/* Today timestamp */}
                  <div className="flex justify-center">
                    <div className="bg-white/90 rounded-lg px-2 py-1 text-xs text-gray-500 shadow-sm">
                      TODAY
                    </div>
                  </div>
                  
                  {/* Message: Abeer */}
                  <div className="flex">
                    <div className="max-w-[80%] bg-white rounded-lg p-3 shadow-sm">
                      <p className="text-gray-800 text-sm">
                        <span className="inline-block bg-amber-50 text-amber-800 text-xs px-1 rounded mr-1 font-mono">AR</span>
                        حبيت أشرحلك API ويدعم (high encryption) هلا أحمد، مثل ما ناقشنا، نظامنا يوفر
                      </p>
                      <p className="text-gray-800 text-sm mt-2">
                        كيف نضمن الأمان واستمرارية الخدمة حتى وقت الذروة
                      </p>
                      <div className="flex justify-between items-center mt-1">
                        <div className="flex items-center">
                          <span className="text-xs px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded mr-1">AI</span>
                        </div>
                        <span className="text-xs text-gray-500">10:42 AM</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Message: Ahmed */}
                  <div className="flex justify-end">
                    <div className="max-w-[80%] bg-[#DCF8C6] rounded-lg p-3 shadow-sm">
                      <p className="text-gray-800 text-sm">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-1 rounded mr-1 font-mono">AR</span>
                        هلا عبير، كلامج واضح. بس شلون يتعامل النظام مع load balancing ويحافظ على استقراره؟
                      </p>
                      <div className="flex justify-end mt-1">
                        <span className="text-xs text-gray-500">10:45 AM</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Message: Abeer - AI Response */}
                  <div className="flex">
                    <div className="max-w-[80%] bg-white rounded-lg p-3 shadow-sm">
                      <p className="text-gray-800 text-sm">
                        <span className="inline-block bg-amber-50 text-amber-800 text-xs px-1 rounded mr-1 font-mono">AR</span>
                        النظام مزود بآليات متطورة تضمن توزيع الحمل بشكل سلس وبهالطريقة نقدر نحافظ على اللود بالانس
                      </p>
                      <div className="flex justify-between items-center mt-1">
                        <div className="flex items-center">
                          <span className="text-xs px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded mr-1">AI</span>
                        </div>
                        <span className="text-xs text-gray-500">10:47 AM</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Message: Ahmed */}
                  <div className="flex justify-end">
                    <div className="max-w-[80%] bg-[#DCF8C6] rounded-lg p-3 shadow-sm">
                      <p className="text-gray-800 text-sm">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-1 rounded mr-1 font-mono">AR</span>
                        وهل النظام يشمل real-time monitoring عشان نتأكد من عدم حدوث أي خلل؟
                      </p>
                      <div className="flex justify-end mt-1">
                        <span className="text-xs text-gray-500">10:51 AM</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Message: Abeer - Human Response */}
                  <div className="flex">
                    <div className="max-w-[80%] bg-white rounded-lg p-3 shadow-sm">
                      <p className="text-gray-800 text-sm">
                        <span className="inline-block bg-amber-50 text-amber-800 text-xs px-1 rounded mr-1 font-mono">AR</span>
                        طبعا عندك داشبورد كامل حتى تقدر تراقب الداشبورد و تشوف تقارير تفصيلية، يعني ابشر باللي يعجبك!
                      </p>
                      <div className="flex justify-between items-center mt-1">
                        <div className="flex items-center">
                          <span className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded mr-1">Human</span>
                        </div>
                        <span className="text-xs text-gray-500">10:53 AM</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Message: Ahmed */}
                  <div className="flex justify-end">
                    <div className="max-w-[80%] bg-[#DCF8C6] rounded-lg p-3 shadow-sm">
                      <p className="text-gray-800 text-sm">
                        Perfect
                      </p>
                      <p className="text-gray-800 text-sm mt-2">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-1 rounded mr-1 font-mono">AR</span>
                        أشوف إن الخطوة الجاية تنظيم اجتماع مع الفريقين لمراجعة التقارير والتخطيط للتطوير المشترك. منتظرين التعاون لتحقيق أفضل النتائج
                      </p>
                      <div className="flex justify-end mt-1">
                        <span className="text-xs text-gray-500">10:56 AM</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Final Message: Abeer - AI Response */}
                  <div className="flex">
                    <div className="max-w-[80%] bg-white rounded-lg p-3 shadow-sm">
                      <p className="text-gray-800 text-sm">
                        <span className="inline-block bg-amber-50 text-amber-800 text-xs px-1 rounded mr-1 font-mono">AR</span>
                        ممتاز! سأرسل دعوات الاجتماع اليوم. بإمكاني أيضاً تجهيز عرض تقديمي مختصر لمشاركته مع فريقك التقني.
                      </p>
                      <div className="bg-gray-50 p-2 rounded-md mt-2 flex items-center">
                        <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm text-blue-600">Meeting_Invitation.ics</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="flex items-center">
                          <span className="text-xs px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded mr-1">AI</span>
                        </div>
                        <span className="text-xs text-gray-500">10:58 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* WhatsApp Message Input */}
                <div className="bg-[#F0F0F0] p-2 flex items-center border-t border-gray-300">
                  <div className="w-full flex items-center bg-white rounded-full px-3 py-1">
                    <input 
                      type="text" 
                      className="flex-1 border-0 bg-transparent text-sm py-1 focus:outline-none" 
                      placeholder="Type a message" 
                      disabled
                    />
                    <button className="p-1 rounded-full text-gray-500">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                        <path d="M14.829 9.172a.5.5 0 0 0-.707 0L12 11.293l-2.122-2.121a.5.5 0 1 0-.707.707l2.121 2.121-2.121 2.121a.5.5 0 1 0 .707.707L12 12.707l2.122 2.121a.5.5 0 0 0 .707-.707l-2.121-2.121 2.121-2.121a.5.5 0 0 0 0-.707z" />
                      </svg>
                    </button>
                    <button className="ml-1 p-1 rounded-full text-gray-500">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z" />
                        <path d="M12 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                      </svg>
                    </button>
                  </div>
                  <button className="ml-2 bg-[#25D366] p-2 rounded-full text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Column: Case Studies (now smaller and second) */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 pb-3 mb-5 border-b border-amber-200">
                Industry Success Metrics
              </h3>
              
              {/* Fintech Case Study - More realistic numbers */}
              <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl overflow-hidden shadow-md border border-amber-100 mb-6">
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <div className="bg-amber-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      FINTECH PAYMENTS
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Payment Gateway Expansion</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    UAE/KSA market entry for digital payment processor connecting with local banks and complying with Central Bank regulations.
                  </p>
                  
                  {/* Industry-specific metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-2 rounded-lg border border-amber-100">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-2">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-base font-bold text-gray-900">90 Days</p>
                          <p className="text-xs text-gray-500">Regulatory Approval</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-2 rounded-lg border border-amber-100">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-2">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-base font-bold text-gray-900">$210K</p>
                          <p className="text-xs text-gray-500">Monthly Processing</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-2 rounded-lg border border-amber-100">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-2">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-base font-bold text-gray-900">3 Banks</p>
                          <p className="text-xs text-gray-500">First 6 Months</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-2 rounded-lg border border-amber-100">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-2">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-base font-bold text-gray-900">68%</p>
                          <p className="text-xs text-gray-500">Faster Market Entry</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Healthcare Case Study */}
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl overflow-hidden shadow-md border border-blue-100">
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <div className="bg-blue-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      HEALTHCARE TECH
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Telehealth Platform</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Digital healthcare solution expanding to KSA, UAE and Qatar, integrating with local health systems and insurance networks.
                  </p>
                  
                  {/* Industry-specific metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-2 rounded-lg border border-blue-100">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-base font-bold text-gray-900">4 Months</p>
                          <p className="text-xs text-gray-500">HAAD Approval</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-2 rounded-lg border border-blue-100">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-base font-bold text-gray-900">12,500+</p>
                          <p className="text-xs text-gray-500">Patient Accounts</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-2 rounded-lg border border-blue-100">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-base font-bold text-gray-900">7 Networks</p>
                          <p className="text-xs text-gray-500">Insurance Partners</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-2 rounded-lg border border-blue-100">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-base font-bold text-gray-900">$1.2M</p>
                          <p className="text-xs text-gray-500">Year 1 Revenue</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Adding pricing clarity and testimonials to the ServiceOverview component */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 mt-6">
          <div className="flex items-center mb-4">
            <div className="bg-amber-100 p-2 rounded-full">
              <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 ml-2">Custom Monthly Retainer Model</h4>
          </div>
          <p className="text-gray-700 text-sm mb-3">
            Our service operates on a custom monthly retainer basis tailored to your specific market entry needs and goals. We provide a complete expansion solution without commission-based selling - your growth is our primary metric.
          </p>
          <div className="flex flex-col md:flex-row gap-4 text-sm">
            <div className="flex-1 bg-gray-50 p-3 md:p-4 rounded-lg border border-gray-100">
              <span className="font-medium text-gray-900">Included in your retainer:</span>
              <ul className="mt-1 space-y-1 ml-4 list-disc text-gray-600">
                <li>Arabic AI + human BD team</li>
                <li>Regulatory navigation</li>
                <li>Strategic relationship building</li>
                <li>Market intelligence reporting</li>
              </ul>
            </div>
            <div className="flex-1 bg-gray-50 p-3 md:p-4 rounded-lg border border-gray-100">
              <span className="font-medium text-gray-900">Custom pricing based on:</span>
              <ul className="mt-1 space-y-1 ml-4 list-disc text-gray-600">
                <li>Target markets & sectors</li>
                <li>Integration complexity</li>
                <li>Required relationship depth</li>
                <li>Growth pace objectives</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonials Section - Enhanced Design */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-6">Client Testimonials</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Testimonial 1 - Fintech */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="bg-gradient-to-r from-purple-600 to-amber-500 h-3"></div>
              <div className="p-5">
                <div className="flex items-center mb-4 flex-wrap">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-purple-500 to-amber-500 flex items-center justify-center shadow-md text-white text-xl font-bold flex-shrink-0">
                    T
                  </div>
                  <div className="ml-4 mr-auto">
                    <p className="font-bold text-gray-900">CRO</p>
                    <p className="text-sm text-gray-600">Series B Fintech Company</p>
                  </div>
                  <div className="flex space-x-1 mt-1 sm:mt-0">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <svg className="absolute top-0 left-0 h-10 w-10 text-purple-100 transform -translate-x-4 -translate-y-3" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  
                  <p className="text-gray-700 italic text-sm ml-5">
                    "Boff AI's approach cut our market entry timeline by <span className="font-semibold text-purple-700">65%</span>. Their understanding of UAE banking regulations and existing relationships were crucial to our fintech solution's success. The combination of Arabic AI and human expertise is truly unique."
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-purple-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs font-medium text-gray-800">UAE & KSA Expansion</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified Result</span>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 - Healthcare */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-500 h-3"></div>
              <div className="p-5">
                <div className="flex items-center mb-4 flex-wrap">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-md text-white text-xl font-bold flex-shrink-0">
                    H
                  </div>
                  <div className="ml-4 mr-auto">
                    <p className="font-bold text-gray-900">VP Global Expansion</p>
                    <p className="text-sm text-gray-600">Healthcare Tech Platform</p>
                  </div>
                  <div className="flex space-x-1 mt-1 sm:mt-0">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <svg className="absolute top-0 left-0 h-10 w-10 text-blue-100 transform -translate-x-4 -translate-y-3" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  
                  <p className="text-gray-700 italic text-sm ml-5">
                    "What impressed us most was how Boff AI's team navigated healthcare compliance across <span className="font-semibold text-blue-700">multiple GCC countries simultaneously</span>. Their monthly retainer model was much more cost-effective than establishing our own regional office and hiring local staff."
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs font-medium text-gray-800">GCC Region</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified Result</span>
                </div>
              </div>
            </div>
            
            {/* Add a third testimonial to complete the grid */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-2">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3"></div>
              <div className="p-5">
                <div className="flex items-center mb-4 flex-wrap">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-md text-white text-xl font-bold flex-shrink-0">
                    S
                  </div>
                  <div className="ml-4 mr-auto">
                    <p className="font-bold text-gray-900">Director of Sales</p>
                    <p className="text-sm text-gray-600">Enterprise Software Company</p>
                  </div>
                  <div className="flex space-x-1 mt-1 sm:mt-0">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <svg className="absolute top-0 left-0 h-10 w-10 text-green-100 transform -translate-x-4 -translate-y-3" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  
                  <p className="text-gray-700 italic text-sm ml-5">
                    "After trying to enter the Saudi market for over a year with traditional methods, we partnered with Boff AI and secured <span className="font-semibold text-green-700">two major government contracts in just 90 days</span>. Their combination of Arabic AI technology with regional human relationships created opportunities we couldn't access otherwise."
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs font-medium text-gray-800">Saudi Arabia</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified Result</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 