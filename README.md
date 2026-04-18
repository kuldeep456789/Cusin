# CUSIN | Premium Indian Kitchenware

**CUSIN** is a modern, high-end kitchenware platform dedicated to bringing traditional Indian cookware into the contemporary kitchen. Built with a focus on heritage, durability, and premium aesthetics, CUSIN specializes in high-quality enamelled cast iron products.

![CUSIN Brand Banner](https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1400)

## ✨ Key Features

- **Unified Premium UI**: A sleek, artisan-inspired design using a terracotta-driven color palette and refined typography (Newsreader & Plus Jakarta Sans).
- **Mobile-First Responsiveness**: Every page is meticulously optimized for both desktop and mobile users, featuring adaptive layouts and a slide-out mobile navigation drawer.
- **CUSIN Concierge (AI Chatbot)**: An integrated AI assistant powered by Groq (LLama 3.3), providing context-aware cooking tips, product care advice, and site navigation.
- **Dark & Light Mode**: Seamless theme switching with persistent user preferences.
- **Modern Ecommerce Flow**: Complete user journey including Product Details, Cart Management, Multi-step Checkout, and User Profile.

## 🚀 Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS
- **Icons**: Material Symbols Outlined
- **AI Integration**: Groq API (LLama 3.3)
- **Routing**: React Router DOM

## 🛠️ Getting Started

### 1. Prerequisites
- Node.js (v18+)
- npm or yarn

### 2. Installation
```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory and add your Groq API Key (refer to `.env.example`):
```env
VITE_GROQ_API_KEY=your_groq_api_key_here
```

### 4. Run Development Server
```bash
npm run dev
```

## 🔐 Security Note
The `.env` file is protected via `.gitignore`. Never commit your actual API keys to version control. Always use the provided `.env.example` as a template for new deployments.

---
© 2026, CUSIN Kitchenware Private Limited. All Rights Reserved.
