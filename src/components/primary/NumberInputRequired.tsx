import React, { useState } from "react";

// Define the interface for props
interface NumberInputRequiredProps {
  label: string; // Label for the input field
  id: string; // ID for the input field
  name: string; // Name attribute for the input field
  value: number | string; // Value of the input field (number or string for flexibility)
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Event handler for changes
}

const NumberInputRequired: React.FC<NumberInputRequiredProps> = ({
  label,
  id,
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
      <label htmlFor={id} className="block font-medium">
        {label}
      </label>
      <input
        type="text" // Use text to temporarily allow invalid input for warnings
        id={id}
        name={name}
        value={value}
        onChange={handleInputChange}
        placeholder={`Enter ${label}`}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      {warning && <p className="text-red-500 text-sm mt-2">{warning}</p>}
    </div>
  );
};

export default NumberInputRequired;
