import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Kuldeep Prajapati',
    email: 'kuldeeppraj2002@gmail.com',
    phone: '+91 98765 43210',
    address: '123 Curry Lane, Heritage Park, Jaipur, Rajasthan, India'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Mock save logic
  };

  return (
    <div className="min-h-screen bg-[#F2EFE8] dark:bg-[#121212] font-body text-[#202020] dark:text-white transition-colors duration-300">
      <Navbar />
      
      <main className="max-w-[1000px] mx-auto px-4 md:px-6 py-24 md:py-40">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
          {/* Left Sidebar */}
          <div className="w-full lg:w-1/3 bg-white dark:bg-[#1a1a1a] rounded-[24px] shadow-xl p-6 md:p-8 border border-gray-100 dark:border-[#333]">
            <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center gap-6 mb-8">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#913D26] rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg shadow-[#913D26]/20">
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-gray-500 text-sm">Member since April 2026</p>
              </div>
            </div>
            
            <nav className="flex flex-col sm:flex-row lg:flex-col gap-2 overflow-x-auto sm:pb-2 lg:pb-0">
              <button className="flex items-center gap-3 px-4 py-3 bg-[#F2EFE8] dark:bg-white/5 text-[#913D26] dark:text-[#eb5e28] rounded-xl font-bold text-[14px]">
                <span className="material-symbols-outlined text-[20px]">person</span>
                Profile Settings
              </button>
              <button className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl font-medium text-[14px] text-gray-500 transition-colors">
                <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                My Orders
              </button>
              <button className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl font-medium text-[14px] text-gray-500 transition-colors">
                <span className="material-symbols-outlined text-[20px]">favorite</span>
                Wishlist
              </button>
              <div className="h-px bg-gray-100 dark:bg-[#333] my-4"></div>
              <button className="flex items-center gap-3 px-4 py-3 hover:text-red-500 rounded-xl font-medium text-[14px] text-gray-500 transition-colors">
                <span className="material-symbols-outlined text-[20px]">logout</span>
                Sign Out
              </button>
            </nav>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 bg-white dark:bg-[#1a1a1a] rounded-[24px] shadow-xl p-6 md:p-12 border border-gray-100 dark:border-[#333]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
              <h1 className="font-headline text-2xl md:text-3xl font-bold tracking-tight">Your Details</h1>
              {!isEditing && (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-2 border border-gray-200 dark:border-[#333] rounded-full text-[13px] font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  Edit Profile
                </button>
              )}
            </div>
            
            <form onSubmit={handleSave} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[11px] uppercase tracking-widest font-bold text-gray-400 mb-2">Full Name</label>
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={user.name} 
                      onChange={(e) => setUser({...user, name: e.target.value})}
                      className="w-full bg-[#FAFAFA] dark:bg-[#252525] border border-gray-100 dark:border-[#333] rounded-lg px-4 py-3 focus:outline-none focus:border-[#913D26]"
                    />
                  ) : (
                    <p className="font-medium h-12 flex items-center">{user.name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-[11px] uppercase tracking-widest font-bold text-gray-400 mb-2">Email Address</label>
                  {isEditing ? (
                    <input 
                      type="email" 
                      value={user.email} 
                      onChange={(e) => setUser({...user, email: e.target.value})}
                      className="w-full bg-[#FAFAFA] dark:bg-[#252525] border border-gray-100 dark:border-[#333] rounded-lg px-4 py-3 focus:outline-none focus:border-[#913D26]"
                    />
                  ) : (
                    <p className="font-medium h-12 flex items-center">{user.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-[11px] uppercase tracking-widest font-bold text-gray-400 mb-2">Phone Number</label>
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={user.phone} 
                      onChange={(e) => setUser({...user, phone: e.target.value})}
                      className="w-full bg-[#FAFAFA] dark:bg-[#252525] border border-gray-100 dark:border-[#333] rounded-lg px-4 py-3 focus:outline-none focus:border-[#913D26]"
                    />
                  ) : (
                    <p className="font-medium h-12 flex items-center">{user.phone}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold text-gray-400 mb-2">Shipping Address</label>
                {isEditing ? (
                  <textarea 
                    rows="3"
                    value={user.address} 
                    onChange={(e) => setUser({...user, address: e.target.value})}
                    className="w-full bg-[#FAFAFA] dark:bg-[#252525] border border-gray-100 dark:border-[#333] rounded-lg px-4 py-3 focus:outline-none focus:border-[#913D26]"
                  ></textarea>
                ) : (
                  <p className="font-medium leading-relaxed max-w-md">{user.address}</p>
                )}
              </div>
              
              {isEditing && (
                <div className="flex gap-4 pt-4">
                  <button 
                    type="submit"
                    className="px-8 py-3 bg-[#913D26] text-white font-bold rounded-lg hover:bg-[#a54029] transition-all shadow-lg"
                  >
                    Save Changes
                  </button>
                  <button 
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-8 py-3 border border-gray-200 dark:border-[#333] rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
