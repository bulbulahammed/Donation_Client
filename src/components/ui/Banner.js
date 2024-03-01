import banner from "@/assets/Banner.png";
import Button from '@mui/material/Button';
import Image from 'next/image';


const Banner = () => {
    return (
        <div className="grid grid-cols-2 text-center">
            <div className=" flex min-h-screen justify-center items-center">
                <div style={{color:"#191A15"}} className="text-justify mx-5">
                    <h2 className="font-bold text-7xl">We’re here <br/> to help you <br/> to share</h2>
                    <p className="text-sm text-warmGray-900 py-10">We will help you to give your fortune to help more people <br/> in the world</p>
                    <Button className="rounded-2xl bg-green-600 hover:bg-white text-white hover:text-green-500" variant="contained">Contained</Button>
                </div>
            </div>
            <div className='bg-red-500 w-full'>
            <Image src={banner} width={1000} height={1000} alt="Logo" />
            </div>
        </div>
    );
};

export default Banner;