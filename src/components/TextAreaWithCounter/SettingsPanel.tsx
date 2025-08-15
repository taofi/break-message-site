import { useState } from 'react';

type SplitMode = 'chars' | 'words' | 'sentences';

interface SettingsPanelProps {
    splitLength: number;
    setSplitLength: (value: number) => void;
    splitMode: SplitMode;
    setSplitMode: (mode: SplitMode) => void;
    onClose: () => void;
}

const SettingsPanel = ({
    splitLength,
    setSplitLength,
    splitMode,
    setSplitMode,
    onClose
}: SettingsPanelProps) => {
    const [localLength, setLocalLength] = useState(splitLength);
    const [localMode, setLocalMode] = useState<SplitMode>(splitMode);

    const handleApply = () => {
        setSplitLength(localLength);
        setSplitMode(localMode);
        onClose();
    };

    const getModeDescription = () => {
        switch (localMode) {
            case 'chars': return 'Текст будет разбит строго по указанному количеству символов';
            case 'words': return 'Текст будет разбит по словам, сохраняя их целостность';
            case 'sentences': return 'Текст будет разбит по предложениям (по знакам .!?)';
            default: return '';
        }
    };

    return (
        <div className="mb-2 p-4 border border-gray-200 rounded-md bg-white shadow-lg">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Настройки разбивки</h3>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">
                    &times;
                </button>
            </div>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Тип разбивки:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                        <label className="inline-flex items-center p-2 border rounded-md hover:bg-gray-50">
                            <input
                                type="radio"
                                className="form-radio text-blue-600"
                                checked={localMode === 'chars'}
                                onChange={() => setLocalMode('chars')}
                            />
                            <span className="ml-2">По символам</span>
                        </label>
                        <label className="inline-flex items-center p-2 border rounded-md hover:bg-gray-50">
                            <input
                                type="radio"
                                className="form-radio text-blue-600"
                                checked={localMode === 'words'}
                                onChange={() => setLocalMode('words')}
                            />
                            <span className="ml-2">По словам</span>
                        </label>
                        <label className="inline-flex items-center p-2 border rounded-md hover:bg-gray-50">
                            <input
                                type="radio"
                                className="form-radio text-blue-600"
                                checked={localMode === 'sentences'}
                                onChange={() => setLocalMode('sentences')}
                            />
                            <span className="ml-2">По предложениям</span>
                        </label>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                        {getModeDescription()}
                    </p>
                </div>
                
                <div>
                    <label htmlFor="splitLength" className="block text-sm font-medium text-gray-700 mb-1">
                        {localMode === 'chars' ? 'Символов в блоке:' : 
                         localMode === 'words' ? 'Макс. символов в блоке:' : 
                         'Макс. длина блока:'}
                    </label>
                    <input
                        id="splitLength"
                        type="number"
                        min="10"
                        max="500"
                        value={localLength}
                        onChange={(e) => setLocalLength(Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                
                <div className="flex justify-end space-x-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                        Отмена
                    </button>
                    <button
                        onClick={handleApply}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Применить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsPanel;