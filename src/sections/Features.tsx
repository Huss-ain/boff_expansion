'use client';
import Tag from "@/components/Tag";
import { useState } from "react";
import Image from "next/image";

export function Features() {
  // Email conversation data
  const emailThread = [
    {
      id: 0,
      sender: "Sule Bule",
      senderEmail: "sule@boff.ai",
      recipient: "Jodi Almeida",
      recipientEmail: "j.almeida@*******.com", // Blurred for privacy
      subject: "Rebuilding treasury after the hack",
      date: "Dec 5, 2024",
      time: "11:23 AM",
      avatar: "SB", 
      content: (
        <div>
          <p>Hi Jodi,</p>
          <p className="my-3">
            I know the past 4 months must have been overwhelming following the hack. I've been there and know what the swings in NWC can do to the mind. If you need any help or just to bounce some ideas on the rebuild, drop me a line.
          </p>
          <p className="my-3">Sule</p>
          <p className="text-sm text-blue-600">Linkedin</p>
        </div>
      ),
      isFromBDR: true
    },
    {
      id: 1,
      sender: "Jodi Almeida",
      senderEmail: "j.almeida@*******.com", // Blurred for privacy
      recipient: "Sule Bule",
      recipientEmail: "sule@boff.ai",
      subject: "Re: Rebuilding treasury after the hack",
      date: "Dec 5, 2024",
      time: "4:02 PM",
      avatar: "JA",
      content: (
        <div>
          <p>That's really kind of you, it is a nightmare actually. I'm assuming you are in treasury too - which sector? Not sure I have the time to meet at the moment.</p>
        </div>
      ),
      isFromBDR: false
    },
    {
      id: 2,
      sender: "Sule Bule",
      senderEmail: "sule@boff.ai",
      recipient: "Jodi Almeida",
      recipientEmail: "j.almeida@*******.com", // Blurred for privacy
      subject: "Re: Rebuilding treasury after the hack",
      date: "Dec 6, 2024",
      time: "8:47 AM",
      avatar: "SB",
      content: (
        <div>
          <p>I thought so, but the silver lining is that once you solve it you become the hotshot in job market. I'm actually not in treasury right now, but I worked in consulting and fintech for years and have been on the bad end of hacks.</p>
        </div>
      ),
      isFromBDR: true
    },
    {
      id: 3,
      sender: "Jodi Almeida",
      senderEmail: "j.almeida@*******.com", // Blurred for privacy
      recipient: "Sule Bule",
      recipientEmail: "sule@boff.ai",
      subject: "Re: Rebuilding treasury after the hack",
      date: "Dec 6, 2024",
      time: "1:35 PM",
      avatar: "JA",
      content: (
        <div>
          <p>Really? It didn't cross my mind that companies and recruiters look at that.</p>
        </div>
      ),
      isFromBDR: false
    },
    {
      id: 4,
      sender: "Sule Bule",
      senderEmail: "sule@boff.ai",
      recipient: "Jodi Almeida",
      recipientEmail: "j.almeida@*******.com", // Blurred for privacy
      subject: "Re: Rebuilding treasury after the hack",
      date: "Dec 7, 2024",
      time: "9:08 AM",
      avatar: "SB",
      content: (
        <div>
          <p>It's not obvious but it makes sense though. Someone who figures out how to rebuild in a high stress environment and a financially sensitive position, that takes a lot. Let's agree that's both of us! As I said, anytime you need to bounce some ideas let me know as it's my area of focus atm.</p>
        </div>
      ),
      isFromBDR: true
    },
    {
      id: 5,
      sender: "Jodi Almeida",
      senderEmail: "j.almeida@*******.com", // Blurred for privacy
      recipient: "Sule Bule",
      recipientEmail: "sule@boff.ai",
      subject: "Re: Rebuilding treasury after the hack",
      date: "Dec 9, 2024",
      time: "5:42 PM",
      avatar: "JA",
      content: (
        <div>
          <p>I hope so. Actually Friday morning I have half hour from 9:30.</p>
        </div>
      ),
      isFromBDR: false
    },
    {
      id: 6,
      sender: "Sule Bule",
      senderEmail: "sule@boff.ai",
      recipient: "Jodi Almeida",
      recipientEmail: "j.almeida@*******.com", // Blurred for privacy
      subject: "Re: Rebuilding treasury after the hack",
      date: "Dec 9, 2024",
      time: "6:15 PM",
      avatar: "SB",
      content: (
        <div>
          <p>That works. I'll send a Google Meet invite now.</p>
        </div>
      ),
      isFromBDR: true
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-[#f9f2e8] to-[#f7edf9]">
      <div className="container mx-auto px-4">
        <div className="max-w-[740px] mx-auto">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#3c2a06] to-[#422301] mt-7">
            Build trust with conversations that resonate
          </h2>
          <p className="section-description mb-16 max-w-[740px] md:max-w-[900px] lg:max-w-[1000px] mx-auto">
             Close many more deals by letting Boff AI handle the groundwork of relationship building through authentic conversations and follow-ups that focus on the person, not the product.
          </p>
        </div>
        
        {/* Email Interface - Larger for big screens, responsive for mobile */}
        <div className="w-full max-w-[1100px] lg:max-w-[90%] xl:max-w-[1200px] mx-auto rounded-xl overflow-hidden shadow-2xl bg-white border border-gray-200">
          {/* Email Header - More responsive */}
          <div className="bg-[#f9f9f9] border-b border-gray-200 px-4 md:px-6 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="flex items-center md:mr-2">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <div className="relative w-32 md:w-64">
                <input
                  type="text"
                  className="w-full pl-8 md:pl-10 pr-2 md:pr-4 py-1 md:py-2 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search emails"
                />
                <div className="absolute left-2 md:left-3 top-1.5 md:top-2.5">
                  <svg className="h-4 w-4 md:h-5 md:w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1 md:space-x-3">
              <button className="p-1 md:p-2 rounded-full hover:bg-gray-200">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className="p-1 md:p-2 rounded-full hover:bg-gray-200">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Email Content Area with message preview cards */}
          <div className="flex-1 bg-white">
            <div className="px-3 sm:px-4 md:px-6 py-4 md:py-6">
              <div className="mb-3 md:mb-4">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                  {emailThread[0].subject}
                </h2>
                <div className="flex items-center mt-1 text-xs md:text-sm text-gray-500">
                  <span>{emailThread.length} messages</span>
                  <span className="mx-2">•</span>
                  <span>Dec 5-9, 2024</span>
                </div>
              </div>
              
              {/* Message Cards with Deliberate Overflow */}
              <div className="relative h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] overflow-y-auto pr-2 message-container">
                {/* First visible message - full view */}
                <div className="mb-4 bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-start">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white text-base md:text-xl mr-2 md:mr-4 flex-shrink-0 bg-amber-600">
                      {emailThread[0].avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline">
                        <span className="font-medium text-gray-900">{emailThread[0].sender}</span>
                        <span className="text-xs text-gray-500">{emailThread[0].date}, {emailThread[0].time}</span>
                      </div>
                      <div className="text-sm text-gray-500 mb-2">To: {emailThread[0].recipient}</div>
                      <div className="email-content">{emailThread[0].content}</div>
                    </div>
                  </div>
                </div>

                {/* Second message - partially clipped to show there's more */}
                <div className="mb-4 bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-start">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white text-base md:text-xl mr-2 md:mr-4 flex-shrink-0 bg-blue-600">
                      {emailThread[1].avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline">
                        <span className="font-medium text-gray-900">{emailThread[1].sender}</span>
                        <span className="text-xs text-gray-500">{emailThread[1].date}, {emailThread[1].time}</span>
                      </div>
                      <div className="text-sm text-gray-500 mb-2">To: {emailThread[1].recipient}</div>
                      <div className="email-content">{emailThread[1].content}</div>
                    </div>
                  </div>
                </div>

                {/* Remaining messages */}
                {emailThread.slice(2).map((email) => (
                  <div 
                    key={email.id} 
                    className="mb-4 bg-white rounded-lg p-4 border border-gray-200 shadow-sm"
                  >
                    <div className="flex items-start">
                      <div 
                        className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white text-base md:text-xl mr-2 md:mr-4 flex-shrink-0 ${
                          email.isFromBDR ? 'bg-amber-600' : 'bg-blue-600'
                        }`}
                      >
                        {email.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-baseline">
                          <span className="font-medium text-gray-900">{email.sender}</span>
                          <span className="text-xs text-gray-500">{email.date}, {email.time}</span>
                        </div>
                        <div className="text-sm text-gray-500 mb-2">To: {email.recipient}</div>
                        <div className="email-content">{email.content}</div>
                        
                        {/* Only show reply and forward buttons on the last message (ID 6) */}
                        {email.id === 6 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            <button className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs hover:bg-blue-700">
                              Reply
                            </button>
                            <button className="border border-gray-300 text-gray-700 px-3 py-1.5 rounded text-xs hover:bg-gray-100">
                              Forward
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Scroll indicator at bottom */}
              <div className="mt-2 flex justify-center">
                <div className="animate-bounce flex items-center gap-1 bg-gray-100 py-1 px-3 rounded-full shadow-inner text-gray-600 text-xs">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  Scroll for more messages
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

<style jsx>{`
  .scroll-indicator {
    transition: opacity 0.3s ease;
  }
  
  /* Make scrollbar more visible */
  #emailScroll::-webkit-scrollbar {
    width: 8px;
  }
  
  #emailScroll::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  #emailScroll::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 4px;
  }
  
  #emailScroll::-webkit-scrollbar-thumb:hover {
    background: #bbb;
  }
`}</style>
