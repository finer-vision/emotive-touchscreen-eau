import React from "react";
import { Box, Footer, HomeWrapper, PIButton } from "./home.styles";
import PopUp from "./popup";

export default function Home() {
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <HomeWrapper>
      <PopUp useShow={[showPopup, setShowPopup]}/>
      <div id="content">
        <h1>
          Welcome to the BETMIGATM (mirabegron) Interactive Hub. Explore OAB with Astellas at  the 38<sup>th</sup> Annual EAU Congress
        </h1>
        <video>

        </video>
        <p id="description">
          Visit our resources and learn more about the latest developments in overactive bladder (OAB). Explore OAB in different patient populations and view the wealth of efficacy and safety data available for BETMIGA. 
        </p>
        <div id="boxes">
          {
            [`BETMIGA: \\A Key data`, 
            `OAB \\A in men`, 
            `OAB in people \\A ≥65 years old`, 
            `CV safety: \\A Hoffman \\A publication`].map((str, i) => {
              return <Box key={i} content={str}/>
            })
          }
        </div>
        <PIButton onClick={() => setShowPopup(true)}>
          Prescribing information and adverse event reporting
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
            <b>Non-UK residents:</b> Report adverse events to the regulatory bodies outlined below. Also report to Astellas Pharma Europe by email to safety-eu@astellas.com, by facsimile to +31 (0)71-545 5208, or contact your local Astellas Office (<u>www.astellas.com/eu/worldwide</u>).
            <br/>
            A list of relevant regulatory bodies is available via the 'connect with Astellas' form.
          </p>
        </div>
        <div id="bottom">          
          <p>
            Full prescribing information is available at the booth.
          </p>
          <div id="details">
            <p>
              Distribuito unitamente al Riassunto delle Caratteristiche del Prodotto (RCP), disponibile allo stand. Informazioni più dettagliate su questo medicinale sono disponibili sul sito web della Agenzia europea dei medicinali: <u>www.ema.europa.eu.</u>
            </p>
            <p id="legal">
              Depositato in AIFA il XX.XX.2023 
              <br/>
              MAT-IT-BET-2022-00002 | November 2022
            </p>
          </div>
        </div>
      </Footer>
    </HomeWrapper>
  );
}