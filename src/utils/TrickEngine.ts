export function splitIntoColumns<T>(cards: T[]): T[][] {
  const columns: T[][] = [[], [], []];
  cards.forEach((card, index) => {
    columns[index % 3].push(card);
  });
  return columns;
}
