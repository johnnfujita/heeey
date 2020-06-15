import React from 'react'

const BookPalinha = () => {
    return (
        <div className="booking-container">
            <div className="booking-center-container">
                <div className="booking-left-container">
                    <div className="palinha-info-container">
                        <div className="title"></div>
                        <div className="receiver-selection-fields-container">
                            <label className="receiver-selection-label" htmlFor=""></label>
                            <input  type="radio" name="Outra Pessoa" id="radio-outra"/>
                            <input type="radio" name="Para mim" id="radio-voce"/>
                        </div>
                        <div className="to-from-container">
                            <div className="to-container">
                                <div className="booking-form-label">Para</div>
                                <input type="text" name="To" id="" className="form-input-text"/>
                            </div>
                            <div className="from-container">
                                <div className="booking-form-label">De</div>
                                <input type="text" name="From" id="" className="form-input-text"/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="booking-right-container"></div>
            </div>
            
        </div>
    )
}

export default BookPalinha 
