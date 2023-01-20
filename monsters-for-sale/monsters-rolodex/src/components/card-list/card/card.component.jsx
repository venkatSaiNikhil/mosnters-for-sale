import "./card.styles.css";

const Card = ({ monster, className }) => {
  const { name, id, email } = monster;
  return (
    <div className={className}>
      <img
        alt={name}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      ></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
