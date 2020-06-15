import React, { useState, forwardRef, useImperativeHandle } from 'react'

const Modal = forwardRef((props, ref) => {

    const [modalState, setModalState] = useState(false);
    
    useImperativeHandle(ref, ()=>{
        return {
            openModal: () => openModal(),
            closeModal:()=> closeModal()
        }
    })

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

            <div className={`modal-content-pure modal-content-${modalState}`}>
                <div className="close-area">
                    <div onClick={()=>closeModal()} className="close-button">x</div>
                </div>
                {props.children}
            </div>

        </div>
       
        </>
    )
})

export default Modal