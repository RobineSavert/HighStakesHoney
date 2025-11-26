import { splitIntoColumns } from './TrickEngine';
import type { CardData } from '../types/CardData';
import { PlayingCard } from './PlayingCard';

interface Props {
  cards: CardData[];
  onChooseColumn: (col: number) => void;
}

export default function CardGrid({ cards, onChooseColumn }: Props) {
  const columns = splitIntoColumns(cards);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-white">
      <div className="flex gap-10">
        {columns.map((col, colIndex) => (
          <div
            key={colIndex}
            onClick={() => onChooseColumn(colIndex)}
            className="flex cursor-pointer flex-col items-center gap-3 rounded-xl p-4 transition hover:scale-105 hover:bg-white/5"
          >
            <div className="mb-2 text-xs text-white/50">Column {colIndex + 1}</div>

            {col.map((card) => (
              <PlayingCard key={card.code} card={card} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
