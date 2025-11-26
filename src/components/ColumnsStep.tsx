import { useDeckStore } from '../stores/useDeckStore';
import { splitIntoColumns } from '../utils/TrickEngine';
import { PlayingCard } from './PlayingCard';
import { useWizardStore } from '../stores/useWizardStore';
import { useImagesLoaded } from '../hooks/useImagesLoaded';
import Loading from './Loading.tsx';

interface Props {
  stepNumber: number;
}

export default function ColumnsStep({ stepNumber }: Props) {
  const cards = useDeckStore((s) => s.cards);
  const loading = useDeckStore((s) => s.loading);
  const processColumnSelection = useDeckStore((s) => s.processColumnSelection);
  const setStep = useWizardStore((s) => s.setStep);
  const columns = splitIntoColumns(cards);
  const imagesLoaded = useImagesLoaded(cards.map((c) => c.image));

  if (loading || cards.length === 0 || !imagesLoaded) {
    return <Loading />;
  }

  function handleClick(colIndex: number) {
    processColumnSelection(colIndex);

    if (stepNumber === 2) setStep(3);
    else if (stepNumber === 4) setStep(5);
    else if (stepNumber === 6) setStep(7);
  }

  return (
    <div className="flex min-h-screen items-center justify-center gap-10 opacity-100 transition-opacity duration-500">
      {columns.map((col, colIndex) => (
        <div
          key={colIndex}
          className="flex cursor-pointer flex-col gap-3"
          onClick={() => handleClick(colIndex)}
        >
          {col.map((card) => (
            <PlayingCard key={card.code} card={card} />
          ))}
        </div>
      ))}
    </div>
  );
}
