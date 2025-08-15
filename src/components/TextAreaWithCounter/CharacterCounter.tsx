interface CharacterCounterProps {
  currentCount: number;
  limit: number;
}

const CharacterCounter = ({ currentCount, limit }: CharacterCounterProps) => (
  <div className="mt-1 text-sm text-gray-500">
    {currentCount} / {limit} символов
    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
      <div 
        className="bg-blue-500 h-2 rounded-full" 
        style={{ width: `${Math.min(100, (currentCount / limit) * 100)}%` }}
      ></div>
    </div>
  </div>
);

export default CharacterCounter;