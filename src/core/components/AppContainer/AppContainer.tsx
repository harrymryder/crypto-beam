import { useContext } from 'react';
import ThemeContext from '../../store/theme/theme-context';

import core from '../../theme/Core.module.scss';

const AppContainer: React.FC<{
        borderRadius?: string,
        maxWidth?: string,
        minWidth?: string,
    }> = (props) => {
    
    return (
        <div
            style={{
                borderRadius: props.borderRadius, 
                maxWidth: props.maxWidth,
                minWidth: props.minWidth
            }}
            className={core.container}>
            {props.children}
        </div>
    );
}

export default AppContainer;