import { useState, useRef, useEffect, useCallback } from 'react';
import CopyButton from './CopyButton';
import SplitButton from './SplitButton';
import ClearButton from './ClearButton';
import ChunkList from './ChunkList';
import SettingsPanel from './SettingsPanel';

type SplitMode = 'chars' | 'words' | 'sentences';

const TextAreaWithCounter = () => {
    const [text, setText] = useState('');
    const [splitTexts, setSplitTexts] = useState<string[]>([]);
    const [splitLength, setSplitLength] = useState(80);
    const [splitMode, setSplitMode] = useState<SplitMode>('chars');
    const [showSettings, setShowSettings] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const settingsRef = useRef<HTMLDivElement>(null);

    // Автоматическое изменение высоты textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [text]);

    // Закрытие настроек при клике вне области
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
                setShowSettings(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleCopy = useCallback(() => {
        if (text) {
            navigator.clipboard.writeText(text);
        }
    }, [text]);
    const splitBySentences = (text: string, maxLength: number) => {
        const sentenceRegex = /[^.!?]+[.!?]+/g;
        const sentences = text.match(sentenceRegex) || [];
        let chunks: string[] = [];
        let currentChunk = '';

        for (const sentence of sentences) {
            if (currentChunk.length + sentence.length <= maxLength || currentChunk.length === 0) {
                currentChunk += sentence;
            } else {
                chunks.push(currentChunk.trim());
                currentChunk = sentence;
            }
        }

        if (currentChunk) {
            chunks.push(currentChunk.trim());
        }

        return chunks;
    };

    const handleSplitText = useCallback(() => {
        if (!text) return;

        let chunks: string[] = [];
        
        switch (splitMode) {
            case 'chars':
                // Разбивка по символам
                for (let i = 0; i < text.length; i += splitLength) {
                    chunks.push(text.slice(i, i + splitLength));
                }
                break;
                
            case 'words':
                // Разбивка по словам
                const words = text.split(' ');
                let currentChunk = '';
                
                for (const word of words) {
                    if (currentChunk.length + word.length + 1 <= splitLength || currentChunk.length === 0) {
                        currentChunk += (currentChunk ? ' ' : '') + word;
                    } else {
                        chunks.push(currentChunk);
                        currentChunk = word;
                    }
                }
                
                if (currentChunk) {
                    chunks.push(currentChunk);
                }
                break;
                
            case 'sentences':
                // Разбивка по предложениям
                chunks = splitBySentences(text, splitLength);
                break;
        }

        setSplitTexts(chunks);
    }, [text, splitLength, splitMode]);
    
    const handleClear = useCallback(() => {
        setText('');
        setSplitTexts([]);
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
        }
    }, []);
    const toggleSettings = () => {
        setShowSettings(!showSettings);
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md relative">
            {/* Панель настроек (теперь сверху) */}
            {showSettings && (
                <div ref={settingsRef} className="relative ">
                    <SettingsPanel 
                        splitLength={splitLength}
                        setSplitLength={setSplitLength}
                        splitMode={splitMode}
                        setSplitMode={setSplitMode}
                        onClose={() => setShowSettings(false)}
                    />
                </div>
            )}

            <div className="relative">
                <textarea
                    ref={textareaRef}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full p-3 pr-28 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
                    rows={1}
                    placeholder="Введите текст..."
                />
                <div className="absolute right-2 top-2 flex gap-1">
                    <button 
                        onClick={toggleSettings}
                        className={`p-1 rounded-md transition-colors ${
                            showSettings 
                                ? 'text-blue-600 bg-blue-50' 
                                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                        }`}
                        aria-label="Настройки"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                    <ClearButton onClick={handleClear} disabled={!text && splitTexts.length === 0} />
                    <SplitButton onClick={handleSplitText} disabled={!text} />
                    <CopyButton onClick={handleCopy} disabled={!text} />
                </div>
            </div>
            <div className="mt-1 text-sm text-gray-500">
                {text.length} символов
            </div>

            <ChunkList chunks={splitTexts} splitLength={splitLength} />
        </div>
    );
};

export default TextAreaWithCounter;