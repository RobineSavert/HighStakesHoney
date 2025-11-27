import { useDeckStore } from '../stores/useDeckStore';
import { useWizardStore } from '../stores/useWizardStore';
import bgReveal from '../assets/images/bg-reveal.webp';
import cornerSuitHearts from "../assets/images/corner-suit-hearts.webp";
import cornerSuitDiamonds from "../assets/images/corner-suit-diamonds.webp";
import cornerSuitClubs from "../assets/images/corner-suit-clubs.webp";
import cornerSuitSpades from "../assets/images/corner-suit-spades.webp";

export default function RevealScreen() {
  const finalCard = useDeckStore((s) => s.finalCard);
  const resetDeck = useDeckStore((s) => s.reset);
  const setStep = useWizardStore((s) => s.setStep);

  function handlePlayAgain() {
    resetDeck();
    setStep(1);
  }

  return (

      <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-cover bg-center"
           style={{ backgroundImage: `url(${bgReveal})` }}>
          <img src={cornerSuitHearts} className="absolute top-6 left-6 w-10" />
          <img src={cornerSuitDiamonds} className="absolute top-6 right-6 w-10" />
          <img src={cornerSuitClubs} className="absolute bottom-6 left-6 w-10" />
          <img src={cornerSuitSpades} className="absolute right-6 bottom-6 w-10" />
          <div className="relative z-10 mx-auto w-full max-w-xl rounded-2xl border-8 border-[#c98a27] bg-black/80 px-8 py-10 text-center text-[#feefdc] shadow-2xl sm:max-w-2xl sm:px-14 sm:py-16">

              <h1 className="mb-10 font-header text-5xl sm:text-6xl lg:text-7xl leading-none">
                  Your card was…
              </h1>

              {finalCard ? (
                  <>
                      <img
                          src={finalCard.image}
                          className="mx-auto mb-12 w-[180px] sm:w-[220px] rounded-xl shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
                          alt={finalCard.image}
                      />

                      <button
                          onClick={handlePlayAgain}
                          className="rounded-xl bg-[#1d4e50] px-8 py-4 text-lg font-subtitle uppercase tracking-wide hover:bg-[#1f5d5f] transition duration-150"
                      >
                          Play Again
                      </button>
                  </>
              ) : (
                  <p className="text-xl opacity-60">Hmm… something went wrong.</p>
              )}

          </div>

      </div>

  );
}
