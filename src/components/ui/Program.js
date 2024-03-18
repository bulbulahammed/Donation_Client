// import food from "@assets/food.png";
import Image from "next/image";
import Link from "next/link";
import children from "../../assets/children.png";
import education from "../../assets/education.png";
import food from "../../assets/food.png";


const Program = () => {
    return (
        <div className="py-10 container mx-10">
            <div className="text-center py-20">
                <h3 className="text-5xl font-medium max-w-xl mx-auto">We do have a good share program for you</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
                <div className="px-2">
                    <div className="max-w-sm bg-gray-800 rounded-lg shadow bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                    <Link href="/">
                        <Image src={children} width={500} height={500} alt="Program Image"/>
                    </Link>
                    <div className="p-5 text-left">
                        <h5 className="font-bold text-2xl" style={{color:"#3A1700"}}>Children</h5>
                        <p className="my-3 font-normal text-base" style={{color:"#191A15"}}>We will help you to give your fortune to help more people in the world</p>
                        <Link href="/">Learn More</Link>
                    </div>
                </div>
                </div>
                <div className="px-2">
                    <div className="max-w-sm bg-gray-800 rounded-lg shadow bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                    <Link href="/">
                        <Image src={education} width={500} height={500} alt="Program Image"/>
                    </Link>
                    <div className="p-5 text-left">
                        <h5 className="font-bold text-2xl" style={{color:"#3A1700"}}>Education</h5>
                        <p className="my-3 font-normal text-base" style={{color:"#191A15"}}>We will help you to give your fortune to help more people in the world</p>
                        <Link href="/">Learn More</Link>
                    </div>
                </div>
                </div>
                <div className="px-2">
                    <div className="max-w-sm bg-gray-800 rounded-lg shadow bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                        <Image src={food} width={500} height={500} alt="Program Image"/>
                        <div className="p-5 text-left">
                            <h5 className="font-bold text-2xl" style={{color:"#3A1700"}}>Food</h5>
                            <p className="my-3 font-normal text-base" style={{color:"#191A15"}}>We will help you to give your fortune to help more people in the world</p>
                            <Link href="/">Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="max-w-sm bg-gray-800 rounded-lg shadow bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                        <Image src={children} width={500} height={500} alt="Program Image"/>
                        <div className="p-5 text-left">
                            <h5 className="font-bold text-2xl" style={{color:"#3A1700"}}>Water</h5>
                            <p className="my-3 font-normal text-base" style={{color:"#191A15"}}>We will help you to give your fortune to help more people in the world</p>
                            <Link href="/">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Program;