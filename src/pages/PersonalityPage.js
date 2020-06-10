import React from 'react'
import { ShareAlternative } from "@styled-icons/entypo/ShareAlternative"
import { ArrowBackIos } from "@styled-icons/material-rounded/ArrowBackIos";

import styled from 'styled-components'

let pJson = require("../mockdata/personalidades.json")
let pList = pJson.personalidades
const PersonalityPage = (props) => {
    console.log(props.match.params.id)
    return (
        <div className="personality-outter-container">
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