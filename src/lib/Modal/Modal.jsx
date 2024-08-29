import React from 'react';
import './Modal.css'
import PropTypes from 'prop-types'


function Modal({isOpen , onClose , children}) {

    if(!isOpen) return null ;

    return (
        <div className="modal">

            <div className="modal-content">

                {/* <button className="close" onClick={onClose}>
                    &times;
                </button> */}
                {children}

            </div>

        </div>
    );
}


Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
};

  
export default Modal;