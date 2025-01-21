import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AlertMessage({ children, variant = 'primary' }) {
    return (
        <div className={`alert alert-${variant}`} role="alert">
            {children}
        </div>
    );
}

export default AlertMessage;