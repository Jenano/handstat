import React, { useState } from "react";

// Define the interface for props
interface NumberInputProps {
  label: string;
  name: string;
  value: number | string; // Allow string temporarily for invalid input handling
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  name,
  value,
  onChange,
}) => {
  const [warning, setWarning] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // Check if the input is a valid number
    if (/^\d*$/.test(newValue)) {
      setWarning(null); // Clear any warning if valid
      onChange(e); // Pass the valid value back to the parent component
    } else {
      setWarning("Only numbers are allowed."); // Set warning if invalid input
    }
  };

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text" // Use text input to capture invalid values temporarily
        id={name}
        name={name}
        value={value}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
      />
      {warning && <p className="text-red-500 text-sm mt-2">{warning}</p>}
    </div>
  );
};

export default NumberInput;
