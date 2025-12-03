import cornerSuitHearts from "../assets/images/corner-suit-hearts.webp";
import cornerSuitDiamonds from "../assets/images/corner-suit-diamonds.webp";
import cornerSuitClubs from "../assets/images/corner-suit-clubs.webp";
import cornerSuitSpades from "../assets/images/corner-suit-spades.webp";

export default function CornerSuits() {
    return (
        <><img src={cornerSuitHearts} className="absolute top-6 left-6 w-10" alt={cornerSuitHearts}/><img
            src={cornerSuitDiamonds} className="absolute top-6 right-6 w-10" alt={cornerSuitDiamonds}/><img
            src={cornerSuitClubs} className="absolute bottom-6 left-6 w-10" alt={cornerSuitClubs}/><img
            src={cornerSuitSpades} className="absolute right-6 bottom-6 w-10" alt={cornerSuitSpades}/></>

);
}
