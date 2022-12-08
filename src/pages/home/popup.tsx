import React from "react"
import styled from "styled-components"
import { PIButton } from "./home.styles"
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import useElementSize from "@/hooks/useElementSize";
import { useState } from "react";

type Props = {
    useShow: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export default function PopUp({ useShow }: Props) {
    const [show, setShow] = useShow;
    const [pdfRef, { width, height }] = useElementSize();
    const [page, setPage] = useState(1);

    return (
        <PopUpWrapper style={{visibility: show ? "visible" : "hidden"}}>
            <div id="content">
                <div ref={pdfRef} id="pdf">
                    <Document 
                    file="./assets/pdf.pdf">
                        <Page width={width}
                        pageNumber={page}/>
                    </Document>
                </div>
                <div id="buttons">
                    <PIButtonPopup>
                        Prescribing information and adverse event reporting
                    </PIButtonPopup>
                    <div id="buttons-page">
                        <button onClick={() => setPage(page-1)} id="up"></button>
                        <button onClick={() => setPage(page+1)} style={{ transform: "rotateX(180deg)" }}
                        id="down"></button>
                    </div>
                </div>
            </div>
            <button id="close-button" onClick={() => setShow(!show)}>
                Close
            </button>
        </PopUpWrapper>
    )
}

const PopUpWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4vw;
    #close-button {
        border-radius: 5vw;
        width: 50%;
        height: 7vw;
        font-weight: 500;
    }
    #content {
        padding-top: 5vw;
        padding-bottom: 5vw;
        display: flex;
        flex-direction: column;
        gap: 4vw;
        background: white;
        width: 90%;
        max-height: 75vh;
        #pdf {
            position: relative;
            background: gray;
            height: 90%;
            width: 90%;
            border: .5vw solid black;
            overflow-y: scroll;
        }
        #buttons {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            #buttons-page {
                display: flex;
                gap: 1vw;
                button {
                    width: 10vw;
                    height: 10vw;
                    position: relative;
                    &::before {
                        position: absolute;
                        left: 0;
                        top: 0;
                        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='133.162' height='141.975' viewBox='0 0 133.162 141.975'%3E%3Cpath id='arrow-up' d='M54.51-7.071l66.58,66.581H60.1V134.9h-10V59.51H-12.071ZM96.949,49.51,54.51,7.071,12.071,49.51Z' transform='translate(12.071 7.071)' fill='%231b3a54'/%3E%3C/svg%3E%0A");
                        background-size: 60% 60%;
                        background-repeat: no-repeat;
                        background-position: center;
                        content: "";
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
`

const PIButtonPopup = styled(PIButton)`
    width: 55%;
    height: 10vw;
    padding-right: 0;
    padding-left: 0;
    border-radius: .7vw;
    font-size: 2.3vw;
    line-height: 3.5vw;
    text-align: left;
    gap: 2vw;
    background-color: rgb(27 58 84);
`
