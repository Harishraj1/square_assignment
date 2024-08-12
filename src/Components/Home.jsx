import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHouse, faBagShopping, faEnvelope, faBell, faBookmark, faGreaterThan, faArrowRight, faCheck, faImage, faFilm, faList, faCalendarDays, faEarthAmericas, faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import hospt_logo1 from './images/hospital_logo1.png';
import hospt_logo2 from './images/hospital_logo2.png';
import hospt_logo3 from './images/hospital_logo3.png';
import nav_profile from './images/nav_profile.png';
import profile_img from './images/profile_img.png';
import post_img from './images/post_img.png';

function Home() {
    const posts = [
        {
            profileImg: profile_img,
            name: "Vipshal WG",
            title: "Doctor | Medical Officer",
            time: "1w",
            content: "I’m elated to share that I have been promoted as Clinical Data Coordinator at ABC Med Corp.",
            postImg: post_img,
        },
        {
            profileImg: profile_img,
            name: "Vipshal WG",
            title: "Doctor | Medical Officer",
            time: "1w",
            content: "I’m elated to share that I have been promoted as Clinical Data Coordinator at ABC Med Corp.",
            postImg: post_img,
        },
    ];

    return (
        <div className='bg-[#e5e5e5] min-h-screen'>
            <nav className="bg-[#313638] p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
                <div className="w-52 cursor-pointer">
                    <img src={logo} alt="logo" />
                </div>
                <div className="flex flex-row justify-around items-center w-7/12">
                    <div className="bg-[#FFFFFF0D] p-2 flex rounded-2xl items-center w-96">
                        <FontAwesomeIcon className="text-sm rounded-full p-2 text-[#FFFFFF99]" icon={faMagnifyingGlass} />
                        <input className="bg-transparent w-72 focus:outline-none ml-2 text-white placeholder:text-[#ffffff99]" placeholder="Search Jobs" />
                    </div>
                    <div className="flex items-center gap-14 text-[#FFFFFF]">
                        <div className="relative group flex items-center">
                            <Link to="/"><FontAwesomeIcon icon={faHouse} className='cursor-pointer text-xl' /></Link>
                            <span className="cursor-pointer absolute left-full opacity-0 group-hover:opacity-100 text-white text-xs px-2 transition-opacity duration-300">Home</span>
                        </div>
                        <div className="relative group flex items-center">
                            <Link to="/jobs"><FontAwesomeIcon icon={faBagShopping} className='cursor-pointer text-xl' /></Link>
                            <span className="cursor-pointer absolute left-full opacity-0 group-hover:opacity-100 text-white text-xs rounded-md px-2 transition-opacity duration-300">Jobs</span>
                        </div>
                        <FontAwesomeIcon icon={faEnvelope} className='cursor-pointer text-xl' />
                        <FontAwesomeIcon icon={faBell} className='cursor-pointer text-xl' />
                        <img src={nav_profile} className="w-10 rounded-full cursor-pointer" alt="profile" />
                    </div>
                </div>
            </nav>

            <div className='flex p-4 fixed mt-20'>
                {/* Profile container */}
                <div className='bg-white rounded-lg h-min pb-6 w-1/4'>
                    <div className='flex flex-col items-center border-b-2 rounded-b-2xl border-[#D2D2D299] p-8'>
                        <img src={nav_profile} className='w-20 rounded-full' alt="profile" />
                        <h1 className='mt-4 font-bold text-lg'>Veeragowriprasath S</h1>
                        <h2 className='text-sm text-gray-500 mb-4'>What are you Missing?</h2>
                        <div className='mb-4'>
                            <p className='text-sm text-gray-700'> <FontAwesomeIcon icon={faCheck} className='bg-[#FF668B]' style={{ fontSize: "8px", padding: "3px", borderRadius: "100%" }} /> Personalized Feed</p>
                            <p className='text-sm text-gray-700'> <FontAwesomeIcon icon={faCheck} className='bg-[#FF668B]' style={{ fontSize: "8px", padding: "3px", borderRadius: "100%" }} /> Job Recommendations</p>
                            <p className='text-sm text-gray-700'> <FontAwesomeIcon icon={faCheck} className='bg-[#FF668B]' style={{ fontSize: "8px", padding: "3px", borderRadius: "100%" }} /> Direct Jobs from recruiters</p>
                        </div>
                        <button className='bg-[#FFB2C5] text-black py-2 px-16 rounded-xl font-normal cursor-pointer'>Complete Profile</button>
                    </div>
                    <div className='flex justify-around items-center mt-6'>
                        <div className='flex cursor-pointer'>
                            <FontAwesomeIcon icon={faBookmark} className='mr-5 text-2xl' />
                            <p className='text-gray-700 '> My items</p>
                        </div>
                        <p className='border-2 border-black rounded-full text-xs p-1 px-2 cursor-pointer'><FontAwesomeIcon icon={faGreaterThan} /></p>
                    </div>
                </div>

                {/* Main container */}
                <div className='flex-grow mx-4 overflow-y-auto scrollbar-hide max-h-[700px]'>
                    <div className='bg-white p-6 rounded-lg'>
                        <div className='flex items-center mb-4'>
                            <img src={nav_profile} className='w-12 rounded-full cursor-pointer' alt="profile" />
                            <input className='border border-[#2D2D2D4D] text-[#2D2D2D4D] focus:outline-none ml-2 p-3 rounded-lg w-5/6' placeholder='Start a post' />
                        </div>
                        <div className='flex justify-around ml-8'>
                            <p className='cursor-pointer'><FontAwesomeIcon icon={faImage} className='mr-1 text-xl' /> Photo</p>
                            <p className='cursor-pointer'><FontAwesomeIcon icon={faFilm} className='mr-1 text-xl' /> Video</p>
                            <p className='cursor-pointer'><FontAwesomeIcon icon={faList} className='mr-1 text-xl' /> Article</p>
                            <p className='cursor-pointer'><FontAwesomeIcon icon={faCalendarDays} className='mr-1 text-xl' /> Event</p>
                        </div>
                    </div>

                    {/* Render posts using map */}
                    {posts.map((post, index) => (
                        <div key={index} className='bg-white my-4 rounded-lg'>
                            <div className='p-6'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-6'>
                                        <div className='w-12'>
                                            <img src={post.profileImg} alt='profile_img' />
                                        </div>
                                        <div>
                                            <h1 className='font-medium'>{post.name}</h1>
                                            <p className='text-[#1C274C99]'>{post.title}</p>
                                            <p className='text-[#1C274C99]'>{post.time} . <FontAwesomeIcon icon={faEarthAmericas} className='w-3.5' /></p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='text-[#575757] bg-[#D2D2D24D] text-lg font-medium p-1 px-4 border rounded-md'>+ Follow</button>
                                    </div>
                                </div>
                                <div className='py-2'>
                                    <p>{post.content}</p>
                                </div>
                            </div>
                            <div className='border border-[#31363899] rounded-b-3xl border-t-white'>
                                <img src={post.postImg} alt="Post content" className='border border-[#2D2D2D4D] rounded-b-3xl max-h-64 w-full object-cover' />
                                <div className='flex justify-between text-[#31363899] mx-12 my-4'>
                                    <p>100 Likes</p>
                                    <p>1 Comment</p>
                                </div>
                            </div>
                            <div className='flex justify-around py-4 text-[#31363899]'>
                                <p className='cursor-pointer'><FontAwesomeIcon icon={faThumbsUp} className='text-lg cursor-pointer' /> Like</p>
                                <p className='cursor-pointer'><FontAwesomeIcon icon={faComment} className='text-lg cursor-pointer' /> Comment</p>
                                <p className='cursor-pointer'><FontAwesomeIcon icon={faShare} className='text-lg cursor-pointer' /> Share</p>
                                <p className='cursor-pointer'><FontAwesomeIcon icon={faBookmark} className='text-lg cursor-pointer' /> Save</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Filters/Last container */}
                <div className='w-1/4'>
                    <div className='bg-white p-4 rounded-lg mb-5'>
                        <h1 className='font-bold text-lg mb-3 text-[#00000099]'>Job Picked for you</h1>
                        <div className='mb-4 flex items-center gap-4 ml-4 pb-2 border-b border-[#D2D2D299]'>
                            <div className='w-12'>
                                <img src={hospt_logo1} alt='hospital_1' />
                            </div>
                            <div>
                                <h2 className='text-md font-semibold text-[#575757]'>Optometrist</h2>
                                <p className='text-sm text-[#31363866]'>Universe Multispeciality Hospital</p>
                            </div>
                        </div>
                        <div className='mb-4 flex items-center gap-4 ml-4 pb-2 border-b border-[#D2D2D299]'>
                            <div className='w-12'>
                                <img src={hospt_logo2} alt='hospital_2' />
                            </div>
                            <div>
                                <h2 className='text-md font-semibold text-[#575757]'>Psychiatrist</h2>
                                <p className='text-sm text-[#31363866]'>Medcare Hospital</p>
                            </div>
                        </div>
                        <div className='mb-4 flex items-center gap-4 ml-4 pb-2 border-b border-[#D2D2D299]'>
                            <div className='w-12'>
                                <img src={hospt_logo3} alt="hospital_3" />
                            </div>
                            <div>
                                <h2 className='text-md font-semibold text-[#575757]'>Nurse Practitioner</h2>
                                <p className='text-sm text-[#31363866]'>ABZ Multispeciality Hospital</p>
                            </div>
                        </div>
                        <Link to="/jobs"><p className='text-[#3188A3] cursor-pointer mx-4'>View more jobs <FontAwesomeIcon icon={faArrowRight} /></p></Link>
                    </div>
                    <div className='bg-white p-4 rounded-lg'>
                        <h1 className='font-bold text-lg mb-3'>Recommended Courses</h1>
                        <div className='mb-4 flex items-center gap-4 ml-4 pb-2 border-b border-[#D2D2D299]'>
                            <div className='p-4 border border-black rounded-lg'>
                                {/* Placeholder for course image or icon */}
                            </div>
                            <div>
                                <h2 className='text-md font-semibold text-[#575757]'>Certified Nursing Assistant (CNA)</h2>
                                <p className='text-sm text-[#31363866]'>Coursera</p>
                            </div>
                        </div>
                        <div className='mb-4 flex items-center gap-4 ml-4 pb-2 border-b border-[#D2D2D299]'>
                            <div className='p-4 border border-black rounded-lg'>
                                {/* Placeholder for course image or icon */}
                            </div>
                            <div>
                                <h2 className='text-md font-semibold text-[#575757]'>Medical Coding</h2>
                                <p className='text-sm text-[#31363866]'>Udemy</p>
                            </div>
                        </div>
                        <div className='mb-4 flex items-center gap-4 ml-4 pb-2 border-b border-[#D2D2D299]'>
                            <div className='p-4 border border-black rounded-lg'>
                                {/* Placeholder for course image or icon */}
                            </div>
                            <div>
                                <h2 className='text-md font-semibold text-[#575757]'>Medical Health First Aid</h2>
                                <p className='text-sm text-[#31363866]'>Khan Academy</p>
                            </div>
                        </div>
                        <p className='text-[#3188A3] cursor-pointer mx-4'>View recommended courses <FontAwesomeIcon icon={faArrowRight} /></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

