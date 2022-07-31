import React from 'react';
import Slider from 'react-slick';

function Category() {
  const categories = [
    'action',
    'adventure',
    'free',
    'run',
    'sports',
    'strategy',
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <div className="flex flex-col max-w-7xl px-4 mx-auto my-10">
      <div className="text-white text-2xl"> Categorias </div>
      <Slider arrows={false} {...settings}>
        {categories.map((categorie) => (
          <div key={categorie}>
            <div className="m-4">
              <img
                src={`/images/category_${categorie}.png`}
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Category;
