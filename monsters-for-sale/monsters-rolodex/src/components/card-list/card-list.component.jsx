import "./card-list.styles.css";
import Card from "./card/card.component";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      const { id } = monster;
      return <Card key={id} className="card-container" monster={monster} />;
    })}
  </div>
);

export default CardList;
