import "./Card.scss";
interface IProps {
  img_url: string;
  title: string;
  value: string;
}

const Card = ({ img_url, title, value }: IProps) => {
  return (
    <div className="card">
      <img src={img_url} alt="icon" />
      <p className="card__title">{title}</p>
      <p className="card__value">{value}</p>
    </div>
  );
};

export default Card;
