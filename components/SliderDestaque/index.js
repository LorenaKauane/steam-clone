import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';

function SliderDestaque() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div className="absolute bottom-40 block w-full m-0 ">
        <hr className="hover:border-sky-500" />
      </div>
    ),
  };

  const categories = ['Inicio', 'Descobrir', 'Lançamentos', 'Em breve'];

  return (
    <div className="border-t border-slate-700">
      <Slider arrows={false} {...settings}>
        <div className="relative">
          <img src="/images/csgo.png" alt="" className="h-650 w-full" />
          <div className="relative bottom-[30rem] ">
            <div className="flex flex-col max-w-7xl  text-white px-4 mx-auto justify-between h-20">
              <div>
                <img src="/images/CS_logo.svg" alt="" />
              </div>
              <div className="w-96 my-3">
                O mais jogo de FPS do mundo, jogue com seus amigos contra a
                equipe adversário em mais de 7 mapas
              </div>
              <div className="flex my-5">
                <div>
                  <button className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
                    16
                  </button>
                </div>
                <div className="ml-2">
                  <button className="bg-slate-700 hover:bg-slate-600  text-white font-bold py-2 px-4 rounded">
                    Ação
                  </button>
                </div>
                <div className="ml-2">
                  <button className="bg-slate-700  hover:bg-slate-600 text-white font-bold py-2 px-4 rounded">
                    <img src="/images/Windows.svg" alt="" className="w-6 h-6" />
                  </button>
                </div>
                <div className="ml-2">
                  <button className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded">
                    <img src="/images/Apple.svg" alt="" className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="mb-5">Gratuito para jogar ∙ 15GB de espaço</div>
              <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3">
                  Instalar
                </button>
                <button className="bg-slate-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Ver detalhes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/csgo.png" alt="" className="h-650   w-full" />
        </div>
      </Slider>
      <div className="relative  bottom-[43rem] ">
        <div className="flex  max-w-7xl   px-4 mx-auto">
          {categories.map((categorie) => (
            <div
              key={categorie}
              className="hover:bg-slate-800 text-white font-bold py-2 px-4 rounded "
            >
              {categorie}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SliderDestaque;
