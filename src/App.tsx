import { useWizardStore } from './stores/useWizardStore';
import FullScreenMessage from './components/FullScreenMessage';
import ColumnsStep from './components/ColumnsStep';
import RevealScreen from './components/RevealScreen';

export default function App() {
  const step = useWizardStore((s) => s.step);

  switch (step) {
    case 1:
      return (
        <FullScreenMessage
          title="Welcome!"
          text="Please pick a column to begin the trick."
          button="Let's play"
          nextStep={2}
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
