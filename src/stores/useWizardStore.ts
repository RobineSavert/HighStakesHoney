import { create } from 'zustand';

interface WizardState {
  step: number;
  setStep: (step: number) => void;
  firstPick: number | null;
  secondPick: number | null;
  setFirstPick: (col: number) => void;
  setSecondPick: (col: number) => void;
}

export const useWizardStore = create<WizardState>((set) => ({
  step: 0,
  setStep: (step) => set({ step }),

  firstPick: null,
  secondPick: null,

  setFirstPick: (col) => set({ firstPick: col }),
  setSecondPick: (col) => set({ secondPick: col }),
}));
