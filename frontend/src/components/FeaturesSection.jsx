import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  { icon: "🖱️", title: "Drag & Drop Editor", description: "Easily add and arrange shapes, images, and text on your canvas." },
  { icon: "📤", title: "Image Upload", description: "Upload your own images and incorporate them into your designs." },
  { icon: "✍️", title: "Text Styling", description: "Customize fonts, sizes, colors, and rotation for your text." },
  { icon: "💾", title: "Save & Load Designs", description: "Save your work securely and access it anytime from your dashboard." },
  { icon: "📄", title: "Export to PNG/PDF", description: "Download your designs in high-quality PNG or PDF formats." },
  { icon: "🖼️", title: "Templates Gallery", description: "Choose from a variety of templates to jumpstart your creativity." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;