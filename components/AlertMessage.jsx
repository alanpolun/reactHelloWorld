import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AlertMessage({ children, variant = 'primary', onClose }) {

    return (
        <div className={`alert alert-${variant} alert-dismissible`} role="alert">
            {children}
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose} />
        </div>
    );
}

export default AlertMessage;