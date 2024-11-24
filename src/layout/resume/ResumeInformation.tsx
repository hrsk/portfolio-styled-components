import React from 'react';
import {
    EducationContainer,
    ExperienceContainer,
    ItemArrow,
    ResumeInformationWrapper,
    ResumeItem
} from "./skills/styles";

export const ResumeInformation = () => {
    return (
        <ResumeInformationWrapper>
            <EducationContainer>
                <h4>
                    Education
                </h4>
                <ResumeItem>
                    <ItemArrow></ItemArrow>
                    <h5>Computer Science</h5>
                    <span>Cambridge University / 2004 - 2007</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                </ResumeItem>
                <ResumeItem>
                    <ItemArrow></ItemArrow>
                    <h5>Bachelor Degree</h5>
                    <span>University of Tokyo / 2008 - 2010</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                </ResumeItem>
                <ResumeItem>
                    <ItemArrow></ItemArrow>
                    <h5>Master Degree</h5>
                    <span>Harvard University / 2012 - 2015</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                </ResumeItem>
            </EducationContainer>
            <ExperienceContainer>
                <h4>
                    Experience
                </h4>
                <ResumeItem>
                    <ItemArrow></ItemArrow>
                    <h5>Front-End Developer</h5>
                    <span>Google / 2017 - 2018</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                    </p>
                </ResumeItem>
                <ResumeItem>
                    <ItemArrow></ItemArrow>
                    <h5>Software Engineer</h5>
                    <span>Adobe / 2015 - 2017</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                    </p>
                </ResumeItem>
                <ResumeItem>
                    <ItemArrow></ItemArrow>
                    <h5>UI/UX Designer</h5>
                    <span>Discord / 2019 - Present</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                    </p>
                </ResumeItem>
            </ExperienceContainer>
        </ResumeInformationWrapper>
    );
};

