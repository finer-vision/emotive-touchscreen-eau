import styled from "styled-components";

export const HomeWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    @media (max-width: 2048px) {
        overflow: auto;
    }
    font-family: "proxima-nova";

    h1 {
        padding: 7vw;
        padding-bottom: 4vw;
        padding-top: 4vw;
        font-size: 4.3vw;
        line-height: 5vw;
        font-weight: bold;
    }
    #video {
        position: relative;
        display: flex;
        flex-grow: 1;
        background: rgb(15,38,58);
        width: 100%;
        justify-content: center;
        video {
            background: black;
            width: 100%;
        }
        #play {
            width: 10vw;
            height: 10vw;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10;
        }
        #thumbnail {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 5;
        }
    }
    #content {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        align-items: center;
    }
    #description {
        padding: 6vw;
        padding-top: 3vw;
        padding-bottom: 4vw;
    }
    #boxes {
        gap: 3vw;
        justify-content: center;
        display: flex;
    }
    sup {
        font-size: 70%;
        display: inline-block;
        transform: translateY(-10%);
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 3vw;
            line-height: 4vw;
        }
        #description {
            padding: 2vw;
            font-size: 1.7vw;
            line-height: 2.7vw;
        }
        video {
            max-height: 100%;
        }
    }
`;

type BoxProps = {
    content: string;
}

export const Box = styled.div<BoxProps>`
    border-radius: 1.4vw;
    font-size: 2.7vw;
    line-height: 3vw;
    padding: 2.3vw;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgb(253 200 29);
    color: #1B3A54;
    aspect-ratio: 1.2;
    width: 22vw;
    text-align: center;
    font-weight: bold; 
    white-space: pre;
    &::before {
        content: "${props => props.content}";
    }
    &::after { 
        height: 3vw;
        content: " ";
        background-image: url("data:image/svg+xml,%3Csvg id='plus-icon_copy' data-name='plus-icon copy' xmlns='http://www.w3.org/2000/svg' width='77' height='77' viewBox='0 0 77 77'%3E%3Crect id='Rectangle' width='12' height='77' transform='translate(32.5)' fill='%231b3a54'/%3E%3Crect id='Rectangle_Copy_5' data-name='Rectangle Copy 5' width='12' height='77' transform='translate(77 32.5) rotate(90)' fill='%231b3a54'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
`

export const PIButton = styled.button`
    position: relative;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 2.2vw;
    background-color: rgb(51 79 102);
    color: rgb(253 200 29);
    border: 0.3vw solid rgb(253 200 29);
    border-radius: 1.4vw;
    font-weight: bold;
    padding: 1.5vw;
    padding-right: 5vw;
    font-size: 2.3vw;
    margin-top: 4vw;
    margin-bottom: 4vw;
    &::before {
        content: " ";
        background-image: url("data:image/svg+xml,%3Csvg id='PI_icon' xmlns='http://www.w3.org/2000/svg' width='99.81' height='131' viewBox='0 0 99.81 131'%3E%3Cpath id='Fill_1' data-name='Fill 1' d='M90.453,131H9.357A9.368,9.368,0,0,1,0,121.643V9.357A9.368,9.368,0,0,1,9.357,0H72.986L99.809,26.824v94.819A9.367,9.367,0,0,1,90.453,131ZM9.357,6.238A3.123,3.123,0,0,0,6.238,9.357V121.643a3.122,3.122,0,0,0,3.119,3.118h81.1a3.122,3.122,0,0,0,3.118-3.118V31.19h-15.6a9.368,9.368,0,0,1-9.357-9.357V6.238Zm65.5,4.367V21.833a3.122,3.122,0,0,0,3.118,3.119H89.2Zm0,82.966h-49.9V87.333h49.9V93.57Zm0-18.714h-49.9V68.619h49.9v6.238ZM62.381,56.143H24.953V49.9H62.381v6.237Z' fill='%23fdc81d'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 5vw;
        height: 5vw;
        margin-left: 3vw;
        
    }
`

export const Footer = styled.footer`
    --small: 1.27vw;
    background-color: rgb(15 38 58);
    padding: 3vw;
    font-size: 1.8vw;
    line-height: 2.5vw;
    gap: 1.6vw;
    display: flex;
    flex-direction: column;
    ul  {
        list-style: none;
        font-size: var(--small);
    }
    #center { 
        gap: 7.6vw;
        padding: 2vw;
        border: 0.3vw solid white;
        font-size: var(--small);
        line-height: 1.7vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    #bottom {
        display: flex;
        flex-direction: column;
        gap: .7vw;
        font-size: var(--small);
        line-height: 2vw;
        #details {
            #legal {
                width: 48vw;
                text-align: right;
            }
            display: flex;
        }
    }

    @media (max-width: 1024px) {
        --small: 1.13vw;
    }
`