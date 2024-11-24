import styled from "styled-components";
import {theme} from "../../../styles/global/Theme";

export const ResumeWrapper = styled.section`

`

export const ResumeInformationWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 25px;
    margin-bottom: 120px;

`

export const EducationContainer = styled.div`
    h4 {
        font-size: 26px;
        margin-bottom: 20px;
    }
`

export const ExperienceContainer = styled.div`
    h4 {
        font-size: 26px;
        margin-bottom: 20px;
    }
`
export const ItemArrow = styled.span`
    left: 0;
    margin-top: 2px;
    position: absolute;
`


export const ResumeItem = styled.div`

    span {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.95;
        display: inline-block;
        margin-bottom: 7px;
        color: ${theme.colors.fonts.text};
    }

    h5 {
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 100%;
        margin-bottom: 9px;
    }

    ${ItemArrow}:before {
        height: 16px;
        left: 0;
        width: 16px;
        background-color: #009e66;

        content: "";
        display: block;
        position: absolute;
    }

    ${ItemArrow}:after {
        content: '';
        position: absolute; /* Абсолютное позиционирование */
        left: 16px;
        border: 8px solid transparent;
        border-left: 8px solid #009e66;

    }

    border-bottom: 1px solid #313131;

    background-color: #161616;
    border-left: 2px solid #009e66;
    padding: 32px 48px;
    position: relative;

    &:last-child {
        border-bottom: none;
    }

`
