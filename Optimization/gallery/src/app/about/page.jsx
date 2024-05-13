import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div className="max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-4">About the Art Gallery</h1>
        <p className="text-gray-700 text-lg">
          Our Art Gallery is dedicated to showcasing contemporary and classic artworks from a diverse array of talented artists. Located in the heart of the cultural district, our space serves as a beacon for art lovers and collectors alike, providing a platform for emerging artists to share their creative visions.
        </p>
        <p className="text-gray-700 text-lg mt-4">
          Established in 2023, our gallery has become a key player in the local art scene, hosting numerous exhibitions and events throughout the year. Our mission is to promote artistic expression across all visual mediums and to foster a deeper appreciation for the arts within the community.
        </p>
        <p className="text-gray-700 text-lg mt-4">
          Each exhibition is carefully curated by our experienced team of art historians and critics, ensuring a rich and engaging experience for all our visitors. Whether you are new to the art world or a seasoned collector, you will find something that inspires and challenges your perceptions.
        </p>
        <p className="text-gray-700 text-lg mt-4">
          We are committed to making art accessible to everyone, offering free admission to our permanent collections and providing educational programs that bridge the gap between art and the public. Visit us to explore a world where art meets imagination and creativity knows no bounds.
        </p>
      </div>
    </div>
  )
}

export default About;
