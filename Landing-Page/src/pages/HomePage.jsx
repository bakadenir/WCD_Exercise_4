import { useState } from "react";
import HeroImage from "../assets/images/Hero.png";
import HiImage from "../assets/images/Hi.png";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false); // Menyimpan status hover

  const handleMouseEnter = () => {
    setIsHovered(true); // Menetapkan isHovered ke true saat cursor berada di atas objek
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Menetapkan isHovered ke false saat cursor keluar dari objek
  };

  return (
    <div className="homepage bg-[#C7D0D9]">
      <div className="container mx-auto px-4">
        <div className="hero pt-20 w-full h-screen flex justify-center items-center">
          <div className="box w-full h-full">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="w-full h-full object-contain object-bottom"
            />
            <h1 className="absolute top-2/3 left-1/2 transform -translate-x-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium z-10 text-center whitespace-nowrap">
              Webflow Developer - UI/UX Designer
            </h1>
          </div>
        </div>
      </div>

      {/* Box Bubble dengan efek hover */}
      <div
        className="boxbubble bg-black h-[95px] flex items-center justify-evenly p-4 rounded-tl-[64.29px] rounded-bl-[64.29px] absolute top-1/2 right-0 z-20 transition-all duration-500"
        onMouseEnter={handleMouseEnter} // Menambah event hover (masuk ke dalam objek)
        onMouseLeave={handleMouseLeave} // Menambah event hover (keluar dari objek)
      >
        {/* Gambar yang muncul pertama kali */}
        <img
          src={HiImage}
          alt="Hi I'm Deni"
          className="w-[59px] h-[56px] object-cover"
        />
        {/* Teks akan muncul saat hover */}
        <div className={`text-white ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          <h2 className="text-[40px] font-light whitespace-nowrap">Hi I’m Deni</h2>
        </div>
      </div>

      <style jsx>{`
        .boxbubble {
          width: 90px; /* Ukuran awal */
          right: 0; /* Posisi bubble di kanan */
          transform-origin: right; /* Menyusun perubahan lebar dari sisi kanan */
        }
        .boxbubble:hover {
          width: 358px; /* Lebar saat hover */
          transform: scaleX(1); /* Tidak ada geseran pada konten lain */
        }
      `}</style>
    </div>
    

    
  );
};

export default HomePage;
