import { IState as IProps } from "../App";

const Card: React.FC<IProps> = ({ people }) => {
  const renderCard = (): JSX.Element[] => {
    return people.map((person) => (
      <div className="rounded shadow-xl px-4 py-6 mb-2 hover:scale-110 hover:cursor-pointer transition">
        <div className="flex justify-around items-center gap-x-4">
          <div
            style={{ backgroundImage: `url("${person.url}")` }}
            className="w-20 h-20 bg-cover rounded-full bg-no-repeat"
          ></div>
          <div className="text-lg font-bold">{person.name}</div>
          <div className="text-base">{person.age} years old</div>
          <div className="text-base">{person.note}</div>
        </div>
      </div>
    ));
  };

  return <div className="mb-8">{renderCard()}</div>;
};

export default Card;
