import React from 'react';
import Slider from 'react-slick';

function SliderGames({ games, title }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <div className="flex flex-col max-w-7xl px-4 mx-auto mb-20">
      <div className="text-white text-2xl">{title} </div>
      <Slider arrows={false} {...settings}>
        {games.map((game) => (
          <div key={game.name}>
            <div className="m-4">
              <img src={game.image} className="h-full w-full" />
              <div className="text-white mt-3 font-bold">{game.name}</div>
              <div className="flex items-center">
                <img src="/images/Star_1.svg" className="h-4 w-4 mr-2" />
                <div>{game.star}</div>
              </div>
              <div className="flex">
                {game.discount && (
                  <button className="bg-green-900 hover:bg-green-700 text-green-400 font-bold py-2 px-4 rounded mr-3 mt-3">
                    -{game.discount}
                  </button>
                )}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3 mt-3">
                  R$ {game.amount}
                </button>
              </div>
              <div className="flex items-end">
                <button className="bg-slate-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3 mt-3">
                  {game.categorie}
                </button>
                {game.operacionalSystem.map((os) => (
                  <button
                    key={os}
                    className="bg-slate-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3 mt-3"
                  >
                    <img src={`/images/${os}.svg`} alt="" className="w-6 h-6" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderGames;
