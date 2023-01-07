import React, { useState } from 'react';

const Dropdown = () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <select
        multiple = {true}
        value={selectedOptions}
        onFocus={() => setIsDropdownOpen(true)}
        onBlur={() => setIsDropdownOpen(false)}
        onChange={(event) => handleOptionChange(event.target.value)}
      >
        {isDropdownOpen &&
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
      {selectedOptions.map((option) => (
        <button key={option} onClick={() => handleOptionChange(option)}>
          {option}
          <span>X</span>
        </button>
      ))}
    </div>
  );
};

export default Dropdown;
