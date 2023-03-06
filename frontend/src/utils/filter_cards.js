import { useParams } from "react-router-dom";

const { id } = useParams();
const filterCards = [
  {
    id: 1,
    name: "Jeux de plateaux",
    link: `/categorie/${id}`,
  },

  {
    id: 2,
    name: "Jeux de figurines",
    link: "/categorie",
  },

  {
    id: 3,
    name: "Jeux de cartes",
    link: "/categorie",
  },

  {
    id: 4,
    name: "Jeux pour enfants",
    link: "/categorie",
  },
];

export default filterCards;
