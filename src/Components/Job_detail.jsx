import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHouse, faBagShopping, faEnvelope, faBell, faFilter, faBookmark, faList, faArrowRight, faPlus, faX, faShare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import nav_profile from './images/nav_profile.png';
import building_img from './images/building_img.png';

function Job_detail() {
    // State management
    const [showTrackBar, setShowTrackBar] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(0);
    const [selectedJob, setSelectedJob] = useState(null); // To track the selected job

    const latestJobOpenings = [
        { hospital: "RTYU Hospital", work: "Physician", location: "Coimbatore", experience: "3+ Years Experience", experienceValue: 3 },
        { hospital: "Kumaran Hospital", work: "Physician", location: "Chennai", experience: "Freshers", experienceValue: 0 },
        { hospital: "Apollo Hospital", work: "Cardiologist", location: "Erode", experience: "6+ Years Experience", experienceValue: 6 },
        { hospital: "Meena Hospital", work: "Nurse", location: "Coimbatore", experience: "2+ Years Experience", experienceValue: 2 },
        { hospital: "RTYU Hospital", work: "Physician", location: "Salem", experience: "3+ Years Experience", experienceValue: 3 },
        { hospital: "RTYU Hospital", work: "Physician", location: "Salem", experience: "1+ Years Experience", experienceValue: 1 },
    ];

    // Function to filter and sort jobs based on selected experience
    const filteredJobOpenings = latestJobOpenings
        .filter(job => job.experienceValue >= selectedExperience)
        .sort((a, b) => a.experienceValue - b.experienceValue); // Sort by experience, with lowest (e.g., Freshers) first

    // Function to handle card click
    const handleCardClick = (job) => {
        setSelectedJob(job);
    };

    return (
        <div className='bg-[#e5e5e5]'>
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

            <div className='mt-20 flex'>
                {/* Filter section with adjusted width */}
                <div className='bg-white rounded-xl h-min w-1/6 m-4 p-4 text-lg border border-[#D1D1D1]'>
                    <div className='flex justify-around items-center'>
                        <p className='bg-[#313638] text-white py-2 px-4 text-sm rounded-3xl'>
                            <FontAwesomeIcon icon={faFilter} className='text-[#9FDBD8]' /> Filters
                        </p>
                        <FontAwesomeIcon icon={faBookmark} />
                        <FontAwesomeIcon icon={faList} />
                    </div>

                    {/* Experience Section */}
                    <div className='flex items-center justify-between mt-4'>
                        <p className='text-[#31363899] font-semibold'>Experience</p>
                        <FontAwesomeIcon
                            icon={showTrackBar ? faX : faPlus}
                            className='text-[#1A212B] bg-[#F1FBFA] p-2 rounded-full text-sm cursor-pointer'
                            onClick={() => setShowTrackBar(!showTrackBar)}
                        />

                    </div>

                    {showTrackBar && (
                        <div className='relative mt-10'>
                            <div
                                className='absolute top-0 left-0 transform -translate-x-1/2 translate-y-[-150%] bg-[#6FD1CC] text-black text-xs rounded-lg px-2 py-1'
                                style={{ left: `${selectedExperience * 10}%` }} // Position based on range
                            >
                                {selectedExperience}
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="10"
                                value={selectedExperience}
                                onChange={(e) => setSelectedExperience(parseInt(e.target.value))}
                                className="w-full appearance-none h-2 bg-[#37ADA8] rounded-full cursor-pointer"
                                style={{
                                    accentColor: "#6FD1CC",
    
                                }}
                            />
                        </div>
                    )}

                    <div className='flex items-center justify-between mt-4'>
                        <p className='text-[#31363899] font-semibold'>Degree</p>
                        <FontAwesomeIcon className='text-[#1A212B] bg-[#F1FBFA] p-2 rounded-full text-sm cursor-pointer' icon={faPlus} />
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                        <p className='text-[#31363899] font-semibold'>Work Type</p>
                        <FontAwesomeIcon className='text-[#1A212B] bg-[#F1FBFA] p-2 rounded-full text-sm cursor-pointer' icon={faPlus} />
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                        <p className='text-[#31363899] font-semibold'>Location</p>
                        <FontAwesomeIcon className='text-[#1A212B] bg-[#F1FBFA] p-2 rounded-full text-sm cursor-pointer' icon={faPlus} />
                    </div>
                </div>

                {/* Right section with scrollable content */}
                <div className='flex-1 h-[calc(100vh-80px)] overflow-auto p-4 pr-8'>
                    <div className='flex'>
                        {/* Latest Job Openings - Left Section */}
                        <div className='flex-1 bg-white border border-[#D1D1D1] rounded-xl mb-4 p-4 overflow-y-auto scrollbar-hide' style={{ maxHeight: 'calc(100vh - 110px)' }}>
                            <div className='flex flex-wrap gap-4 mt-4'>
                                {filteredJobOpenings.map((job, index) => (
                                    <div
                                        key={index}
                                        className={`border ${selectedJob === job ? 'bg-[#FF668B99] border-[#FF668B99]' : 'border-[#A3E0DD] bg-[#6FD1CC99]'} rounded-2xl pb-2 w-[calc(50%-0.5rem)] cursor-pointer`}
                                        onClick={() => handleCardClick(job)}
                                    >
                                        <div className='border border-[#A3E0DD] bg-white h-40 flex flex-col justify-around rounded-2xl p-4'>
                                            <div className='flex justify-between items-center'>
                                                <div>
                                                    <p className='text-[#31363899] text-sm'>{job.hospital}</p>
                                                    <p className='text-[#31363899] text-xl font-semibold'>{job.work}</p>
                                                </div>
                                                <div>
                                                    <p className='p-5 border border-black rounded-full'></p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between text-[#31363899] text-sm'>
                                                <li>Full-Time</li>
                                                <li>{job.location}</li>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between mt-2 text-[#313638E5] px-4'>
                                            <h3 className='text-xs font-medium'>{job.experience}</h3>
                                            <FontAwesomeIcon icon={faArrowRight} className='bg-[#37ADA8] text-white p-2 border rounded-full' />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Detail of the card - Right Section */}
                        <div className='flex-1 ml-4'>
                            {selectedJob ? (
                                <div>
                                    <div className='bg-white border border-[#FFB2C5] rounded-2xl flex justify-between p-4'>
                                        <div className='flex gap-4'>
                                            <img src={building_img} className='w-20'></img>
                                            <div>
                                                {/* Display hospital name */}
                                                <p className='text-[#31363899] text-sm'>{selectedJob.hospital}</p>
                                                {/* Display work */}
                                                <p className='text-[#31363899] text-xl font-semibold'>{selectedJob.work}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-between'>
                                            <div className='flex justify-end gap-4 text-[#313638] text-lg'>
                                                <FontAwesomeIcon icon={faShare} className='cursor-pointer'/>
                                                <FontAwesomeIcon icon={faBookmark}  className='cursor-pointer'/>
                                            </div>
                                            <div className='text-[#3188A3] flex gap-2 items-center justify-center cursor-pointer'>
                                                <p>Learn More</p>
                                                <FontAwesomeIcon icon={faArrowRight} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border bg-white border-[#FFB2C5] rounded-2xl mt-4 p-4'>
                                        <h1 className='text-[#31363899] text-xl font-semibold mb-4'>Requirements</h1>
                                        <ul className='text-[#31363899]'>
                                            <li>Medical Degree (MD or DO): Completion of an accredited medical school program</li>
                                            <li>Residency Training: Successful completion of a residency program in a chosen specialty.</li>
                                            <li>Board Certification: Certification by an appropriate medical board in the physician’s specialty</li>
                                            <li>State Medical License: Valid medical license to practice in the respective state.</li>
                                        </ul>

                                        <h1 className='mt-4 text-[#31363899] text-xl font-semibold mb-4'>Benefits</h1>
                                        <ul className='text-[#31363899]'>
                                            <li>Competitive salary and benefits package.</li>
                                            <li>Opportunities for professional development and growth.</li>
                                            <li>Supportive and collaborative work environment.</li>
                                        </ul>

                                        <button className='mt-4 bg-[#FFB2C5] text-[#313638CC] font-semibold px-8 py-2 rounded-xl flex items-center gap-3'>
                                            <p>Apply</p>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className='text-[#31363899] text-xl'>Select a job to see details</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Job_detail;

