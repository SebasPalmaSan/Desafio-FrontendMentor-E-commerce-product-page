import { useRef, useState } from 'react';

import PreviousIcon from '@/components/icons/PreviousIcon';
import NextIcon from '@/components/icons/NextIcon';

const SlideProduct = ({ 
        ARRAY_IMAGES = [], 
        ARRAY_IMG_SMALL = [], 
        openModal = false,
        handleCloseModal = null,
        handleOpenModal = () => {},
        ...props
}) => {

    const btnSlider = useRef(null)

    const [index, setIndex] = useState(0);


    const handleCkickNext = () => {
        index === ARRAY_IMAGES.length - 1  ? setIndex(0) : setIndex(index + 1);
    }
    const handleCkickPrev = () => {
        index === 0 ? setIndex(ARRAY_IMAGES.length - 1) : setIndex(index - 1);
    }

    return (
        <section {...props}>
            {openModal && 
                <button 
                    onClick={handleCloseModal}
                    className='md:col-span-4 text-right text-white font-bold'
                >
                    X
                </button>
            }
            
            <div className='col-span-4 relative'>
                <img 
                    src={ARRAY_IMAGES[index]} 
                    alt="" 
                    className="object cover aspect-[16/13] w-full md:aspect-[16/18] md:rounded-md md:cursor-pointer 
                    xl:aspect-[16/16] 2xl:max-h-[550px]" 
                    onClick={handleOpenModal}
                />
                <div 
                    ref={btnSlider} 
                    className={`absolute top-1/2 left-0 -translate-y-1/2 
                    flex w-full justify-between px-4 ${
                        !openModal && 'md:hidden'
                    }`}
                >
                    <button className='grid place-items-center w-10 h-10 bg-white rounded-full hover:bg-gray-200' onClick={handleCkickPrev}>
                        <PreviousIcon />
                    </button>
                    <button className='grid place-items-center w-10 h-10 bg-white rounded-full hover:bg-gray-200' onClick={handleCkickNext}>
                        <NextIcon />
                    </button>
                </div>
            </div>
            {ARRAY_IMG_SMALL.map((smallImg, i) => (
                    <div 
                        key={i} 
                        onClick={() => {setIndex(i)}} 
                        className='relative overflow-hidden rounded-md cursor-pointer'
                    >
                        <img 
                            src={smallImg} 
                            alt="" 
                            className='hidden md:block md:rounded-md' 
                        />
                        <span className={`absolute top-0 h-full w-full
                         hover:bg-[rgba(255,255,255,0.5)] ${
                            i === index && 'bg-[rgba(255,255,255,0.5)]'
                            }`}>

                        </span>
                    </div>
            ))}
        </section>
    )
};

export default SlideProduct;