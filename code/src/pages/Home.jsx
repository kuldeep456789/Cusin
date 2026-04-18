import React from 'react';
import { Link } from 'react-router-dom';
import Chatbot from '../components/Chatbot';
import Navbar from '../components/Navbar';

function Home() {
  const bestsellers = [
    {
      title: "No. 11 Enamel Cast Iron Dosa Tawa (28cm)",
      price: "₹3,499.00",
      oldPrice: "₹4,599.00",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEO21mmm1zgvPhi6dOJjikgUvH4Eo9MlE5jdccNWGT_yAD9KGahFviCkyMg154npVZVbuLFs_bh3uR7ylfSb1pPsCNR_BtJp-Wcz1J6eJVVrPvnMcT5zGh4fbKMk91RMCc6TJwiITAsSKXGztYCKvnujkSHVgYYZEnw6xVlg9uX6FIxyVdf7bmG8ZBiTC46-2t2F2t5Xns888KOuBzaS2lc15NqLQcWWmrcVWxHdhIZBOiN_FkXICUCG9_Ic_jQJlgB5bex0VdTz0",
      imgClass: "w-[90%] h-auto",
      colors: [{ c: '#233320', s: true }, { c: '#AC4024' }, { c: '#FFDC00' }]
    },
    {
      title: "No. 8 Enamel Cast Iron Dutch Oven (2.5L)",
      price: "₹4,949.00",
      oldPrice: "₹7,799.00",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDddV-m1apnI7ssW86gyaa6jh54NnRJPHvja1B_wjSJFH_S89jtJGisp6jDoeqsdjGFuEnzoufV2t9zHKTLS8EmaZLS8XruJgjRRXphoIssz3gqgrJhIc3A3CRqVfEsY1yrnYVlHPdwpY00wAF6EuZUit4PqJnyc_SGnQh-JWzH05ko5o0aq0m_2OM9-lX-4rUs2Rfp5jHXqQEQRSmu-L3lTRsAJwRrMe5h42A6OL07DK3q9f3SOWQ39ZblqkRucBeE3Mm6cjEwusU",
      imgClass: "w-[95%] h-auto drop-shadow-xl",
      colors: [{ c: '#233320', s: true }, { c: '#AC4024' }, { c: '#FFDC00' }, { c: '#FFFFFF', border: true }, { c: '#FFD1DC' }]
    },
    {
      title: "No. 8 Enamel Cast Iron Pan LITE (20cm)",
      price: "₹2,699.00",
      oldPrice: "₹4,399.00",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpS-CpcxBeKP0xFCSn80wqGU2j94sRq1CwftGy4HGV9qRut_nUyFWMSygMcgqmh9lI4WGMsWLzLt5fvEFG_5L-RU7VJ8zvaRgONUk-Xf1C-CFtdmGFBzvnkK_GviZVwv_eC73QdjEnl80DY5lDTYvWLVI3FF4d432_0_xOvQLxJ6YLvfvGkcsDS6CuoH3NCJE-wPKixct3wBLjL30ntYlBd-w4foN2IgTeHle5zbbOP0oXkusvLLCFrRFg4zvAB7fZrhUg-FEkNCg",
      imgClass: "w-[90%] h-auto",
      colors: [{ c: '#233320', s: true }, { c: '#AC4024' }, { c: '#FFFFFF', border: true }, { c: '#FFDC00' }]
    },
    {
      title: "No. 9 Enamel Cast Iron Kadai LITE (2.1L)",
      price: "₹4,499.00",
      oldPrice: "₹6,599.00",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVPLyAAEnrgrbBhPhRLG7JzAE0TT8GztaX4eRyBrV7B93HVF18BYgvxwp4IP6VYRpRmZWy1nuetwfi2rtS0DVqMIf01XwJ0tw_2g7b69lT1SzqkGXBwvfYuZyaaxjmaMKjIC-9dTtgfQKWLEpQO3j2aTx20yFa7bnC3vU2sS1enwYLHNksEujjBzDW7QoeNamQUUiQbSLP7G1Z_8JsbR-l-BuIpkdr2WCKE41a-LeSlo3GaCL6yHXgg21pW5XM--hOqsPBSIssDHI",
      imgClass: "w-full h-auto",
      colors: [{ c: '#FFFFFF', s: true, border: true }, { c: '#AC4024' }, { c: '#233320' }, { c: '#FFDC00' }]
    }
  ];

  return (
    <div className="font-['Plus_Jakarta_Sans',sans-serif] text-stone-900 antialiased min-h-screen bg-[#F2EFE8]">

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#281b14]">
          <img alt="Woman cooking" className="w-full h-full object-cover opacity-85" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTzNJU_ae98flDnFVRdKsKNOD57lGIcJoy_aSFbyd_N9lwm_fRHYt65uLGu4orjNaCB9ZBs9bb6jscKb4uHv7YsVKx_KZN9b3ruC9tSte4ak_8QsGnuPASH0ZpARZtG8vehQwN9UMcE5qOc6SrKZwODisVvfCgtJnhgee399Fnhxbw88qJFuWOY89xa-dNtESxnf5pX896zoBVFERWZ1IWft2oCtxUHw86mQSFKuC4H7ZIZcWJqlwGphVjnmzxcPvqw-pirxmcLpM" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-40">
          <h1 className="font-['Newsreader',serif] font-bold text-white text-[56px] md:text-[68px] tracking-tight leading-[1.05] mb-6 drop-shadow-md">
            Rooted in tradition.<br/>Built for everyday cooking.
          </h1>
          <p className="text-white text-lg md:text-xl mb-10 font-normal opacity-90 drop-shadow-md">
            Explore our Heritageware Collection
          </p>
          <Link to="/product" className="inline-flex items-center justify-center px-8 py-3.5 bg-[#2D4A33] text-white font-medium hover:bg-[#1f3524] transition-colors duration-300 rounded-full text-sm tracking-wide">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Shop Bestsellers */}
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto relative group/carousel">
        <div className="text-center mb-16">
          <h2 className="font-['Newsreader',serif] font-semibold text-5xl text-[#2C3B43] mb-4">Shop Bestsellers</h2>
        </div>
        
        {/* Carousel Arrow (Absolute inside section) */}
        <button className="absolute right-4 md:right-8 top-1/2 transform translate-y-12 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-50 transition-colors opacity-0 group-hover/carousel:opacity-100 duration-300">
          <span className="material-symbols-outlined text-gray-700">arrow_forward</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map((item, index) => (
            <div key={index} className="group cursor-pointer flex flex-col w-full px-2">
              <Link to="/product" className="w-full">
                <div className="bg-[#D8CCBD] rounded-t-[45%] aspect-square w-full relative overflow-hidden flex items-end justify-center pb-12 pt-20 px-4">
                  <img alt={item.title} className={`${item.imgClass} object-contain transform group-hover:scale-[1.03] transition-transform duration-700 ease-out`} src={item.img} />
                </div>
              </Link>
              
              <div className="text-center mt-6 flex-1 flex flex-col items-center">
                <Link to="/product" className="block hover:opacity-80 transition-opacity w-full px-4">
                  <h3 className="text-[16px] font-medium text-[#202020] mb-2 leading-relaxed">{item.title}</h3>
                  <div className="flex justify-center items-center gap-2 mb-3">
                    <span className="text-[#A54029] font-medium text-[15px]">{item.price}</span>
                    <span className="text-[#7D7D7D] line-through text-[14px]">{item.oldPrice}</span>
                  </div>
                </Link>

                {/* Color Swatches */}
                <div className="flex justify-center items-center gap-2 mb-6">
                  {item.colors.map((color, i) => (
                    <div 
                      key={i} 
                      className={`w-[14px] h-[14px] rounded-full flex items-center justify-center ${color.s ? 'ring-1 ring-offset-2 ring-[#4A5B5A]' : ''} ${color.border ? 'border border-[#E0D8CC]' : ''}`} 
                      style={{ backgroundColor: color.c }}
                    />
                  ))}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full mt-auto py-2.5 bg-[#A54029] text-white text-[15px] font-medium rounded-full hover:bg-[#8B3522] transition-colors shadow-sm">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Bestsellers Button */}
        <div className="flex justify-center mt-16 pb-8">
          <Link to="/product" className="px-10 py-3.5 bg-[#A54029] text-white text-[13px] font-bold tracking-[0.15em] uppercase rounded-full hover:bg-[#8B3522] transition-colors shadow-md">
            Explore Bestsellers
          </Link>
        </div>
      </section>

      {/* Akshaya Tritiya Promo Section */}
      <section className="w-full flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="w-full md:w-[45%] bg-[#F7EBE1] flex flex-col justify-center pl-12 pr-6 md:pl-24 md:pr-12 py-20 border-r-[8px] border-[#913D26] relative">
          <div className="flex flex-row items-center gap-6 mb-8 mt-4 whitespace-nowrap">
            <h2 className="font-['Newsreader',serif] font-medium text-[40px] lg:text-[52px] leading-[1.1] text-[#913D26]">
              This Akshaya Tritiya<br/>Get A Free Silver Coin
            </h2>
            <div className="w-[100px] h-[100px] shrink-0 bg-gradient-to-br from-[#E0E0E0] via-[#C0C0C0] to-[#A0A0A0] rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.2)] justify-center items-center flex border-[3px] border-[#FFFFFF] relative overflow-hidden">
               <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center">
                 <span className="material-symbols-outlined text-white text-5xl opacity-90 drop-shadow-md" style={{ fontVariationSettings: "'FILL' 1" }}>monetization_on</span>
               </div>
            </div>
          </div>
          <div className="w-full max-w-[280px] h-[2px] bg-[#913D26] mb-6 opacity-60"></div>
          <p className="text-[#913D26] font-semibold text-2xl md:text-[28px] tracking-tight">
            On Orders Above ₹15,999
          </p>
        </div>
        
        {/* Right Image */}
        <div className="w-full md:w-[55%] h-[400px] md:h-[600px]">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEgx37ReP7hvLnSSsLoIaC5osDMSog1Fkecb4Cos10rO9RjezdSfVzj1Kkph-QDPy5Eech6JPgOgHK6nAiX4_0jMqa1qIORhqPgwD73ylTYKEXMqxOL5cUBv7Sm8u4raWsxCpqmuiaUlkqLkAZq_0QxUDgewKtMUa8rzq7k7G_7LnRdx0wOrFIZ1nQsyjtbWFCUQVcW89c3g5-T_ksFiO6lQbUhltCrKaliWiaqchebuBWY_McQ3nF49NGRarEAuLvx7cyCo1yA_s" 
            alt="Heritageware Collection" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Built For Every Kind Of Kitchen */}
      <section className="bg-[#FAF8F5] pt-16 md:pt-24 pb-0 text-center relative flex flex-col items-center px-4">
        <h2 className="font-['Newsreader',serif] font-bold text-3xl md:text-[44px] text-[#294254] mb-3 leading-tight">
          Built for every kind of kitchen
        </h2>
        <p className="text-[#354859] text-[15px] md:text-[16px] font-medium mb-12 max-w-2xl">
          100% toxin free enamel cast iron cookware, compatible with all stovetops, oven & induction.
        </p>
        
        <div className="w-full relative h-[65vh] min-h-[500px]">
            {/* Note: I am providing a high quality Unsplash kitchen picnic image here as a local substitute for the custom asset shown in the screenshot */}
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop" 
              alt="Cookware on Picnic Mat" 
              className="w-full h-full object-cover" 
            />
        </div>

        {/* The Floating Trust Badges Card */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[92%] max-w-[1240px] bg-white rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-8 md:py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center z-20 gap-8 md:gap-4 border border-gray-100">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-center flex-1 text-center text-[#A54029]">
                <div className="mb-4 text-[#913D26]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px]">
                    <rect x="4" y="4" width="16" height="15" rx="1.5" />
                    <line x1="4" y1="10" x2="20" y2="10" />
                    <path d="M8 14s.5-1 1-1 1 1 1 1" />
                    <path d="M12 14s.5-1 1-1 1 1 1 1" />
                    <path d="M16 14s.5-1 1-1 1 1 1 1" />
                    <line x1="8" y1="6" x2="8.01" y2="6" strokeWidth="2" />
                    <line x1="12" y1="6" x2="12.01" y2="6" strokeWidth="2" />
                    <line x1="16" y1="6" x2="16.01" y2="6" strokeWidth="2" />
                  </svg>
                </div>
                <strong className="text-[16px] font-bold tracking-wide">Patented Technology</strong>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center flex-1 text-center text-[#A54029]">
                <div className="mb-4 text-[#913D26] relative">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px]">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12h6l-3 4-3-4zM12 8v4" />
                    <circle cx="15.5" cy="18" r="2.5" fill="white" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
                <strong className="text-[15px] font-bold tracking-wide">FDA, LFGB, EC 1935:2004</strong>
                <span className="text-[14px] font-medium mt-1">Safety Compliant</span>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center flex-1 text-center text-[#A54029]">
                <div className="mb-4 text-[#913D26]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px]">
                    <path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10z" />
                    <path d="M9 12l2 2 4-4" />
                    <path d="M18 7l2-2" />
                    <path d="M20 5l1 1" />
                    <path d="M18 7l2 1" />
                  </svg>
                </div>
                <strong className="text-[15px] font-bold tracking-wide">10-Year</strong>
                <span className="text-[14px] font-medium mt-1">Warranty</span>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center flex-1 text-center text-[#A54029]">
                <div className="mb-4 text-[#913D26]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] relative">
                    <path d="M10 3v3" />
                    <path d="M14 3v3" />
                    <path d="M8.5 3h7" />
                    <path d="M10 6l-5 13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l-5-13z" />
                    <line x1="4" y1="4" x2="20" y2="20" strokeWidth="1.5" />
                  </svg>
                </div>
                <strong className="text-[15px] font-bold tracking-wide">100%</strong>
                <span className="text-[14px] font-medium mt-1">Toxin-Free</span>
            </div>
        </div>
      </section>

      {/* Shop By Category Section */}
      <section className="bg-[#FAF8F5] pt-32 md:pt-[140px] pb-24 text-center overflow-hidden">
          <h2 className="font-['Newsreader',serif] font-bold text-3xl md:text-[46px] text-[#294254] mb-12">
              Shop By Category
          </h2>
          
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative group/cat-slider">
            {/* Slider container with snap scrolling */}
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
               {[
                 {
                   name: "Pots",
                   img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDddV-m1apnI7ssW86gyaa6jh54NnRJPHvja1B_wjSJFH_S89jtJGisp6jDoeqsdjGFuEnzoufV2t9zHKTLS8EmaZLS8XruJgjRRXphoIssz3gqgrJhIc3A3CRqVfEsY1yrnYVlHPdwpY00wAF6EuZUit4PqJnyc_SGnQh-JWzH05ko5o0aq0m_2OM9-lX-4rUs2Rfp5jHXqQEQRSmu-L3lTRsAJwRrMe5h42A6OL07DK3q9f3SOWQ39ZblqkRucBeE3Mm6cjEwusU",
                 },
                 {
                   name: "Pans",
                   img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpS-CpcxBeKP0xFCSn80wqGU2j94sRq1CwftGy4HGV9qRut_nUyFWMSygMcgqmh9lI4WGMsWLzLt5fvEFG_5L-RU7VJ8zvaRgONUk-Xf1C-CFtdmGFBzvnkK_GviZVwv_eC73QdjEnl80DY5lDTYvWLVI3FF4d432_0_xOvQLxJ6YLvfvGkcsDS6CuoH3NCJE-wPKixct3wBLjL30ntYlBd-w4foN2IgTeHle5zbbOP0oXkusvLLCFrRFg4zvAB7fZrhUg-FEkNCg",

                 },
                 {
                   name: "Tawa",
                   img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEO21mmm1zgvPhi6dOJjikgUvH4Eo9MlE5jdccNWGT_yAD9KGahFviCkyMg154npVZVbuLFs_bh3uR7ylfSb1pPsCNR_BtJp-Wcz1J6eJVVrPvnMcT5zGh4fbKMk91RMCc6TJwiITAsSKXGztYCKvnujkSHVgYYZEnw6xVlg9uX6FIxyVdf7bmG8ZBiTC46-2t2F2t5Xns888KOuBzaS2lc15NqLQcWWmrcVWxHdhIZBOiN_FkXICUCG9_Ic_jQJlgB5bex0VdTz0",
                 },
                  {
                    name: "Accessories",
                    img: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&q=80&w=800",
                    bgFull: true
                  }
               ].map((cat) => (
                 <div key={cat.name} className="min-w-[280px] md:min-w-[320px] lg:min-w-0 lg:flex-1 shrink-0 snap-center flex flex-col group cursor-pointer">
                    <div className={`w-full aspect-square rounded-[8px] overflow-hidden mb-4 flex items-center justify-center ${cat.bgFull ? 'bg-[#F2F2F2]' : 'bg-[#D8CCBD] p-4 md:p-8'}`}>
                        <img 
                           src={cat.img} 
                           alt={cat.name} 
                           className={`w-full h-full ${cat.bgFull ? 'object-cover' : 'object-contain'} transform group-hover:scale-[1.03] transition-transform duration-500 ease-out`} 
                        />
                    </div>
                    <Link to="/product" className="w-[95%] mx-auto flex justify-center items-center gap-2 py-3 bg-[#9A3A25] text-white text-[15px] font-bold rounded-full hover:bg-[#802F1D] transition-colors shadow-sm">
                      {cat.name} <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                 </div>
               ))}
            </div>
          </div>
      </section>

      {/* Quote Section */}
      <section className="bg-[#FAF8F5] pt-16 pb-12 text-center px-6">
        <div className="max-w-4xl mx-auto relative inline-block px-4 md:px-12 py-8 mt-12 w-full md:w-auto">
          <span className="absolute top-0 left-0 text-[60px] md:text-[80px] font-serif text-[#A54029] leading-none opacity-90 transform -translate-x-2 -translate-y-4 md:-translate-x-6 md:-translate-y-4">“</span>
          <p className="text-xl md:text-[26px] font-medium text-[#294254] leading-[1.6] relative z-10 font-['Plus_Jakarta_Sans',sans-serif]">
            Our philosophy is to craft cast iron cookware that honors the modern Indian kitchen, where every dish tells a story and every meal carries a memory.
          </p>
          <span className="absolute bottom-0 right-0 text-[60px] md:text-[80px] font-serif text-[#A54029] leading-none opacity-90 transform translate-x-2 translate-y-8 md:translate-x-6 md:translate-y-12">”</span>
        </div>
      </section>

      {/* As Featured In */}
      <section className="bg-[#FAF8F5] pt-8 pb-32 text-center overflow-hidden">
        <h2 className="font-['Newsreader',serif] font-bold text-[36px] text-[#294254] mb-12">As Featured in</h2>
        
        <div className="w-full overflow-hidden border-y-[1.5px] border-[#E8E1D5] py-10 bg-[#F6F3ED]">
          {/* Marquee Container with explicit pause on hover */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
             {/* Duplicate sets of logos for infinite scroll illusion */}
             {[...Array(2)].map((_, i) => (
                <div key={i} className="flex px-12 md:px-20 items-center justify-between gap-16 md:gap-28 shrink-0">
                  <span className="font-serif font-black text-[28px] tracking-tighter opacity-80 md:opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
                     CapTable
                  </span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg" alt="CNBC" className="h-8 md:h-12 opacity-80 md:opacity-75 grayscale hover:grayscale-0 transition-all duration-300"/>
                  <span className="font-serif font-semibold text-[20px] md:text-[24px] text-[#E03A3E] whitespace-nowrap opacity-80 md:opacity-75 grayscale hover:grayscale-0 transition-all duration-300 cursor-default">
                     <span className="bg-[#E03A3E] text-white px-1 mr-1 text-[16px]">ET</span> THE ECONOMIC TIMES
                  </span>
                  <span className="font-serif font-bold text-[18px] md:text-[20px] tracking-[0.1em] whitespace-nowrap opacity-80 md:opacity-75 grayscale hover:grayscale-0 transition-all duration-300 cursor-default">
                    THE TIMES OF INDIA
                  </span>
                  <span className="font-serif text-[26px] md:text-[30px] font-medium whitespace-nowrap opacity-80 md:opacity-75 grayscale hover:grayscale-0 transition-all duration-300 cursor-default">
                    Entrepreneur<span className="text-[12px] align-top font-sans">INDIA</span>
                  </span>
                  <span className="font-[sans-serif] font-bold text-[28px] md:text-[34px] tracking-tight text-[#F37021] whitespace-nowrap opacity-80 md:opacity-75 grayscale hover:grayscale-0 transition-all duration-300 cursor-default">
                    mint <span className="font-light text-[#595959] font-sans text-[24px]">Premium</span>
                  </span>
                  <span className="font-serif font-bold text-[22px] md:text-[26px] text-[#E03A3E] whitespace-nowrap opacity-80 md:opacity-75 grayscale hover:grayscale-0 transition-all duration-300 cursor-default">
                    Business Standard
                  </span>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="bg-[#FAF8F5] w-full py-16 scroll-mt-24" id="bento-features">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Main 3x2 Grid structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[240px]">
          {/* Left Column */}
          <div className="flex flex-col gap-6 md:row-span-2">
            <div className="bg-[#F2F2F2] rounded-[24px] overflow-hidden h-[300px] md:h-full">
              <img src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=600" className="w-full h-full object-cover" />
            </div>
            <div className="bg-[#9A3A25] rounded-[24px] p-8 text-white flex flex-col justify-center h-auto md:h-full min-h-[200px]">
               <h3 className="text-[20px] font-bold mb-3 tracking-wide">Cook <span className="opacity-80 font-serif">→</span> Serve <span className="opacity-80 font-serif">→</span> Store</h3>
               <p className="text-[14px] leading-relaxed opacity-90 max-w-[200px]">Designed to handle every stage of your meal, seamlessly</p>
            </div>
          </div>
          
          {/* Center Column */}
          <div className="rounded-[24px] overflow-hidden hidden md:block row-span-2 h-[504px]">
            <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800" className="w-full h-full object-cover brightness-105" />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 md:row-span-2">
            <div className="bg-[#FFFDFB] rounded-[24px] p-10 flex flex-col justify-center h-[240px] md:h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#F2EFE8]">
               <h3 className="text-[20px] font-bold text-[#202020] mb-3">100% Toxin - Free</h3>
               <p className="text-[14px] text-[#595959] leading-relaxed">Lead-free, cadmium-free, chemical-free.</p>
            </div>
            <div className="bg-[#F2F2F2] rounded-[24px] overflow-hidden h-[240px] md:h-full">
               <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Toxin Free Cast Iron" />
            </div>
          </div>
        </div>

        {/* Bottom Wide Card */}
        <div className="mt-6 flex flex-col md:flex-row bg-[#FFFDFB] rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#F2EFE8] h-auto md:h-[240px]">
           <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
              <h3 className="text-[24px] font-bold text-[#294254] mb-3">Purpose Built for Indian Kitchens</h3>
              <p className="text-[14px] text-[#595959] leading-relaxed max-w-sm">Ergonomic designs for easy handling, even heat distribution and low maintenance for daily use.</p>
           </div>
           <div className="w-full md:w-1/2 h-[240px] md:h-full">
              <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Indian Kitchen Cast Iron" />
           </div>
        </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="bg-[#F6F3EE] py-24 text-center">
         <div className="max-w-4xl mx-auto px-6 mb-16">
            <h2 className="font-['Newsreader',serif] font-bold text-[36px] md:text-[44px] text-[#294254] mb-4">Why the Best Chefs Swear by Enamel Cast Iron?</h2>
            <p className="text-[15px] text-[#595959] max-w-3xl mx-auto font-medium">Great cookware isn't just functional — it's part of your story. Made with premium materials, CUSIN stands strong through every meal and memory.</p>
         </div>
         
         <div className="max-w-[1240px] mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
            {/* Chart Card */}
            <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-6 pb-0 md:p-8 md:pb-0 overflow-hidden relative">
               <div className="text-left text-[11px] text-[#595959] font-bold mb-6 mt-2 uppercase tracking-[0.1em]">Heat Retention Efficiency (%)</div>
               <div className="flex items-end justify-between h-[300px] gap-1 max-w-[500px] mx-auto relative pt-12">
                  <div className="absolute right-6 top-0 text-[56px] font-serif text-[#A54029] font-bold -mt-2">98%</div>
                  
                  {/* Bars */}
                  <div className="w-full flex justify-between items-end h-full gap-1 md:gap-3 relative z-10">
                    <div className="flex-1 flex flex-col justify-end h-[45%]">
                       <div className="bg-[#EDDFC7] w-full h-full"></div>
                       <div className="text-center mt-4 mb-4 text-[11px] h-12"><strong className="block text-[#1a1a1a]">45%</strong><span className="text-[#595959] block leading-[1.1] text-[10px]">Aluminium<br/>Non-stick</span></div>
                    </div>
                    <div className="flex-1 flex flex-col justify-end h-[70%]">
                       <div className="bg-[#F4EBDB] w-full h-full"></div>
                       <div className="text-center mt-4 mb-4 text-[11px] h-12"><strong className="block text-[#1a1a1a]">70%</strong><span className="text-[#595959] block leading-[1.1] text-[10px]">Ceramic-Coated<br/>Aluminium</span></div>
                    </div>
                    <div className="flex-1 flex flex-col justify-end h-[75%]">
                       <div className="bg-[#F8EFE3] w-full h-full"></div>
                       <div className="text-center mt-4 mb-4 text-[11px] h-12"><strong className="block text-[#1a1a1a]">75%</strong><span className="text-[#595959] block leading-[1.1] text-[10px]">Alternate Metals<br/>(Brass, Copper)</span></div>
                    </div>
                    <div className="flex-1 flex flex-col justify-end h-[80%]">
                       <div className="bg-[#FAF5EC] w-full h-full"></div>
                       <div className="text-center mt-4 mb-4 text-[11px] h-12"><strong className="block text-[#1a1a1a]">80%</strong><span className="text-[#595959] block leading-[1.1] text-[10px]">Stainless<br/>Steel</span></div>
                    </div>
                    <div className="flex-1 flex flex-col justify-end h-[98%] relative">
                       <div className="bg-[#9A3A25] w-full h-full"></div>
                       <div className="text-center mt-4 mb-4 text-[11px] h-12"><span className="text-white block font-bold leading-[1.1] text-[11px]">Enamel Cast<br/>Iron</span></div>
                    </div>
                  </div>
               </div>
            </div>

            {/* Right Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center">
               <div className="text-[11px] font-bold tracking-[0.2em] text-[#A54029] md:text-gray-500 uppercase mb-4">Heat Retention Efficiency</div>
               <h3 className="font-['Newsreader',serif] font-bold text-[36px] text-[#294254] leading-tight mb-6 lg:max-w-md text-center">Stay Hot, Cook Smart: Energy Efficiency at Its Best</h3>
               <p className="text-[15px] font-medium text-[#595959] leading-relaxed max-w-sm mb-12 text-center">Superior heat retention means faster, even cooking with less energy—perfect for busy kitchens and bold flavors.</p>
               <div className="flex justify-center gap-10 text-[11px] font-bold tracking-[0.1em] uppercase border-t border-[#D9D1C3] pt-6 max-w-md w-full">
                  <span className="cursor-pointer text-[#595959] hover:text-[#A54029] transition-colors">Durability</span>
                  <span className="text-[#A54029] cursor-pointer">Heat Retention</span>
               </div>
            </div>
         </div>
      </section>

      {/* Crafting Section */}
      <section className="bg-[#FAF8F5] py-24">
         <div className="text-center max-w-4xl mx-auto mb-16 px-6">
            <h2 className="font-['Newsreader',serif] font-bold text-[38px] text-[#294254] mb-3">The Art of Crafting Heirloom Cookware</h2>
            <p className="text-[15px] font-medium text-[#595959]">Designed to last, just like the recipes passed down in your family.</p>
         </div>

         <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
               { title: "Design & Testing", txt: "Patent-pending designs with precision molds and rigorous material testing", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
               { title: "Casting & Molding", txt: "Advanced molding and accurate casting for strength and consistency", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" },
               { title: "Cleaning & Polishing", txt: "Thorough cleaning and smooth polishing for flawless finishes", img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&q=80&w=800" },
               { title: "Enviromax Enameling", txt: "Four-layer enamel coating for durability, safety, and performance", img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800" },
               { title: "Quality Inspection & Packaging", txt: "Multi-stage inspection and testing, followed by secure packaging", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" }
            ].map((step, i) => (
               <div key={i} className="relative rounded-[16px] overflow-hidden h-[450px] md:h-[500px] group">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                     <h4 className="text-white font-bold text-[14px] md:text-[15px] mb-2">{step.title}</h4>
                     <p className="text-white/80 text-[12px] md:text-[13px] leading-relaxed pr-2">{step.txt}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Stories Shorts Section */}
      <section className="bg-[#FFFDFB] pt-24 pb-64 md:pb-[320px] overflow-hidden text-center relative z-10">
         <div className="max-w-4xl mx-auto mb-16 px-6">
            <h2 className="font-['Newsreader',serif] font-bold text-[36px] md:text-[40px] text-[#294254] mb-3">Real People, Real Stories</h2>
            <p className="text-[15px] font-medium text-[#595959]">Every CUSIN kitchen has a uniquely different story</p>
         </div>

         <div className="max-w-[1600px] mx-auto relative group/stories">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
               {[
                 { thumb: "No. 10 Dutch Oven", txt: "No. 10 Enamel Cast Iron Dutch Oven (5L)", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600" },
                 { thumb: "Bread Oven", txt: "No. 8 Enamel Cast Iron Bread Oven (20cm)", img: "https://images.unsplash.com/photo-1549778399-f94fd24d4697?auto=format&fit=crop&q=80&w=600" },
                 { thumb: "Rose Dutch Oven", txt: "Rosé By CUSIN (2.5L)", img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&q=80&w=600" },
                 { thumb: "Pancake Pan", txt: "No. 8 Enamel Cast Iron Pancake Pan", img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=600" },
                 { thumb: "Griddle", txt: "No. 8 Enamel Cast Iron Griddle (24cm)", img: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=600" },
                 { thumb: "Tadka Pan", txt: "No. 4 Tadka Pan (1L)", img: "https://images.unsplash.com/photo-1547592180-85f120f2dbf8?auto=format&fit=crop&q=80&w=600" }
               ].map((vid, idx) => (
                 <div key={idx} className="min-w-[280px] w-[280px] h-[520px] shrink-0 snap-center rounded-[12px] relative overflow-hidden group/vid cursor-pointer shadow-sm border border-gray-100">
                    <img src={vid.img} className="w-full h-full object-cover group-hover/vid:scale-105 transition-transform duration-700" />
                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/vid:opacity-100 transition-opacity bg-black/20 z-10">
                      <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
                         <span className="material-symbols-outlined text-white text-[32px] ml-1">play_arrow</span>
                      </div>
                    </div>
                    {/* Dark gradient for text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none"></div>
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 w-full p-4 flex gap-3 text-left items-end z-10">
                       <div className="w-8 h-8 rounded-[4px] bg-white overflow-hidden shrink-0 border border-white/20">
                         <img src={vid.img} className="w-full h-full object-cover" />
                       </div>
                       <p className="text-white text-[12px] font-bold leading-[1.3] pb-0.5">{vid.txt}</p>
                    </div>
                 </div>
               ))}
            </div>
            
            {/* Right overlapping arrow indicator */}
            <button className="absolute right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl justify-center items-center opacity-0 group-hover/stories:opacity-100 hover:bg-white transition-all hidden lg:flex text-gray-800 z-20 hover:scale-110 border border-gray-100">
               <span className="material-symbols-outlined">arrow_forward</span>
            </button>
         </div>
      </section>

      {/* Massive Footer System */}
      <footer className="bg-cusin-terracotta w-full pt-0 pb-0 text-[#F2EFE8] relative flex flex-col mt-0 overflow-hidden z-20 font-figtree">
        {/* Abstract organic background shapes */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-black/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
        <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        {/* Floating Top Cards */}
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative -top-24 md:-top-32 mb-[-40px] md:mb-[-60px] z-20">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600",
                  "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&q=80&w=600",
                  "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&q=80&w=600"
              ].map((img, i) => (
                 <div key={i} className={`aspect-square rounded-[32px] overflow-hidden shadow-2xl bg-[#9A3A25] ${i === 2 ? 'hidden md:block' : ''}`}>
                    <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt={`Footer Image ${i+1}`} />
                 </div>
              ))}
              {/* Luxury Call-to-action Card */}
              <div className="bg-[#FAF8F5] rounded-[32px] aspect-square p-6 md:p-8 flex flex-col justify-between shadow-2xl xl:p-10 border border-[#E8E1D5]">
                 <div className="space-y-1">
                    <h3 className="font-lora text-[#1a2d1f] text-[32px] md:text-[40px] leading-[1] font-bold">Luxury</h3>
                    <p className="text-[12px] md:text-[14px] font-medium text-[#595959] uppercase tracking-widest opacity-70">that turns every</p>
                    <h4 className="font-lora text-[#1a2d1f] text-[32px] md:text-[40px] leading-[1] font-bold">meal <span className="text-[16px] font-figtree font-medium text-[#595959] lowercase italic">into a</span></h4>
                    <h4 className="font-lora text-[#1a2d1f] text-[32px] md:text-[40px] leading-[1] font-bold">celebration.</h4>
                 </div>
                 <button className="w-full py-4 bg-cusin-terracotta text-white text-[14px] font-bold rounded-full hover:bg-[#802F1D] transition-all mt-auto shadow-lg hover:scale-[1.02] active:scale-95 uppercase tracking-widest">Shop Now</button>
              </div>
           </div>
        </div>

        {/* Middle Section - Newsletter & Links */}
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-20 pb-16 relative z-10">
           {/* Newsletter */}
           <div className="space-y-6">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-60">Subscribe to our newsletter</h4>
              <div className="relative group max-w-xs">
                 <input 
                    type="email" 
                    placeholder="Your e-mail" 
                    className="w-full bg-transparent border-b border-white/30 py-3 pr-10 focus:outline-none focus:border-white transition-colors placeholder:text-white/40 text-[15px]" 
                 />
                 <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white group-hover:translate-x-1 transition-transform">
                    <span className="material-symbols-outlined">arrow_forward</span>
                 </button>
              </div>
           </div>

           {/* About Links */}
           <div className="space-y-6">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-60">About</h4>
              <ul className="space-y-4 text-[14px] font-medium">
                 {['Our Story', 'Our Material', 'Care and Cleaning', 'FAQs'].map(item => (
                    <li key={item}><a href="#" className="hover:opacity-100 opacity-70 transition-opacity">{item}</a></li>
                 ))}
              </ul>
           </div>

           {/* Support Links */}
           <div className="space-y-6">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-60">Support</h4>
              <ul className="space-y-4 text-[14px] font-medium">
                 {['Contact Us', 'International Shipping', 'Gift Card', 'Blogs', 'Warranty'].map(item => (
                    <li key={item}><a href="#" className="hover:opacity-100 opacity-70 transition-opacity">{item}</a></li>
                 ))}
              </ul>
           </div>

           {/* Policies Links */}
           <div className="space-y-6">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-60">Policies</h4>
              <ul className="space-y-4 text-[14px] font-medium">
                 {['Terms', 'Return Policy', 'Limited Warranty Policy', 'Privacy Policy', 'Cookie Policy'].map(item => (
                    <li key={item}><a href="#" className="hover:opacity-100 opacity-70 transition-opacity">{item}</a></li>
                 ))}
              </ul>
           </div>
        </div>

        {/* Bottom Logo Banner */}
        <div className="w-full px-6 md:px-12 pb-12 pt-10 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-12">
              {/* Socials - Bottom Left */}
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                   <a href="#" className="w-[44px] h-[44px] bg-white/10 rounded-full flex justify-center items-center backdrop-blur-md hover:bg-white hover:text-cusin-terracotta transition-all hover:scale-110">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-[24px] h-[24px]" alt="WhatsApp" />
                   </a>
                   <a href="#" className="w-[44px] h-[44px] bg-white/10 rounded-full flex justify-center items-center backdrop-blur-md hover:bg-white transition-all hover:scale-110">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" className="w-[24px] h-auto" alt="YouTube" />
                   </a>
                   <a href="https://www.instagram.com/_kuldeep023" target="_blank" rel="noopener noreferrer" className="w-[44px] h-[44px] bg-white/10 rounded-full flex justify-center items-center backdrop-blur-md hover:bg-white transition-all hover:scale-110">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" className="w-[24px] h-[24px]" alt="Instagram" />
                   </a>
                   <a href="https://www.linkedin.com/in/kuldeep-prajapati-005080257/" target="_blank" rel="noopener noreferrer" className="w-[44px] h-[44px] bg-white/10 rounded-full flex justify-center items-center backdrop-blur-md hover:bg-white transition-all hover:scale-110">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" className="w-[22px] h-[22px]" alt="LinkedIn" />
                   </a>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] opacity-40">Get in touch</p>
                  <a href="mailto:kuldeeppraj2002@gmail.com" className="text-[14px] font-medium opacity-70 hover:opacity-100 transition-opacity">kuldeeppraj2002@gmail.com</a>
                </div>
              </div>
              
              {/* Watermark and Copyright container */}
              <div className="flex flex-col items-center md:items-end w-full md:w-auto relative">
                 <h1 className="font-lora font-bold text-[18vw] leading-none text-white/10 tracking-tighter lowercase select-none absolute bottom-0 right-0 pointer-events-none translate-y-1/4 translate-x-1/4">
                   CUSIN
                 </h1>
                 <div className="text-center md:text-right space-y-2 relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                       © 2026, CUSIN Kitchenware Private Limited All Rights Reserved
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </footer>

      {/* AI Chatbot Concierge */}
      <Chatbot />
    </div>
  );
}

export default Home;
