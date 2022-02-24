import classes from './PrimaryContainer.module.css';

function PrimaryContainer(props: any) {
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    );
}

export default PrimaryContainer;