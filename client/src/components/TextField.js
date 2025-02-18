import React from 'react';

const Textfield = ({ placeholder, width, height, onChange, value }) => {

    return <label>
        <input
            style={{ width: width + "px", height: height + "px" }}
            placeholder={placeholder}
            type="text"
            onChange={(e) => onChange(e)}
            value={value}
        />
    </label>
}


export default Textfield;