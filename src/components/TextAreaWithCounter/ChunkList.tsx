import { useRef, useCallback, useEffect } from 'react';
import CopyButton from './CopyButton';

interface ChunkListProps {
    chunks: string[];
    splitLength: number;
}

const ChunkList = ({ chunks, splitLength }: ChunkListProps) => {
    const chunkRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

    const setChunkRef = useCallback((el: HTMLTextAreaElement | null, index: number) => {
        chunkRefs.current[index] = el;
        // Обновляем высоту при установке ref
        if (el) {
            el.style.height = 'auto';
            el.style.height = `${el.scrollHeight}px`;
        }
    }, []);

    // Эффект для обновления высоты при изменении chunks
    useEffect(() => {
        chunkRefs.current.forEach((textarea) => {
            if (textarea) {
                textarea.style.height = 'auto';
                textarea.style.height = `${textarea.scrollHeight}px`;
            }
        });
    }, [chunks]);

    if (chunks.length === 0) return null;

    return (
        <div className="mt-4 space-y-3">
            <h3 className="font-medium">Разбитый текст (по {splitLength} символов):</h3>
            {chunks.map((chunk, index) => (
                <div
                    key={index}
                    className="relative"
                >
                    <textarea
                        ref={(el) => setChunkRef(el, index)}
                        value={chunk}
                        className="w-full p-3 pr-8 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
                        style={{
                            minHeight: '44px', 
                            transition: 'height 0.2s ease-out'
                        }}
                    />
                    <div className="absolute right-2 top-2">
                        <CopyButton
                            onClick={() => navigator.clipboard.writeText(chunk)}
                            disabled={false}
                        />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                        Блок {index + 1} из {chunks.length} ({chunk.length} символов)
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChunkList;