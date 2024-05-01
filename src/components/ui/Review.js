import Image from 'next/image';

const Review = ({review}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='text-justify p-10'>{review.review}</p>
                <div className="flex items-center pl-5 pb-7">
                    <div>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                                <Image src={review.img} width={200} height={200} alt="review Image"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-semibold text-accent text-xl'>{review.name}</h2>
                        <h4 className='text-base text-black'>{review.location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;