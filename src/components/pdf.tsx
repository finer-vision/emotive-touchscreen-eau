import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

export const YourComponentReact = ({url}: {url: string}) => {
  return (<Document file={url}>
             <Page pageNumber={1} />
          </Document>)
}