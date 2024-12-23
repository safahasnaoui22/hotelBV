import React, { useContext } from "react";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { RoomContext } from "../context/RoomContext";

const options = [
  { name: '1 Adult', value: 1 },
  { name: '2 Adults', value: 2 },
  { name: '3 Adults', value: 3 },
  { name: '4 Adults', value: 4 },
];

function AdultsDropdown() {
  const { setAdults } = useContext(RoomContext);

  const handleSelectAdults = (option) => {
    setAdults(option.value); // Pass the numeric value of the selected option
  };

  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        Adults
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>

      <Menu.Items as="div" className="bg-white absolute w-full flex flex-col z-40">
        {options.map((option, index) => (
          <Menu.Item key={index}>
            {({ active }) => (
              <div
                className={`border-b last:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer ${
                  active ? 'bg-accent text-white' : ''
                }`}
                onClick={() => handleSelectAdults(option)}
              >
                {option.name}
              </div>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}

export default AdultsDropdown;
