import React, { useState } from 'react';
import { components } from "react-select";
import { default as ReactSelect } from "react-select";

function MultiSelect({ dataOptions, optionSelected, setOptionSelected }) {

    const Option = (props) => {
        return (
          <div>
            <components.Option {...props}>
              <input
                type="checkbox"
                checked={props.isSelected}
                onChange={() => null}
              />{" "}
              <label>{props.label}</label>
            </components.Option>
          </div>
        );
    };

    const handleChange = (selected) => {
        setOptionSelected(selected)
    }

    return (
        <ReactSelect
            options={dataOptions}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{
                Option
            }}
            onChange={handleChange}
            allowSelectAll={true}
            value={optionSelected}
        />
    )
}

export default MultiSelect;
