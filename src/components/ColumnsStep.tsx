import { useDeckStore } from '../stores/useDeckStore';
import { splitIntoColumns } from '../utils/TrickEngine';
import { PlayingCard } from './PlayingCard';
import { useWizardStore } from '../stores/useWizardStore';
import { useImagesLoaded } from '../hooks/useImagesLoaded';
import Loading from './Loading';
import bgPaper from '../assets/images/bg-paper.webp';

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
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${bgPaper})` }}
    >
      <div className="flex w-full max-w-[1200px] justify-center gap-4 sm:gap-6 lg:gap-10">
        {columns.map((col, colIndex) => (
          <div
            key={colIndex}
            onClick={() => handleClick(colIndex)}
            className="flex w-full max-w-[33%] cursor-pointer flex-col items-center gap-2 rounded-xl p-2 transition hover:scale-105 hover:bg-white/5 sm:gap-3 sm:p-4"
          >
            <div className="font-subtitle mb-10 text-sm text-black/60 sm:text-[25px]">
              Column {colIndex + 1}
            </div>

            {col.map((card) => (
              <PlayingCard key={card.code} card={card} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
