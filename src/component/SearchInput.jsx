import React from "react";

const SearchInput = ({ value, onChange, placeholder, style }) => {
    return (
        <input
            type="search"
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
            placeholder={placeholder}
            style={style}
        />
    );
}

export default SearchInput;
