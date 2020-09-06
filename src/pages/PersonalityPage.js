import React, {useRef} from 'react'
import { Link } from "react-router-dom"
import { ShareAlternative } from "@styled-icons/entypo/ShareAlternative"
import { ArrowBackIos } from "@styled-icons/material-rounded/ArrowBackIos";
import { Info } from "@styled-icons/material-outlined/Info";
import { FileTextOutline } from "@styled-icons/evaicons-outline/FileTextOutline";
import {UserVoice} from "@styled-icons/boxicons-solid/UserVoice"
import {MessageCheck } from "@styled-icons/boxicons-regular/MessageCheck";
import styled from 'styled-components'
import { VideoOutline} from "@styled-icons/evaicons-outline/VideoOutline";

import Modal from "../components/Modal";
import ModalContentExplaining from '../components/ModalContentExplaining';

let pJson = require("../mockdata/personalidades.json")
let pList = pJson.personalidades
const PersonalityPage = (props) => {
    
    const modalRef = useRef()

    const openModal = () => {
        modalRef.current.openModal()
    }

    return (
        <div className="personality-outter-container">
            <Modal ref={modalRef}>
            <ModalContentExplaining />
            </Modal>
            <div className="personality-container">
               <div className="personality-header">
                   <div className="personality-top-buttons">
                       <div className="personality-left-side-buttons">
                           <div className="personality-back-button"><ArrowBackIosIcon size={18} /></div>
                       </div>
                       <div className="personality-right-side-buttons">
                           <div className="personality-share-button"><ShareIcon size={20} /></div>
                           <div className="personality-follow-button">Follow</div>
                       </div>
                   </div>
                   <div className="personality-header-content">
                       <div className="personality-header-left-container">
                           <div className="personality-picture-container">
                            <img src={require(`../assets/images/${pList[props.match.params.id].profilePic}.jpg`)} alt="" className="personality-picture"/>
                           </div>
                           
                       </div>
                       <div className="personality-header-right-container">
                           <div className="personality-info">
                            <div className="personality-title">{pList[props.match.params.id].nome}</div>
                               <div className="personality-description">{pList[props.match.params.id].bestKnownFor}</div>
                               <div className="personality-category">{pList[props.match.params.id].categories[0]}</div>
                           </div>
                           <div className="contents-delivered">1M followers </div>
                       </div>
                   </div>
               </div>

                <div className="button-and-how-to-container">
                    <Link to={`/book/${props.match.params.id}`} className="button-contract">CONECTE-SE &nbsp;R${pList[props.match.params.id].price}</Link>
                    <div className="how-to-button" onClick={()=> openModal()}> <InfoIcon size={24} /> &nbsp;Como Funciona?</div>
                </div>

                <div className="complementary-info-container">
                    <div className="ttr-hash-container">
                        <div className="respond-container">
                            <div className="respond-label">Responde em</div>
                            <div className="respond-text">{pList[props.match.params.id].dta} Dias</div>
                        </div>
                        <div className="hashes">{pList[props.match.params.id].hashes.map((hash) =>(<a className="hash-anchors"href="https://google.com">{hash}</a>) )}</div>
                    </div>

                    <div className="personality-bottom-container">
                    <div className="personality-left-bottom-container">
                        <div className="header-left-bottom">O que é HEEEY?</div>
                        <div className="content-left-bottom">
                            <div className="first-step">
                                <div className="icon-first-step"><DocumentTextIcon size={24} /> + <UserVoiceIcon size={30} /> </div>
                                <div className="text-first-step">Selecione Interprete & Conteúdo</div>
                            </div>
                            <div className="second-step">
                                <div className="icon-second-step"><MessageCheckIcon size={30} /></div>
                                <div className="text-second-step">Envie ao Interprete</div>
                            </div>
                            <div className="third-step">
                                <div className="icon-third-step"><VideoOutlineIcon size={30} /></div>
                                <div className="text-third-step">Receba o Vídeo Final</div>
                            </div>
                        </div>
                    </div>

                    <div className="personality-right-bottom-container">
                        <div className="header-right-bottom">Exemplo de conteúdo:</div>
                        <div className="content-right-bottom">"Meu irmão João está passando por um período díficil porque não passou no vestibular de medicina pela 2a vez, ele é seu fan, desde 2010 não perdeu um show seu em São Luiz, em todas as festas da galera, ele vira seu cover(bom cover, por sinal). Uma mensagem de ânimo pra continuar tentando seria ótimo. "</div>
                    </div>
                </div>


                </div>

                
            </div>
        </div>
    )
}

export default PersonalityPage

const ShareIcon = styled(ShareAlternative)`
    color: white;
`
const ArrowBackIosIcon = styled(ArrowBackIos)`
color:white;
`

const InfoIcon = styled(Info) `
    color: white
`

const DocumentTextIcon = styled(FileTextOutline)`
    color: white;
`
const UserVoiceIcon = styled(UserVoice)`
    color: white;
`
const MessageCheckIcon = styled(MessageCheck)`
    color: white;
`
const VideoOutlineIcon = styled(VideoOutline)`
    color: white;
`