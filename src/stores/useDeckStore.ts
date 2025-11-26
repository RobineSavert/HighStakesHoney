import { create } from 'zustand';
import { parseCardCode, mapCardToImage } from '../utils/cardMapping';

export interface Card {
  code: string;
  image: string;
  rank: string;
  suit: 'hearts' | 'spades' | 'clubs' | 'diamonds';
}

interface DeckState {
  cards: Card[];
  loading: boolean;
  fetchDeck: () => Promise<void>;
  setCards: (cards: Card[]) => void;
  reset: () => Promise<void>;
}

export const useDeckStore = create<DeckState>((set) => ({
  cards: [],
  loading: false,

  fetchDeck: async () => {
    set({ loading: true });

    const deckRes = await fetch(
      'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    ).then((r) => r.json());

    const drawRes = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckRes.deck_id}/draw/?count=21`
    ).then((r) => r.json());

    set({
      cards: drawRes.cards.map((c: any) => {
        const { rank, suit } = parseCardCode(c.code);

        return {
          code: c.code,
          rank,
          suit,
          image: mapCardToImage(c.code),
        };
      }),
      loading: false,
    });
  },

  setCards: (cards) => set({ cards }),

  reset: async () => {
    set({ cards: [] });
    await useDeckStore.getState().fetchDeck();
  },
}));
