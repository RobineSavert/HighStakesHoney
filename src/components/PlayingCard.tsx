import type { FC } from 'react';
import type { CardData } from '../types/CardData';

export const PlayingCard: FC<{ card: CardData }> = ({ card }) => (
  <img
    src={card.image}
    className="w-[80px] md:w-[120px] rounded-xl object-cover p-2 shadow-xl"
    alt={card.code}
  />
);
