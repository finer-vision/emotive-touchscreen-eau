import { createGlobalStyle } from "styled-components";

export const AppReset = createGlobalStyle`
  :root {
    --root-scale: 3;
    --root-size: calc(var(--root-scale) * 1vh);
    --root-min: 16px;
    --root-max: 20px;
  }

  @media (orientation: portrait) {
    --root-size: calc(var(--root-scale) * 1vw);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
  }

  html,
  body,
  #root,
  main {
    width: 100%;
    height: 100%;
  }

  html {
    font-size: clamp(var(--root-min), var(--root-size), var(--root-max));
    font-family:"proxima-nova";
    font-weight: normal;
    line-height: 1em;
    text-rendering: geometricPrecision;
    background-color: rgb(26	56	81);
    color: white;
    font-size: 2.8vw;
    line-height: 4.6vw;
  }

  main {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  b {
    font-weight: bold;
  }

  button {
    border: 0;
    background-color: rgb(253	200	29);
    color: black;
    font-weight: bold;
  }

  /*
 * The Typekit service used to deliver this font or fonts for use on websites
 * is provided by Adobe and is subject to these Terms of Use
 * http://www.adobe.com/products/eulas/tou_typekit. For font license
 * information, see the list below.
 *
 * proxima-nova:
 *   - http://typekit.com/eulas/00000000000000007735e603
 *   - http://typekit.com/eulas/00000000000000007735e604
 *   - http://typekit.com/eulas/00000000000000007735e609
 *   - http://typekit.com/eulas/00000000000000007735e616
 * proxima-nova-condensed:
 *   - http://typekit.com/eulas/00000000000000007735e60c
 *   - http://typekit.com/eulas/00000000000000007735e61d
 *   - http://typekit.com/eulas/00000000000000007735e623
 *   - http://typekit.com/eulas/00000000000000007735e62c
 * proxima-nova-extra-condensed:
 *   - http://typekit.com/eulas/00000000000000007735e618
 *   - http://typekit.com/eulas/00000000000000007735e60b
 *   - http://typekit.com/eulas/00000000000000007735e629
 *   - http://typekit.com/eulas/00000000000000007735e620
 *
 * © 2009-2022 Adobe Systems Incorporated. All Rights Reserved.
 */
/*{"last_published":"2022-12-13 16:44:26 UTC"}*/

@import url("https://p.typekit.net/p.css?s=1&k=aft5jbi&ht=tk&f=139.140.175.176.143.144.147.148.156.157.161.162&a=86609216&app=typekit&e=css");

@font-face {
font-family:"proxima-nova";
src:url("https://use.typekit.net/af/2555e1/00000000000000007735e603/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/2555e1/00000000000000007735e603/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/2555e1/00000000000000007735e603/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova";
src:url("https://use.typekit.net/af/4de20a/00000000000000007735e604/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/4de20a/00000000000000007735e604/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/4de20a/00000000000000007735e604/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova";
src:url("https://use.typekit.net/af/efe4a5/00000000000000007735e609/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/efe4a5/00000000000000007735e609/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/efe4a5/00000000000000007735e609/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova";
src:url("https://use.typekit.net/af/3322cc/00000000000000007735e616/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/3322cc/00000000000000007735e616/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/3322cc/00000000000000007735e616/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/15606c/00000000000000007735e60c/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/15606c/00000000000000007735e60c/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/15606c/00000000000000007735e60c/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/1ea53e/00000000000000007735e61d/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/1ea53e/00000000000000007735e61d/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/1ea53e/00000000000000007735e61d/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/669f97/00000000000000007735e623/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/669f97/00000000000000007735e623/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/669f97/00000000000000007735e623/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/4d69d6/00000000000000007735e62c/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/4d69d6/00000000000000007735e62c/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/4d69d6/00000000000000007735e62c/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/de3701/00000000000000007735e618/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/de3701/00000000000000007735e618/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/de3701/00000000000000007735e618/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/7cc641/00000000000000007735e60b/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/7cc641/00000000000000007735e60b/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/7cc641/00000000000000007735e60b/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/6a4fa5/00000000000000007735e629/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/6a4fa5/00000000000000007735e629/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/6a4fa5/00000000000000007735e629/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/4c1fee/00000000000000007735e620/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/4c1fee/00000000000000007735e620/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/4c1fee/00000000000000007735e620/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
}

.tk-proxima-nova { font-family: "proxima-nova",sans-serif; }
.tk-proxima-nova-condensed { font-family: "proxima-nova-condensed",sans-serif; }
.tk-proxima-nova-extra-condensed { font-family: "proxima-nova-extra-condensed",sans-serif; }
`;
