'use client';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

type Props = {
  url: string;
};

export const PdfViewer = ({ url }: Props) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl="/pdf.worker.min.js">
      <Viewer fileUrl={url} plugins={[defaultLayoutPluginInstance]} />
    </Worker>
  );
};
