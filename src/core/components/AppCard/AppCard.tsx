import { Link } from 'react-router-dom';
import core from '../../theme/Core.module.scss';

const AppCard: React.FC<{
    // onClick?: Function,
    route?: string,
    margin?: string,
    padding?: string,
    borderRadius?: string
}> = (props) => {
    const body = <div
        style={{
            padding: props.padding,
            borderRadius: props.borderRadius
        }}
        className={core.card}>
        {props.children}
    </div>;

    return (
        <div style={{ margin: props.margin }}>
            {props.route != null ?
                <Link to={props.route} className={core.link} >
                    {body}
                </Link>
                : body
            }
        </div>
    );
}

export default AppCard;