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
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black p-10 text-center text-white">
      <h1 className="mb-6 text-5xl font-bold">{title}</h1>
      <p className="mb-12 max-w-xl text-xl opacity-80">{text}</p>

      <button
        onClick={() => {
          if (fetchOnClick) {
            const fetchDeck = useDeckStore.getState().fetchDeck;
            fetchDeck();
          }
          setStep(nextStep);
        }}
        className="rounded-xl bg-pink-600 px-6 py-3 text-lg"
      >
        {button}
      </button>
    </div>
  );
}
