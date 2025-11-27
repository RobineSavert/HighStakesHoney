import { useDeckStore } from '../stores/useDeckStore.ts';
import { useWizardStore } from '../stores/useWizardStore.ts';
import cornerSuitHearts from '../assets/images/corner-suit-hearts.webp';
import cornerSuitDiamonds from '../assets/images/corner-suit-diamonds.webp';
import cornerSuitClubs from '../assets/images/corner-suit-clubs.webp';
import cornerSuitSpades from '../assets/images/corner-suit-spades.webp';

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
      className="animate-screenFade relative flex min-h-[100svh] w-full flex-col items-center justify-center bg-size-[auto_20px] bg-center bg-repeat p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <img src={cornerSuitHearts} className="absolute top-6 left-6 w-10" />
      <img src={cornerSuitDiamonds} className="absolute top-6 right-6 w-10" />
      <img src={cornerSuitClubs} className="absolute bottom-6 left-6 w-10" />
      <img src={cornerSuitSpades} className="absolute right-6 bottom-6 w-10" />
      <div className="w-full max-w-[90%] rounded-2xl border-8 border-[#c98a27] bg-black p-6 text-center text-[#feefdc] sm:max-w-xl sm:p-10 lg:max-w-2xl lg:p-14">
        <h1 className="font-header mb-6 flex flex-wrap justify-center gap-[0.05em] text-3xl sm:text-5xl lg:text-6xl">
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
          className="font-subtitle animate-fadeUp mx-auto mb-8 max-w-[90%] text-base opacity-0 sm:mb-12 sm:max-w-xl sm:text-xl"
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
          className="font-subtitle animate-bounce rounded-xl bg-[#1d4e50] px-5 py-3 text-base uppercase sm:text-lg"
          style={{ animationDelay: `${title.length * 40 + 600}ms` }}
        >
          {button}
        </button>
      </div>
    </div>
  );
}
