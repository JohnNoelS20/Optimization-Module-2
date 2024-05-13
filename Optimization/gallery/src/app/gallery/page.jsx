import Image from 'next/image';
import localImage from '../../../public/local-image.jpeg';  
import MacBook from '../../../public/macbook-apple-imac-computer.jpeg';  

const Gallery = () => {
  return (
    <div className="flex flex-wrap justify-center mx-auto max-w-screen-xl p-4">
      <div className="w-1/4 p-2">
        <div className="shadow-lg rounded-lg overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg"
            alt="Gray Mercedez-Benz AMG"
            width={640}
            height={426}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="w-1/4 p-2">
        <div className="shadow-lg rounded-lg overflow-hidden">
          <Image
            src={localImage}
            alt="Cars Ahead on Road"
            width={640}
            height={426}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="w-1/4 p-2">
        <div className="shadow-lg rounded-lg overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/23325533/pexels-photo-23325533.jpeg"
            alt="Gadwall Bird"
            width={640}
            height={426}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="w-1/4 p-2">
        <div className="shadow-lg rounded-lg overflow-hidden">
          <Image
            src={MacBook}
            alt="iMac and MacBook on Table"
            width={640}
            height={426}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
};

export default Gallery;
