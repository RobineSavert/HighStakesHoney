import { create } from 'zustand';


interface WizardState {
    step: number;
    setStep: (step: number) => void;
}

export const useWizardStore = create<WizardState>((set) => ({
    step: 0,
    setStep: (step) => set({ step }),
}));
