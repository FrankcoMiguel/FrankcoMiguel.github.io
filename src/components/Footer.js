import React from 'react'
import './Footer.scss'
import {FaHeart} from 'react-icons/fa'
import Tippy from '@tippyjs/react'



const Footer = () => {
    return(
        <div className="Footer">
            <p>®Frank Orozco 2019 - 2021</p>
            <div className="Row">
                <p>All rights reserved. Built with</p>
                <FaHeart />
                <p>using</p>
                <Tippy content="GatsbyJS" placement="right"><a href='https://www.gatsbyjs.com/'><i className="devicon-gatsby-plain colored"></i></a></Tippy>
            </div>
        </div>
    )
}

export default Footer