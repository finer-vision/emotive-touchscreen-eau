import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { PIButton, BackToTopButton } from "./home.styles"
import assets from "@/config/assets";
import popupLinks from "./popup-links-touchscreen";
import { Path, usePathState } from "@/state";
import { AnimatePresence, motion } from "framer-motion";

const pages: { [key: string]: number } = {
    keydata: 6,
    oabinmen: 19,
    oabin65: 14,
    cvsafety: 9,
    smpc: 101
}

export default function PopupTouchscreen() {
    const {path, setPath} = usePathState();
    const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
    const pdfRef = useRef<HTMLDivElement | null>(null);
    const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
    const [page, setPage] = useState(0);

    const currentImages = [... new Array(pages[path])].map((_, i) => {
      return `./assets/${path}/${`${(i + 1)}`.padStart(3, '0')}.png`
    })
    
    useEffect(() => {
      console.log(currentImages)
        setLoadedImages([]);
        pdfRef.current?.scroll({
            top: 0
        })
    }, [path])


      const loaded = (imageIndex: number): boolean => {
        if (imageIndex < 0) {
            return true;
        } else if (!loadedImages[imageIndex]) {
            return false;
        } else {
            return loaded(imageIndex - 1);
        }
      }

    const handleNextPage = () => {
        const lastPage = pages[path] - 1;
        if (page < lastPage) {
            setPage(page => page + 1);
        }
    }

    const handlePrevPage = () => {
      if((page - 1) === -1) return 
      setPage(page => page - 1);
    }

    useEffect(() => {
      setPage(0)
    }, [path])

    if (!path) {
      return null;
    }
  
    return (
      <PopUpWrapper>
        <div style={{
          minHeight: "82vh"
        }}
        id="content">
          <div
          style={{
            overflow: "hidden",
          }}
          ref={(el) => (pdfRef.current = el)} id="pdf">
            <AnimatePresence>
            {currentImages.map((src, i) => {
              return (
                <div style={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}>
                  <motion.img 
                  animate={{
                    opacity: page === i ? 1 : 0,
                  }}
                  src={src}
                  style={{
                    position: "absolute",
                    top: 0,
                    objectFit: "contain",
                    height: "100%",
                    overflow: "hidden",
                  }}
                  />
                  <BackToTopButton onClick={() => {
                    setPage(0)
                  }}
                  style={{
                    transform: "translateY(25%)"
                  }}/>
                  {path && popupLinks[path] && popupLinks[path][page] && Object.entries(popupLinks[path][page]).map(([_, {
                    top,
                    left,
                    width,
                    height,
                    to
                  }]) => {
                    return (
                      <button 
                      onClick={() => {
                        setPage(to)
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
                  })}
                </div>
              )
            })}
            </AnimatePresence>
          </div>
          <div id="buttons">
             <PIButtonPopup 
             path={path !== "smpc"}
             onClick={() => setPath("smpc")}>
              SmPC and adverse <br/> event reporting
            </PIButtonPopup>
            <div id="buttons-page">
              {((page - 1) !== -1) && <button 
              style={{
                transform: `rotate(-90deg)`
              }}
              onClick={handlePrevPage}
              id="arrow-up"></button>}
              {page < pages[path] - 1 && <button
              style={{
                transform: `rotate(-90deg)`
              }}
              onClick={handleNextPage}
              id="arrow-down"
              ></button>}
            </div>
          </div>
        </div>
        <button id="close-button" onClick={() => setPath("home")}>
          Close
        </button>
      </PopUpWrapper>
    );
  }

const PopUpWrapper = styled(motion.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: .5,
  }
}))`
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
                        background-size: 50% 50%;
                        background-repeat: no-repeat;
                        background-position: center;
                        content: "";
                        width: 100%;
                        height: 100%;
                    }
                }
                #arrow-up::before {
                  background-image: url("./assets/arrow-up.png");
                }
                #arrow-down::before {
                  background-image: url("./assets/arrow-down.png");
                }
            }
        }
    }
`

type PIButtonPopupProps = {
    path: boolean
}

const PIButtonPopup = styled(PIButton)<PIButtonPopupProps>`
    visibility: ${props => props.path ? 'visible' : 'hidden'};
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
