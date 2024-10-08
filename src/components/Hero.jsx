import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiArrowRight } from 'react-icons/fi';

const banners = [
  {
    id: 1,
    title: 'Descubra a Tecnologia do Futuro',
    description: 'Encontre os melhores produtos eletrônicos com preços imbatíveis!',
    image: 'https://via.placeholder.com/1920x600',
  },
  {
    id: 2,
    title: 'Ofertas Imperdíveis',
    description: 'Aproveite descontos de até 50% em produtos selecionados!',
    image: 'https://via.placeholder.com/1920x600',
  },
  {
    id: 3,
    title: 'Novidades em Smartphones',
    description: 'Conheça os últimos lançamentos das melhores marcas!',
    image: 'https://via.placeholder.com/1920x600',
  },
];

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="mb-12">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="relative">
            <img src={banner.image} alt={banner.title} className="w-full h-[600px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                <p className="text-xl mb-6">{banner.description}</p>
                <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 flex items-center mx-auto">
                  Explorar Agora
                  <FiArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Hero;