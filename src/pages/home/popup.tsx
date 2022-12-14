import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { PIButton } from "./home.styles"
import { useState } from "react";

type Props = {
    useShow: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export default function PopUp({ useShow }: Props) {
    const [show, setShow] = useShow;
    const [page, setPage] = useState(1);
    const pdfRef = useRef<HTMLDivElement | null>();
    const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
    const [allowScrolling, setAllowScrolling] = useState(true);
    
    const onNavClick = (p: number) => {
        setAllowScrolling(false);
        pdfRef.current!.querySelector(`#pdf${p}`)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    useEffect(() => {
        if (pdfRef.current) {
        pdfRef.current.querySelector(`#pdf${page}`)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, [page]);

    useEffect(() => {
        if (pdfRef.current && allowScrolling) {
          pdfRef.current.addEventListener("scroll", () => {
            // Get all the image elements within the #pdf element
            const images = Array.from(pdfRef.current!.querySelectorAll('img'));
            // Get the center coordinates of the #pdf element
            const pdfRect = pdfRef.current!.getBoundingClientRect();
            const pdfCenterX = pdfRect.left + pdfRect.width / 2;
            const pdfCenterY = pdfRect.top + pdfRect.height / 2;
            // Get the closest image to the center of the #pdf element
            const closestImage = images.reduce((acc, curr) => {
                const currRect = curr.getBoundingClientRect();
                const currCenterX = currRect.left + currRect.width / 2;
                const currCenterY = currRect.top + currRect.height / 2;
                const currDistance = Math.hypot(currCenterX - pdfCenterX, currCenterY - pdfCenterY);
                const accDistance = Math.hypot(acc.getBoundingClientRect().left + acc.getBoundingClientRect().width / 2 - pdfCenterX, acc.getBoundingClientRect().top + acc.getBoundingClientRect().height / 2 - pdfCenterY);
                return currDistance < accDistance ? curr : acc;
            });
            // Set the page state to the id of the closest image
            const closestImageId = closestImage.getAttribute('id');
            setPage(Number(closestImageId!.replace('pdf', '')));
          });
        }
      }, [pdfRef]);
      
      
    return (
        <PopUpWrapper style={{visibility: show ? "visible" : "hidden"}}>
            <div id="content">
                <div ref={el => pdfRef.current = el} id="pdf">
                    {[1,2,3].map(imgIndex => {
                        return <img 
                        ref={el => imgRefs.current[imgIndex] = el}
                        style={{
                            width: "100%",
                            height: "100%"
                        }} id={`pdf${imgIndex}`} src="./assets/p1.png" alt="" />
                    })}
                </div>
                <div id="buttons">
                    <PIButtonPopup>
                        SmPC and adverse <br/> event reporting
                    </PIButtonPopup>
                    <div id="buttons-page">
                        <button onClick={() => onNavClick(page-1)} id="up"></button>
                        <button onClick={() => onNavClick(page+1)} style={{ transform: "rotateX(180deg)" }}
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
        max-height: 70vh;
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
                    border-radius: 5vw;
                    &::before {
                        position: absolute;
                        left: 0;
                        top: 0;
                        background-image: url("./assets/arrow-up.png");
                        background-size: 50% 50%;
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

    height: 10vw;
    padding-right: 5vw;
    padding-left: 0;
    border-radius: .7vw;
    font-size: 2.5vw;
    line-height: 3.5vw;
    text-align: left;
    gap: 2vw;
    background-color: rgb(27 58 84);
`
