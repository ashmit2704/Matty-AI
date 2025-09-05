import React from "react";

const AboutPage = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="px-6 md:px-20 py-20 bg-indigo-50 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          About <span className="text-indigo-600">Matty</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          We’re on a mission to make graphic design effortless for everyone.
          Whether you’re a student, entrepreneur, or creator — Matty empowers
          you to design stunning visuals in minutes.
        </p>
      </div>

      {/* Story Section */}
      <div className="px-6 md:px-20 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Matty was born out of the idea that creativity should be accessible
            to everyone. We wanted to eliminate the steep learning curve of
            design tools and provide an intuitive, AI-powered platform for
            anyone to bring their ideas to life.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Today, thousands of users trust Matty to create social media posts,
            marketing materials, business graphics, and more — without needing
            professional design skills.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/images/about-story.png"
            alt="Our Story"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="px-6 md:px-20 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
            <p className="text-gray-600">
              We believe in keeping design tools simple, so anyone can create
              without stress.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Creativity</h3>
            <p className="text-gray-600">
              Our platform inspires creativity by offering templates, AI
              suggestions, and design freedom.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We constantly evolve with the latest technology to make design
              smarter and faster.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {[
            { name: "Megha Singh", role: "Founder & Designer", image: "/images/team1.png" },
            { name: "Ashmit Kumar", role: "Co-Founder & Developer", image: "/images/team2.png" },
            { name: "Matty AI", role: "Your Creative Assistant", image: "/images/team3.png" },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="px-6 md:px-20 py-16 text-center bg-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="mb-6 text-lg">
          Be part of the Matty community and unlock your creative potential.
        </p>
        <a
          href="/signup"
          className="px-6 py-3 bg-white text-indigo-600 rounded-md font-semibold hover:bg-gray-100"
        >
          Get Started Free
        </a>
      </div>
    </section>
  );
};

export default AboutPage;
