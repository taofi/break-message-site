import { useState } from 'react';
import { FiDivide } from 'react-icons/fi';

interface SplitButtonProps {
    onClick: () => void;
    disabled: boolean;
}

const SplitButton = ({ onClick, disabled }: SplitButtonProps) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleClick = () => {
        onClick();
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000);
    };

    return (
        <div className="relative">
            <button
                onClick={handleClick}
                disabled={disabled}
                className={`p-1 rounded-md transition-colors ${
                    disabled 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                }`}
                aria-label="Разбить текст"
            >
                <FiDivide className="w-5 h-5" />
            </button>
            
            {showTooltip && (
                <div className="absolute z-10 top-full right-0 mt-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md whitespace-nowrap">
                    Текст разбит!
                </div>
            )}
        </div>
    );
};

export default SplitButton;