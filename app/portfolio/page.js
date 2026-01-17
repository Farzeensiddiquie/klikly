"use client";
import BackgroundEffects from '@/components/BackgroundEffects'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

export default function Portfolio() {

  const works = [
    { id: 1, title: "Project One",
      gradient:"bg-[radial-gradient(circle_at_bottom_left,_#06572e_0%,_rgba(4,28,17,0.4)_47%),linear-gradient(135deg,_rgba(4,28,0,0.8)_0%,_#070e0a_100%)]",},
    { id: 2, title: "Project Two"
      ,gradient:"bg-[radial-gradient(circle_at_top_center,_#06572e_0%,_rgba(4,28,17,0.4)_47%),linear-gradient(135deg,_rgba(4,28,0,0.8)_0%,_#070e0a_100%)]"
     },
    { id: 3, title: "Project Three"
      ,gradient:
        "bg-[radial-gradient(circle_at_bottom_right,_#06572e_0%,_rgba(4,28,17,0.4)_47%),linear-gradient(135deg,_rgba(4,28,0,0.8)_0%,_#070e0a_100%)]",
      
     },
    { id: 4, title: "Project Four",
      gradient:
        "bg-[radial-gradient(circle_at_top_left,_#06572e_0%,_rgba(4,28,17,0.4)_47%),linear-gradient(135deg,_rgba(4,28,0,0.8)_0%,_#070e0a_100%)]",
      
     },
    { id: 5, title: "Project Five",
      gradient:
        "bg-[radial-gradient(circle_at_bottom_center,_#06572e_0%,_rgba(4,28,17,0.4)_47%),linear-gradient(135deg,_rgba(4,28,0,0.8)_0%,_#070e0a_100%)]",
     },
    { id: 6, title: "Project Six",
      gradient:
        "bg-[radial-gradient(circle_at_top_right,_#06572e_0%,_rgba(4,28,17,0.4)_47%),linear-gradient(135deg,_rgba(4,28,0,0.8)_0%,_#070e0a_100%)]",
      
    },
    { id: 7, title: "Project Seven",
      gradient:
        "bg-[radial-gradient(circle_at_bottom_left,_#06572e_0%,_rgba(4,28,17,0.4)_47%),linear-gradient(135deg,_rgba(4,28,0,0.8)_0%,_#070e0a_100%)]",
    },
    { id: 8, title: "Project Eight",
      gradient:
        "bg-[radial-gradient(circle_at_top_center,_#06572e_0%,_rgba(4,28,17,0.4)_47%),linear-gradient(135deg,_rgba(4,28,0,0.8)_0%,_#070e0a_100%)]",
    },
    { id: 9, title: "Project Nine",
      gradient:
        "bg-[radial-gradient(circle_at_bottom_right,_#06572e_0%,_rgba(4,28,17,0.4)_47%),linear-gradient(135deg,_rgba(4,28,0,0.8)_0%,_#070e0a_100%)]",
    }
  ];

  return (
    <>
      <div className="relative flex flex-col min-h-screen text-white overflow-hidden ">

      
        <BackgroundEffects />

        <div className="flex justify-center mb-10">
          <NavBar />
        </div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl font-extrabold font-mono text-center mb-10">
            Our Work
          </h2>

          {/* ✅ Responsive Grid */}
          <div className=" z-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-5 max-w-280 w-full pb-20">
            {works.map((item) => (
             <div key={item.id} className='bg-gradient-to-r from-[#092e1b] to-[#1f7e4f]  rounded-3xl p-[1.5px] transition-all duration-300 hover:scale-105 '>
               <div
                className={`h-94 w-full rounded-3xl flex justify-center items-center bg-[#092e1b] ${item.gradient} p-6 cursor-pointer hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300`}
              >
                <span className="font-bold text-lg">{item.title}</span>
              </div>
             </div>
            ))}
          </div>
        </div>
      </div>

      
      <CTASection />
      <Footer />
    </>
  );
}
