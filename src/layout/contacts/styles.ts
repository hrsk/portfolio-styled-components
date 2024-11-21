import styled from "styled-components";
import {theme} from "../../styles/global/Theme";

export const ContactWrapper = styled.section`
`
export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
`
export const ContactInfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    h3 {
        font-weight: 600;
        text-align: center;
    }
`

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
export const Icon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;

    svg {
        height: 30px;
        width: 30px;
        fill: ${theme.colors.primaryColor};
    }
`

export const Field = styled.input.attrs((props) => ({
    type: props.type,
    placeholder: props.placeholder,
}))`
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.1em;
    color: ${theme.colors.fonts.font};
    padding: 4px 8px;
    width: 100%;
    background-color: #161616;
    text-transform: capitalize;
    border: none;

    &:focus {
        border-bottom: 2px solid ${theme.colors.primaryColor};
    }

    &::placeholder {
        color: ${theme.colors.fonts.text};
    }

    &:focus-visible {
        outline: none;
    }
`;

export const Button = styled.button.attrs((props) => ({
    type: props.type || 'submit'
}))`
    width: max-content;
    cursor: pointer;
    border-radius: 30px;
    background-color: ${theme.colors.primaryColor};
    border: 1px solid ${theme.colors.primaryColor};
    grid-area: 5 / 1 / 6 / 3;
    padding: 10px 35px;
`

export const Form = styled.form`

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 0.4fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    min-width: 570px;

    h3 {
        grid-area: 1 / 1 / 2 / 3;
        font-weight: 600;
        text-align: center;
    }

    textarea {
        grid-area: 4 / 1 / 5 / 3;
        width: 100%;
        height: 125px;
        background-color: #161616;
        resize: none;
    }

`
