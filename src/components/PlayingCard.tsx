import type { FC } from 'react';
import type { CardData } from '../types/CardData';

export const PlayingCard: FC<{ card: CardData }> = ({ card }) => (
  <img
    src={card.image}
    className="h-48 w-36 rounded-xl object-cover p-2 shadow-xl"
    alt={card.code}
  />
);
