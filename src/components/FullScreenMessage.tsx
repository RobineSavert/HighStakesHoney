import { useDeckStore } from '../stores/useDeckStore.ts';
import { useWizardStore } from '../stores/useWizardStore.ts';

interface Props {
  title: string;
  text: string;
  button: string;
  nextStep: number;
  backgroundImage: string;
  fetchOnClick?: boolean;
}

export default function FullScreenMessage({
  title,
  text,
  button,
  nextStep,
  backgroundImage,
  fetchOnClick = false,
}: Props) {
  const setStep = useWizardStore((s) => s.setStep);

  return (
    <div
      className="animate-screenFade flex min-h-[100svh] w-full flex-col items-center justify-center bg-size-[auto_20px] bg-center bg-repeat p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="w-full max-w-[90%] rounded-2xl border-8 border-[#e6952a] bg-[#6d0d32] p-6 text-center text-white sm:max-w-xl sm:p-10 lg:max-w-2xl lg:p-14">
        <h1 className="mb-6 flex flex-wrap justify-center gap-[0.05em] text-3xl font-bold uppercase sm:text-5xl lg:text-6xl">
          {title.split('').map((char, i) => (
            <span
              key={i}
              style={{ animationDelay: `${i * 40}ms` }}
              className="animate-letter opacity-0"
            >
              {char}
            </span>
          ))}
        </h1>

        <p
          className="animate-fadeUp mx-auto mb-8 max-w-[90%] text-base uppercase opacity-0 sm:mb-12 sm:max-w-xl sm:text-xl lg:text-2xl"
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
          className="animate-popIn rounded-xl bg-black px-5 py-3 text-base uppercase opacity-0 sm:text-lg"
          style={{ animationDelay: `${title.length * 40 + 600}ms` }}
        >
          {button}
        </button>
      </div>
    </div>
  );
}
