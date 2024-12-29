import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const App = () => {
  const handleNewsletterClick = () => {
    window.location.href = 'https://newsletter.decodestrength.com';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex items-center">
          <span className="text-xl font-bold">Decode Strength</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Events</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-20 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900/50 inline-block px-4 py-2 rounded-full mb-4">
            Transform Your Approach to Strength
          </div>
          <h1 className="text-6xl font-bold mb-6">
            Health First,<br />
            <span className="text-gray-400">Strength Always</span>
          </h1>
          <p className="text-gray-400 text-xl mb-8">
            Discover a logical, science-backed approach to building strength while
            prioritizing your long-term health and wellness.
          </p>
          <div className="flex gap-4">
            <button onClick={handleNewsletterClick} className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200">
              Join Our Mission
            </button>
            <button className="border border-white px-6 py-3 rounded-full hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Decode your path to sustainable strength</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/30 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Scientific Approach</h3>
              <p className="text-gray-400">Evidence-based training methodologies backed by latest research</p>
            </div>
            <div className="bg-zinc-900/30 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Personalized Plans</h3>
              <p className="text-gray-400">Programs adapted to your unique goals and requirements</p>
            </div>
            <div className="bg-zinc-900/30 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Expert Guidance</h3>
              <p className="text-gray-400">Learn from certified strength and conditioning specialists</p>
            </div>
            <div className="bg-zinc-900/30 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">85% Success</h3>
              <p className="text-gray-400">Improvement in strength within 3 months</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400 mb-8">
              Have questions about our approach or want to start your strength journey? We're here to help.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6" />
                <span>hello@decodestrength.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6" />
                <span>+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center gap-4">
                <MessageSquare className="h-6 w-6" />
                <span>Instagram & LinkedIn</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-black/20 rounded-lg border border-gray-800"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-black/20 rounded-lg border border-gray-800"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 bg-black/20 rounded-lg border border-gray-800"
            />
            <button type="submit" className="w-full bg-white text-black py-3 rounded-lg hover:bg-gray-200">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>© 2024 Decode Strength. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
