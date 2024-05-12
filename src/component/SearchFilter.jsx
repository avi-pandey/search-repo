import React from "react";

const SearchFilter = ({ value, onChange, options, style }) => {
    return (
        <select
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
            style={style}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
}

export default SearchFilter;
