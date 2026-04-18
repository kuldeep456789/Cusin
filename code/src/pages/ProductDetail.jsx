import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function ProductDetail() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen">
      
      <Navbar />
<main>
{/*  Product Hero Section  */}
<section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
{/*  Image Gallery (Asymmetric)  */}
<div className="space-y-6 relative">
<div className="aspect-[4/5] bg-surface-container-low rounded-DEFAULT overflow-hidden relative group">
<img alt="The Heritage Braiser in rich primary red on a dark marble countertop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="large rustic enamelled cast iron braiser pan in deep terracotta red resting on a dark marble kitchen surface, soft natural window light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfPPJlUls79miUwBvZu7swOVkd9L513qQ112S3D_Q1fcRpqDVdXC68DjykMk71qqp2WpJ5zgGVGDcCyFpvNgdiJ8gPDAdMvBJgcJVLpVS0IRkW_xz6XleyG5qWH6wsD7PPArh7xN6m_KVl09KuV1zGty41OsUMM1R6_9QnT7H11xHbwe0M3E7oBkM_3slE5_lnZpyl8M7Oc2CNGEVBkQg3FPPLXyw67Wg9YkZ53dT8qgLbPsen9HlBbRi3iEw3WFyKa6txSZxeKZU"/>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="aspect-square bg-surface-container-lowest rounded-DEFAULT overflow-hidden">
<img alt="Detail shot of the braiser lid and handle" className="w-full h-full object-cover" data-alt="close up macro shot of the stainless steel knob on a terracotta red enamelled cast iron lid, highlighting the smooth texture and subtle reflection" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfyC-N160eRW0p7HOjC3y2Iq--ZhYB3-zIx3XBY4ex3R49r63AepyZQ52qjYBoDn26Mbb1YmT0g8PbaL5QkBB_OAOznsaaC1VNn6HUNxPU6dLKyUjRPZ8y7qY0dDXQgiVU9TRbvH1k8Le0INxbA4Z_Vqeld-7QPHYwRDawRWWeB2xBFIJZNkEakY1-vuwRzdobeOG962KGkT_uq6_Ntm4RM68sZUNxcZy95EMJljoory39STfWnYPDfIRy3f-yqw7_8yEjWYY97MI"/>
</div>
<div className="aspect-square bg-surface-container-lowest rounded-DEFAULT overflow-hidden mt-12">
<img alt="Braiser in use on a stovetop" className="w-full h-full object-cover" data-alt="terracotta red enamelled cast iron braiser pan on a gas stovetop with a wooden spoon stirring a rich stew, warm inviting light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLBReQhAt4EhwR_M14xPcRj7M5dRPd7Ri-qvmBrNOGLFSJNHJjV8OjmNpauq7LHUNUch5UQzYfcniE3JTapn1vAEoyfBbAXfImHGs7MKg4_NUv74gJSF8XnuUwjGfQ3aCKw3hhrA6bfWnKox8dJ7ixJR09GMFT2w2gQfq7HZePoUC3ENkhT8oL-IdgPJ5_4eSGaAYnUl8gQeFVVJNApwSuZo8AEmaDcNgv9IujA1JuhbWt3F4zbNdCeQooaWV7caF8NKfnjuvsgtY"/>
</div>
</div>
</div>
{/*  Product Details  */}
<div className="flex flex-col lg:sticky top-32 pl-0 lg:pl-10">
<p className="font-label text-sm uppercase tracking-widest text-primary mb-4">Enamelled Cast Iron</p>
<h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-light text-on-surface dark:text-white mb-6 leading-tight">The Heritage <br/><span className="italic text-primary">Braiser</span></h1>
<p className="font-headline text-2xl md:text-3xl text-on-surface-variant dark:text-gray-400 mb-8">₹24,500</p>
<p className="font-body text-[15px] md:text-base text-on-surface-variant dark:text-gray-300 leading-relaxed mb-10 max-w-md">
                    Master the art of slow cooking. Designed to transition effortlessly from stovetop to oven to table, this braiser offers unparalleled heat retention and moisture distribution. Its wide, shallow base is perfect for searing meats before slow-simmering them to tender perfection.
                </p>
{/*  Configuration Options  */}
<div className="space-y-8 mb-12">
{/*  Color Selection  */}
<div>
<h3 className="font-label text-sm uppercase tracking-wider text-on-surface mb-4">Color <span className="text-on-surface-variant ml-2 normal-case">Terracotta Spice</span></h3>
<div className="flex space-x-4">
<button aria-label="Select Terracotta Spice color" className="w-10 h-10 rounded-full bg-[#9E422E] ring-2 ring-offset-4 ring-[#9E422E] ring-offset-surface focus:outline-none transition-all"></button>
<button aria-label="Select Forest Green color" className="w-10 h-10 rounded-full bg-[#446645] ring-2 ring-offset-4 ring-transparent hover:ring-outline-variant ring-offset-surface focus:outline-none transition-all"></button>
<button aria-label="Select Cream color" className="w-10 h-10 rounded-full bg-[#f5f5f0] border border-outline-variant ring-2 ring-offset-4 ring-transparent hover:ring-outline-variant ring-offset-surface focus:outline-none transition-all"></button>
</div>
</div>
{/*  Size Selection  */}
<div>
<h3 className="font-label text-sm uppercase tracking-wider text-on-surface mb-4">Size</h3>
<div className="flex space-x-4">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="size" type="radio"/>
<div className="px-6 py-3 border border-outline-variant/30 text-on-surface-variant peer-checked:border-primary peer-checked:text-primary transition-colors hover:bg-surface-container-low">
                                    3.5 QT
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="size" type="radio"/>
<div className="px-6 py-3 border border-outline-variant/30 text-on-surface-variant peer-checked:border-primary peer-checked:text-primary transition-colors hover:bg-surface-container-low">
                                    5.0 QT
                                </div>
</label>
</div>
</div>
</div>
{/*  CTA  */}
<Link to="/cart" className="bg-[#913D26] text-white font-body text-sm uppercase tracking-widest py-5 px-10 rounded-full hover:bg-[#a54029] transition-all duration-300 w-full lg:w-auto self-start shadow-xl shadow-[#913D26]/20 hidden lg:flex items-center justify-center">
                    Add to Cart
                </Link>

{/* Mobile Sticky CTA */}
<div className="lg:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-[#1a1a1a] border-t border-gray-100 dark:border-[#333] p-4 z-[100] flex items-center justify-between gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
  <div className="flex flex-col">
    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Price</span>
    <span className="text-xl font-bold">₹24,500</span>
  </div>
  <Link to="/cart" className="flex-1 bg-[#913D26] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2">
    <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
    Add to Cart
  </Link>
</div>
</div>
</section>
{/*  Craftsmanship & Care  */}
<section className="bg-surface-container-low py-24 mt-12 relative overflow-hidden text-[#202020] dark:bg-[#1a1a1a] dark:text-white transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
<div>
<h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-12">Crafted for <span className="italic text-primary">Generations</span></h2>
<div className="space-y-10">
<div className="flex items-start space-x-6">
<div className="w-12 h-12 rounded-full bg-surface dark:bg-white/5 flex items-center justify-center flex-shrink-0 text-primary shadow-sm shadow-primary/5">
<span className="material-symbols-outlined" data-icon="local_fire_department" data-weight="fill" style={{ fontVariationSettings: "\'FILL\' 1" }}>local_fire_department</span>
</div>
<div>
<h3 className="font-headline text-2xl text-on-surface mb-2 font-bold">Exceptional Heat Retention</h3>
<p className="font-body text-sm text-on-surface-variant dark:text-gray-400 leading-relaxed">Cast iron construction ensures even heating across the entire pan, maintaining steady temperatures for perfect searing and slow braising.</p>
</div>
</div>
<div className="flex items-start space-x-6">
<div className="w-12 h-12 rounded-full bg-surface dark:bg-white/5 flex items-center justify-center flex-shrink-0 text-primary shadow-sm shadow-primary/5">
<span className="material-symbols-outlined" data-icon="water_drop">water_drop</span>
</div>
<div>
<h3 className="font-headline text-2xl text-on-surface mb-2 font-bold">Self-Basting Lid</h3>
<p className="font-body text-sm text-on-surface-variant dark:text-gray-400 leading-relaxed">Specially designed domed lid continuously circulates moisture back down onto the food, locking in flavor and tenderness.</p>
</div>
</div>
<div className="flex items-start space-x-6">
<div className="w-12 h-12 rounded-full bg-surface dark:bg-white/5 flex items-center justify-center flex-shrink-0 text-primary shadow-sm shadow-primary/5">
<span className="material-symbols-outlined" data-icon="cleaning_services">cleaning_services</span>
</div>
<div>
<h3 className="font-headline text-2xl text-on-surface mb-2 font-bold">Effortless Care</h3>
<p className="font-body text-sm text-on-surface-variant dark:text-gray-400 leading-relaxed">The sand-colored interior enamel requires no seasoning, resists staining, and cleans easily with warm soapy water.</p>
</div>
</div>
</div>
</div>
<div className="bg-surface dark:bg-[#252525] p-10 rounded-DEFAULT border border-outline-variant/15 shadow-sm shadow-on-surface/5 relative">
<h3 className="font-label text-sm uppercase tracking-widest text-[#913D26] mb-8 border-b border-outline-variant/20 pb-4 font-bold">Technical Specifications</h3>
<ul className="space-y-6">
<li className="flex justify-between items-end border-b border-gray-100 dark:border-[#333] pb-2">
<span className="font-body text-sm text-on-surface-variant dark:text-gray-400">Capacity</span>
<span className="font-headline text-lg text-on-surface font-bold">3.5 Quarts</span>
</li>
<li className="flex justify-between items-end border-b border-gray-100 dark:border-[#333] pb-2">
<span className="font-body text-sm text-on-surface-variant dark:text-gray-400">Dimensions</span>
<span className="font-headline text-lg text-on-surface font-bold">11.5" x 3.5"</span>
</li>
<li className="flex justify-between items-end border-b border-gray-100 dark:border-[#333] pb-2">
<span className="font-body text-sm text-on-surface-variant dark:text-gray-400">Weight</span>
<span className="font-headline text-lg text-on-surface font-bold">12.8 lbs</span>
</li>
<li className="flex justify-between items-end border-b border-gray-100 dark:border-[#333] pb-2">
<span className="font-body text-sm text-on-surface-variant dark:text-gray-400">Compatibility</span>
<span className="font-headline text-lg text-on-surface font-bold">Gas, Induction, Oven Safe</span>
</li>
<li className="flex justify-between items-end pb-2">
<span className="font-body text-sm text-on-surface-variant dark:text-gray-400">Origin</span>
<span className="font-headline text-lg text-on-surface font-bold">Heritage Craft</span>
</li>
</ul>
</div>
</div>
</div>
</section>
{/*  Complete the Set  */}
<section className="max-w-7xl mx-auto px-6 md:px-10 py-24 mb-20 md:mb-0">
<h2 className="font-headline text-4xl text-center text-on-surface dark:text-white mb-16">Complete the <span className="italic text-primary">Set</span></h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
{/*  Related Item 1  */}
<Link className="group block" to="/product">
<div className="aspect-square bg-surface-container-low dark:bg-[#1a1a1a] rounded-DEFAULT overflow-hidden mb-6 relative">
<img alt="Essential Skillet in Terracotta" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH_uWQbaL0IjNBOBxEtcnkfcWbg2WK2kms2TSulmMkJ2Futi5L5pgBxXXAEH_-tA2JvPVhB5Nr3S_gon0VJIjRAiLeWX1_G25G3NqXx0H5ee8WuWqbjR49Tw_20d8PZHuQS7N2Vu1EwVbqgMq0xbaMXd5Q-u-CLkd8mP1_WbW30TmQ2gMcDPsQrUd_rNbXcZ3orf4FOmwdb7JxEFcUiZCAuiM6MY891g1v97D4N3MMmFop7jeENMphT2ierRR4fskStLbYYIJ_zgg"/>
</div>
<div className="text-center">
<p className="font-label text-xs uppercase tracking-widest text-[#913D26] font-bold mb-2">Cookware</p>
<h3 className="font-headline text-2xl text-on-surface dark:text-white mb-1 group-hover:text-primary transition-colors">The Essential Skillet</h3>
<p className="font-body text-sm text-on-surface-variant dark:text-gray-400">₹16,500</p>
</div>
</Link>
{/*  Related Item 2  */}
<Link className="group block lg:mt-12 mt-0" to="/product">
<div className="aspect-square bg-surface-container-low dark:bg-[#1a1a1a] rounded-DEFAULT overflow-hidden mb-6 relative">
<img alt="Nesting Prep Bowls" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPpahVe-TZKKiu6rVnveuLqNFQo7jUpXrNvngHAMeqKWvNorfh8XiK-pfxEIGShgB9nhEp01Ev137d4QnodFkpYjSy8MFDs1hiET2s9DsW7xVZSOAI7mgz4aAtYmthLon2NCdU-N8xUy56UfyE1YFfGDyDuopAVQbtOr5ZbTD4dJke8KhxEJyPCx0hderVh2odKjBqzXzIu-AwKMRVqFr2pINUkHdwJizZPS6xlneZ7aERi635Mk2JOMvpxAhi51spH2RwGZIpdqY"/>
</div>
<div className="text-center">
<p className="font-label text-xs uppercase tracking-widest text-[#913D26] font-bold mb-2">Accessories</p>
<h3 className="font-headline text-2xl text-on-surface dark:text-white mb-1 group-hover:text-primary transition-colors">Nesting Prep Bowls</h3>
<p className="font-body text-sm text-on-surface-variant dark:text-gray-400">₹8,500</p>
</div>
</Link>
{/*  Related Item 3  */}
<Link className="group block" to="/product">
<div className="aspect-square bg-surface-container-low dark:bg-[#1a1a1a] rounded-DEFAULT overflow-hidden mb-6 relative">
<img alt="Wooden Utensil Set" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzLDsEHHAhtr8rGA1jNb06enlizx0In7QWwU5Y5qdvVd_K_PQrS9SMXmnvYY9qU-qtaEDhGOoGrHYkUNZfTBnMrSGRXBih-RrUClYA10CbrqP_LILIRzzLkpZd31fpXr3ycpb-JQT2VeRKbAJU6Z8grriO0thwe_hRmPwv5jhRrnRTFBaW-sTjbY-n4BuXR6RodiKcZLejI6c90QdWOnYM_I8_X-uTpYm3Uqm5_IewYTWpp-bWiakrBHQogbAPVkBFBPYsIoIqBkY"/>
</div>
<div className="text-center">
<p className="font-label text-xs uppercase tracking-widest text-[#913D26] font-bold mb-2">Accessories</p>
<h3 className="font-headline text-2xl text-on-surface dark:text-white mb-1 group-hover:text-primary transition-colors">Artisan Utensil Set</h3>
<p className="font-body text-sm text-on-surface-variant dark:text-gray-400">₹6,500</p>
</div>
</Link>
</div>
</section>
</main>
{/*  Footer Simplified  */}
<footer className="bg-[#F2EFE8] dark:bg-[#121212] w-full py-20 px-6 border-t border-gray-100 dark:border-[#333] transition-colors duration-300">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
    <Link to="/" className="flex items-center gap-3">
       <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#913D26]">
          <path d="M12 4s-4-2-8-2c0 8 4 10 4 10s-1 5 4 8c5-3 4-8 4-8s4-2 4-10c-4 0-8 2-8 2z" />
       </svg>
       <span className="font-bold text-2xl lowercase tracking-tight dark:text-white">CUSIN</span>
    </Link>
    <div className="flex gap-8 text-[13px] font-bold text-gray-500 uppercase tracking-widest">
      <Link to="/" className="hover:text-[#913D26] transition-colors">Safety</Link>
      <Link to="/" className="hover:text-[#913D26] transition-colors">Sustainability</Link>
      <Link to="/" className="hover:text-[#913D26] transition-colors">Returns</Link>
    </div>
    <p className="text-[12px] text-gray-400 font-medium">© 2026 CUSIN. Kitchen Excellence.</p>
  </div>
</footer>
    </div>
  );
}

export default ProductDetail;
