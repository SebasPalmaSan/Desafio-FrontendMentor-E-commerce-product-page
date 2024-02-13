import SlideProduct from "@/components/product/col-images/SlideProduct";
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
                <SlideProduct 
                    ARRAY_IMAGES={ARRAY_IMAGES} 
                    ARRAY_IMG_SMALL={ARRAY_IMG_SMALL} 
                    openModal={openModal}
                    className="hidden md:grid md:grid-cols-4 md:-translate-y-1/2 md:-translate-x-1/2 
                    md:gap-4 md:absolute md:top-1/2 md:left-1/2 md:max-w-xl" 
                    handleCloseModal={handleCloseModal}
                />
            )}
            
        </>
        
    );
};

export default MainImages;