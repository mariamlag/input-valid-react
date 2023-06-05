import styled,{css} from "styled-components";

export const Input = styled.input<{invalid:boolean}>`
    ${props => css`

        background: ${({ theme})=> theme.inputBackground};
        border-radius: ${({ theme})=> theme.inputBorderRadius};

        border: 1px solid ${props.invalid ? "red" : "#DEDEDE"};
     

        width: 100%;
        height: 5.6rem;
        padding-left: 1.9rem;
        &::placeholder {
            color: ${({ theme })=> theme.colors.inputColor};
            font-size: 1.4rem;
            font-weight: 600;
            opacity: 0.75;
        
        }
        &:hover {
            outline: 1px solid ${({theme})=> theme.colors.purple};
        }
    `} 
`;

export const FirstComponentCont = styled.div`
         display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media (min-width: 1440px) {
            flex-direction: row;
            gap: 4.5rem;
   }
        
`
export const FirstLearnDiv = styled.div`
    width: 32.7rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    & h1 {
        font-weight: 700;
        font-size: 2.8rem;
        line-height: 3.6rem;
    }
    & p {
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.6rem;
    }

    @media (min-width: 1440px) {
        text-align: start;
        width: 52.5rem;
        & h1{
            font-size: 5rem;
            line-height: 5.5rem;
        }
   }
`
export const Container = styled.div`
    background-color: ${({theme})=> theme.colors.white};
    padding: 2.4rem;
    width: 32.7rem;
    box-shadow: ${({theme})=> theme.boxShadowContainer};
   border-radius: 1rem;

   @media (min-width: 1440px) {
    width: 54rem;
    padding: 4rem;
   }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (min-width: 1440px) {
        gap: 2rem;
   }
`
export const Submit = styled.button`
    all: unset;
    text-align: center;
    color: ${({theme})=> theme.colors.white};
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.6rem;
    background-color: ${({theme})=> theme.colors.green};
    border-radius: ${({ theme})=> theme.inputBorderRadius};
    width: 100%;
    height: 5.6rem;
    &:hover {
        background-color: ${({theme})=> theme.colors.lightGreen};
    }
`

export const PurpleDiv = styled.div`
    background-color: ${({theme}) => theme.colors.purple};
    height: 8.8rem;
    border-radius: ${({theme})=> theme.divBorder};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32.7rem;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.6rem;
    padding: 1.8rem 6.6rem;
    margin-bottom: 2.4rem;
    margin-top: 6.4rem;

    @media (min-width: 1440px) {
        width: 54rem;
        height: 6rem;
   }
`

export const Parag = styled.p`
    color: ${({theme})=> theme.colors.lightPurple};
    margin-top: 0.8rem;
    font-size: 1.1rem;
    line-height: 2.1rem;
    text-align: center;
`
export const Span = styled.strong`
    color: ${({theme})=>theme.colors.red};
`


