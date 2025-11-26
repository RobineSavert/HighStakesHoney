import type { Card } from '../stores/useDeckStore';

interface Props {
  card: Card;
  onRestart: () => void;
}

export default function Reveal({ card, onRestart }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center text-white">
      <h1 className="mb-6 text-3xl">Your card was…</h1>

      <img src={card.image} alt={card.code} className="mb-6 w-88 rounded shadow-lg" />

      <button
        onClick={onRestart}
        className="rounded-lg bg-red-900 px-6 py-3 text-white shadow transition hover:bg-red-700"
      >
        Play Again
      </button>
    </div>
  );
}
