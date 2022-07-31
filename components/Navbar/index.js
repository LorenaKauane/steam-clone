import React from 'react';
import Image from 'next/image';
// import { Container } from './styles';

function Navbar() {
  const items = [
    {
      title: 'store',
    },
    {
      title: 'library',
    },
    {
      title: 'community',
    },
  ];
  return (
    <div className="flex max-w-7xl px-4 mx-auto items-center justify-between h-20">
      <div className="flex items-center">
        <Image
          src="/images/Steam_logo.svg"
          alt="Image logo"
          width={30}
          height={30}
        />
        <div className="flex ml-3 m-3">
          {items.map(({ title }) => (
            <div
              key={title}
              className="m-3 pb-7 pt-7 hover:text-white hover:border-b border-sky-500 ease-in duration-100 cursor-pointer"
            >
              {title.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
      <div className="flex relative w-500 h-48 items-center justify-center z-1001">
        <input className="p-2 pl-5 text-white bg-slate-500 bg-opacity-20 rounded-lg text-sm"></input>
        <div className="flex absolute right-0 bg-transparent p-2">
          <Image
            src="/images/icon_search.svg"
            alt="Image logo"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="flex">
        <Image
          src="/images/icon_message_on.svg"
          alt="icon message"
          width={30}
          height={30}
          className="cursor-pointer"
        />
        <div className="ml-5 flex cursor-pointer">
          <Image
            src="/images/icon_notification_on.svg"
            alt="icon notification"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>
        <div className="ml-5 cursor-pointer flex items-center justify-center">
          <Image
            src="/images/imageProfile.png"
            alt="imageProfile"
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <p className="ml-3 pr-2 text-white">Casemiro</p>
          <Image
            src="/images/icon_arrow_down.svg"
            alt="icon_arrow_down"
            width={15}
            height={15}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
