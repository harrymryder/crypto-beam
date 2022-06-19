import React from "react";

import styles from './Input.module.scss';

const Input: React.FC<{ id: string, type: string, label: string,  onChange: Function, value: string }> = (props) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} onChange={(e) => props.onChange(e)} value={props.value} />
        </div>
    );
};

export default Input;