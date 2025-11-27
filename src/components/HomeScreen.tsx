import { useDeckStore } from '../stores/useDeckStore.ts';
import { useWizardStore } from '../stores/useWizardStore.ts';

import stripes from '../assets/images/stripes.webp';
import shoes from '../assets/images/shoes.webp';
import cards from '../assets/images/cards.webp';
import text from '../assets/images/text.webp';
import cornerSuitSpades from '../assets/images/corner-suit-spades.webp';
import cornerSuitClubs from '../assets/images/corner-suit-clubs.webp';
import cornerSuitHearts from '../assets/images/corner-suit-hearts.webp';
import cornerSuitDiamonds from '../assets/images/corner-suit-diamonds.webp';

interface Props {
  button: string;
  nextStep: number;
  fetchOnClick?: boolean;
}

export default function HomeScreen({ button, nextStep, fetchOnClick = false }: Props) {
  const setStep = useWizardStore((s) => s.setStep);

  return (
    <div
      className="relative flex h-dvh w-full overflow-hidden"
      style={{ backgroundImage: `url(${stripes})` }}
    >
      <div
        className="absolute top-0 right-0 h-full w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${shoes})` }}
      />

      <img src={cornerSuitHearts} className="absolute top-6 left-6 w-10" />
      <img src={cornerSuitDiamonds} className="absolute top-6 right-6 w-10" />
      <img src={cornerSuitClubs} className="absolute bottom-6 left-6 w-10" />
      <img src={cornerSuitSpades} className="absolute right-6 bottom-6 w-10" />

      <img
        src={cards}
        className="absolute top-1/2 left-[15%] hidden w-[320px] -translate-y-1/2 sm:flex"
        alt={cards}
      />

      <img
        src={text}
        className="absolute right-[8%] bottom-[50%] w-[320px] sm:right-[8%] sm:bottom-10 sm:w-[520px]"
      />

      <button
        onClick={() => {
          if (fetchOnClick) useDeckStore.getState().fetchDeck();
          setStep(nextStep);
        }}
        className="font-subtitle absolute bottom-40 left-1/2 -translate-x-1/2 animate-bounce rounded-xl bg-[#e1c9ab] px-6 py-4 text-lg sm:top-1/2 sm:bottom-auto sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
      >
        {button}
      </button>
    </div>
  );
}
