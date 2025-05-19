'use client';
import { useState } from 'react';

type Props = {
  onConvert: (text: string) => void;
};

export const TextInput = ({ onConvert }: Props) => {
  const [text, setText] = useState('');

  return (
    <div className="bg-white p-4 rounded-md shadow-md  border border-gray-200">
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
        Конвертація тексту в PDF
      </h2>
      <input
        className="w-full p-4 border rounded"
        placeholder="Введіть текст..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        disabled={!text}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => {
          onConvert(text);
          setText('');
        }}
      >
        Конвертувати в PDF
      </button>
    </div>
  );
};
