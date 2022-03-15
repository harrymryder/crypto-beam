// import { Fragment } from 'react/cjs/react.production.min';
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
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal: React.FC<{onClose: Function}> = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement)}
    </Fragment>
}

export default Modal;