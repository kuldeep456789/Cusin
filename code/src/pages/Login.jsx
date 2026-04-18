import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#F2EFE8] dark:bg-[#121212] font-body text-[#202020] dark:text-white flex flex-col transition-colors duration-300">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 md:px-6 py-24 md:py-32">
        <div className="w-full max-w-[500px] bg-white dark:bg-[#1a1a1a] rounded-[24px] md:rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100 dark:border-[#333]">
          <div className="flex-1 p-8 md:p-14 flex flex-col">
            <h1 className="font-headline text-3xl md:text-4xl font-bold mb-2 tracking-tight">Welcome Back</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-[14px] md:text-[15px]">Enter your details to access your premium kitchen collection.</p>
            
            <form className="space-y-6">
              <div>
                <label className="block text-[12px] uppercase tracking-widest font-bold text-gray-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-[#FAFAFA] dark:bg-[#252525] border border-gray-100 dark:border-[#333] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#913D26] transition-colors"
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-[12px] uppercase tracking-widest font-bold text-gray-400">Password</label>
                  <a href="#" className="text-[12px] font-bold text-[#913D26] hover:underline">Forgot?</a>
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-[#FAFAFA] dark:bg-[#252525] border border-gray-100 dark:border-[#333] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#913D26] transition-colors"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 bg-[#913D26] text-white font-bold rounded-xl hover:bg-[#a54029] transition-all shadow-lg hover:shadow-[#913D26]/20 active:scale-[0.98]"
              >
                Sign In
              </button>
            </form>
            
            <div className="mt-10 flex flex-col items-center gap-6">
              <div className="flex items-center gap-4 w-full">
                <div className="h-px bg-gray-100 dark:bg-[#333] flex-1"></div>
                <span className="text-gray-400 text-[12px] uppercase font-bold tracking-widest">or continue with</span>
                <div className="h-px bg-gray-100 dark:bg-[#333] flex-1"></div>
              </div>
              
              <div className="flex gap-4 w-full">
                <button className="flex-1 flex justify-center items-center py-3 border border-gray-100 dark:border-[#333] rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors gap-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="w-5 h-5" alt="Google" />
                  <span className="text-[14px] font-bold">Google</span>
                </button>
              </div>
              
              <p className="text-[14px] text-gray-500">
                Don't have an account? <Link to="/login" className="text-[#913D26] font-bold hover:underline">Create one</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
