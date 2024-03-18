import bgImage from "@/assets/playImg.png";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
const Video = () => {
    return (
        <div className="relative mx-auto p-40">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                <Image 
                    className="rounded-lg"
                    width={400}
                    height={400}  
                    src={bgImage}
                    alt={"Background Image"}
                />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-green-500 text-4xl">
                <Link href={"/"}>                
                    <FaPlay />
                </Link>
            </div>
        </div>
    );
};

export default Video;