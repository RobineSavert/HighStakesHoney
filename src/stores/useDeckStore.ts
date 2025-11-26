import { create } from 'zustand';
import type { CardData } from '../types/CardData';
import { mapCardToImage } from '../utils/cardMapping';

interface DeckState {
  cards: CardData[];
  loading: boolean;

  finalCard: CardData | null;
  pickCount: number;

  fetchDeck: () => Promise<void>;
  processColumnSelection: (columnIndex: number) => void;
  reset: () => void;
}

export const useDeckStore = create<DeckState>((set, get) => ({
  cards: [],
  loading: false,
  finalCard: null,
  pickCount: 0,

  fetchDeck: async () => {
    set({ loading: true, pickCount: 0 });

    const deckRes = await fetch(
      'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    ).then((r) => r.json());

    const drawRes = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckRes.deck_id}/draw/?count=21`
    ).then((r) => r.json());

    const customCards = drawRes.cards.map((c: any) => ({
      code: c.code,
      image: mapCardToImage(c.code),
      value: c.value,
      suit: c.suit,
    }));

    set({
      cards: customCards,
      loading: false,
      finalCard: null,
      pickCount: 0,
    });
  },

  processColumnSelection: (columnIndex) => {
    const { cards, pickCount } = get();
    const columns: CardData[][] = [[], [], []];
    cards.forEach((card, i) => columns[i % 3].push(card));

    let newOrder: CardData[];
    if (columnIndex === 0) {
      newOrder = [...columns[1], ...columns[0], ...columns[2]];
    } else if (columnIndex === 1) {
      newOrder = [...columns[0], ...columns[1], ...columns[2]];
    } else {
      newOrder = [...columns[0], ...columns[2], ...columns[1]];
    }

    const newPickCount = pickCount + 1;

    if (newPickCount < 3) {
      set({
        cards: newOrder,
        pickCount: newPickCount,
        finalCard: null,
      });
      return;
    }

    const finalCard = newOrder[10];

    set({
      cards: newOrder,
      finalCard,
      pickCount: 0,
    });
  },

  reset: () =>
    set({
      cards: [],
      finalCard: null,
      loading: false,
      pickCount: 0,
    }),
}));
