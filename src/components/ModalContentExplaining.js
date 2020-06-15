import React from 'react'
import styled from "styled-components"
import { Refund2}from "@styled-icons/remix-line/Refund2";
import {Receipt} from "@styled-icons/material-rounded/Receipt"
import {CalendarCheck} from "@styled-icons/boxicons-solid/CalendarCheck"
import {Link} from "@styled-icons/heroicons-solid/Link"


const ModalContentExplaining = (props) => {
    return (
        <div className="modal-content-container">
            
            <div className="title">Como funciona após o pedido?</div>
            <div className="modal-chart-container">
            <div className="left-container-line-chart">
                <div className="step-circle"><CalendarCheckIcon size={30} /></div>
                <div className="step-line"></div>
                <div className="step-circle"><ReceiptIcon size={28} /></div>
                <div className="step-line"></div>
                <div className="step-circle"><LinkIcon size={30} /></div>
                <div className="step-line"></div>
                <div className="step-circle"><RefundIcon size={30} /></div>
            </div>
            <div className="right-container-steps-text">
                <div className="right-container-text-area">Seu pedido vai ser completo em x dias</div>
                <div className="right-container-text-area">Seu recibo e atualizações no pedido serão enviados para o email informado nas informações de usuário.</div>
                <div className="right-container-text-area">Quando a personalidade houver completado seu pedido, um email será enviado com link para que você possa curtir e compartilhar seu vídeo</div>
                <div className="right-container-text-area">Se por algum motivo seu pedido não possa ser completado, qualquer valor sem prestação recíproca será reembolsado. Em no máximo 7 dias úteis.</div>
            </div>
            </div>
            
            <div className="title">Como funciona a Live?</div>
            <div className="modal-content-text">Agende uma live de 10min com uma personalidade.</div>
        </div>
    )
}

export default ModalContentExplaining


const RefundIcon = styled(Refund2)`
    color: #ff2022;
`
const ReceiptIcon = styled(Receipt)`
    color: #ff2022;
`
const CalendarCheckIcon = styled(CalendarCheck)`
color: #ff2022;
`

const LinkIcon = styled(Link)`
    color: #ff2022;
`