import { splitIntoColumns } from './TrickEngine';
import type { Card } from '../stores/useDeckStore';
import { PlayingCard } from './PlayingCard';

interface Props {
  cards: Card[];
  onChooseColumn: (col: number) => void;
}

export default function CardGrid({ cards, onChooseColumn }: Props) {
  const columns = splitIntoColumns(cards);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-white">
      <h2 className="mb-8 text-2xl font-semibold">
        Pick the <span className="text-red-900">column</span> your card is in..
      </h2>

      <div className="flex gap-10">
        {columns.map((col, colIndex) => (
          <div
            key={colIndex}
            onClick={() => onChooseColumn(colIndex)}
            className="flex cursor-pointer flex-col items-center gap-3 rounded-xl p-4 transition hover:scale-105 hover:bg-white/5"
          >
            <div className="mb-2 text-xs text-white/50">Column {colIndex + 1}</div>
                {col.map((card) => (
                  <PlayingCard key={card.code} image={card.image} />
                ))}
          </div>
        ))}
      </div>
    </div>
  );
}
