'use client';
import { convertTextToPDF } from '@/api';
import { HistoryWidget } from '@/components/HistoryWidget';
import { PdfViewer } from '@/components/PdfViewer';
import { TextInput } from '@/components/TextInput';
import { useIsClient } from '@/hooks/useIsClient';
import { useLocalStorageBase64 } from '@/hooks/useLocalStorageBase64';
import { blobToBase64 } from '@/utils';

import { useState } from 'react';

const ConverterModule = () => {
  const isClient = useIsClient();
  const [currentBase64, setCurrentBase64] = useState<string | null>(null);
  const [history, addToHistory] = useLocalStorageBase64('pdfHistory');

  const handleConvert = async (text: string) => {
    if (text) {
      const blob = await convertTextToPDF(text);
      const base64 = await blobToBase64(blob);
      setCurrentBase64(base64);
      addToHistory(base64);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="w-full gap-8 flex justify-around">
        <div className="flex-1">
          <TextInput onConvert={handleConvert} />
          <div className="mt-8">
            {currentBase64 && <PdfViewer url={currentBase64} />}
          </div>
        </div>
        <div className="">
          {isClient && (
            <HistoryWidget history={history} onSelect={setCurrentBase64} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ConverterModule;
