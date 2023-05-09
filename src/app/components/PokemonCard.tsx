import React from 'react';
import Image from 'next/image';

const PokemonCard = ({ name, imgUrl, weight = null, height = null }: any) => {
  return (
    <div className='w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-16 py-8'>
      <div className='flex flex-col items-center pb-10 justify-center text-gray-900 dark:text-white'>
        {imgUrl && (
          <div className='w-24 h-24 mb-3 rounded-full shadow-lg dark:shadow-slate-600'>
            <Image src={imgUrl} alt={name} width={100} height={100} />
          </div>
        )}
        <h5 className='mb-1 text-xl font-medium'>{name}</h5>
        {weight && <p>Weight: {weight}</p>}
        {height && <p>Height: {height}</p>}
      </div>
    </div>
  );
};

export default PokemonCard;
