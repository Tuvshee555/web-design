"use client";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="bg-gray-100 font-sans">
      {/* HERO SECTION */}
      <section className="relative h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center overflow-hidden">
        <img
          src="/photo.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg animate-fade-in">
            Welcome to Extreme Web
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white animate-fade-in delay-300">
            A fully immersive, bold, and modern website experience.
          </p>
          <button className="mt-8 px-8 py-4 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:scale-105 transform transition duration-500">
            Explore Now
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Us</h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            We create visually stunning websites that captivate users. Using
            bold colors, smooth animations, and extreme layouts, we turn ideas
            into immersive experiences.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500">
              <img
                src="/photo.jpg"
                alt="Service 1"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Web Design</h3>
              <p className="text-gray-600">
                Crafting modern, responsive, and immersive websites that make
                users go WOW.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500">
              <img
                src="/photo.jpg"
                alt="Service 2"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Animations & Effects</h3>
              <p className="text-gray-600">
                Extreme animations, parallax effects, and smooth transitions
                that bring life to your website.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500">
              <img
                src="/photo.jpg"
                alt="Service 3"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Branding & Identity</h3>
              <p className="text-gray-600">
                Create a bold, unforgettable identity that stands out in the
                digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY / FEATURED */}
      <section className="py-32 px-6 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Featured Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/photo.jpg"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
                <p className="text-white text-xl font-bold">Project 1</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/photo.jpg"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
                <p className="text-white text-xl font-bold">Project 2</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/photo.jpg"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
                <p className="text-white text-xl font-bold">Project 3</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-32 px-6 bg-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-700 text-lg mb-8">
          Ready to take your project to the next level? Lets make something
          extreme together.
        </p>
        <button className="px-8 py-4 bg-purple-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition duration-500">
          Contact Us
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-gray-900 text-white text-center">
        <p>&copy; 2025 Extreme Web. All rights reserved.</p>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }
        .animate-fade-in.delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}
