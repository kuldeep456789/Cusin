import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutPayment() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen">
      
{/*  Transactional Header (Suppressed Main Nav)  */}
<header className="w-full py-6 px-6 md:px-12 flex justify-center items-center bg-surface-container-lowest shadow-[0_4px_40px_rgba(14,29,38,0.02)] relative z-10">
<div className="text-3xl font-headline italic text-on-surface tracking-tight">Culinary Curator</div>
</header>
<main className="flex-grow max-w-7xl mx-auto w-full px-6 md:px-12 py-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
{/*  Left Column: Checkout Form  */}
<div className="lg:col-span-7 flex flex-col gap-10">
{/*  Breadcrumbs  */}
<nav aria-label="Progress" className="flex items-center text-sm font-label tracking-wide text-on-surface-variant">
<ol className="flex items-center space-x-2">
<li>
<a className="hover:text-primary transition-colors" href="#">Information</a>
</li>
<li>
<span className="material-symbols-outlined text-[16px] mx-1 opacity-50">chevron_right</span>
</li>
<li>
<a className="hover:text-primary transition-colors" href="#">Shipping</a>
</li>
<li>
<span className="material-symbols-outlined text-[16px] mx-1 opacity-50">chevron_right</span>
</li>
<li aria-current="page" className="text-on-surface font-semibold">Payment</li>
</ol>
</nav>
{/*  Information Summary Box  */}
<section className="bg-surface-container-low rounded-xl p-6 flex flex-col gap-6">
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1 w-[100px] shrink-0 text-sm font-label text-on-surface-variant uppercase tracking-wider">Contact</div>
<div className="flex-grow text-base text-on-surface">eleanor.vance@example.com</div>
<button className="text-sm font-label text-primary hover:text-primary-container transition-colors shrink-0">Change</button>
</div>
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1 w-[100px] shrink-0 text-sm font-label text-on-surface-variant uppercase tracking-wider">Ship to</div>
<div className="flex-grow text-base text-on-surface">1928 Birchwood Ave, Apt 4B, Portland, OR 97205, United States</div>
<button className="text-sm font-label text-primary hover:text-primary-container transition-colors shrink-0">Change</button>
</div>
<div className="flex justify-between items-start gap-4">
<div className="flex flex-col gap-1 w-[100px] shrink-0 text-sm font-label text-on-surface-variant uppercase tracking-wider">Method</div>
<div className="flex-grow text-base text-on-surface">Standard Courier (3-5 Business Days) · <span className="font-semibold">$12.00</span></div>
<button className="text-sm font-label text-primary hover:text-primary-container transition-colors shrink-0">Change</button>
</div>
</section>
{/*  Payment Section  */}
<section>
<div className="mb-8">
<h1 className="text-4xl md:text-5xl font-headline text-on-surface mb-3">Payment</h1>
<p className="text-on-surface-variant text-base flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]">lock</span>
                            All transactions are secure and encrypted.
                        </p>
</div>
{/*  Payment Options Container  */}
<div className="flex flex-col gap-4">
{/*  Credit Card Option (Active)  */}
<div className="bg-surface-container-lowest ghost-border rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(14,29,38,0.04)] relative z-10 transform scale-[1.01]">
<div className="p-5 flex items-center justify-between border-b border-outline-variant/10 bg-surface-container-low/50">
<label className="flex items-center gap-3 cursor-pointer">
<input checked="" className="w-5 h-5 text-primary bg-surface border-outline-variant focus:ring-primary/20 focus:ring-offset-0 transition-all cursor-pointer" name="payment_method" type="radio"/>
<span className="font-label font-semibold text-lg text-on-surface">Credit card</span>
</label>
<div className="flex gap-1">
{/*  Decorative Card Icons  */}
<div className="w-10 h-6 bg-surface-container-high rounded flex items-center justify-center text-[10px] font-bold text-on-surface-variant tracking-tighter">VISA</div>
<div className="w-10 h-6 bg-surface-container-high rounded flex items-center justify-center text-[10px] font-bold text-on-surface-variant tracking-tighter">MC</div>
</div>
</div>
<div className="p-6 bg-surface-container-lowest grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="md:col-span-2">
<input className="w-full bg-surface-container-low ghost-border rounded-lg px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-body" placeholder="Card number" type="text"/>
</div>
<div className="md:col-span-2">
<input className="w-full bg-surface-container-low ghost-border rounded-lg px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-body" placeholder="Name on card" type="text"/>
</div>
<div>
<input className="w-full bg-surface-container-low ghost-border rounded-lg px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-body" placeholder="Expiration date (MM / YY)" type="text"/>
</div>
<div>
<div className="relative">
<input className="w-full bg-surface-container-low ghost-border rounded-lg px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-body pr-10" placeholder="Security code" type="text"/>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 cursor-help" title="3 digits on back of card">help</span>
</div>
</div>
</div>
</div>
{/*  PayPal Option  */}
<div className="bg-surface-container-low ghost-border rounded-xl p-5 flex items-center justify-between hover:bg-surface-container-highest transition-colors cursor-pointer group">
<label className="flex items-center gap-3 cursor-pointer w-full">
<input className="w-5 h-5 text-primary bg-surface border-outline-variant focus:ring-primary/20 focus:ring-offset-0 transition-all cursor-pointer" name="payment_method" type="radio"/>
<span className="font-label font-medium text-lg text-on-surface group-hover:text-primary transition-colors">PayPal</span>
</label>
<span className="material-symbols-outlined text-on-surface-variant">account_balance_wallet</span>
</div>
</div>
</section>
{/*  Billing Address Section  */}
<section className="mt-4">
<h2 className="text-3xl font-headline text-on-surface mb-6">Billing address</h2>
<div className="flex flex-col bg-surface-container-lowest ghost-border rounded-xl overflow-hidden">
<label className="flex items-center gap-4 p-5 border-b border-outline-variant/10 cursor-pointer hover:bg-surface-container-low/50 transition-colors">
<input checked="" className="w-5 h-5 text-primary bg-surface border-outline-variant focus:ring-primary/20 focus:ring-offset-0 transition-all cursor-pointer" name="billing_address" type="radio"/>
<span className="font-body text-on-surface">Same as shipping address</span>
</label>
<label className="flex items-center gap-4 p-5 cursor-pointer hover:bg-surface-container-low/50 transition-colors">
<input className="w-5 h-5 text-primary bg-surface border-outline-variant focus:ring-primary/20 focus:ring-offset-0 transition-all cursor-pointer" name="billing_address" type="radio"/>
<span className="font-body text-on-surface">Use a different billing address</span>
</label>
</div>
</section>
{/*  Actions  */}
<div className="mt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
<a className="text-on-surface-variant hover:text-primary font-label text-sm flex items-center gap-2 transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
                        Return to shipping
                    </a>
<button className="w-full md:w-auto bg-primary text-on-primary hover:bg-primary-container px-12 py-4 rounded-full font-label font-semibold text-lg transition-all duration-300 shadow-[0_8px_30px_rgba(158,66,46,0.15)] hover:shadow-[0_8px_30px_rgba(158,66,46,0.25)] flex items-center justify-center gap-2" type="submit">
                        Complete Order
                        <span className="material-symbols-outlined text-[20px]">check_circle</span>
</button>
</div>
</div>
{/*  Right Column: Order Summary  */}
<div className="lg:col-span-5 hidden md:block">
<div className="sticky top-12 bg-surface-container-lowest ghost-border rounded-2xl p-8 lg:p-10 shadow-[0_20px_60px_rgba(14,29,38,0.03)] flex flex-col gap-8">
<h2 className="text-2xl font-headline text-on-surface">Order Summary</h2>
{/*  Items  */}
<div className="flex flex-col gap-6">
{/*  Item 1  */}
<div className="flex items-center gap-5">
<div className="relative w-20 h-20 shrink-0">
<img alt="Artisanal Extra Virgin Olive Oil bottle" className="w-full h-full object-cover rounded-lg ghost-border" data-alt="close up of a premium artisanal olive oil bottle with a clean white label on a textured rustic surface with soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBjK6R4L6V3Cnp8X1tXuWzWp1HJsKVmNW0G19PNEH-n5uFM6AuqgG0YcNZ2sj7leN6buj-E3F0hND1CiA5LbDgWsMU0rKZDPTGl5LlZX8HIVg4Y0Jd9nry1gL_VGcAFPww_ZFU4qNdSLNUnR1Il6TjLHgOYysLKc5DxyOT2QiXtijPBnAVlseXjYpm0Zl6-RaNIex9JvwnX89XLa8bizQ6pPCQUZHUZikyngqP9NB1pQ25CoYPPnmpKX5axQd1TG3mj0P_iUf9OgA"/>
<div className="absolute -top-2 -right-2 w-6 h-6 bg-surface-container-highest text-on-surface rounded-full flex items-center justify-center text-xs font-bold shadow-sm">1</div>
</div>
<div className="flex-grow">
<h3 className="text-on-surface font-medium font-body leading-tight">Estate Reserve Olive Oil</h3>
<p className="text-on-surface-variant text-sm mt-1">500ml / First Cold Press</p>
</div>
<div className="text-on-surface font-medium">$45.00</div>
</div>
{/*  Item 2  */}
<div className="flex items-center gap-5">
<div className="relative w-20 h-20 shrink-0">
<img alt="Small jar of truffle infused honey" className="w-full h-full object-cover rounded-lg ghost-border" data-alt="small glass jar of golden truffle infused honey with a dark lid sitting on dark slate stone with moody dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxMDfdo7u8Z9orqq1ga_dWc9G6QuuyFY3YUCou7fe6aoGDQtJASDIQp3zNq1Ib_O9z5aT5aMW-N82WdrYqStDu3BEmJgBDyWuh5MeeQLb6YPwjeiBE75KWAXXC-g_AioQzT2fXj0it8-xh0sELhOpwrZ977RxbkSQzrUD4Vz83u7RzevdMHxCNri7Qx91LTmD_IPxytUFOiXyCJfz_bK5lGbzxRqauvOFN3kuqcz8cYlKTBBNpeEk8gNHTa3aIjkDp4UFNz4kI8mI"/>
<div className="absolute -top-2 -right-2 w-6 h-6 bg-surface-container-highest text-on-surface rounded-full flex items-center justify-center text-xs font-bold shadow-sm">2</div>
</div>
<div className="flex-grow">
<h3 className="text-on-surface font-medium font-body leading-tight">Wild Truffle Honey</h3>
<p className="text-on-surface-variant text-sm mt-1">250g / Umbria Region</p>
</div>
<div className="text-on-surface font-medium">$64.00</div>
</div>
</div>
{/*  Discount Code  */}
<div className="flex gap-3 mt-2">
<input className="flex-grow bg-surface-container-low ghost-border rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body" placeholder="Gift card or discount code" type="text"/>
<button className="bg-surface-container-highest text-on-surface px-6 py-3 rounded-lg font-label font-semibold hover:bg-surface-dim transition-colors">Apply</button>
</div>
{/*  Totals  */}
<div className="flex flex-col gap-3 pt-6 border-t border-outline-variant/10">
<div className="flex justify-between items-center text-on-surface-variant font-body">
<span>Subtotal</span>
<span className="text-on-surface font-medium">$109.00</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant font-body">
<span>Shipping</span>
<span className="text-on-surface font-medium">$12.00</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant font-body">
<span>Estimated taxes</span>
<span className="text-on-surface font-medium">$8.72</span>
</div>
</div>
{/*  Grand Total Banner  */}
<div className="bg-surface-container-low -mx-8 -mb-8 mt-2 p-8 rounded-b-2xl flex justify-between items-end">
<div>
<div className="text-on-surface-variant text-sm font-label uppercase tracking-wider mb-1">Total</div>
<div className="text-on-surface-variant text-xs">USD</div>
</div>
<div className="text-4xl font-headline text-primary-container tracking-tight">$129.72</div>
</div>
</div>
</div>
</div>
</main>

    </div>
  );
}

export default CheckoutPayment;
