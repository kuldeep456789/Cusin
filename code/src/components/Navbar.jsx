import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dark, setDark] = useState(localStorage.getItem('theme') === 'dark');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleMenuEnter = (menu) => {
    if (window.innerWidth >= 1024) setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    if (window.innerWidth >= 1024) setActiveMenu(null);
  };

  const isHome = location.pathname === '/';
  const headerBgClass = (activeMenu !== null || scrolled || !isHome || mobileMenuOpen) 
    ? 'bg-[#913D26] dark:bg-[#1a1a1a] shadow-md top-0 pt-0' 
    : 'bg-transparent lg:top-10 top-0 pt-0';

  const megaMenus = {
    Cookware: (
      <div className="absolute left-0 top-full w-full bg-[#FAF8F5] dark:bg-[#202020] text-[#2C3B43] dark:text-white shadow-xl border-t border-[#EAE3D9] dark:border-[#333] hidden lg:flex justify-center py-12 px-8 transition-all z-40 cursor-default">
        <div className="max-w-[1400px] w-full flex gap-16">
          <div className="w-64 flex flex-col gap-3.5 font-medium text-[15px]">
            <h4 className="font-bold text-[#1a2d1f] dark:text-[#eb5e28] mb-3 border-b border-[#EAE3D9] dark:border-[#333] pb-2 text-[16px]">Toxin Safe Cookware</h4>
            {['Dosa & Roti Tawa', 'Kadai', 'Dutch Oven', 'Frying Pan', 'Tadka Pan', 'Cooking Pots'].map(item => (
              <Link key={item} to="/product" className="hover:text-[#913D26] dark:hover:text-[#eb5e28] text-[#4A5B63] dark:text-gray-400 transition-colors uppercase tracking-wider text-[13px]">{item}</Link>
            ))}
          </div>
          <div className="flex-1 grid grid-cols-4 gap-8">
            {[
              { name: 'Tawa', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEO21mmm1zgvPhi6dOJjikgUvH4Eo9MlE5jdccNWGT_yAD9KGahFviCkyMg154npVZVbuLFs_bh3uR7ylfSb1pPsCNR_BtJp-Wcz1J6eJVVrPvnMcT5zGh4fbKMk91RMCc6TJwiITAsSKXGztYCKvnujkSHVgYYZEnw6xVlg9uX6FIxyVdf7bmG8ZBiTC46-2t2F2t5Xns888KOuBzaS2lc15NqLQcWWmrcVWxHdhIZBOiN_FkXICUCG9_Ic_jQJlgB5bex0VdTz0' },
              { name: 'Kadai', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVPLyAAEnrgrbBhPhRLG7JzAE0TT8GztaX4eRyBrV7B93HVF18BYgvxwp4IP6VYRpRmZWy1nuetwfi2rtS0DVqMIf01XwJ0tw_2g7b69lT1SzqkGXBwvfYuZyaaxjmaMKjIC-9dTtgfQKWLEpQO3j2aTx20yFa7bnC3vU2sS1enwYLHNksEujjBzDW7QoeNamQUUiQbSLP7G1Z_8JsbR-l-BuIpkdr2WCKE41a-LeSlo3GaCL6yHXgg21pW5XM--hOqsPBSIssDHI' },
              { name: 'Dutch Oven', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDddV-m1apnI7ssW86gyaa6jh54NnRJPHvja1B_wjSJFH_S89jtJGisp6jDoeqsdjGFuEnzoufV2t9zHKTLS8EmaZLS8XruJgjRRXphoIssz3gqgrJhIc3A3CRqVfEsY1yrnYVlHPdwpY00wAF6EuZUit4PqJnyc_SGnQh-JWzH05ko5o0aq0m_2OM9-lX-4rUs2Rfp5jHXqQEQRSmu-L3lTRsAJwRrMe5h42A6OL07DK3q9f3SOWQ39ZblqkRucBeE3Mm6cjEwusU' },
              { name: 'Pans', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpS-CpcxBeKP0xFCSn80wqGU2j94sRq1CwftGy4HGV9qRut_nUyFWMSygMcgqmh9lI4WGMsWLzLt5fvEFG_5L-RU7VJ8zvaRgONUk-Xf1C-CFtdmGFBzvnkK_GviZVwv_eC73QdjEnl80DY5lDTYvWLVI3FF4d432_0_xOvQLxJ6YLvfvGkcsDS6CuoH3NCJE-wPKixct3wBLjL30ntYlBd-w4foN2IgTeHle5zbbOP0oXkusvLLCFrRFg4zvAB7fZrhUg-FEkNCg' },
            ].map(it => (
              <Link key={it.name} to="/product" className="group flex flex-col items-center">
                <div className="bg-[#D8CCBD] dark:bg-[#333] rounded-xl w-full aspect-square relative overflow-hidden flex items-center justify-center p-6 mb-5 shadow-sm transition-colors">
                  <img src={it.img} alt={it.name} className="w-[85%] h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out" />
                </div>
                <span className="text-[17px] font-medium text-[#202020] dark:text-gray-100 group-hover:text-[#913D26] dark:group-hover:text-[#eb5e28] transition-colors">{it.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    ),
    Collections: (
      <div className="absolute top-full transform translate-y-0 bg-[#FAF8F5] dark:bg-[#202020] text-[#202020] dark:text-white shadow-xl border border-[#EAE3D9] dark:border-[#333] py-4 w-[240px] z-40 mt-1 cursor-default hidden lg:block">
        <div className="flex flex-col text-[16px] font-medium">
          {['Best Sellers', 'Lite Collection', 'Breakfast Collection', 'Heritageware', 'Rose Collection', 'Classic Collection'].map(item => (
            <Link key={item} to="/product" className="px-6 py-3 hover:text-[#913D26] dark:hover:text-[#eb5e28] hover:bg-[#F2EFE8] dark:hover:bg-[#333] transition-colors">{item}</Link>
          ))}
        </div>
      </div>
    )
  };

  return (
    <>
      <div className="bg-[#2D4A33] text-white text-center text-[10px] md:text-xs font-semibold py-2 md:py-2.5 tracking-wide fixed w-full top-0 z-[70] flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-[14px] md:text-[16px]">celebration</span>
        Heritageware Collection: Made for Indian Kitchens
        <span className="material-symbols-outlined text-[14px] md:text-[16px]">celebration</span>
      </div>

      <header 
        className={`fixed w-full z-[60] transition-all duration-300 ${headerBgClass} mt-[34px] md:mt-[40px]`}
        onMouseLeave={handleMenuLeave}
      >
        <div className="max-w-[1500px] mx-auto px-4 md:px-8 py-3 md:py-5 flex justify-between items-center text-white relative">
          
          <div className="flex items-center gap-4">
            {/* Hamburger Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-[28px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>

            <Link to="/" className="flex items-center gap-2 md:gap-3 group">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-12 transition-transform duration-300">
                <path d="M12 4s-4-2-8-2c0 8 4 10 4 10s-1 5 4 8c5-3 4-8 4-8s4-2 4-10c-4 0-8 2-8 2z" />
              </svg>
            <span className="font-bold text-xl md:text-2xl lowercase tracking-tight">CUSIN</span>
            </Link>
          </div>
          
          <nav className="hidden lg:flex space-x-10 text-[15px] font-medium h-full items-center">
            <div className="relative py-4" onMouseEnter={() => handleMenuEnter(null)}>
              <Link to="/product" className="hover:opacity-80 transition-opacity uppercase tracking-wider text-[13px]">Kitchenware</Link>
            </div>
            
            <div className="relative py-4 cursor-pointer" onMouseEnter={() => handleMenuEnter('Cookware')} onClick={() => handleMenuEnter(activeMenu === 'Cookware' ? null : 'Cookware')}>
              <span className={`hover:opacity-80 transition-opacity uppercase tracking-wider text-[13px] ${activeMenu === 'Cookware' ? 'opacity-80 border-b-2 border-white pb-1' : ''}`}>Cookware</span>
            </div>
            
            <div className="relative py-4 cursor-pointer" onMouseEnter={() => handleMenuEnter('Collections')} onClick={() => handleMenuEnter(activeMenu === 'Collections' ? null : 'Collections')}>
              <span className={`hover:opacity-80 transition-opacity uppercase tracking-wider text-[13px] ${activeMenu === 'Collections' ? 'opacity-80 border-b-2 border-white pb-1' : ''}`}>Collections</span>
              {activeMenu === 'Collections' && megaMenus['Collections']}
            </div>
          </nav>
          
          <div className="flex space-x-2 md:space-x-6 items-center" onMouseEnter={() => handleMenuEnter(null)}>
            {/* Theme Toggle (Always visible) */}
            <button 
              onClick={() => setDark(!dark)}
              className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              title="Toggle Dark/Light Mode"
            >
              <span className="material-symbols-outlined font-light text-[20px] md:text-[24px]">
                {dark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <span className="material-symbols-outlined cursor-pointer hover:opacity-80 font-light text-[24px] md:text-[26px] hidden sm:block">search</span>
            
            {/* Profile Section */}
            <div className="relative" onMouseEnter={() => setProfileOpen(true)} onMouseLeave={() => setProfileOpen(false)}>
              <span className="material-symbols-outlined cursor-pointer hover:opacity-80 font-light text-[24px] md:text-[26px]">person</span>
              {profileOpen && (
                <div className="absolute right-0 top-full pt-2 w-[220px] z-[60] hidden lg:block">
                   <div className="bg-white dark:bg-[#1a1a1a] text-[#202020] dark:text-white shadow-2xl border border-gray-100 dark:border-[#333] rounded-xl overflow-hidden py-2">
                      <div className="px-6 py-4 border-b border-gray-100 dark:border-[#333] mb-2">
                        <p className="text-[12px] uppercase tracking-widest text-gray-400 font-bold mb-1">Account</p>
                        <p className="text-[14px] font-bold truncate">Premium Guest</p>
                      </div>
                      <Link to="/profile" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <span className="material-symbols-outlined text-[20px] font-light">account_circle</span>
                        <span className="text-[14px] font-medium">My Profile</span>
                      </Link>
                      <Link to="/cart" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <span className="material-symbols-outlined text-[20px] font-light">shopping_bag</span>
                        <span className="text-[14px] font-medium">My Cart</span>
                      </Link>
                      <Link to="/login" className="flex items-center gap-3 px-6 py-3 mt-2 bg-[#913D26] text-white hover:bg-[#a54029] transition-colors mx-4 rounded-lg text-center justify-center">
                        <span className="text-[14px] font-bold">Sign In</span>
                      </Link>
                   </div>
                </div>
              )}
            </div>

            <Link to="/cart" className="relative hover:opacity-80">
              <span className="material-symbols-outlined font-light text-[24px] md:text-[26px]">shopping_cart</span>
              <span className="absolute -top-1 -right-2 bg-white dark:bg-[#eb5e28] text-[#913D26] dark:text-white text-[10px] font-bold w-[16px] h-[16px] md:w-[18px] md:h-[18px] rounded-full flex items-center justify-center shadow-sm">0</span>
            </Link>
          </div>
        </div>

        {/* Desktop Mega Menus */}
        {activeMenu && ['Cookware', 'Bakeware', 'Serveware'].includes(activeMenu) && (
          megaMenus[activeMenu]
        )}

        {/* Mobile Menu Drawer */}
        <div className={`lg:hidden fixed inset-0 z-[100] transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className={`absolute left-0 top-0 h-full w-[300px] bg-[#FAF8F5] dark:bg-[#1a1a1a] shadow-2xl transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex flex-col h-full text-[#202020] dark:text-white">
              <div className="p-6 border-b border-gray-100 dark:border-[#333] flex justify-between items-center">
                <span className="font-bold text-xl lowercase">CUSIN</span>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-6 px-6">
                <nav className="flex flex-col gap-6">
                  <Link to="/product" className="text-lg font-bold">Kitchenware</Link>
                  <div className="flex flex-col gap-4">
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Cookware</span>
                    {['Dosa & Roti Tawa', 'Kadai', 'Dutch Oven', 'Frying Pan'].map(item => (
                      <Link key={item} to="/product" className="text-[15px] pl-2">{item}</Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Account</span>
                    <Link to="/profile" className="text-[15px] pl-2 flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px]">account_circle</span>
                      My Profile
                    </Link>
                    <Link to="/cart" className="text-[15px] pl-2 flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                      My Cart
                    </Link>
                  </div>
                </nav>
              </div>

              <div className="p-6 border-t border-gray-100 dark:border-[#333]">
                <Link to="/login" className="w-full py-4 bg-[#913D26] text-white font-bold rounded-xl flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined">login</span>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
