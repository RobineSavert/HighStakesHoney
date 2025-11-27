import { useDeckStore } from '../stores/useDeckStore';
import { useWizardStore } from '../stores/useWizardStore';

export default function RevealScreen() {
  const finalCard = useDeckStore((s) => s.finalCard);
  const resetDeck = useDeckStore((s) => s.reset);
  const setStep = useWizardStore((s) => s.setStep);

  function handlePlayAgain() {
    resetDeck();
    setStep(1);
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="mb-8 text-5xl font-bold">Your card was…</h1>

      {finalCard ? (
        <>
          <img
            src={finalCard.image}
            className="mb-10 w-[300px] rounded-xl shadow-xl"
            alt={finalCard.image}
          />

          <button
            onClick={handlePlayAgain}
            className="rounded-xl bg-pink-600 px-8 py-3 text-lg transition hover:bg-pink-700"
          >
            Play Again
          </button>
        </>
      ) : (
        <p className="text-xl opacity-60">Hmm… something went wrong.</p>
      )}
    </div>
  );
}
