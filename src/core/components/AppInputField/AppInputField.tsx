import React from "react";

import core from '../../theme/Core.module.scss';

const AppInputField: React.FC<{
    htmlFor?: string,
    type?: string,
    label?: string,
    onChange: Function,
    value?: string,
    placeholder?: string
}> = (props) => {
    return (
        <div className={core.input}>
            <label htmlFor={props.htmlFor}>
                {props.label}
            </label>
            <input
                type={props.type}
                onChange={(e) => props.onChange(e)}
                value={props.value}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default AppInputField;