import SlideProduct from "@/components/product/gallery/SlideProduct";
import ModalProduct from "@/components/product/gallery/SlideProduct";
import { useState } from "react";

const MainImages = ({ARRAY_IMAGES, ARRAY_IMG_SMALL}) => {

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => (window.innerWidth > 767) && setOpenModal(true);
    

    const handleCloseModal = () => setOpenModal(false);
    

    return (
        <>
            <SlideProduct 
                ARRAY_IMAGES={ARRAY_IMAGES} 
                ARRAY_IMG_SMALL={ARRAY_IMG_SMALL} 
                className="grid md:grid-cols-4 md:gap-4" 
                handleOpenModal={handleOpenModal}
            />
            {openModal && (
                <>
                    <ModalProduct 
                        ARRAY_IMAGES={ARRAY_IMAGES} 
                        ARRAY_IMG_SMALL={ARRAY_IMG_SMALL} 
                        openModal={openModal}
                        className="hidden md:grid md:grid-cols-4 md:-translate-y-1/2 md:-translate-x-1/2 
                        md:gap-4 md:absolute md:top-1/2 md:left-1/2 md:max-w-xl md:z-10" 
                        handleCloseModal={handleCloseModal}
                    />
                    <span 
                        className="fixed top-0 left-0 bg-black/80 w-full h-full backdrop-blur-sm" 
                        onClick={handleCloseModal}
                        >
                    </span>
                </>
                
            )}
            
        </>
        
    );
};

export default MainImages;