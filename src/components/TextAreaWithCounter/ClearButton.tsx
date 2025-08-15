import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

interface ClearButtonProps {
    onClick: () => void;
    disabled: boolean;
}

const ClearButton = ({ onClick, disabled }: ClearButtonProps) => {
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
                        : 'text-gray-600 hover:text-red-600 hover:bg-gray-100'
                }`}
                aria-label="Очистить"
            >
                <FiTrash2 className="w-5 h-5" />
            </button>
            
            {showTooltip && (
                <div className="absolute z-10 top-full right-0 mt-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md whitespace-nowrap">
                    Очищено!
                </div>
            )}
        </div>
    );
};

export default ClearButton;