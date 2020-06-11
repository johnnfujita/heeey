import React, { useState } from 'react'

const Modal = (props) => {

    const [modalState, setModalState] = useState(false);
    
    const openModal = () => {
        console.log(modalState)
        setModalState(true)
        
    }
    
    const closeModal = () => {
        console.log(modalState)
        setModalState(false)
    }

    return (
        <>
        <div className={`modal-background modal-showing-${modalState}`}>
            <button onClick={()=> openModal()}>open Modal</button>
            <button onClick={()=> closeModal()}> close Modal</button>
            <div className={`modal-content-pure modal-content-${modalState}`}>jfdojfo</div>
        </div>
        <button onClick={()=> openModal()}>open Modal</button>
        </>
    )
}

export default Modal