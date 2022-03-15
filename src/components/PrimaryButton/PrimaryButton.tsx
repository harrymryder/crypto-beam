import ThemeContext from '../../store/theme/theme-context';
import { useContext, useState } from 'react';

import styles from './PrimaryButton.module.scss';

const PrimaryButton: React.FC<{
    text: string,
    fontSize?: number,
    paddingVertical?: number,
    paddingHorizontal?: number,
    icon?: any,
    animate?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    isDisabled?: boolean,
}> = (props) => {
    const theme = useContext(ThemeContext);
    const [isActive, setIsActive] = useState(false);
    let icon;
    if (props.icon) {
        icon = <span className={styles.icon}>{props.icon}</span>;        
    }

    // function onTapDownHandler() {
    //     if (props.animate !== false) {
    //         setIsActive(true);
    //     }
    // }

    // function onTapUpHandler() {        
    //     setTimeout(() => { setIsActive(false) }, 500);
    //     props.onClick;
    // }

    return (
        <button
            style={{
                paddingLeft: props.paddingHorizontal,
                paddingRight: props.paddingHorizontal,
                paddingTop: props.paddingVertical,
                paddingBottom: props.paddingVertical
            }}
            className={isActive ? styles['button-active'] : styles.button}
            // onMouseDown={onTapDownHandler}
            // onMouseUp={onTapUpHandler} 
            onClick={props.onClick}
            >
            {/* onClick={onClickHandler} > */}
            <span style={{ fontSize: isActive ? (props.fontSize! - props.fontSize! * 0.1) : props.fontSize }}>{props.text}</span>
            <span>{icon}</span>
        </button>
    );
}

export default PrimaryButton;