import { Fragment } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.scss';

function Backdrop(props: any) {
    return <div className={classes.backdrop} onClick={props.onClose} />;
}

function ModalOverlay(props: any) {
    return (
        <div className={classes.modal}>
            <h4 className={classes.title}>{props.title}</h4>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

const portalElement = document.getElementById('overlays') as HTMLElement;


//TODO: Add title and close icon and ok button
const Modal: React.FC<{onClose: Function, title: string}> = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(
            <ModalOverlay onClose={props.onClose} title={props.title} >{props.children}</ModalOverlay>,
            portalElement)}
    </Fragment>
}

export default Modal;