import { BsChevronRight } from 'react-icons/bs';
import { IconType } from 'react-icons/lib';

import styles from './PrimaryButton.module.scss';

const PrimaryButton: React.FC<{
    text: string,
    fontSize?: number,
    paddingVertical?: number,
    paddingHorizontal?: number,
    icon?: any,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}> = (props) => {
    let icon;
    if (props.icon) {
        icon = <span className={styles.icon}>{props.icon}</span>;
    }

    return (
        <button
            style={{
                paddingLeft: props.paddingHorizontal,
                paddingRight: props.paddingHorizontal,
                paddingTop: props.paddingVertical,
                paddingBottom: props.paddingVertical
            }}
            className={styles.button}
            onClick={props.onClick} >
            <span style={{ fontSize: props.fontSize }}>{props.text}</span>
            <span>{icon}</span>
        </button>
    );
}

export default PrimaryButton;