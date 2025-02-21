import React, { useState } from "react";
import { Tab, TabGroup, TabPanels, TabPanel, TabList } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Slider = ({ items, onSelect }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleSelection = (item) => {
        console.log(item);
        if (onSelect) onSelect(item);
    };

    return (
        <div className="w-full mx-auto p-4">
            <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <TabList className="hidden">
                    {items.map((item, idx) => (
                        <Tab key={idx}>{item.title}</Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {items.map((item, idx) => (
                        <TabPanel key={idx} onClick={() => handleSelection(item)}>
                            <div className="relative w-full h-96 flex justify-center items-center overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                                <div className="w-72 h-80">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                {/* <div className="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 p-4">
                                    <h2 className="text-2xl font-bold">{item.title}</h2>
                                </div> */}    
                            </div>
                        </TabPanel>
                    ))}
                </TabPanels>
                <div className="flex justify-center space-x-4 mt-4">
                    {items.map((_, idx) => (
                        <button
                            key={idx}
                            className={classNames(
                                "w-3 h-3 rounded-full",
                                selectedIndex === idx
                                    ? "bg-blue-600"
                                    : "bg-gray-400 hover:bg-gray-600"
                            )}
                            onClick={() => setSelectedIndex(idx)}
                        />
                    ))}
                </div>
            </TabGroup>
        </div>
    );
};

export default Slider;
