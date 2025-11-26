interface Props {
  onClose: () => void;
}

export default function Tutorial({ onClose }: Props) {
  return (
    <div className="m-4 max-w-lg rounded-xl bg-black/80 p-10 text-white">
      <h2 className="mb-4 text-2xl font-bold">How the Trick Works 🎩</h2>

      <p className="mb-4">
        This trick uses 21 cards split into 3 piles. You only tell me which column your card is in —
        and I secretly place your chosen pile back in the middle.
      </p>

      <p className="mb-6">
        After doing this 3 times, your card is mathematically guaranteed to end up in the center of
        the deck. That’s the magic!
      </p>

      <button
        onClick={onClose}
        className="rounded-lg bg-pink-600 px-4 py-2 transition hover:bg-pink-700"
      >
        Got it!
      </button>
    </div>
  );
}
