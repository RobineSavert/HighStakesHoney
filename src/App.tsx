import { useEffect, useState } from 'react';
import CardGrid from './components/CardGrid';
import Reveal from './components/Reveal';
import Tutorial from './components/Tutorial';
import { reorderTrick } from './components/TrickEngine';
import { useDeckStore } from './stores/useDeckStore';
import type { Card } from './stores/useDeckStore';
import Loading from './components/Loading.tsx';

export default function App() {
  const { cards, fetchDeck, setCards, loading, reset } = useDeckStore();

  const [step, setStep] = useState<number>(1);
  const [round, setRound] = useState<number>(1);
  const [finalCard, setFinalCard] = useState<Card | null>(null);
  const [showTutorial, setShowTutorial] = useState<boolean>(false);

  useEffect(() => {
    fetchDeck();
  }, []);

  function handleColumnChoice(colIndex: number) {
    const newOrder = reorderTrick(cards, colIndex);

    if (round === 3) {
      setFinalCard(newOrder[10]);
      setCards(newOrder);
      setStep(2);
      return;
    }

    setRound((prev) => prev + 1);
    setCards(newOrder);
  }

  function playAgain() {
    setStep(1);
    setRound(1);
    setFinalCard(null);
    reset();
  }

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gray-600"></div>

      <div className="relative z-10" style={{ filter: showTutorial ? 'blur(4px)' : 'none' }}>
        <button
          onClick={() => setShowTutorial(true)}
          className="fixed top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-red-900 text-xl text-white shadow-lg transition hover:bg-pink-700"
        >
          ?
        </button>

        {loading && <Loading />}

        {!loading && step === 1 && <CardGrid cards={cards} onChooseColumn={handleColumnChoice} />}

        {step === 2 && finalCard && <Reveal card={finalCard} onRestart={playAgain} />}
      </div>

      {showTutorial && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <Tutorial onClose={() => setShowTutorial(false)} />
        </div>
      )}
    </div>
  );
}
