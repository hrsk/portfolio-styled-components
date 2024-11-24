import React from 'react';
import {Container, FlexWrapper, SectionHeader, Header} from "../../components";
import {Skills} from "./skills/Skills";
import {ResumeInformation} from "./ResumeInformation";
import {ResumeWrapper} from "./skills/styles";

export const Resume = () => {
    return (
        <ResumeWrapper>
            <Header description={'Check out my resume'} title={'Resume'}/>
            <FlexWrapper>
                <Container>
                    <ResumeInformation/>
                    <SectionHeader description={'My level of knowledge in some tools'} title={'My Skills'}/>
                    <Skills/>
                </Container>
            </FlexWrapper>
        </ResumeWrapper>
    );
};





