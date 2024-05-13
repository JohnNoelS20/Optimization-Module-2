import backgroundImage from '../../public/background2.jpeg'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage.src})` }}>
      <div className="bg-black bg-opacity-50 min-h-screen flex items-center justify-center">
        <p className="text-white text-xl max-w-xl text-center p-4">
          Welcome to our Image Gallery! Explore a wide array of beautiful and inspiring images.
        </p>
      </div>
    </main>
  );
}
