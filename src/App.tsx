import svgPaths from "./imports/svg-axvil03296";
import imgImageTransLocShowingNoActiveRoutes from "figma:asset/aaa4bac03dede0b9043e2d7885b9f3c911ddc834.png";
import imgImageTransLocShowingRisdRidesError from "figma:asset/a6d2312142e23775adc8baf399a08187342ff0ac.png";
import imgImageBookingFailedErrorMessage from "figma:asset/5f6e21b2e79a40aecc0b4cbdd35ff9be9753e0d8.png";
import imgImagePassioGoConfusingRouteMap from "figma:asset/1b134135bc2c25eec97dd0f9bd01267a245dabb9.png";
import imgImageStopsScreenWireframe from "figma:asset/e7c73282e08213b82eaf15700e1876d43d795470.png";
import imgImageRoutesScreenWireframe from "figma:asset/79c6cf9f24fa9d0fa7b852bc064a929aa5520823.png";
import imgImageDetailsScreenWireframe from "figma:asset/16b4c8cd4f4217d883e8b33d9b6c86b9660a1503.png";
import imgImageOnCallScreenWireframe from "figma:asset/6a4a8d7eb37ff080c852154e07ec49382851d98f.png";
import imgImage4 from "figma:asset/7cde1039a1767a9c08dadd89311c92562e28ed44.png";
import imgImage7 from "figma:asset/8ffd228bbbaa74eaf75d66660a4b5060c3575e0a.png";
import imgImage2 from "figma:asset/ee0a748965bd51c5c6ad133b2a591153c50f54cc.png";
import imgImage5 from "figma:asset/9ad8a8f005f023102ef7fc0ad9befd282ed8f5ce.png";
import imgImage6 from "figma:asset/987088acf92b4bd4e2e63105adbf707644139204.png";
import imgFinalDesign from "figma:asset/b2c43abca5a702f511d5cf14ad8aec39cd3216f4.png";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Magazine Editorial Style */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#a8d8ea] opacity-10 transform skew-x-[-15deg] origin-top-right" />
        
        <div className="container mx-auto px-6 lg:px-16 py-20 relative z-10">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-7">
              <div className="space-y-12">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white">
                  <span className="text-sm uppercase tracking-widest font-['Instrument_Sans:Bold',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Case Study
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#a8d8ea]" />
                  <span className="text-sm font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    2025
                  </span>
                </div>

                <h1 className="text-6xl lg:text-8xl font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-[0.95] text-black">
                  Brown
                  <br />
                  <span className="inline-block mt-2 px-8 py-2 bg-[#3d2817] text-white">University</span>
                  <br />
                  <span className="text-[#a8d8ea]">Shuttle</span>
                </h1>

                <div className="flex items-start gap-4">
                  <div className="w-1 h-32 bg-[#3d2817]" />
                  <p className="text-2xl lg:text-3xl font-['Instrument_Sans:Regular',sans-serif] text-gray-700 leading-relaxed max-w-2xl" style={{ fontVariationSettings: "'wdth' 100" }}>
                    A comprehensive design exploration merging TransLoc and PassioGo into one cohesive platform—eliminating confusion and creating a seamless transit experience for students.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <div className="bg-[#3d2817] text-white p-10 transform rotate-2">
                <div className="transform -rotate-2 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/20">
                    <span className="text-sm uppercase tracking-wider font-['Instrument_Sans:Bold',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>Timeline</span>
                    <span className="font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>Oct-Nov 2025</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/20">
                    <span className="text-sm uppercase tracking-wider font-['Instrument_Sans:Bold',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>Role</span>
                    <span className="font-['Instrument_Sans:Regular',sans-serif] text-right" style={{ fontVariationSettings: "'wdth' 100" }}>PM & Designer</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm uppercase tracking-wider font-['Instrument_Sans:Bold',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>Team</span>
                    <span className="font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>3 Fellows</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Prototype Section */}
      <section className="py-20 px-6 lg:px-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-sm uppercase tracking-widest font-['Instrument_Sans:Bold',sans-serif] text-[#3d2817] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
              Interactive Prototype
            </h2>
          </div>
          
          <a 
            href="https://www.figma.com/proto/TO9AcgOoDaVEieDoY7OyCf/BUS-LOCAL-REDESIGN?t=aKrtBGXbuTNPENnB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=16-1898&starting-point-node-id=16%3A1898&show-proto-sidebar=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative bg-gradient-to-br from-[#a8d8ea] to-[#3d2817] p-1 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-white rounded-xl p-16 text-center">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-[#a8d8ea]/10 flex items-center justify-center group-hover:bg-[#a8d8ea]/20 transition-colors">
                    <ExternalLink className="w-10 h-10 text-[#3d2817]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-black mb-3">
                      View Interactive Prototype
                    </h3>
                    <p className="text-gray-600 font-['Instrument_Sans:Regular',sans-serif] text-lg" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Click to explore the full clickable prototype
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[#3d2817] font-['Instrument_Sans:SemiBold',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <span>Launch Prototype</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Context - Diagonal Split */}
      <section className="py-20 px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2/3 h-full bg-[#a8d8ea]/5 transform -skew-y-3 origin-top-left" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-12 gap-12 items-start">
            <div className="col-span-12 lg:col-span-4">
              <div className="sticky top-8">
                <h2 className="text-5xl font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-black mb-4 leading-tight">
                  Project
                  <br />
                  Context
                </h2>
                <div className="w-16 h-1 bg-[#3d2817]" />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <div className="bg-white border-l-4 border-[#a8d8ea] p-10 shadow-xl">
                <p className="text-xl font-['Instrument_Sans:Regular',sans-serif] text-gray-800 leading-relaxed mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Developed as the culminating project for the Brown Product Management Fellowship, this initiative challenged us to apply strategic PM frameworks to an existing campus service.
                </p>
                <p className="text-xl font-['Instrument_Sans:Regular',sans-serif] text-gray-800 leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
                  I selected Brown's shuttle ecosystem as the focal point, recognizing an opportunity to merge two disparate applications—TransLoc for on-call rides and PassioGo for fixed routes—into a unified solution that simplifies student navigation and enhances overall transportation accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution - Side by Side Blocks */}
      <section className="py-20 px-6 lg:px-16 bg-black text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Problem */}
            <div className="bg-[#3d2817] p-12 lg:p-16">
              <div className="mb-8">
                <div className="inline-block px-4 py-2 bg-white/10 text-sm uppercase tracking-widest font-['Instrument_Sans:Bold',sans-serif] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Problem
                </div>
                <h3 className="text-4xl font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] mb-8">
                  The Challenge
                </h3>
              </div>
              
              <div className="space-y-6 font-['Instrument_Sans:Regular',sans-serif] text-lg leading-relaxed text-white/90" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p>
                  Brown University provides an extensive shuttle network featuring scheduled routes, late-night on-demand service, and comprehensive campus reach. Despite this infrastructure, student adoption remains disappointingly low.
                </p>
                <p className="font-['Instrument_Sans:Bold',sans-serif] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Students must navigate two completely separate applications—and the vast majority don't understand which service lives in which app.
                </p>
                <p>
                  The result: missed rides, unsafe late-night walks, and an erosion of confidence in campus transportation.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-[#a8d8ea] text-black p-12 lg:p-16">
              <div className="mb-8">
                <div className="inline-block px-4 py-2 bg-black/10 text-sm uppercase tracking-widest font-['Instrument_Sans:Bold',sans-serif] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Solution
                </div>
                <h3 className="text-4xl font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] mb-8">
                  Our Approach
                </h3>
              </div>
              
              <div className="space-y-6 font-['Instrument_Sans:Regular',sans-serif] text-lg leading-relaxed text-black/90" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="font-['Instrument_Sans:Bold',sans-serif] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                  A single, Brown-branded shuttle application that seamlessly integrates fixed route schedules, live vehicle tracking, and on-demand ride booking within one intuitive interface.
                </p>
                <p>
                  This redesigned platform consolidates essential features from both apps while stripping away confusion around agencies, zones, and service types.
                </p>
                <p>
                  The result: students can instantly understand what's available and reach their destination efficiently and safely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research - Grid Layout */}
      <section className="py-24 px-6 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <span className="text-6xl lg:text-8xl font-['Neue_Haas_Grotesk_Display_Pro:45_Light',sans-serif] text-[#a8d8ea]/20">01</span>
            <h2 className="text-5xl font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-black -mt-8">
              Discovery & Research
            </h2>
          </div>

          {/* Research Method */}
          <div className="mb-16 max-w-4xl">
            <div className="border-t-4 border-[#3d2817] pt-8">
              <h3 className="text-2xl font-['Instrument_Sans:Bold',sans-serif] mb-6 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                User Research Methodology
              </h3>
              <p className="text-lg font-['Instrument_Sans:Regular',sans-serif] text-gray-700 leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
                We facilitated in-depth conversations with <strong>24 Brown students</strong> to map their shuttle usage behaviors, uncover friction points, and understand underlying motivations. Rather than asking biased questions, we employed open-ended, behavior-centered prompts to identify root causes and gauge impact on campus mobility.
              </p>
            </div>
          </div>

          {/* Key Findings - Masonry Style */}
          <div className="mb-16">
            <h3 className="text-3xl font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] mb-10 text-black">
              Critical Insights
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-none border-b-8 border-[#a8d8ea]">
                <div className="text-6xl font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] mb-4 text-[#a8d8ea]">
                  76.5%
                </div>
                <h4 className="text-xl font-['Instrument_Sans:Bold',sans-serif] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
                  App Confusion
                </h4>
                <p className="font-['Instrument_Sans:Regular',sans-serif] text-white/80 leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Students cannot distinguish which app handles on-call versus scheduled routes, frequently attempting requests in the wrong application.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#a8d8ea] to-[#7ec8dc] text-black p-8 rounded-none border-b-8 border-[#3d2817]">
                <div className="text-6xl font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] mb-4">
                  68.8%
                </div>
                <h4 className="text-xl font-['Instrument_Sans:Bold',sans-serif] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Unreliable Tracking
                </h4>
                <p className="font-['Instrument_Sans:Regular',sans-serif] text-black/80 leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Vehicle icons freeze, jump, or disappear. ETAs feel inaccurate. Students lack confidence shuttles will actually arrive.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#3d2817] to-[#2a1d0f] text-white p-8 rounded-none border-b-8 border-[#a8d8ea]">
                <div className="text-6xl font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] mb-4 text-[#a8d8ea]">
                  75.0%
                </div>
                <h4 className="text-xl font-['Instrument_Sans:Bold',sans-serif] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Schedule Opacity
                </h4>
                <p className="font-['Instrument_Sans:Regular',sans-serif] text-white/80 leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Understanding when service is active and which routes serve specific destinations proves challenging.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-100 to-gray-200 text-black p-8 rounded-none border-b-8 border-[#3d2817]">
                <div className="text-6xl font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] mb-4">
                  56.3%
                </div>
                <h4 className="text-xl font-['Instrument_Sans:Bold',sans-serif] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Cluttered UI
                </h4>
                <p className="font-['Instrument_Sans:Regular',sans-serif] text-black/70 leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Visually chaotic with excessive markers and overlays. Requesting or modifying rides creates unnecessary friction.
                </p>
              </div>
            </div>
          </div>

          {/* Competitive Analysis */}
          <div className="mt-20">
            <div className="bg-black text-white p-12 mb-8">
              <h3 className="text-3xl font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] mb-4">
                Competitive Analysis
              </h3>
              <p className="text-lg font-['Instrument_Sans:Regular',sans-serif] text-white/80 leading-relaxed max-w-3xl" style={{ fontVariationSettings: "'wdth' 100" }}>
                We examined three industry-leading transportation apps to extract proven patterns for real-time tracking, route clarity, and user experience excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-black">
              <div className="bg-white p-8 border-r-4 border-black">
                <div className="h-3 w-3 rounded-full bg-[#a8d8ea] mb-6" />
                <h4 className="text-2xl font-['Instrument_Sans:Bold',sans-serif] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>Transit</h4>
                <p className="text-sm text-gray-500 mb-6 font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>Real-time tracking</p>
                <ul className="space-y-3 text-sm font-['Instrument_Sans:Regular',sans-serif] text-gray-700" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <li>→ Clean route visualization</li>
                  <li>→ Nearby routes feature</li>
                  <li>→ Effective color-coding</li>
                </ul>
              </div>

              <div className="bg-white p-8 border-r-4 border-black">
                <div className="h-3 w-3 rounded-full bg-[#3d2817] mb-6" />
                <h4 className="text-2xl font-['Instrument_Sans:Bold',sans-serif] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>Uber</h4>
                <p className="text-sm text-gray-500 mb-6 font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>On-demand booking</p>
                <ul className="space-y-3 text-sm font-['Instrument_Sans:Regular',sans-serif] text-gray-700" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <li>→ Minimal-step booking</li>
                  <li>→ Accurate live tracking</li>
                  <li>→ Clear confirmation visuals</li>
                </ul>
              </div>

              <div className="bg-white p-8">
                <div className="h-3 w-3 rounded-full bg-[#a8d8ea] mb-6" />
                <h4 className="text-2xl font-['Instrument_Sans:Bold',sans-serif] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>Lyft</h4>
                <p className="text-sm text-gray-500 mb-6 font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>On-demand booking</p>
                <ul className="space-y-3 text-sm font-['Instrument_Sans:Regular',sans-serif] text-gray-700" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <li>→ Minimalist interface</li>
                  <li>→ Accessible design</li>
                  <li>→ Easy modification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Persona & Journey Roadmap */}
      <section className="py-24 px-6 lg:px-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <span className="text-6xl lg:text-8xl font-['Neue_Haas_Grotesk_Display_Pro:45_Light',sans-serif] text-[#3d2817]/20">02</span>
            <h2 className="text-5xl font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-black -mt-8">
              Design Process
            </h2>
          </div>

          {/* Persona */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-[#a8d8ea] to-[#3d2817] p-1 rounded-none">
              <div className="bg-white p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="w-24 h-24 rounded-full bg-[#a8d8ea]/20 flex items-center justify-center mb-6">
                      <span className="text-4xl font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif]">O</span>
                    </div>
                    <h3 className="text-3xl font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] mb-2">
                      Oliver
                    </h3>
                    <p className="text-lg text-gray-600 font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Junior at Brown
                    </p>
                  </div>

                  <div className="lg:col-span-2 space-y-4 font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <div>
                      <span className="inline-block px-3 py-1 bg-black text-white text-sm uppercase tracking-wider font-['Instrument_Sans:Bold',sans-serif] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Profile
                      </span>
                      <p className="text-gray-700">20 years old, lives off-campus on Thayer Street, works at a research lab (25-minute walk)</p>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-black text-white text-sm uppercase tracking-wider font-['Instrument_Sans:Bold',sans-serif] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Goal
                      </span>
                      <p className="text-gray-700">Travel home safely after late shifts, especially during winter</p>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-black text-white text-sm uppercase tracking-wider font-['Instrument_Sans:Bold',sans-serif] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Frustrations
                      </span>
                      <p className="text-gray-700">Never knows which app to use, misses shuttles due to unreliable timing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Journey Roadmap */}
          <div>
            <h3 className="text-3xl font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] mb-4 text-black">
              Current User Journey
            </h3>
            <p className="text-lg font-['Instrument_Sans:Regular',sans-serif] text-gray-600 mb-12" style={{ fontVariationSettings: "'wdth' 100" }}>
              A roadmap of pain points in the existing experience
            </p>

            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#a8d8ea] via-[#ff6b6b] to-gray-400" />

              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex items-start gap-8">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-[#a8d8ea] flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-2xl font-['Instrument_Sans:Bold',sans-serif] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>1</span>
                  </div>
                  <div className="flex-1 bg-white p-6 shadow-lg border-l-4 border-[#a8d8ea] mt-4">
                    <h4 className="text-xl font-['Instrument_Sans:Bold',sans-serif] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Opens App
                    </h4>
                    <p className="text-gray-600 font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Oliver opens TransLoc searching for shuttle schedules
                    </p>
                  </div>
                </div>

                {/* Step 2 - Problem */}
                <div className="relative flex items-start gap-8">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-[#ff6b6b] flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-2xl font-['Instrument_Sans:Bold',sans-serif] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>2</span>
                  </div>
                  <div className="flex-1 bg-[#ff6b6b]/5 p-6 shadow-lg border-l-4 border-[#ff6b6b] mt-4">
                    <div className="inline-block px-3 py-1 bg-[#ff6b6b] text-white text-xs uppercase tracking-wider mb-3 font-['Instrument_Sans:Bold',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Pain Point
                    </div>
                    <h4 className="text-xl font-['Instrument_Sans:Bold',sans-serif] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Inaccurate Information
                    </h4>
                    <p className="text-gray-700 mb-4 font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      No routes within 1.5 miles shown
                    </p>
                    <div className="bg-white p-3 rounded border-2 border-gray-200">
                      <img src={imgImageTransLocShowingNoActiveRoutes} alt="No routes" className="w-full h-auto" />
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-start gap-8">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-2xl font-['Instrument_Sans:Bold',sans-serif] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>3</span>
                  </div>
                  <div className="flex-1 bg-white p-6 shadow-lg border-l-4 border-gray-400 mt-4">
                    <h4 className="text-xl font-['Instrument_Sans:Bold',sans-serif] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Search Continues
                    </h4>
                    <p className="text-gray-600 font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Pivots to on-call routes
                    </p>
                  </div>
                </div>

                {/* Step 4 - Problem */}
                <div className="relative flex items-start gap-8">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-[#ff6b6b] flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-2xl font-['Instrument_Sans:Bold',sans-serif] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>4</span>
                  </div>
                  <div className="flex-1 bg-[#ff6b6b]/5 p-6 shadow-lg border-l-4 border-[#ff6b6b] mt-4">
                    <div className="inline-block px-3 py-1 bg-[#ff6b6b] text-white text-xs uppercase tracking-wider mb-3 font-['Instrument_Sans:Bold',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Pain Point
                    </div>
                    <h4 className="text-xl font-['Instrument_Sans:Bold',sans-serif] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Irrelevant Routes
                    </h4>
                    <p className="text-gray-700 mb-4 font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Shows RISD rides that Brown students cannot access
                    </p>
                    <div className="bg-white p-3 rounded border-2 border-gray-200">
                      <img src={imgImageTransLocShowingRisdRidesError} alt="RISD error" className="w-full h-auto" />
                    </div>
                  </div>
                </div>

                {/* Step 5 - Problem */}
                <div className="relative flex items-start gap-8">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-[#ff6b6b] flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-2xl font-['Instrument_Sans:Bold',sans-serif] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>5</span>
                  </div>
                  <div className="flex-1 bg-[#ff6b6b]/5 p-6 shadow-lg border-l-4 border-[#ff6b6b] mt-4">
                    <div className="inline-block px-3 py-1 bg-[#ff6b6b] text-white text-xs uppercase tracking-wider mb-3 font-['Instrument_Sans:Bold',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Pain Point
                    </div>
                    <h4 className="text-xl font-['Instrument_Sans:Bold',sans-serif] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Zone Booking Error
                    </h4>
                    <p className="text-gray-700 mb-4 font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      On-call not active despite being within zone
                    </p>
                    <div className="bg-white p-3 rounded border-2 border-gray-200">
                      <img src={imgImageBookingFailedErrorMessage} alt="Booking failed" className="w-full h-auto" />
                    </div>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="relative flex items-start gap-8">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-2xl font-['Instrument_Sans:Bold',sans-serif] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>6</span>
                  </div>
                  <div className="flex-1 bg-white p-6 shadow-lg border-l-4 border-gray-400 mt-4">
                    <h4 className="text-xl font-['Instrument_Sans:Bold',sans-serif] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Switches Apps
                    </h4>
                    <p className="text-gray-600 font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Frustrated, Oliver switches to PassioGo
                    </p>
                  </div>
                </div>

                {/* Step 7 - Problem */}
                <div className="relative flex items-start gap-8">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-[#ff6b6b] flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-2xl font-['Instrument_Sans:Bold',sans-serif] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>7</span>
                  </div>
                  <div className="flex-1 bg-[#ff6b6b]/5 p-6 shadow-lg border-l-4 border-[#ff6b6b] mt-4">
                    <div className="inline-block px-3 py-1 bg-[#ff6b6b] text-white text-xs uppercase tracking-wider mb-3 font-['Instrument_Sans:Bold',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Pain Point
                    </div>
                    <h4 className="text-xl font-['Instrument_Sans:Bold',sans-serif] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Confusing Interface
                    </h4>
                    <p className="text-gray-700 mb-4 font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      PassioGo's route map creates additional confusion
                    </p>
                    <div className="bg-white p-3 rounded border-2 border-gray-200">
                      <img src={imgImagePassioGoConfusingRouteMap} alt="Confusing UI" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Design Section */}
      <section className="py-24 px-6 lg:px-16 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <span className="text-6xl lg:text-8xl font-['Neue_Haas_Grotesk_Display_Pro:45_Light',sans-serif] text-[#a8d8ea]/20">03</span>
            <h2 className="text-5xl font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-black -mt-8 mb-6">
              Final Design
            </h2>
            <p className="text-lg font-['Instrument_Sans:Regular',sans-serif] text-gray-700 leading-relaxed max-w-4xl mb-16" style={{ fontVariationSettings: "'wdth' 100" }}>
              After multiple rounds of iteration and user testing, we created a unified shuttle experience that eliminates confusion while maintaining all the functionality students need. The design prioritizes clarity, reliability, and safety for the Brown campus community.
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h3 className="text-3xl font-['Instrument_Sans:Regular',sans-serif] mb-8 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
              Key Features
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[rgba(168,216,234,0.1)] rounded-2xl p-6">
                <h4 className="text-xl font-['Instrument_Sans:Medium',sans-serif] mb-3 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                  🎯 Unified Service Access
                </h4>
                <p className="text-gray-700 font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Single app for both fixed routes and on-call shuttles with clear service differentiation
                </p>
              </div>

              <div className="bg-[rgba(61,40,23,0.1)] rounded-2xl p-6">
                <h4 className="text-xl font-['Instrument_Sans:Medium',sans-serif] mb-3 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                  📍 Enhanced Stop Information
                </h4>
                <p className="text-gray-700 font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Clear pickup locations with landmarks and visual cues for easy identification
                </p>
              </div>

              <div className="bg-[rgba(168,216,234,0.1)] rounded-2xl p-6">
                <h4 className="text-xl font-['Instrument_Sans:Medium',sans-serif] mb-3 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                  ⏱️ Real-Time Tracking
                </h4>
                <p className="text-gray-700 font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Live shuttle locations and accurate arrival predictions to build user confidence
                </p>
              </div>

              <div className="bg-[rgba(61,40,23,0.1)] rounded-2xl p-6">
                <h4 className="text-xl font-['Instrument_Sans:Medium',sans-serif] mb-3 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                  🛡️ Safety Integration
                </h4>
                <p className="text-gray-700 font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Emergency contacts and safety features integrated into the shuttle experience
                </p>
              </div>
            </div>
          </div>

          {/* Design Solution Explanation */}
          <div className="mb-16 bg-gray-50 p-12 border-l-4 border-[#a8d8ea]">
            <h3 className="text-3xl font-['Instrument_Sans:Regular',sans-serif] mb-8 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
              How might we redesign the shuttle app experience to be faster, clearer, and easier to use?
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-['Instrument_Sans:Bold',sans-serif] mb-6 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Our solution:
                  </h4>
                  <p className="text-lg font-['Instrument_Sans:Regular',sans-serif] text-gray-700 leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Consolidate the two apps into one unified, Brown-specific shuttle app that brings fixed routes, real-time tracking, and on-call booking into one clear, intuitive interface designed specifically for Brown students.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-['Instrument_Sans:Bold',sans-serif] mb-6 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Why this solution?
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#a8d8ea] text-xl mt-1">•</span>
                      <p className="font-['Instrument_Sans:Regular',sans-serif] text-gray-700" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <span className="font-['Instrument_Sans:Bold',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>Directly addresses top pain points</span> by removing app-switching confusion and making routes, stops, and OnCall accessible in one place.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#a8d8ea] text-xl mt-1">•</span>
                      <p className="font-['Instrument_Sans:Regular',sans-serif] text-gray-700" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <span className="font-['Instrument_Sans:Bold',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>Significantly improves clarity</span> with clean route toggles, searchable stops, and real-time tracking all in a single interface.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#a8d8ea] text-xl mt-1">•</span>
                      <p className="font-['Instrument_Sans:Regular',sans-serif] text-gray-700" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <span className="font-['Instrument_Sans:Bold',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>Enhances safety + reliability</span> through a smoother OnCall flow, streamlined pickup selection, and clear ETAs.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#a8d8ea] text-xl mt-1">•</span>
                      <p className="font-['Instrument_Sans:Regular',sans-serif] text-gray-700" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <span className="font-['Instrument_Sans:Bold',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>Reduces wait time and uncertainty</span> by consolidating shuttle info and on-demand options.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-gray-200 shadow-md">
                    <img src={imgImageStopsScreenWireframe} alt="Stops screen" className="w-full h-auto mb-2" />
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-gray-200 shadow-md">
                    <img src={imgImageRoutesScreenWireframe} alt="Routes screen" className="w-full h-auto mb-2" />
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-gray-200 shadow-md">
                    <img src={imgImageDetailsScreenWireframe} alt="Details screen" className="w-full h-auto mb-2" />
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-gray-200 shadow-md">
                    <img src={imgImageOnCallScreenWireframe} alt="OnCall screen" className="w-full h-auto mb-2" />
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600 font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  High-Fidelity Wireframes
                </p>
              </div>
            </div>
          </div>

          {/* Redesigned OnCall Flow */}
          <div className="bg-white border-4 border-black p-12">
            <h3 className="text-3xl font-['Instrument_Sans:Bold',sans-serif] text-center mb-12 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
              Redesigned onCall
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg border-2 border-gray-200">
                  <img src={imgImage2} alt="Search pickup location" className="w-full h-auto" />
                </div>
                <p className="text-xs text-gray-700 text-center font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Easily search for pickup location
                </p>
                <p className="text-xs text-gray-700 text-center font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  OR select from a popular location
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg border-2 border-gray-200">
                  <img src={imgImage7} alt="Modify pickup" className="w-full h-auto" />
                </div>
                <p className="text-xs text-gray-700 text-center font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Ability to modify pickup location
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg border-2 border-gray-200">
                  <img src={imgImage4} alt="Confirm request" className="w-full h-auto" />
                </div>
                <p className="text-xs text-gray-700 text-center font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Asks user to confirm before sending request to BUS operator + ability to edit
                </p>
                <p className="text-xs text-gray-700 text-center font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Hides view of other routes, only shows shuttle
                </p>
                <p className="text-xs text-gray-700 text-center font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Presents relevant information to user before confirming + reduced text → reduced cognitive load
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg border-2 border-gray-200">
                  <img src={imgImage5} alt="Track shuttle" className="w-full h-auto" />
                </div>
                <p className="text-xs text-gray-700 text-center font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option to track shuttle is emphasized, but option to cancel is still available
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg border-2 border-gray-200">
                  <img src={imgImage6} alt="View ETA" className="w-full h-auto" />
                </div>
                <p className="text-xs text-gray-700 text-center font-['Instrument_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Easily see shuttle's ETA + relevant information, in addition to ability to modify or cancel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#a8d8ea] to-[#3d2817] text-white py-16 px-6 lg:px-16">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest font-['Instrument_Sans:Bold',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Brown Product Management Fellowship
            </p>
            <p className="text-3xl font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif]">
              2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}