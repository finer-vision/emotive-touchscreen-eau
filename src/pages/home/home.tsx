import useMediaQuery from "@/hooks/useMediaQuery";
import React, {useRef} from "react";
import { Box, Footer, HomeWrapper, PIButton, Thumbnail } from "./home.styles";
import PopUp from "./popup";
import { AnimatePresence } from "framer-motion";
import { Path, usePathState } from "@/state";

export default function Home() {
  const isIPadWidth = useMediaQuery("(max-width: 1024px)");
  const videoRef = useRef<HTMLVideoElement | null>();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isFirstSecond, setIsFirstSecond] = React.useState(true);
  const {path, setPath} = usePathState();

  const handlePlayPause = () => {
    if(!videoRef.current) return;
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  React.useEffect(() => {
    if(!videoRef.current) return;
    const handleTimeUpdate = () => {
      setIsFirstSecond(videoRef.current.currentTime < 1);
    }
    videoRef.current.addEventListener("timeupdate", handleTimeUpdate);

    const handleEnd = () => {
      videoRef.current.currentTime = 0;
      setIsFirstSecond(true);
      setIsPlaying(false);
    }
    videoRef.current.addEventListener("ended", handleEnd)

    return () => {
      videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      videoRef.current.removeEventListener("ended", handleEnd);
    }
  }, [isPlaying])

  const pages = {
    keydata: `BETMIGA: \\A Key data`,
    oabinmen: `OAB \\A in men`,
    oabin65: `OAB in people \\A ≥65 years old`,
    cvsafety: `CV safety: \\A Hoffman \\A publication`
  }

  return (
    <HomeWrapper>
      <div id="content">
        <h1>
          Welcome to the BETMIGA<sup>TM</sup> (mirabegron) Interactive Hub. Explore OAB with Astellas at  the 38<sup>th</sup> Annual EAU Congress
        </h1>
        <div id="video" onClick={handlePlayPause}>
          <video ref={el => videoRef.current = el} src="./assets/video.mp4">

          </video>
          <AnimatePresence>
            {isFirstSecond && <Thumbnail/>}
          </AnimatePresence>
          {!isPlaying && <img src="./assets/play.png" alt="play" id="play" />}
        </div>
        <p id="description">
          Visit our resources and learn more about the latest developments in overactive bladder (OAB). {isIPadWidth && <br/>} Explore OAB in different patient populations and view the wealth of efficacy and safety data available for BETMIGA. 
        </p>
        <div id="boxes">
          {
            Object.entries(pages).map((page, i) => {
              const [path, str] = page;
              return <Box onClick={() => setPath(path as Path)} key={i} content={str}/>
            })
          }
        </div>
        <PIButton onClick={() => setPath("smpc")}>
          SmPC and adverse event reporting
        </PIButton>
      </div>
      <Footer>
        <div id="top">
          <p>
            BETMIGA™ is indicated for the symptomatic treatment of urgency, increased frequency and/or urgency incontinence as may occur in adult patients with OAB syndrome.<sup>1</sup>
          </p>
          <ul>            
            <li>
              1. BETMIGA™ Summary of Product Characteristics. 
            </li>
          </ul>          
        </div>
        <div id="center">
          <p>
            <b style={{display: 'block'}}>Adverse event should be reported.</b>
            <b>Host residents:</b> Per segnalare una reazione avversa, si prega di scrivere pharmacovigilance.it@astellas.com o chiamare +39.02.921381
            <br/><b>UK residents:</b> Reporting forms and information can be found at <u>www.mhra.gov.uk/yellowcard</u> or search for MHRA Yellow Card in the Google Play or Apple App Store. Adverse events should also be reported to Astellas Pharma Ltd on 0800 783 5018
          </p>
          <p>
            <br/>
            <b>Non-UK residents:</b> Report adverse events to the regulatory bodies outlined below. Also report to Astellas Pharma Europe by email to safety-eu@astellas.com, by facsimile to +31 (0)71-545 5208, or contact your local Astellas Office (<u>www.astellas.com/eu/worldwide</u>).
            <br/>
            A list of relevant regulatory bodies is available via the 'connect with Astellas' form.
          </p>
        </div>
        <div id="bottom">          
          <p>
            Summary of Product Characteristics (SmPCs) are available at the booth.
          </p>
          <div id="details">
            <p>
              RCP disponibili allo stand. Informazioni piu dettagliate su questo medicinale sono <br/>
              <span style={{
                display: "flex"
              }}>disponibili sul sito web della Agenzia europea dei medicinali:  <u>www.ema.europa.eu.</u></span>
            </p>
            <p id="legal">
              Depositato in AIFA il 15.02.2023 
              <br/>
              MAT-IT-BET-2022-00002 February 2023
            </p>
          </div>
        </div>
      </Footer>
      <AnimatePresence>
        {path !== "home" && <PopUp/>}
      </AnimatePresence>
    </HomeWrapper>
  );
}