import type { FC } from 'react';

export const PlayingCard: FC<{ image: string }> = ({ image }) => (
  <img src={image} className="h-36 w-24 rounded-xl object-cover shadow-xl" alt={image} />
);
