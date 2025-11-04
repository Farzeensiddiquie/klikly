import Image from 'next/image'
import React from 'react'

export default function EmployeCard() {
  const data = [
    {
      id: 1,
      title: "Masna Siddiqui",
      desc: "CEO & Co-Founder.",
      img: "/images/ceo.png",
      background: "bg-gradient-to-tl ",
      gradient:
        "bg-[radial-gradient(circle_at_top_left,_#06572e_0%,_rgba(4,28,17,0.4)_47%),linear-gradient(135deg,_rgba(4,28,0,0.8)_0%,_#070e0a_100%)]",
    },
    { id: 2, title: "Farzeen Siddiqui", desc: "Web & Mobile App Developer.", background: "bg-gradient-to-b", img: "/images/ceo.png",
      gradient:
        "bg-[radial-gradient(circle_at_bottom_center,_#06572e_0%,_rgba(4,28,17,0.4)_47%),linear-gradient(135deg,_rgba(4,28,0,0.8)_0%,_#070e0a_100%)]",
    },
    { id: 3, title: "Project Three", desc: "hey", background: "bg-gradient-to-tr", img: "/images/ceo.png",
      gradient:
        "bg-[radial-gradient(circle_at_top_right,_#06572e_0%,_rgba(4,28,17,0.4)_47%),linear-gradient(135deg,_rgba(4,28,0,0.8)_0%,_#070e0a_100%)]",
    },
    { id: 4, title: "Project Four", desc: "hey", background: "bg-gradient-to-bl", img: "/images/ceo.png",
      gradient:
        "bg-[radial-gradient(circle_at_bottom_left,_#06572e_0%,_rgba(4,28,17,0.4)_47%),linear-gradient(135deg,_rgba(4,28,0,0.8)_0%,_#070e0a_100%)]",
    },
    { id: 5, title: "Project Five", desc: "hey", background: "bg-gradient-to-t", img: "/images/ceo.png",
      gradient:
        "bg-[radial-gradient(circle_at_top_center,_#06572e_0%,_rgba(4,28,17,0.4)_47%),linear-gradient(135deg,_rgba(4,28,0,0.8)_0%,_#070e0a_100%)]",
    },
    { id: 6, title: "Project Six", desc: "hey", background: "bg-gradient-to-br", img: "/images/ceo.png",
      gradient:
        "bg-[radial-gradient(circle_at_bottom_right,_#06572e_0%,_rgba(4,28,17,0.4)_47%),linear-gradient(135deg,_rgba(4,28,0,0.8)_0%,_#070e0a_100%)]",
    },
  ];

  return (
    <div className=" z-[10000] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15 px-2  max-w-280 w-full pb-20">
      {data.map((item) => (
        <div
          key={item.id} 
          className={`${item.background} from-[#092e1b] to-[#1f7e4f] rounded-3xl p-[1.5px]`}
        >
          <div
            className={`h-64 w-full rounded-3xl flex flex-col gap-10 justify-center items-center bg-[#092e1b] ${item.gradient} p-6 cursor-pointer hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300`}
          >
            <div className="w-30 h-30 relative rounded-full overflow-hidden bg-[#003e1a]">
              <Image
                src={item.img}
                fill
                alt="employee"
                className="object-contain object-bottom" 
              />
            </div>
            <div>
              <p className="font-bold text-lg">{item.title}</p>
              <p className="text-sm text-gray-300 font-mono">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
