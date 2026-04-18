import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "The Heritage Braiser",
      color: "Terracotta Spice",
      price: 245,
      quantity: 1,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJXPR5_nEH80VP_CeZvdNQ3XIjumsopbBzoZr-b4zovsMCPuA9a_9mTMuAyLD-kmVJfclm4yUDEoBbwtuHxQlmNm24jgkvrVOnG2HUHg_dXqMzKlFJISwvwaaRLtgMuRqaEEV2sCAtultqFwr-KdpwEbasQQ4N72LkAE_iubDHEfDSB25Ri8Q4voLnIWBv059IpbRxCGS6s7FNK4rFY_qChP_w1rQqwXrTVwLcR8RPs_yfb7UObc-mVURyBob6WhOTw8Roibr8BqU"
    },
    {
      id: 2,
      name: "Artisan Utensil Set",
      color: "Walnut & Olive Wood",
      price: 65,
      quantity: 1,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBw6R9OoaDBNMVtUifp0Q5sUdzi-CPJVAw9GimJ4bYR5qJ6Xp1ZHUj07tPI8QMywKfPIzMWZ3XMLHpP4fDXVb3ROAo7RQMzJDua5GNkxjovYNAGXBHFrSBTRnYa1s9227ZIwuJJTxrewSJ1bwp93lOmYqXmrdxWwS_lO8OcuOeE1NMtcDzR166ytI0Uu1x7X7Mi8t70226WBLidp4yEU_y5Q_gXsAWrRovZbC9k1A3cBuokCZ0mVNzcj542LXQQiDOOUvk-l_CfFZ0"
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0; // Free for premium selection
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#F2EFE8] dark:bg-[#121212] font-body text-[#202020] dark:text-white transition-colors duration-300">
      <Navbar />
      
      <main className="max-w-[1400px] mx-auto px-6 py-40">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Cart Items List */}
          <div className="w-full lg:w-[65%]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-6 border-b border-gray-200 dark:border-[#333] gap-4">
              <div>
                <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Your Kitchen Selection</h1>
                <p className="text-gray-500 mt-2 font-medium">Curated essentials for the modern home.</p>
              </div>
              <span className="text-[13px] md:text-[14px] font-bold text-gray-400 uppercase tracking-widest">{cartItems.length} Items</span>
            </div>

            {cartItems.length > 0 ? (
              <div className="space-y-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row gap-8 bg-white dark:bg-[#1a1a1a] p-6 rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-50 dark:border-[#333] group">
                    <div className="w-full md:w-48 aspect-square bg-[#F9F9F9] dark:bg-[#252525] rounded-xl overflow-hidden relative">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between py-2">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold mb-1">{item.name}</h3>
                          <p className="text-gray-500 text-[13px] md:text-[14px]">{item.color}</p>
                        </div>
                        <span className="text-lg md:text-xl font-bold text-[#913D26] dark:text-[#eb5e28]">₹{item.price.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between items-center mt-6">
                        <div className="flex items-center gap-4 bg-[#F2EFE8] dark:bg-[#252525] px-4 py-2 rounded-full border border-gray-100 dark:border-[#333]">
                          <button className="text-gray-500 hover:text-[#913D26] transition-colors"><span className="material-symbols-outlined text-[20px]">remove</span></button>
                          <span className="font-bold w-6 text-center">{item.quantity}</span>
                          <button className="text-gray-500 hover:text-[#913D26] transition-colors"><span className="material-symbols-outlined text-[20px]">add</span></button>
                        </div>
                        
                        <button className="text-[13px] font-bold text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-32 h-32 bg-white dark:bg-[#1a1a1a] rounded-full flex items-center justify-center mb-8 shadow-xl">
                  <span className="material-symbols-outlined text-6xl text-gray-200">shopping_bag</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 font-headline">Your cart is feeling a bit light...</h2>
                <p className="text-gray-500 max-w-sm mb-10">Add some heritage to your kitchen and start building your collection today.</p>
                <Link to="/" className="px-10 py-4 bg-[#913D26] text-white font-bold rounded-full hover:bg-[#a54029] transition-all shadow-lg">
                  Explore Collection
                </Link>
              </div>
            )}
            
            <div className="mt-12">
               <Link to="/" className="inline-flex items-center gap-3 text-[14px] font-bold text-[#913D26] hover:gap-5 transition-all">
                 <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                 CONTINUE SHOPPING
               </Link>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <aside className="w-full lg:w-[35%] bg-white dark:bg-[#1a1a1a] rounded-[24px] md:rounded-[32px] shadow-2xl p-6 md:p-10 border border-gray-100 dark:border-[#333] lg:sticky top-32">
            <h2 className="font-headline text-2xl font-bold mb-8">Order Summary</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-center text-gray-500">
                <span className="font-medium text-[15px]">Subtotal</span>
                <span className="font-bold text-[#202020] dark:text-white">₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-gray-500">
                <span className="font-medium text-[15px]">Shipping</span>
                <span className="text-[#2D4A33] font-bold italic text-[14px]">Calculated at checkout</span>
              </div>
              
              <div className="h-px bg-gray-100 dark:bg-[#333]"></div>
              
              <div className="flex justify-between items-end">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Total Amount</span>
                  <span className="font-headline text-2xl md:text-3xl font-bold">₹{total.toLocaleString()}</span>
                </div>
                <span className="text-[11px] font-bold text-gray-400 mb-1">INR</span>
              </div>
            </div>

            {/* Promo Code */}
            <div className="mb-10 group">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-3">Promo Code</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Enter code"
                  className="flex-1 bg-[#F9F9F9] dark:bg-[#252525] border border-gray-100 dark:border-[#333] rounded-xl px-4 py-3 focus:outline-none focus:border-[#913D26] text-[14px]"
                />
                <button className="px-5 bg-[#202020] dark:bg-[#333] text-white font-bold rounded-xl text-[12px] hover:bg-black transition-colors">Apply</button>
              </div>
            </div>

            <Link 
              to="/checkout/info"
              className="w-full py-4 md:py-5 bg-[#913D26] text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-[#a54029] transition-all shadow-xl shadow-[#913D26]/20 active:scale-[0.98] mb-8"
            >
              Proceed to Checkout
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex flex-col items-center text-center">
                 <span className="material-symbols-outlined text-[20px] text-gray-300 mb-2">verified_user</span>
                 <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">Secure Payment</p>
              </div>
              <div className="flex flex-col items-center text-center">
                 <span className="material-symbols-outlined text-[20px] text-gray-300 mb-2">package_2</span>
                 <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">Premium Duty Free</p>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}

export default Cart;
