import typeColors from "../helpers/typeColors";
import { IDetails, IObjectKeys } from "../interface";

interface IProps extends IDetails {}

const Card = (props: IProps) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={props.sprites.front_default} alt={props.name} />
      </div>
      <h2 className="card__title">{props.name.toUpperCase()}</h2>
      {props.types.map((t, i) => (
        <div
          key={i}
          className="card__type"
          style={{ backgroundColor: (typeColors as IObjectKeys)[t.type.name] }}
        >
          {t.type.name.toUpperCase()}
        </div>
      ))}
      <h2 className="card__title">
        Weight: <span>{props.weight}</span>
      </h2>
      <h2 className="card__title">
        Height: <span>{props.height}</span>
      </h2>
      <h2 className="card__title">
        Ability:{" "}
        <span className="card__ability">
          {props.abilities[0].ability.name.toUpperCase()}
        </span>
      </h2>
    </div>
  );
};

export default Card;
