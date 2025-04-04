"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {BentoGridItem} from "@/components/ui/bento-grid";

const milestones = [
  {
    year: "2022",
    title: "Club Foundation",
    description: "Placeholder text - Club foundation milestone description.",
    image: "/space-bg.jpg", // Using existing image as placeholder
    teams: ["Founding Team"],
    current: false
  },
  {
    year: "2023",
    title: "First Competition",
    description: "Placeholder text - First competition milestone description.",
    image: "/space-bg.jpg", // Using existing image as placeholder
    teams: ["Propulsion Team", "Airframe Team"],
    current: false
  },
  {
    year: "2024",
    title: "Technology Development",
    description: "Placeholder text - Technology development milestone description.",
    image: "/space-bg.jpg", // Using existing image as placeholder
    teams: ["Propulsion Team", "Avionics & Recovery Team"],
    current: false
  },
  {
    year: "2025",
    title: "Future Goals",
    description: "Placeholder text - Future goals milestone description.",
    image: "/space-bg.jpg", // Using existing image as placeholder
    teams: ["Payload Team", "Research Payload Team"],
    current: true
  }
];

const teamProjects = [
  {
    title: "Business and Operations",
    description: "Placeholder team name",
    icon: "📊",
    header: (
      <div className="w-full h-full flex items-center justify-center rounded-lg overflow-hidden bg-gradient-to-br from-amber-500/20 to-amber-700/20">
        <div className="text-6xl">📊</div>
      </div>
    ),
    className: "md:col-span-2 md:row-span-1"
  },
  {
    title: "Airframe Team",
    description: "Placeholder team name",
    icon: "🚀",
    header: (
      <div className="w-full h-full flex items-center justify-center rounded-lg overflow-hidden bg-gradient-to-r from-pink-500 to-violet-500">
        <div className="text-6xl animate-pulse">🚀</div>
      </div>
    ),
    className: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Avionics & Recovery",
    description: "Placeholder team name",
    icon: "🔌",
    header: (
      <div className="w-full h-full flex items-center justify-center rounded-lg overflow-hidden bg-gradient-to-br from-amber-500/20 to-amber-700/20">
        <div className="text-6xl">🔌</div>
      </div>
    ),
    className: "md:col-span-2 md:row-span-1"
  },
  {
    title: "Propulsion Team",
    description: "Placeholder team name",
    icon: "🔥",
    header: (
      <div 
        className="w-full h-full flex items-center justify-center rounded-lg overflow-hidden"
        style={{
          background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite"
        }}
      >
        <div className="text-6xl">🔥</div>
      </div>
    ),
    className: "md:col-span-2 md:row-span-1"
  },
  {
    title: "Payload Team",
    description: "Placeholder team name",
    icon: "⚙️",
    header: (
      <div className="w-full h-full flex flex-row rounded-lg overflow-hidden p-2 items-center space-x-2 bg-black">
        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0 flex items-center justify-center">
          <span className="text-2xl">⚙️</span>
        </div>
        <div className="w-full bg-gray-800 h-4 rounded-full"></div>
      </div>
    ),
    className: "md:col-span-2 md:row-span-1"
  },
  {
    title: "Research Payload",
    description: "Placeholder team name",
    icon: "🔬",
    header: (
      <div className="w-full h-full flex flex-col rounded-lg overflow-hidden space-y-2 p-4 bg-black">
        {[1, 2, 3, 4].map((item, i) => (
          <div 
            key={i}
            style={{
              maxWidth: i === 0 ? "85%" : i === 1 ? "65%" : i === 2 ? "75%" : "45%"
            }}
            className="flex flex-row rounded-full border border-white/20 p-2 items-center space-x-2 bg-black w-full h-4"></div>
        ))}
      </div>
    ),
    className: "md:col-span-2 md:row-span-1"
  }
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes riseUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease forwards;
        }
        
        .animate-riseUp {
          animation: riseUp 0.8s ease-out forwards;
        }
      `}</style>

      <main className="relative min-h-screen pt-20 bg-[url('/space-bg.jpg')] bg-fixed bg-cover bg-center">

        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative container mx-auto px-6 py-12">
         
          <header className="mb-16 text-center animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-6xl font-bold text-white mt-10">Our Projects</h1>
            <p className="mt-4 text-xl text-white">
              Exploring the frontiers of space technology and innovation
            </p>
          </header>
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-white mb-12 text-center animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              Milestones
            </h2>
            
            <div className="relative">
      
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-amber-500"></div>
              
              <div className="space-y-24 md:space-y-40 pb-12"> 
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pt-8"> 
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12 w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber-500 flex items-center justify-center z-20 border-4 border-black">
                      <span className="text-black font-bold text-lg md:text-2xl">{milestone.year}</span>
                    </div>
                    
        
                    {milestone.current && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 mt-10 z-20 text-5xl md:text-6xl animate-pulse flex items-center justify-center">
                        <span className="bg-black/30 p-1 rounded-full backdrop-blur-sm">🚀</span>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-20 md:mt-0"> {/* Increased margin top for mobile */}
                      <div className={`col-span-1 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'} ${index % 2 === 0 ? 'md:animate-slideInLeft' : 'md:animate-slideInRight'} animate-fadeIn`} 
                           style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                      >
                        <Card className="bg-black border-2 border-amber-500 overflow-hidden shadow-xl relative">
                          <div className="aspect-video overflow-hidden">
                            <img 
                              src={milestone.image} 
                              alt={milestone.title}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                          </div>
                          <CardContent className="p-4 md:p-6">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                            <p className="text-sm md:text-base text-gray-300 mb-4">{milestone.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {milestone.teams.map((team, teamIndex) => (
                                <span key={teamIndex} className="px-2 py-1 md:px-3 md:py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs md:text-sm">
                                  {team}
                                </span>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-4xl font-bold text-white mb-12 text-center animate-fadeIn" style={{ animationDelay: '0.8s' }}>
              Team Projects
            </h2>
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[20rem]">
              <div 
                className="animate-riseUp md:col-span-2 md:row-span-2"
                style={{ animationDelay: '0.5s', opacity: 0 }}
              >
                <BentoGridItem
                  title={teamProjects[1].title}
                  description={teamProjects[1].description}
                  header={teamProjects[1].header}
                  icon={teamProjects[1].icon}
                  className="h-full"
                />
              </div>
              
              <div 
                className="animate-riseUp md:col-span-2 md:row-span-1"
                style={{ animationDelay: '0.65s', opacity: 0 }}
              >
                <BentoGridItem
                  title={teamProjects[0].title}
                  description={teamProjects[0].description}
                  header={teamProjects[0].header}
                  icon={teamProjects[0].icon}
                  className="h-full"
                />
              </div>
              
              <div 
                className="animate-riseUp md:col-span-1 md:row-span-1"
                style={{ animationDelay: '0.8s', opacity: 0 }}
              >
                <BentoGridItem
                  title={teamProjects[2].title}
                  description={teamProjects[2].description}
                  header={teamProjects[2].header}
                  icon={teamProjects[2].icon}
                  className="h-full"
                />
              </div>
              
              <div 
                className="animate-riseUp md:col-span-1 md:row-span-1"
                style={{ animationDelay: '0.95s', opacity: 0 }}
              >
                <BentoGridItem
                  title={teamProjects[3].title}
                  description={teamProjects[3].description}
                  header={teamProjects[3].header}
                  icon={teamProjects[3].icon}
                  className="h-full"
                />
              </div>
              
              <div 
                className="animate-riseUp md:col-span-3 md:row-span-1"
                style={{ animationDelay: '1.1s', opacity: 0 }}
              >
                <BentoGridItem
                  title={teamProjects[4].title}
                  description={teamProjects[4].description}
                  header={teamProjects[4].header}
                  icon={teamProjects[4].icon}
                  className="h-full"
                />
              </div>
              
              <div 
                className="animate-riseUp md:col-span-1 md:row-span-1"
                style={{ animationDelay: '1.25s', opacity: 0 }}
              >
                <BentoGridItem
                  title={teamProjects[5].title}
                  description={teamProjects[5].description}
                  header={teamProjects[5].header}
                  icon={teamProjects[5].icon}
                  className="h-full"
                />
              </div>
            </div>
          </section>

          <section className="text-center mb-16 animate-fadeIn" style={{ animationDelay: '1.4s' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Join Our Mission</h2>
            <p className="text-base md:text-xl text-white mb-6 md:mb-8 max-w-3xl mx-auto px-4 md:px-0">
              Interested in being part of our next milestone? We're always looking for passionate individuals to join our teams.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 md:px-8 md:py-4 bg-amber-500 text-black font-bold rounded-full transition-transform hover:scale-105 hover:bg-amber-400"
            >
              Get Involved
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
