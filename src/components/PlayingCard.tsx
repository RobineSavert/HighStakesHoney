import type { FC } from 'react';
import type { CardData } from '../types/CardData';

export const PlayingCard: FC<{ card: CardData }> = ({ card }) => (
  <img src={card.image} className="h-36 w-24 rounded-xl object-cover shadow-xl" alt={card.code} />
);
