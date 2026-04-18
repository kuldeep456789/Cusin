import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutShipping() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen">
      
{/*  TopAppBar  */}
<header className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 tonal-transition bg-stone-100 dark:bg-stone-800 flat no shadows flex justify-between items-center w-full px-6 md:px-12 py-4 max-w-full">
<a className="text-2xl font-headline italic text-stone-900 dark:text-stone-50" href="#">Culinary Curator</a>
{/*  Navigation hidden for transactional intent, but JSON styles dictate rendering if not completely suppressed. Here we suppress main links due to Checkout intent to focus on the task.  */}
<div className="hidden md:flex items-center gap-6">
<span className="text-stone-500 font-medium font-label">Checkout</span>
</div>
<div className="flex items-center gap-4">
<button className="text-[#9E422E] hover:text-[#9E422E] transition-colors duration-300">
<span className="material-symbols-outlined" data-icon="lock">lock</span>
</button>
</div>
</header>
<main className="flex-grow max-w-7xl mx-auto w-full px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
{/*  Left Column: Checkout Form (Shipping)  */}
<div className="lg:col-span-7 flex flex-col gap-12">
{/*  Breadcrumbs / Progress  */}
<nav aria-label="Progress" className="flex items-center gap-3 font-label text-sm">
<a className="text-primary hover:opacity-80 transition-opacity" href="#">Information</a>
<span className="material-symbols-outlined text-outline text-sm" data-icon="chevron_right">chevron_right</span>
<span className="text-on-surface font-semibold">Shipping</span>
<span className="material-symbols-outlined text-outline text-sm" data-icon="chevron_right">chevron_right</span>
<span className="text-outline">Payment</span>
</nav>
<section className="flex flex-col gap-8">
<h1 className="font-headline text-4xl md:text-5xl text-on-surface">Shipping Method</h1>
{/*  Summary of Previous Steps  */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] outline outline-1 outline-outline-variant/15 flex flex-col gap-4">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm">
<span className="text-on-surface-variant font-medium w-16">Contact</span>
<span className="text-on-surface">customer@example.com</span>
</div>
<a className="text-primary font-label text-sm hover:underline underline-offset-4" href="#">Edit</a>
</div>
<div className="h-px w-full bg-surface-container-high"></div>
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm">
<span className="text-on-surface-variant font-medium w-16">Ship to</span>
<span className="text-on-surface leading-relaxed">123 Culinary Lane, Suite 400<br/>San Francisco, CA 94105, United States</span>
</div>
<a className="text-primary font-label text-sm hover:underline underline-offset-4" href="#">Edit</a>
</div>
</div>
{/*  Shipping Options  */}
<div className="flex flex-col gap-4 mt-4">
<h2 className="font-headline text-2xl text-on-surface">Select Delivery</h2>
<div className="flex flex-col gap-3">
{/*  Option 1  */}
<label className="cursor-pointer group relative">
<input checked="" className="peer sr-only" name="shipping_method" type="radio" value="standard"/>
<div className="bg-surface-container-lowest rounded-xl p-6 outline outline-1 outline-outline-variant/15 peer-checked:outline-primary peer-checked:outline-2 peer-checked:shadow-[0_0_10px_rgba(158,66,46,0.1)] transition-all flex items-center justify-between hover:bg-surface-container-low">
<div className="flex items-center gap-4">
<div className="w-5 h-5 rounded-full border-2 border-outline-variant peer-checked:border-primary flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<div className="flex flex-col">
<span className="font-semibold text-on-surface">Standard Shipping</span>
<span className="text-sm text-on-surface-variant">3-5 Business Days</span>
</div>
</div>
<span className="font-medium text-on-surface">Free</span>
</div>
</label>
{/*  Option 2  */}
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="shipping_method" type="radio" value="express"/>
<div className="bg-surface-container-lowest rounded-xl p-6 outline outline-1 outline-outline-variant/15 peer-checked:outline-primary peer-checked:outline-2 peer-checked:shadow-[0_0_10px_rgba(158,66,46,0.1)] transition-all flex items-center justify-between hover:bg-surface-container-low">
<div className="flex items-center gap-4">
<div className="w-5 h-5 rounded-full border-2 border-outline-variant peer-checked:border-primary flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<div className="flex flex-col">
<span className="font-semibold text-on-surface">Express Delivery</span>
<span className="text-sm text-on-surface-variant">1-2 Business Days</span>
</div>
</div>
<span className="font-medium text-on-surface">$15.00</span>
</div>
</label>
</div>
</div>
{/*  Actions  */}
<div className="flex flex-col sm:flex-row-reverse justify-between items-center gap-6 mt-8">
<button className="w-full sm:w-auto bg-primary text-on-primary font-label font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-[0_4px_14px_rgba(158,66,46,0.2)]">
                        Continue to Payment
                    </button>
<a className="w-full sm:w-auto text-center sm:text-left text-primary font-label hover:underline underline-offset-4 flex items-center justify-center sm:justify-start gap-2" href="#">
<span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
                        Return to Information
                    </a>
</div>
</section>
</div>
{/*  Right Column: Order Summary  */}
<aside className="lg:col-span-5 bg-surface-container-low rounded-xl p-8 lg:p-10 self-start sticky top-32">
<h2 className="font-headline text-2xl mb-8 text-on-surface">Order Summary</h2>
<div className="flex flex-col gap-6">
{/*  Item 1  */}
<div className="flex gap-4 items-start">
<div className="relative w-20 h-20 rounded-lg overflow-hidden bg-surface flex-shrink-0">
<img alt="Artisan olive oil bottle with rustic label" className="w-full h-full object-cover" data-alt="close up of artisan olive oil bottle with minimalist rustic label on a wooden table soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_aOisxAwoZCcf0A9-IN-KaJYw73vjZexabe4lRKRj6GOkbf1xWIW8OvNppyBLmynMyzMgWIW8tjdF8w4RmF8jo64SAhoFUDDOioZkNg9Yo_uplvXFhKYPKru8I4hfRYbby6iEkqrgGUSq6Ej2Wm2CrCIbEZqzJaJX5Gy6DOZ8wJuqbWrAwVJzvfstLCAv5MEEJyWlzlOnNMcBcN3Q9DIKZ-MxKX6T210zZdZSeNQ8NlEWa1gOTPZC1MC3iSOVghe6TbT2uxlKOqI"/>
<div className="absolute -top-2 -right-2 bg-surface-container-lowest text-on-surface text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center outline outline-1 outline-outline-variant/20 z-10">1</div>
</div>
<div className="flex flex-col flex-grow justify-between h-20 py-1">
<div>
<h3 className="font-medium text-on-surface leading-tight">Estate Extra Virgin Olive Oil</h3>
<p className="text-sm text-on-surface-variant mt-1">500ml</p>
</div>
<span className="font-semibold text-on-surface">$42.00</span>
</div>
</div>
{/*  Item 2  */}
<div className="flex gap-4 items-start">
<div className="relative w-20 h-20 rounded-lg overflow-hidden bg-surface flex-shrink-0">
<img alt="Jar of raw honey" className="w-full h-full object-cover" data-alt="small glass jar of raw amber honey with a wooden dipper soft warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtmdGFQuzmcrZxP58yWsay40dn5a6DUrKDcJyUFr3IZ2h5klK6Y8Bvfpa1lZt6nE289QlJE1fJHJc-ynccY5F5rjxEp461ACJcW5VS-eeusGOCkvXdDJyFHA-VrTsQGGj-b3vTLXqOQqjEVpFIgDuP9LKeMc5wl3IABna6y21RmDQfseMroR8Otn_C4FhkJ-IGMzR0xqIPsAHmTxmRgLtfEMMdzLzNwBq4FsHDjsvveD6HJGeL0eBXVB91XCKhVxHGxyZbmlaMYKo"/>
<div className="absolute -top-2 -right-2 bg-surface-container-lowest text-on-surface text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center outline outline-1 outline-outline-variant/20 z-10">2</div>
</div>
<div className="flex flex-col flex-grow justify-between h-20 py-1">
<div>
<h3 className="font-medium text-on-surface leading-tight">Wildflower Raw Honey</h3>
<p className="text-sm text-on-surface-variant mt-1">250g</p>
</div>
<span className="font-semibold text-on-surface">$36.00</span>
</div>
</div>
</div>
{/*  Totals  */}
<div className="mt-8 pt-8 flex flex-col gap-4 border-t border-surface-container-high">
<div className="flex justify-between items-center text-on-surface-variant">
<span>Subtotal</span>
<span className="font-medium text-on-surface">$78.00</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span>Shipping</span>
<span className="text-sm">Calculated at next step</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span>Taxes</span>
<span className="font-medium text-on-surface">$6.24</span>
</div>
</div>
<div className="mt-8 pt-8 flex justify-between items-end border-t border-surface-container-high">
<span className="font-headline text-xl text-on-surface">Total</span>
<div className="flex items-baseline gap-2">
<span className="text-sm text-on-surface-variant">USD</span>
<span className="font-headline text-3xl font-bold text-on-surface">$84.24</span>
</div>
</div>
</aside>
</main>
{/*  Footer  */}
<footer className="bg-stone-100 dark:bg-stone-950 full-width py-12 tonal shift from surface-container-low to surface flat no shadows">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 max-w-7xl mx-auto">
<div className="flex flex-col gap-4">
<span className="text-lg font-headline italic text-stone-800 dark:text-stone-200">Culinary Curator</span>
<p className="text-stone-500 dark:text-stone-400 font-body text-xs tracking-wide uppercase">© 2024 Culinary Curator. Handcrafted Excellence.</p>
</div>
<div className="flex flex-col md:flex-row gap-6 md:gap-12 md:justify-end items-start md:items-center text-stone-500 dark:text-stone-400 font-body text-xs tracking-wide uppercase">
<a className="hover:text-stone-900 dark:hover:text-stone-100 transition-all" href="#">Secure Checkout</a>
<a className="hover:text-stone-900 dark:hover:text-stone-100 transition-all" href="#">Privacy Policy</a>
<a className="hover:text-stone-900 dark:hover:text-stone-100 transition-all" href="#">Sustainability</a>
<a className="hover:text-stone-900 dark:hover:text-stone-100 transition-all" href="#">Contact</a>
</div>
</div>
</footer>

    </div>
  );
}

export default CheckoutShipping;
