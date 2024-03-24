import React, { useState } from 'react';
import '../assets/styles/select.css';

interface Option {
    label: string;
    value: string;
}

interface CustomSelectProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onChange, value, placeholder }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className="select-container">
            <select value={value} onChange={handleChange} className="select">
                {placeholder && <option value={value}>{placeholder}</option>}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className='arrow' />
        </div>
    );
};

export default CustomSelect;
