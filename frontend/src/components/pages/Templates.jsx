import React from "react";

const templates = [
  {
    id: 1,
    title: "Social Media Post",
    image: "/images/templates/social-media.png",
    category: "Social Media",
  },
  {
    id: 2,
    title: "Business Poster",
    image: "/images/templates/poster.png",
    category: "Marketing",
  },
  {
    id: 3,
    title: "Event Flyer",
    image: "/images/templates/flyer.png",
    category: "Events",
  },
  {
    id: 4,
    title: "YouTube Thumbnail",
    image: "/images/templates/thumbnail.png",
    category: "Video",
  },
  {
    id: 5,
    title: "Instagram Story",
    image: "/images/templates/story.png",
    category: "Social Media",
  },
  {
    id: 6,
    title: "Business Card",
    image: "/images/templates/business-card.png",
    category: "Corporate",
  },
];

const TemplatesPage = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Explore Ready-Made Templates
        </h1>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Choose from a wide variety of professional templates to start your design quickly.
        </p>
      </div>

      {/* Templates Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
          >
            <img
              src={template.image}
              alt={template.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">
                {template.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{template.category}</p>
            </div>
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">
              Use Template
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TemplatesPage;
