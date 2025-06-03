import React, { useState, useEffect, useCallback } from "react";

const USKOPitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    // Slide 1: Title
    {
      id: "title",
      content: (
        <section className="flex flex-col justify-center items-center min-h-screen relative px-4 py-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjYjRhNTc3IiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
          <div className="z-10 flex flex-col items-center w-full">
            <div className="flex flex-row items-center justify-center gap-8 mb-8">
              <img src="https://i.imgur.com/J2ME1ji.png" alt="USKO Logo" className="h-20 md:h-28 drop-shadow-lg bg-white/10 rounded-xl p-2" />
              <span className="text-4xl md:text-6xl font-extrabold text-[#b4a577] mx-2">×</span>
              <img src="https://www.diamondpet.com/wp-content/uploads/2019/01/Diamond-Logo_rev-1.png" alt="Diamond Pet Food Logo" className="h-20 md:h-28 drop-shadow-lg bg-white/10 rounded-xl p-2" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center mb-4 tracking-tight drop-shadow">Logistics. Delivered. <span className="text-[#b4a577]">Exceptionally.</span></h1>
            <p className="text-lg md:text-2xl text-gray-300 text-center max-w-2xl mb-8">USKO & Diamond Pet Food: Specialized logistics for dry pet food distribution across North America, Mexico, South America, and overseas markets.</p>
            <span className="inline-block bg-[#b4a577]/20 border border-[#b4a577] text-[#b4a577] font-bold text-sm md:text-lg px-4 py-2 rounded-full shadow-lg mb-4">Prepared for Diamond Pet Food</span>
          </div>
        </section>
      )
    },
    
    // Slide 2: About USKO
    {
      id: "about",
      content: (
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-16 relative min-h-screen">
          <div className="flex-1 z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">About <span className="text-[#b4a577]">USKO</span></h2>
            <p className="text-lg text-gray-300 mb-8">18+ years of logistics excellence. 65M+ miles driven. 500+ team members. USKO specializes in comprehensive, asset-based logistics solutions for dry pet food transportation across North America, Mexico, South America, and international markets.</p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center bg-white/5 backdrop-blur-lg rounded-xl p-4 hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-[#b4a577]">18+</div>
                <div className="text-gray-400 text-sm">Years Active</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-lg rounded-xl p-4 hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-[#b4a577]">65M+</div>
                <div className="text-gray-400 text-sm">Miles Driven</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-lg rounded-xl p-4 hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-[#b4a577]">500+</div>
                <div className="text-gray-400 text-sm">Team Members</div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[#b4a577] mb-3">Strategic Locations</h3>
              <p className="text-gray-300">Corporate offices in Roseville, CA and Texas provide comprehensive coverage for nationwide distribution and international shipping coordination.</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center z-10">
            <img src="https://i.imgur.com/H7F2rk9.png" alt="USKO Logistics Truck" className="max-w-full h-auto md:h-96 rounded-lg shadow-lg object-cover hover:shadow-[0_0_25px_rgba(180,165,119,0.3)] transition-all duration-300" />
          </div>
        </section>
      )
    },

    // Slide 3: Branch Locations
    {
      id: "branches",
      content: (
        <section className="flex flex-col justify-center items-center px-4 py-16 min-h-screen relative">
          <div className="max-w-6xl mx-auto w-full z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Strategic <span className="text-[#b4a577]">Locations</span></h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">USKO's branch network provides comprehensive coverage and local expertise</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-[#b4a577]/30">
                <div className="w-16 h-16 rounded-full bg-[#b4a577] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#b4a577] mb-3 text-center">Roseville, CA</h3>
                <p className="text-gray-300 text-sm text-center mb-4">Corporate Headquarters</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Executive Operations</li>
                  <li>• West Coast Distribution Hub</li>
                  <li>• Customer Service Center</li>
                  <li>• Fleet Management</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-[#b4a577]/30">
                <div className="w-16 h-16 rounded-full bg-[#b4a577] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#b4a577] mb-3 text-center">Texas Office</h3>
                <p className="text-gray-300 text-sm text-center mb-4">Central Operations Hub</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Central US Coverage</li>
                  <li>• Cross-Border Coordination</li>
                  <li>• Regional Dispatch</li>
                  <li>• Strategic Planning</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#b4a577]/20 to-[#b4a577]/10 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-all duration-300 border-2 border-[#b4a577]/50 relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-[#b4a577] text-white text-xs px-2 py-1 rounded-full font-bold">
                  KEY ADVANTAGE
                </div>
                <div className="w-16 h-16 rounded-full bg-[#b4a577] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#b4a577] mb-3 text-center">Monterrey, Mexico</h3>
                <p className="text-gray-300 text-sm text-center mb-4">Mexico Operations Center</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• <span className="text-[#b4a577] font-semibold">Your Pet Food Mexico support</span></li>
                  <li>• Cross-Border Expertise</li>
                  <li>• Local Distribution Network</li>
                  <li>• Customs & Compliance</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-[#b4a577]/20 to-[#b4a577]/10 backdrop-blur-lg rounded-xl p-6 border border-[#b4a577]/30">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#b4a577] flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#b4a577]">Monterrey Advantage for Diamond Pet Food</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our <span className="text-[#b4a577] font-semibold">Monterrey, Mexico presence</span> positions USKO perfectly to support Diamond Pet Food's 
                <span className="text-[#b4a577] font-semibold"> Mexico operations</span>. With local expertise, established relationships, and 
                cross-border logistics capabilities, we can seamlessly handle your Mexican market distribution needs while ensuring compliance 
                with all local regulations and customs requirements.
              </p>
            </div>
          </div>
        </section>
      )
    },

    // Slide 4: Geographic Coverage
    {
      id: "coverage",
      content: (
        <section className="flex flex-col justify-center items-center px-4 py-16 min-h-screen relative">
          <div className="max-w-6xl mx-auto w-full z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Global <span className="text-[#b4a577]">Coverage</span></h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive logistics solutions spanning multiple continents</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-[#b4a577]/30">
                <div className="w-12 h-12 rounded-full bg-[#b4a577] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#b4a577] mb-2">North America</h3>
                <p className="text-gray-300 text-sm">Nationwide coverage across the United States and Canada with dedicated routes and strategic partnerships.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-[#b4a577]/30">
                <div className="w-12 h-12 rounded-full bg-[#b4a577] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#b4a577] mb-2">Mexico & Central America</h3>
                <p className="text-gray-300 text-sm">Specialized cross-border operations with expertise in customs clearance and regional distribution networks.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-[#b4a577]/30">
                <div className="w-12 h-12 rounded-full bg-[#b4a577] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#b4a577] mb-2">South America</h3>
                <p className="text-gray-300 text-sm">Growing presence in key South American markets with reliable shipping partnerships and local expertise.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-[#b4a577]/30">
                <div className="w-12 h-12 rounded-full bg-[#b4a577] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#b4a577] mb-2">Europe & Overseas</h3>
                <p className="text-gray-300 text-sm">International shipping capabilities to Europe and other global markets with comprehensive logistics support.</p>
              </div>
            </div>
          </div>
        </section>
      )
    },

    // Slide 5: Transportation Assets
    {
      id: "assets",
      content: (
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-16 relative min-h-screen">
          <div className="flex-1 z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Transportation <span className="text-[#b4a577]">Assets</span></h2>
            <p className="text-lg text-gray-300 mb-8">USKO's specialized fleet includes full truckload, LTL, and international distribution solutions. Professional drivers and real-time tracking ensure your dry pet food products arrive safely and on time.</p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#b4a577] mb-2">Full Truckload & LTL Services</h3>
                <p className="text-gray-300 text-sm">Flexible shipping options for any volume requirement</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#b4a577] mb-2">International Distribution</h3>
                <p className="text-gray-300 text-sm">Seamless cross-border and overseas shipping coordination</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#b4a577] mb-2">Advanced Scheduling & Tracking</h3>
                <p className="text-gray-300 text-sm">Real-time visibility and proactive communication</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#b4a577] mb-2">Full Customer Service Support</h3>
                <p className="text-gray-300 text-sm">Dedicated staff for scheduling appointments, tracking & trace, with single POC for all issues</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6 z-10">
            <img src="https://imgur.com/5MNmizZ.jpg" alt="USKO Truck" className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-[0_0_25px_rgba(180,165,119,0.3)] transition-all duration-300" />
            <img src="https://imgur.com/WyZyHpc.jpg" alt="USKO International Shipping" className="w-full h-40 object-cover rounded-lg shadow-md hover:shadow-[0_0_25px_rgba(180,165,119,0.3)] transition-all duration-300" />
          </div>
        </section>
      )
    },

    // Slide 6: Value Proposition
    {
      id: "value",
      content: (
        <section className="flex flex-col justify-center items-center px-4 py-16 min-h-screen relative">
          <div className="max-w-6xl mx-auto w-full z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our <span className="text-[#b4a577]">Value Proposition</span></h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Why Choose USKO for Diamond Pet Food?</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#b4a577] mb-3">Dry Pet Food Expertise</h3>
                <p className="text-gray-300">Specialized handling and transportation of dry pet food products with proper storage and distribution protocols.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#b4a577] mb-3">Advanced Scheduling System</h3>
                <p className="text-gray-300">Efficient coordination between manufacturing facilities and delivery points with real-time updates and tracking.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#b4a577] mb-3">Global Distribution Network</h3>
                <p className="text-gray-300">Comprehensive coverage across North America, Mexico, South America, and overseas markets including Europe.</p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-lg mb-8">
              <h3 className="text-xl font-semibold text-[#b4a577] mb-4">Key Benefits for Diamond Pet Food</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-[#b4a577] pl-4">
                  <h4 className="font-semibold text-white mb-1">Asset-Based 3PL</h4>
                  <p className="text-gray-300 text-sm">Dedicated fleet and resources for reliable dry pet food transportation.</p>
                </div>
                <div className="border-l-4 border-[#b4a577] pl-4">
                  <h4 className="font-semibold text-white mb-1">Full Service Support</h4>
                  <p className="text-gray-300 text-sm">Complete customer service staff for scheduling, tracking & trace, with single POC.</p>
                </div>
                <div className="border-l-4 border-[#b4a577] pl-4">
                  <h4 className="font-semibold text-white mb-1">Strategic Locations</h4>
                  <p className="text-gray-300 text-sm">Corporate offices in Roseville and Texas for comprehensive coverage.</p>
                </div>
                <div className="border-l-4 border-[#b4a577] pl-4">
                  <h4 className="font-semibold text-white mb-1">International Reach</h4>
                  <p className="text-gray-300 text-sm">Expertise in Mexico, South America, and overseas export logistics.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#b4a577]/20 to-[#b4a577]/10 backdrop-blur-lg rounded-xl p-6 border border-[#b4a577]/30">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-[#b4a577] flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#b4a577]">Did You Know?</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                We understand Diamond Pet Food also manufactures <span className="text-[#b4a577] font-semibold">Kirkland Signature pet food for Costco</span>. 
                USKO already delivers to Costco locations for our other customers, making the transition seamless for your Kirkland Signature product line. 
                Our existing Costco relationships and delivery protocols ensure smooth operations from day one.
              </p>
            </div>
          </div>
        </section>
      )
    },

    // Slide 7: Contact
    {
      id: "contact",
      content: (
        <section className="flex flex-col items-center justify-center px-4 py-16 min-h-screen relative">
          <div className="z-10 max-w-4xl w-full text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your <span className="text-[#b4a577]">Logistics?</span></h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">Partner with USKO to elevate Diamond Pet Food's distribution capabilities with our specialized fleet and global network.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-[#b4a577]/30 shadow-lg hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#b4a577] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-[#b4a577] font-bold text-lg mb-2">Contact Us</h3>
                <a href="tel:1-800-USKO-LOG" className="text-[#b4a577] font-bold text-lg hover:text-white transition-colors duration-300">(916) 123-4567</a>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-[#b4a577]/30 shadow-lg hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#b4a577] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-[#b4a577] font-bold text-lg mb-2">Email</h3>
                <a href="mailto:sales@uskologistics.com" className="text-[#b4a577] font-bold text-lg hover:text-white transition-colors duration-300">sales@uskologistics.com</a>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-[#b4a577]/30 shadow-lg hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#b4a577] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <h3 className="text-[#b4a577] font-bold text-lg mb-2">Corporate Offices</h3>
                <p className="text-gray-300 text-sm">Roseville, CA<br />Texas Office</p>
              </div>
            </div>
            
            <div className="flex flex-row items-center justify-center gap-8 mb-8">
              <img src="https://i.imgur.com/J2ME1ji.png" alt="USKO Logo" className="h-16 drop-shadow-lg bg-white/10 rounded-xl p-2" />
              <img src="https://www.diamondpet.com/wp-content/uploads/2019/01/Diamond-Logo_rev-1.png" alt="Diamond Pet Food Logo" className="h-16 drop-shadow-lg bg-white/10 rounded-xl p-2" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Logistics. Delivered. <span className="text-[#b4a577]">Exceptionally.</span></h3>
          </div>
        </section>
      )
    }
  ];

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setIsTransitioning(false);
      }, 150);
    }
  }, [currentSlide, isTransitioning, slides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setIsTransitioning(false);
      }, 150);
    }
  }, [currentSlide, isTransitioning]);

  const goToSlide = useCallback((index) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 150);
    }
  }, [currentSlide, isTransitioning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  return (
    <div className="bg-gradient-to-br from-black via-[#181818] to-gray-900 min-h-screen w-full font-sans relative overflow-hidden">
      {/* Slide Content */}
      <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {slides[currentSlide].content}
      </div>

      {/* Navigation Arrows */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 bg-[#b4a577]/80 hover:bg-[#b4a577] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          disabled={isTransitioning}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {currentSlide < slides.length - 1 && (
        <button
          onClick={nextSlide}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 bg-[#b4a577]/80 hover:bg-[#b4a577] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          disabled={isTransitioning}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Page Indicator */}
      <div className="fixed bottom-4 right-4 z-50 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
        <span className="text-[#b4a577] font-bold text-sm">{currentSlide + 1}</span>
        <span className="text-gray-400 text-sm">/</span>
        <span className="text-gray-300 text-sm">{slides.length}</span>
      </div>

      {/* Slide Dots Navigation */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-[#b4a577] scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
        <div 
          className="h-full bg-[#b4a577] transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default USKOPitchDeck; 