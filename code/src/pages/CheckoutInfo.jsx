import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutInfo() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen">
      
<main className="flex-grow">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
<div className="lg:col-span-7 flex flex-col gap-12">
<header className="flex flex-col gap-6">
<a className="text-3xl font-headline italic text-on-surface" href="#">Terra Harvest</a>
<nav aria-label="Breadcrumb" className="flex items-center text-sm font-label text-on-surface-variant gap-2">
<a className="hover:text-primary transition-colors" href="#">Cart</a>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span aria-current="page" className="text-primary font-medium">Information</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-outline">Shipping</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-outline">Payment</span>
</nav>
</header>
<form action="#" className="flex flex-col gap-12">
<section className="flex flex-col gap-6">
<div className="flex justify-between items-baseline">
<h2 className="text-2xl font-headline text-on-surface">Contact Information</h2>
<p className="text-sm font-label text-on-surface-variant">Already have an account? <a className="text-primary hover:underline underline-offset-4" href="#">Log in</a></p>
</div>
<div className="relative">
<input className="peer w-full bg-surface-container-lowest border border-outline-variant/15 text-on-surface text-base rounded px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder-transparent" id="email" name="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-4 -top-2.5 bg-surface-container-lowest px-1 text-xs font-label text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary" htmlFor="email">Email</label>
</div>
<div className="flex items-center gap-3 mt-2">
<input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20 bg-surface-container-lowest transition-colors cursor-pointer" id="marketing" name="marketing" type="checkbox"/>
<label className="text-sm font-label text-on-surface-variant cursor-pointer" htmlFor="marketing">Email me with news and offers</label>
</div>
</section>
<section className="flex flex-col gap-6">
<h2 className="text-2xl font-headline text-on-surface">Shipping Address</h2>
<div className="grid grid-cols-1 gap-4">
<div className="relative">
<select className="w-full bg-surface-container-lowest border border-outline-variant/15 text-on-surface text-base rounded px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all appearance-none cursor-pointer" id="country" name="country">
<option value="us">United States</option>
<option value="ca">Canada</option>
<option value="uk">United Kingdom</option>
</select>
<label className="absolute left-4 -top-2.5 bg-surface-container-lowest px-1 text-xs font-label text-on-surface-variant" htmlFor="country">Country/Region</label>
<span className="material-symbols-outlined absolute right-4 top-3.5 text-on-surface-variant pointer-events-none">expand_more</span>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="relative">
<input className="peer w-full bg-surface-container-lowest border border-outline-variant/15 text-on-surface text-base rounded px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder-transparent" id="first_name" name="first_name" placeholder="First name" type="text"/>
<label className="absolute left-4 -top-2.5 bg-surface-container-lowest px-1 text-xs font-label text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary" htmlFor="first_name">First name</label>
</div>
<div className="relative">
<input className="peer w-full bg-surface-container-lowest border border-outline-variant/15 text-on-surface text-base rounded px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder-transparent" id="last_name" name="last_name" placeholder="Last name" required="" type="text"/>
<label className="absolute left-4 -top-2.5 bg-surface-container-lowest px-1 text-xs font-label text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary" htmlFor="last_name">Last name</label>
</div>
</div>
<div className="relative">
<input className="peer w-full bg-surface-container-lowest border border-outline-variant/15 text-on-surface text-base rounded px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder-transparent" id="address" name="address" placeholder="Address" required="" type="text"/>
<label className="absolute left-4 -top-2.5 bg-surface-container-lowest px-1 text-xs font-label text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary" htmlFor="address">Address</label>
</div>
<div className="relative">
<input className="peer w-full bg-surface-container-lowest border border-outline-variant/15 text-on-surface text-base rounded px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder-transparent" id="apartment" name="apartment" placeholder="Apartment, suite, etc. (optional)" type="text"/>
<label className="absolute left-4 -top-2.5 bg-surface-container-lowest px-1 text-xs font-label text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary" htmlFor="apartment">Apartment, suite, etc. (optional)</label>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="relative">
<input className="peer w-full bg-surface-container-lowest border border-outline-variant/15 text-on-surface text-base rounded px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder-transparent" id="city" name="city" placeholder="City" required="" type="text"/>
<label className="absolute left-4 -top-2.5 bg-surface-container-lowest px-1 text-xs font-label text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary" htmlFor="city">City</label>
</div>
<div className="relative">
<select className="w-full bg-surface-container-lowest border border-outline-variant/15 text-on-surface text-base rounded px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all appearance-none cursor-pointer" id="state" name="state">
<option disabled="" selected="" value="">State</option>
<option value="ca">California</option>
<option value="ny">New York</option>
<option value="tx">Texas</option>
</select>
<label className="absolute left-4 -top-2.5 bg-surface-container-lowest px-1 text-xs font-label text-on-surface-variant" htmlFor="state">State</label>
<span className="material-symbols-outlined absolute right-4 top-3.5 text-on-surface-variant pointer-events-none">expand_more</span>
</div>
<div className="relative">
<input className="peer w-full bg-surface-container-lowest border border-outline-variant/15 text-on-surface text-base rounded px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder-transparent" id="zip" name="zip" placeholder="ZIP code" required="" type="text"/>
<label className="absolute left-4 -top-2.5 bg-surface-container-lowest px-1 text-xs font-label text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary" htmlFor="zip">ZIP code</label>
</div>
</div>
</div>
</section>
<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-8">
<a className="text-sm font-label text-on-surface hover:text-primary transition-colors flex items-center gap-2" href="#">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
                            Return to cart
                        </a>
<Link to="/checkout/shipping" className="w-full md:w-auto bg-primary text-on-primary font-label text-sm px-8 py-4 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 shadow-sm" type="submit">
                            Continue to shipping
                        </Link>
</div>
</form>
</div>
<aside className="lg:col-span-5 relative">
<div className="sticky top-12 bg-surface-container-low rounded-xl p-8 lg:p-12 flex flex-col gap-8 shadow-[0_20px_40px_-15px_rgba(14,29,38,0.05)] border border-outline-variant/10">
<ul className="flex flex-col gap-6">
<li className="flex items-center gap-6 group">
<div className="relative w-20 h-20 bg-surface-container-lowest rounded-lg overflow-hidden flex-shrink-0 border border-outline-variant/10">
<img alt="Heritage Braiser" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="close up of rustic cast iron braiser pot on a dark wooden table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3hX9ou__j6NxzW7Xff6g-o_pifFHYiEFN2Fyde2ZA0CLIfHAybcNaer43wBnk4rHpih4I6YAdssxhFoFpDSh9MBApJXG8kKCymGgcjAg6gjUlotfJn4D-moqAQkp_gwm8r7pM1ISGeEaCdRQdvLXitVAqgsk-OZmuMDLQyWjKvT1_0DQ1P2KNTfXovXHSd1fby344WeC1d6K4LFmScBJTJ0YK-XR85pP76f8sOXQNtS9Pf8tKgyb1FP7Zl3q2Xe-vstYkwBqGdkk"/>
<span className="absolute -top-2 -right-2 bg-on-surface text-on-primary text-xs font-label w-5 h-5 flex items-center justify-center rounded-full z-10 opacity-90">1</span>
</div>
<div className="flex-grow flex flex-col gap-1">
<span className="font-headline text-lg text-on-surface">Heritage Braiser</span>
<span className="text-xs font-label text-on-surface-variant">Enameled Cast Iron / Terracotta</span>
</div>
<span className="font-label text-on-surface">$245.00</span>
</li>
<li className="flex items-center gap-6 group">
<div className="relative w-20 h-20 bg-surface-container-lowest rounded-lg overflow-hidden flex-shrink-0 border border-outline-variant/10">
<img alt="Artisan Utensil Set" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="wooden cooking utensils arranged neatly on a linen cloth with warm soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgv5BOVkgFpZba8HNpHsJjxQTjsjnKXYReFkqtQgNkgwXgIr8VQVd3KMFaQS9drYdp68ZI9sjPZClJSDPH_hIAObh-Ji8vQwsq4k4siQ43ghcS_UWTXu4mG4h5UV-1FEthRQN-5IrkEr9llgbdBYoT0NwnqXerLdijFqFC5nv7N8uGyYUkWi3e5H6xPiv1Tj_5fIyYERXbAmJJIZLxAsseKxO-Ith_OJaQHA9XTLxib_zVsGxG9ffGzZHjUC9vOCP_hif0vlngiJA"/>
<span className="absolute -top-2 -right-2 bg-on-surface text-on-primary text-xs font-label w-5 h-5 flex items-center justify-center rounded-full z-10 opacity-90">1</span>
</div>
<div className="flex-grow flex flex-col gap-1">
<span className="font-headline text-lg text-on-surface">Artisan Utensil Set</span>
<span className="text-xs font-label text-on-surface-variant">Hand-carved Walnut</span>
</div>
<span className="font-label text-on-surface">$85.00</span>
</li>
</ul>
<div className="h-px w-full bg-outline-variant/20"></div>
<div className="flex gap-4">
<div className="relative flex-grow">
<input className="peer w-full bg-surface-container-lowest border border-outline-variant/15 text-on-surface text-base rounded px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder-transparent" id="discount" name="discount" placeholder="Discount code" type="text"/>
<label className="absolute left-4 -top-2.5 bg-surface-container-lowest px-1 text-xs font-label text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary" htmlFor="discount">Discount code</label>
</div>
<button className="bg-surface-variant text-on-surface-variant font-label text-sm px-6 py-3 rounded hover:bg-surface-dim hover:text-on-surface transition-colors" type="button">Apply</button>
</div>
<div className="h-px w-full bg-outline-variant/20"></div>
<div className="flex flex-col gap-3 text-sm font-label">
<div className="flex justify-between items-center text-on-surface-variant">
<span>Subtotal</span>
<span className="text-on-surface font-medium">$330.00</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span>Shipping</span>
<span className="text-xs">Calculated at next step</span>
</div>
</div>
<div className="h-px w-full bg-outline-variant/20"></div>
<div className="flex justify-between items-end">
<span className="font-headline text-xl text-on-surface">Total</span>
<div className="flex items-end gap-2">
<span className="text-xs font-label text-on-surface-variant mb-1">USD</span>
<span className="font-headline text-3xl text-primary">$330.00</span>
</div>
</div>
</div>
</aside>
</div>
</main>

    </div>
  );
}

export default CheckoutInfo;
