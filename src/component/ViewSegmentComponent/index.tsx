import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faMinus } from "@fortawesome/free-solid-svg-icons";



const ViewSegmentComponent = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };
    return (
        <React.Fragment>

            <div className="relative h-screen flex overflow-hidden bg-gray-100">
                <div className={`bg-white w-[35%] shadow fixed inset-y-0 right-0 z-50 transition duration-300 ease-in-out transform ${isSideNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div>
                        <div className="p-8 bg-[#39aebc] flex gap-4 items-center">
                            <FontAwesomeIcon icon={faChevronLeft} className="text-white size-5 cursor-pointer" onClick={toggleSideNav} />
                            <h1 className="text-white font-semibold text-xl">Saving Segment</h1>
                        </div>
                        <div className="h-[75vh] w-full m-4">
                            <div className="w-full flex justify-center items-start flex-col" >
                                <p className=" my-4 font-semibold">Enter the segment Name</p>
                                <input type="text" placeholder="Name of the segment" className="w-4/5  p-2 border-[1.5px] rounded-md border-black" ></input>
                            </div>
                            <div className="flex wrap w-4/5 flex-col">
                                <p className="my-4 font-semibold">To save your segment, you need to add schemas to build the query</p>
                               <div className="flex justify-end gap-4 mt-6">
                               <div className="flex gap-1 items-center">
                                <span className="block w-[0.75rem] h-[0.75rem] bg-green-500 rounded-full"></span>
                                <p className="font-semibold text-xs" >-User Traits</p>
                               </div>
                               <div className="flex gap-1 items-center">
                                <span className="block w-[0.75rem] h-[0.75rem] bg-red-500 rounded-full"></span>
                                <p className="font-semibold text-xs">-Group Traits</p>
                               </div>
                               </div>
                              
                            </div>

                            <div >
                            <div className="flex justify-start gap-4 mt-10 items-center">
                                  <span className="block w-[0.75rem] h-[0.75rem] bg-green-500 rounded-full"></span>

                                    <select className="w-3/5  p-2 border-[1.5px] rounded-md border-black" name="cars" id="cars">
                                    <option value="first_name">Add schema to segment</option>
                                    <option value="first_name">First Name</option>
                                    <option value="last_name">Last Name</option>
                                    <option value="gender">Gender </option>
                                    <option value="age">Age</option>
                                    <option value="account_name">Account Name</option>
                                    <option value="city">City</option>
                                    <option value="state">State</option>
                                    </select>
                                    <FontAwesomeIcon icon={faMinus} className="color-black size-5 cursor-pointer" />
                                </div>
                                <div className="flex justify-start gap-4 mt-6 items-center">
                                  <span className="block w-[0.75rem] h-[0.75rem] bg-red-500 rounded-full"></span>

                                    <select className="w-3/5  p-2 border-[1.5px] rounded-md border-black" name="cars" id="cars">
                                    <option value="first_name">Add schema to segment</option>
                                    <option value="first_name">First Name</option>
                                    <option value="last_name">Last Name</option>
                                    <option value="gender">Gender </option>
                                    <option value="age">Age</option>
                                    <option value="account_name">Account Name</option>
                                    <option value="city">City</option>
                                    <option value="state">State</option>
                                    </select>
                                    <FontAwesomeIcon icon={faMinus} className="color-black size-5 cursor-pointer" />
                                </div>
                                <div className="flex justify-start gap-4 mt-6 items-center">
                                  <span className="block w-[0.75rem] h-[0.75rem] bg-red-500 rounded-full"></span>

                                    <select className="w-3/5  p-2 border-[1.5px] rounded-md border-black" name="cars" id="cars">
                                    <option value="first_name">Add schema to segment</option>
                                    <option value="first_name">First Name</option>
                                    <option value="last_name">Last Name</option>
                                    <option value="gender">Gender </option>
                                    <option value="age">Age</option>
                                    <option value="account_name">Account Name</option>
                                    <option value="city">City</option>
                                    <option value="state">State</option>
                                    </select>
                                    <FontAwesomeIcon icon={faMinus} className="color-black size-5 cursor-pointer" />
                                </div>

                            </div>
                            <div className="border-b-2 border-[#0000EE] w-[22%] mt-5 ml-5 cursor-pointer">
                           <p className="my-1 font-semibold text-xs text-[#0000EE]">+ Add new schema</p>
                            </div>

                           
                        </div>
                        <div className="flex  gap-4 ml-4">
                            <button className="bg-[#39aebc] p-2 text-white font-semibold rounded-md border-2 border-black">Save the segment</button>
                            <button className=" p-2 text-[red] font-semibold  "> Cancel</button>
                        </div>

                    </div>
                </div>

                {isSideNavOpen && (
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                )}

                <div className="flex-1  overflow-y-auto">
                    <div>
                        <div className="p-8 bg-[#39aebc] flex gap-4 items-center">
                            <FontAwesomeIcon icon={faChevronLeft} className="text-white size-5" />
                            <h1 className="text-white font-semibold text-xl"> View Audience</h1>
                        </div>
                        <div className="h-[100vh] w-full flex justify-center items-center">
                            <button onClick={toggleSideNav} className="bg-[#39aebc] p-4 text-white font-semibold rounded-md border-2 border-black">{`Save segment`}</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ViewSegmentComponent;