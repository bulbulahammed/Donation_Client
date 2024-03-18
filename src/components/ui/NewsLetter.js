
const NewsLetter = () => {
    return (
        <div className="py-20">
            <div className="text-center">
                <h3 className="font-bold text-2xl py-5" style={{color:"#3A1700"}}>Get News Letter</h3>
            </div>
            <div className='py-14 text-center mx-10 rounded-xl bg-themeClr-500'>
                <div className="text-center flex mx-auto">
                    <form className="max-w-md mx-auto text-center">
                    <input
                        className="bg-white rounded-xl p-4 mr-2" 
                        type="email" 
                        placeholder="example@gmail.com"/>
                       <button className="bg-white hover:bg-themeClr-500 text-themeClr-500 hover:text-white transition-all duration-300 ml-2 border border-white p-2 rounded-md">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;