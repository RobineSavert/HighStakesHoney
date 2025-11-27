import { useWizardStore } from './stores/useWizardStore';
import HomeScreen from './components/HomeScreen';
import FullScreenMessage from './components/FullScreenMessage';
import ColumnsStep from './components/ColumnsStep';
import RevealScreen from './components/RevealScreen';
import bgStripes from './assets/images/stripes.webp';

export default function App() {
  const step = useWizardStore((s) => s.step);

  switch (step) {
    case 0:
      return <HomeScreen button="lets go" nextStep={1} />;
    case 1:
      return (
        <FullScreenMessage
          title="Ready to begin?"
          text="Pick a card from one of the columns.."
          button="Start"
          nextStep={2}
          backgroundImage={bgStripes}
          fetchOnClick={true}
        />
      );

    case 2:
      return <ColumnsStep stepNumber={2} />; // 1st pick

    case 3:
      return (
        <FullScreenMessage
          title="Good choice!"
          text="Which column holds your card now?"
          button="Continue"
          nextStep={4}
          backgroundImage={bgStripes}
        />
      );

    case 4:
      return <ColumnsStep stepNumber={4} />; // 2nd pick

    case 5:
      return (
        <FullScreenMessage
          title="Almost there!"
          text="Pick the column where your card is now."
          button="Continue"
          nextStep={6}
          backgroundImage={bgStripes}
        />
      );

    case 6:
      return <ColumnsStep stepNumber={6} />; // 3rd pick

    case 7:
      return <RevealScreen />;

    default:
      return null;
  }
}
