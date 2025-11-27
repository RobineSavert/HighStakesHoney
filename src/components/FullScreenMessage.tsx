import { useDeckStore } from '../stores/useDeckStore.ts';
import { useWizardStore } from '../stores/useWizardStore.ts';

interface Props {
  title: string;
  text: string;
  button: string;
  nextStep: number;
  fetchOnClick?: boolean;
}

export default function FullScreenMessage({
  title,
  text,
  button,
  nextStep,
  fetchOnClick = false,
}: Props) {
  const setStep = useWizardStore((s) => s.setStep);

  return (


    <div className="animate-screenFade flex h-screen w-full flex-col items-center justify-center bg-black p-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-6 flex gap-[0.1em]">
            {title.split("").map((char, i) => (
                <span
                    key={i}
                    style={{ animationDelay: `${i * 40}ms` }}
                    className="opacity-0 animate-letter"
                >
      {char}
    </span>
            ))}
        </h1>
        <p
            className="mb-12 max-w-xl text-xl opacity-0 animate-fadeUp"
            style={{ animationDelay: `${title.length * 40 + 200}ms` }}
        >
            {text}
        </p>

      <button
        onClick={() => {
          if (fetchOnClick) {
            const fetchDeck = useDeckStore.getState().fetchDeck;
            fetchDeck();
          }
          setStep(nextStep);
        }}
        className="rounded-xl bg-pink-600 px-6 py-3 text-lg opacity-0 animate-popIn"
        style={{ animationDelay: `${title.length * 40 + 600}ms` }}
      >
        {button}
      </button>
    </div>
  );
}
