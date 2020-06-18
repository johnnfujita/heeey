import React,{ useState} from 'react';
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import {ShoppingCart} from "@styled-icons/material-outlined/ShoppingCart";


const messageOptions = ["Mensagem", "Conselho Pessoal", "Dica Técnica", "Palinha Personalizada" ]
const BookPalinha = (props) => {
    

    

    const [selectionToggle, setSelectToggle] = useState(false);
    const [selectedOccasion, setSelectedOccasion] = useState("Mensagem");
  
    const handleSelectedOccasion = (e) => {
        
        setSelectedOccasion(e.target.textContent)
        console.log(selectedOccasion)
        handleSelectionToggle()
     
    }
    const handleSelectionToggle = e => {
        setSelectToggle(!selectionToggle);
       
    }
    return (
        <div className="booking-container">
            <div className="booking-center-container">
                <Formik
                    initialValues={
                        { 
                            destinatary: "", 
                            to: "", 
                            from: "", 
                            occasion: "Mensagem", 
                            instructions: "", 
                            contactEmail: "", 
                            contactPhone: "", 
                            subscribe: true, 
                            private: false, 
                            cardInfo: { 
                                number: "", 
                                exp: "", 
                                cvc: "", 
                                cardholderName: "", 
                                promoCode: ""
                            }
                        }
                    }
                    onSubmit={ (data, {setSubmitting}) => {
                        setSubmitting(true);
                        console.log(data);
                        setSubmitting(false);
                    }}
                >
                    {({values, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
                    
                        values.occasion = selectedOccasion
                        
                        return (
                        <div className="booking-left-container">
                        <Form onSubmit={handleSubmit} className="palinha-info-container">
                            <div className="title">Crie uma Palinha com ARTISTA</div>
                            <div className="receiver-selection-fields-container">
                            <div className="labelfield">Esse vídeo é para:</div>
                                <div className="radio-option-group">
                                    
                                    <Field  type="radio"  name="destinatary" id="paraOutra" className="checkbutton-field" value="paraOutra"/>
                                    <label className="receiver-selection-label labelfield" htmlFor="paraOutra">Outra Pessoa</label>
                                </div>
                                
                                <div className="radio-option-group">
                                <Field type="radio"  name="destinatary" id="paraMim" value="paraMim"/>
                                <label className="receiver-selection-label labelfield" htmlFor="paraMim">Mim</label>
                                </div>
                            </div>
                            <div className="to-from-container">
                                <div className="to-container">
                                    <label className="booking-form-label labelfield" htmlFor="booking-para">Para</label>
                                    <Field type="text" name="to" id="booking-para" placeholder="Loiro Maia" className="form-input-text"/>
                                </div>
                                <div className="from-container">
                                    <label className="booking-form-label labelfield" htmlFor="booking-de">De</label>
                                    <Field type="text" name="From" id="booking-de" placeholder="Liberato Junior" className="form-input-text"/>
                                </div>
                            </div>
                            <div className="new-occasion">
                               
                            </div>
                            <div className={`occasion-group occasion-group-${selectionToggle}`}>
                                <label htmlFor="occasion-options" className="labelfield">Qual o motivo?</label>
                                <div className="occasion-custom-selection">
                                    <span><Field name="occasion"  readonly="readonly" className="toggle-selection-occasion" onClick={handleSelectionToggle}/></span>
                                    <div className={` occasion-container occasion-options-${selectionToggle}`}>
                                        {
                                                
                                                selectionToggle && messageOptions.map((occasion, idx) => {
                                                    return (
                                                      
                                                            <option key={idx} name="occasion"
                                                                    type="select"
                                                                    className={`occasion-options `}
                                                                    onClick={handleSelectedOccasion}
                                                                    value={occasion}
                                                                    >{occasion}</option>
                                                       
                                                    )
                                                })
                                            
                                        }
                                    </div>
                                        
                                
                                </div>
                                
                            </div>
                            <div className="message-instructions-group">
                                <label htmlFor="intructions-input" className="labelfield label-meu-pedido">Meu pedido:</label>
                                <Field name="instructions" maxlength="350"component="textarea" type="text" className="form-input-text"  id="intructions-input" placeholder="Diga pra ele para parar de babar político e ir pagar os calote dele."/>
                            </div>

                            <div className="contact-info-group">
                                <div className="title">Informação de contato</div>
                                <div className="explanation-text">para onde enviaremos o recibo e updates dos pedidos</div>
                                <div className="email-cellphone-container">
                                <div className="email-group">
                                    <label htmlFor="contact-email-field" className="labelfield">Email</label>
                                        <Field type="email" placeholder="wicarpp@microappollis.com" name="contact-email" id="contact-email-field" />
                                </div>
                                <div className="cellphone-group">
                                    <label htmlFor="contact-cellphone-field" className="labelfield">Text Me</label>
                                        <Field type="tel" placeholder="+55 85 98852353"name="contact-cellphone" id="contact-cellphone-field" />
                                </div>
                                </div>
                                
                            </div>
                            <div className="subscribe-group">
                            <Field  className="subscribe-check" id="subscribe-checkfield"type="checkbox" name="subscribe" />                            
                                <label htmlFor="subscribe-checkfield" className="labelfield">Me informe de promoções e novidades</label>
                                
                            </div>
                            <div className="private-option">
                            <Field  className="private-check" id="private"type="checkbox" name="private" /> 
                                <label htmlFor="private" className="labelfield">Manter o vídeo oculto do profile do artista</label>
                                                           
                            </div>
                            <div className="payment-data-group">
                                <div className="title">Dados do Cartão</div>
                                <div className="explanations-group">
                                    <div className="explanation-text">No caso do artista não confirmar a realização do vídeo, qualquer cobrança é retornada. </div>

                                </div>
                                <label htmlFor="cardinfo-number-field" className="labelfield"></label>
                                <Field name="cardInfo.number" type="text" id="cardinfo-number-field" />
                                <label htmlFor="cardinfo-exp-field" className="labelfield"></label>
                                <Field name="cardInfo.exp" type="text" id="cardinfo-exp-field" />
                                <label htmlFor="cardinfo-cvc-field" className="labelfield"></label>
                                <Field name="cardInfo.cvc" type="text" id="cardinfo-cvc-field" />
                                <label htmlFor="cardinfo-name-field" className="labelfield"></label>
                                <Field name="cardInfo.name" type="text" id="cardinfo-name-field" />
                            </div>
                            <button disabled={isSubmitting} className="submit-request-button"type="submit"><ShoppingCartIcon size={24} /> Checkout $100</button>

                        </Form>
                    </div>
                    )}}

                    
                </Formik>
                <div className="booking-right-container"></div>
                </div>
            
        </div>
    )
}

export default BookPalinha 


const ShoppingCartIcon = styled(ShoppingCart)`
`