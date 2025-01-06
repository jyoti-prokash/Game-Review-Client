import React from 'react';

const About = () => {
    return (
        <section id="about" class="bg-gray-800 text-white py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-4xl font-bold mb-6">About Us</h2>
      <p class="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
        Welcome to our Game Review website, where gaming enthusiasts gather to explore the latest games, honest reviews, and in-depth analysis. We aim to help gamers make informed decisions by delivering well-researched, unbiased content about the gaming world.
      </p>
    </div>

    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <div class="bg-gray-900 rounded-lg p-6 text-center">
        <h3 class="text-2xl font-semibold mb-4 text-blue-500">Our Mission</h3>
        <p class="text-gray-400">
          Our mission is to provide gamers with comprehensive, authentic reviews that highlight gameplay, graphics, and storylines to ensure they choose the best gaming experiences.
        </p>
      </div>
      
      <div class="bg-gray-900 rounded-lg p-6 text-center">
        <h3 class="text-2xl font-semibold mb-4 text-blue-500">What We Do</h3>
        <p class="text-gray-400">
          We cover game reviews, news, and guides for all platforms – PC, console, and mobile. Our team of gamers is passionate about bringing you the best content in the gaming industry.
        </p>
      </div>
      
      <div class="bg-gray-900 rounded-lg p-6 text-center">
        <h3 class="text-2xl font-semibold mb-4 text-blue-500">Why Choose Us?</h3>
        <p class="text-gray-400">
          With a love for gaming and a commitment to transparency, we stand out by offering unbiased reviews, helping you save time and money while discovering your next favorite game.
        </p>
      </div>
    </div>
  </div>
</section>

    );
};

export default About;