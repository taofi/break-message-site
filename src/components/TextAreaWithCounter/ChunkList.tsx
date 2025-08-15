import { useRef, useCallback } from 'react';
import CopyButton from './CopyButton';

interface ChunkListProps {
    chunks: string[];
    splitLength: number;
}

const ChunkList = ({ chunks, splitLength }: ChunkListProps) => {
    const chunkRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

    const setChunkRef = useCallback((el: HTMLTextAreaElement | null, index: number) => {
        chunkRefs.current[index] = el;
    }, []);

    const handleChunkHover = useCallback((index: number, isHovering: boolean) => {
        const chunkTextarea = chunkRefs.current[index];
        if (chunkTextarea) {
            if (isHovering) {
                chunkTextarea.style.height = 'auto';
                chunkTextarea.style.height = `${chunkTextarea.scrollHeight}px`;
                chunkTextarea.classList.add('transition-all', 'duration-300');
            } else {
                const rows = Math.ceil(chunks[index].length / splitLength) || 1;
                chunkTextarea.style.height = `${rows * 24 + 16}px`;
            }
        }
    }, [chunks, splitLength]);

    if (chunks.length === 0) return null;

    return (
        <div className="mt-4 space-y-3">
            <h3 className="font-medium">Разбитый текст (по {splitLength} символов):</h3>
            {chunks.map((chunk, index) => (
                <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => handleChunkHover(index, true)}
                    onMouseLeave={() => handleChunkHover(index, false)}
                >
                    <textarea
                        ref={(el) => setChunkRef(el, index)}
                        value={chunk}
                        readOnly
                        className="chunk-textarea w-full p-3 border border-gray-300 rounded-md bg-gray-50 resize-none overflow-hidden hover:shadow-md"
                        style={{
                            '--base-height': `${Math.ceil(chunk.length / splitLength) * 24 + 16}px`,
                            '--expanded-height': `${chunk.split('\n').length * 24 + 16}px`
                        } as React.CSSProperties}
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