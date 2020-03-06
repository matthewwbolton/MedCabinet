import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from '../../img/header_img.jpg';

const NewDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-image: url(${Image});
    height: 20vh;
`;

const InnerDiv = styled.div`
    display:flex;
    flex-direction: column;
    width: 30%;
    text-align: start;
    margin-left: 5%;
`;

const HeaderH1 = styled.h1`
    color: #2f5973;
`;

const HeaderButton = styled.button`
    width: 30%;
    background-color: #70bccf;
    color: white;
    border-radius: 5%;
`;


const StrainsHeader = () => {
    return (
        <NewDiv className='browse-header'>
            <InnerDiv>
                <HeaderH1>The Cannabis Guide<br>
                </br>Just For You</HeaderH1>
                <Link to='/register'>
                    <HeaderButton type='button'>Register Now</HeaderButton>
                </Link>
            </InnerDiv>
        </NewDiv>
    );
};

export default StrainsHeader;