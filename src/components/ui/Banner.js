import banner from "@/assets/Banner.png";
import Image from 'next/image';


const Banner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 text-center">
            <div style={{color:"#191A15"}} className="text-left mx-5 pt-28">
                <h2 className="font-bold text-3xl md:text-5xl lg:text-7xl w-3/4">We are here to help you to share</h2>
                <p className="text-sm text-warmGray-900 py-10">We will help you to give your fortune to help more people <br/> in the world</p>
                <button></button>
            </div>
            <div className="w-full">
                <Image className="w-full" src={banner} width={700} height={100} alt="Logo" />
            </div>
        </div>
    );
};

export default Banner;