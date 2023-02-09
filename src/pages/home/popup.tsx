import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { PIButton, BackToTopButton } from "./home.styles"
import { Path } from "./home";
import assets from "@/config/assets";
import popupLinks from "./popup-links";

type Props = {
    useShow: [Path, React.Dispatch<React.SetStateAction<Path>>],
}

const pages: { [key: string]: number } = {
    keydata: 6,
    oabinmen: 19,
    oabin65: 14,
    cvsafety: 9,
    smpc: 101
}

export default function PopUp({ useShow }: Props) {
    const [show, setShow] = useShow;
    const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
    const pdfRef = useRef<HTMLDivElement | null>(null);
    const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
    
    useEffect(() => {
        setLoadedImages([]);
        pdfRef.current?.scroll({
            top: 0
        })
    }, [show])

    const getCurrentPage = () => {
        const pdf = pdfRef.current;
        const imgs = imgRefs.current;
      
        if (!pdf || !imgs.length) return -1;
      
        const pdfRect = pdf.getBoundingClientRect();
        const centerX = pdfRect.left + pdfRect.width / 2;
        const centerY = pdfRect.top + pdfRect.height / 2;
      
        let closestDist = Number.MAX_SAFE_INTEGER;
        let closestImg = -1;
      
        for (let i = 0; i < imgs.length; i++) {
          const img = imgs[i];
          if (!img) continue;
          const imgRect = img.getBoundingClientRect();
          const imgCenterX = imgRect.left + imgRect.width / 2;
          const imgCenterY = imgRect.top + imgRect.height / 2;
          const dist =
            Math.pow(centerX - imgCenterX, 2) + Math.pow(centerY - imgCenterY, 2);
          if (dist < closestDist) {
            closestDist = dist;
            closestImg = i;
          }
        }
      
        return closestImg;
    };

    const handleUpClick = () => {
        const imgs = imgRefs.current;
        const currentPage = getCurrentPage();
        if (currentPage < 0 || currentPage === 0) return;
      
        const prevPage = imgs[currentPage - 1];
        if (!prevPage) return;
      
        const prevPageRect = prevPage.getBoundingClientRect();
        const pdfRect = pdfRef.current?.getBoundingClientRect();
      
        if (!prevPageRect || !pdfRect) return;
      
        const pdfScrollTop = pdfRef.current!.scrollTop;
        const prevPageTop = prevPageRect.top - pdfRect.top;
      
        pdfRef.current!.scroll({
          top: pdfScrollTop + prevPageTop,
          behavior: 'smooth',
        });
      };

      
      const handleDownClick = () => {
        const imgs = imgRefs.current;
        const currentPage = getCurrentPage();
        if (currentPage < 0 || currentPage === imgs.length - 1) return;
      
        const nextPage = imgs[currentPage + 1];
        if (!nextPage) return;
      
        const nextPageRect = nextPage.getBoundingClientRect();
        const pdfRect = pdfRef.current?.getBoundingClientRect();
      
        if (!nextPageRect || !pdfRect) return;
      
        const pdfScrollTop = pdfRef.current!.scrollTop;
        const nextPageTop = nextPageRect.top - pdfRect.top;
      
        pdfRef.current!.scroll({
          top: pdfScrollTop + nextPageTop,
          behavior: 'smooth',
        });
      };

      const loaded = (imageIndex: number): boolean => {
        if (imageIndex < 0) {
            return true;
        } else if (!loadedImages[imageIndex]) {
            return false;
        } else {
            return loaded(imageIndex - 1);
        }
      }

    if (!show) {
      return null;
    }
  
    return (
      <PopUpWrapper>
        <div id="content">
          <div ref={(el) => (pdfRef.current = el)} id="pdf">
            {Object.entries(pages).map(([key, size], i) => {
                return <React.Fragment key={key}>
                {show === key && [...Array(size).keys()].map((imgIndex) => {
                    const page = `${imgIndex + 1}`.padStart(3, '0');

                    return (
                        <div id={`page-${imgIndex}`}
                        style={{position: "relative"}}>
                            <img
                                loading={imgIndex <= 3 ? "eager" : "lazy"}
                                key={imgIndex}
                                ref={(el) => (imgRefs.current[imgIndex] = el)}
                                src={assets[`${key}${page}`]}
                                onLoad={() => {
                                    loadedImages[imgIndex] = true;
                                    setLoadedImages({...loadedImages});
                            }}/>
                            <BackToTopButton/>
                            {imgIndex === 0 && 
                              <button id="nav-smpc"
                              onClick={() => setShow("smpc")}>

                              </button>
                            }
                            {popupLinks[key] && popupLinks[key][imgIndex] && 
                              Object.entries(popupLinks[key][imgIndex]).map(([_, {width, top, left, height, to}]) => {
                                return (
                                  <button 
                                  onClick={() => {
                                    document.getElementById(`page-${to}`).scrollIntoView({behavior: "smooth"})
                                  }}
                                  style={{
                                    position: "absolute",
                                    width: `${width}%`,
                                    top: `${top}%`,
                                    left: `${left}%`,
                                    height: `${height}%`,
                                    backgroundColor: "rgba(255,0,0,0)",
                                    zIndex: 100,
                                    cursor: "pointer"
                                  }}></button>   
                                )
                              })
                            }
                        </div>    
                    );
                    })}
                </React.Fragment>
            })}
          </div>
          <div id="buttons">
             <PIButtonPopup 
             show={show !== "smpc"}
             onClick={() => setShow("smpc")}>
              SmPC and adverse <br /> event reporting
            </PIButtonPopup>
            <div id="buttons-page">
              <button 
              onClick={handleUpClick}
              id="up"></button>
              <button
                onClick={handleDownClick}
                style={{ transform: 'rotateX(180deg)' }}
                id="down"
              ></button>
            </div>
          </div>
        </div>
        <button id="close-button" onClick={() => setShow(false)}>
          Close
        </button>
      </PopUpWrapper>
    );
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
    & #nav-smpc {
      position: absolute;
      top: 0;
      right: 0;
      height: 5%;
      width: 33%;
      background: rgba(0,0,0,0);
      cursor: pointer;
    }
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
        min-height: 70vh;
        max-height: 70vh;
        #pdf {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1vw;
            position: relative;
            background: gray;
            height: 90%;
            width: 90%;
            border: .5vw solid black;
            overflow-y: scroll;
            img {
                width: 100%;
            }
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

type PIButtonPopupProps = {
    show: boolean
}

const PIButtonPopup = styled(PIButton)<PIButtonPopupProps>`
    visibility: ${props => props.show ? 'visible' : 'hidden'};
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
