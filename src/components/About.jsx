/* eslint-disable react/no-unescaped-entities */
import aboutImage from "../assets/about.mp4";
import promoImage from "../assets/promoImage.jpg";

function About() {
    return (
        <div className="font-wittgenstein">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 p-8 lg:p-16 lg:mx-8">
                    <h1 className="text-[#353593] font-bold text-3xl lg:text-4xl m-4">
                        Welcome to <span className="text-[#f1b94a]">Epic Reads</span> – your ultimate destination for discovering, reading, and sharing books!
                    </h1>
                    <p className="text-base lg:text-lg mx-4 my-8 font-semibold">
                        At Epic Reads, we believe in the power of stories to transform lives, ignite imaginations, and connect people from all walks of life. Whether you're an avid reader, an aspiring author, or someone just beginning your literary journey, our platform is designed to cater to your every need.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 p-8 lg:p-16 lg:mx-8">
                    <video className="w-full h-full object-cover" src={aboutImage} autoPlay loop muted></video>
                </div>
            </div>
            <div className="my-8">
                <h1 className="text-[#353593] font-bold text-3xl lg:text-5xl text-center m-8">What we Offer</h1>
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 p-4">
                        <img src={promoImage} className="w-full h-auto" alt="Promo"></img>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-between my-4 lg:px-8 px-4">
                        <div className="bg-[#BED9EC] lg:mx-8 p-4 rounded-lg lg:mr-32">
                            <h1 className="font-bold text-xl lg:text-2xl m-4 text-[#366c8d]">Read and Buy Books</h1>
                            <p className="m-4">
                                Dive into our extensive library of books across all genres and interests. From timeless classics to contemporary bestsellers, our collection is curated to satisfy the most discerning readers. Found a book you can't put down? Purchase it directly from our site and add it to your personal collection.
                            </p>
                        </div>
                        <div className="bg-[#BED9EC] lg:mx-8 p-4 mt-4 rounded-lg lg:ml-32">
                            <h1 className="font-bold text-xl lg:text-2xl m-4 text-[#366c8d]">Upload and Share Your Books</h1>
                            <p className="m-4">
                                Are you an author looking to share your work with the world? Epic Reads provides a seamless platform for you to upload your books and reach a vast audience. Join our community of writers and readers, and let your stories be discovered by passionate book lovers everywhere.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center px-8 lg:px-32 my-8">
                <h1 className="text-[#353593] font-bold text-3xl lg:text-5xl text-center m-8">Our Vision</h1>
                <p className="text-base lg:text-lg">
                    Our mission is to create a vibrant and inclusive community where books and their readers come first. We aim to provide a platform that not only offers easy access to a wide variety of books but also fosters a supportive environment for authors to share their stories.
                </p>
            </div>
        </div>
    );
}

export default About;
