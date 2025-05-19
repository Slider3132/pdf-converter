import { Icon } from '@iconify/react';

type Props = {
  history: string[];
  onSelect: (base64: string) => void;
};

export const HistoryWidget = ({ history, onSelect }: Props) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md w-64 border border-gray-200">
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
        <Icon icon="mdi:history" className="text-gray-600" />
        Історія PDF
      </h2>

      {history.length === 0 ? (
        <p className="text-sm text-gray-500">Ще немає збережених документів</p>
      ) : (
        <ul className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
          {history.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => onSelect(item)}
                className="flex items-center justify-between w-full px-3 py-2 bg-gray-100 hover:bg-blue-100 rounded text-sm text-left"
              >
                <span className="truncate">PDF #{history.length - index}</span>
                <Icon icon="mdi:file-pdf-box" className="text-red-500" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
