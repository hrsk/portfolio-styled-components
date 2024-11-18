import React from "react";
import styled from "styled-components";
import {theme} from "../../styles/global/Theme";
import {FlexWrapper, Container, SocialMediaList} from "../../components";

export const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <FlexWrapper direction={'row'} align={'center'} justify={'space-evenly'}>
                    <Copyright>Yahor Hurski</Copyright>
                    <SocialMediaList/>
                </FlexWrapper>
            </Container>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
    padding: 15px;
`

const Copyright = styled.small`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.1em;
    color: ${theme.colors.fonts.text}
`
