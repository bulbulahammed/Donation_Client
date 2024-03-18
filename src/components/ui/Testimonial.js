import people1 from "../../assets/people1.png";
import people2 from "../../assets/people2.png";
import people3 from "../../assets/people3.png";
import Review from "./Review";


const Testimonial = () => {
    const reviews =[
        {
            _id:1,
            name:"Wilson Wong",
            img:people1,
            location:"Sydney",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id:2,
            name:"Kelvin Klein",
            img:people2,
            location:"California",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id:3,
            name:"Jackie Chan",
            location:"New York",
            img:people3,
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
    ]
    return (
        <div className="container mx-auto mb-20">
            <div className="text-center">
                <h3 className="font-bold text-2xl py-5" style={{color:"#3A1700"}}>More than 10.000 people share with Us.</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map((review,index)=><Review
                    key={index}
                    review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;