import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronLeft, faMinus } from "@fortawesome/free-solid-svg-icons";
import { dropdownOptions } from "../../utils/constants";
import axios from "axios";

const ViewSegmentComponent = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const [schema, setSchema] = useState<any[]>([{ value: "label", label: 'Add Schema to Segment' }]);
    const [availableOptions, setAvailableOptions] = useState(dropdownOptions);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [segmentName, setSegmentName] = useState<string>('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const usedValues = schema.map(item => item.value);
        const newAvailableOptions = dropdownOptions.filter(option => !usedValues.includes(option.value) || option.value === "label");
        setAvailableOptions(newAvailableOptions);

    }, [schema]);

    const addSchema = () => {
        setSchema([...schema, { value: "label", label: 'Add Schema to Segment' }]);
    }

    const handleOnSubmit = async (e: any) => {
        e.preventDefault();
        const outputArray = schema.map(item => ({ [item.value]: item.label }));
        try {
            const response = await axios.post('https://webhook.site/ceb81a0b-2a8f-4e75-a142-88c668bff423', { "segment_name": segmentName, "schema": [...outputArray] });
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }

    const handleOnSelect = (selectedOption: any, index: number) => {
        const updatedSchema = [...schema];
        updatedSchema[index] = selectedOption;
        setSchema(updatedSchema);
        setOpenDropdown(null);
    };

    const handleOndelete = (index: number) => {
        const updatedSchema = [...schema];
        updatedSchema.splice(index, 1);
        setSchema(updatedSchema);
    }

    const toggleSideNav = () => {
        setSchema([]);
        setSegmentName('');
        setIsSideNavOpen(!isSideNavOpen);
    };

    const toggleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const handleOnNameChange = (e: any) => {
        setSegmentName(e.target.value);
    }

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
                            <div className="w-full flex justify-center items-start flex-col">
                                <p className="my-4 font-semibold">Enter the segment Name</p>
                                <input type="text" placeholder="Name of the segment" value={segmentName} onChange={(e) => handleOnNameChange(e)} className="w-4/5 p-2 border-[1.5px] rounded-md border-black" />
                            </div>
                            <div className="flex wrap w-4/5 flex-col">
                                <p className="my-4 font-semibold">To save your segment, you need to add schemas to build the query</p>
                                <div className="flex justify-end gap-4 mt-6">
                                    <div className="flex gap-1 items-center">
                                        <span className="block w-[0.75rem] h-[0.75rem] bg-green-500 rounded-full"></span>
                                        <p className="font-semibold text-xs">-User Traits</p>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <span className="block w-[0.75rem] h-[0.75rem] bg-red-500 rounded-full"></span>
                                        <p className="font-semibold text-xs">-Group Traits</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex wrap w-4/5 flex-col border-2 border-blue-500 justify-center items-center h-[30%] gap-4 overflow-y-scroll mt-4" ref={dropdownRef}>
                                {schema.map((item, index) => (
                                    <div className="flex justify-center gap-4 items-center w-full" key={index}>
                                        <span className="block w-[0.75rem] h-[0.75rem] bg-green-500 rounded-full"></span>
                                        <div className="relative w-4/5">
                                            <div
                                                className="w-full p-2 border-[1.5px] rounded-md border-black flex justify-between items-center cursor-pointer"
                                                onClick={() => toggleDropdown(index)}
                                            >
                                                <span>{item.label}</span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                                            </div>
                                            {openDropdown === index && (
                                                <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-40 overflow-y-auto z-10">
                                                    {availableOptions.map((option) => (
                                                        <div
                                                            key={option.value}
                                                            className="p-2 hover:bg-gray-100 cursor-pointer"
                                                            onClick={() => handleOnSelect(option, index)}
                                                        >
                                                            {option.label}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <FontAwesomeIcon onClick={() => handleOndelete(index)} icon={faMinus} className="color-black size-5 cursor-pointer" />
                                    </div>
                                ))}
                            </div>

                            <div className="border-b-2 border-[#0000EE] w-[7rem] mt-5 ml-5 cursor-pointer" onClick={addSchema}>
                                <p className="my-1 font-semibold text-xs text-[#0000EE]">+ Add new schema</p>
                            </div>
                        </div>
                        <div className="flex gap-4 ml-4">
                            <button className="bg-[#39aebc] p-2 text-white font-semibold rounded-md border-2 border-black" onClick={handleOnSubmit}>Save the segment</button>
                            <button className="p-2 text-[red] font-semibold" onClick={toggleSideNav}>Cancel</button>
                        </div>
                    </div>
                </div>

                {isSideNavOpen && (
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                )}

                <div className="flex-1 overflow-y-auto">
                    <div>
                        <div className="p-8 bg-[#39aebc] flex gap-4 items-center">
                            <FontAwesomeIcon icon={faChevronLeft} className="text-white size-5" />
                            <h1 className="text-white font-semibold text-xl">View Audience</h1>
                        </div>
                        <div className="h-[100vh] w-full flex justify-center items-center">
                            <button onClick={toggleSideNav} className="bg-[#39aebc] p-4 text-white font-semibold rounded-md border-2 border-black">{`Save segment`}</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ViewSegmentComponent;