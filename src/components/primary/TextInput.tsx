import React, { useState } from "react";

// Define the interface for props
interface TextInputProps {
  label: string; // Label for the input field
  id: string; // ID for the input field
  name: string; // Name attribute for the input field
  value: string; // Current value of the input field
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle changes
  placeholder?: string; // Optional placeholder text for the input
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  id,
  name,
  value,
  onChange,
}) => {
  const [warning, setWarning] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // Allow letters (a-z, A-Z), numbers, spaces, and accented Czech characters (both uppercase and lowercase)
    if (/^[a-zA-Z0-9ěščřžýáíéůúĚŠČŘŽÝÁÍÉÚŮ\s]*$/.test(newValue)) {
      setWarning(null); // Clear warning if valid
      onChange(e); // Pass the valid input back to the parent component
    } else {
      setWarning(
        "Only letters, numbers, spaces, and accented Czech characters are allowed."
      ); // Show warning for invalid input
    }
  };

  return (
    <div>
      <label htmlFor={id} className="block font-medium">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={handleInputChange}
        placeholder={label}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      {warning && <p className="text-red-500 text-sm mt-2">{warning}</p>}
    </div>
  );
};

export default TextInput;
