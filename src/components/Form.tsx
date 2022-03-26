import { useState } from "react";
import {IState as Props} from '../App'

interface IProps {
  people: Props['people'],
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const Form: React.FC<IProps> = ({ people, setPeople}) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = ():void => {
    if( !input.name || !input.age || !input.url ) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note
      }
    ])

    setInput({
      name: "",
    age: "",
    url: "",
    note: "",
    })
  }

  return (
    <div className="rounded shadow-xl px-4 py-6 mb-8">
      <h1 className="text-center font-bold text-xl mb-4">Add To Party</h1>

      <div className="mb-4  w-2/3 mx-auto ">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Name ..."
          value={input.name}
          onChange={handleChange}
          name="name"
        />
      </div>
      <div className="mb-4 w-2/3 mx-auto">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Age
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Age ..."
          value={input.age}
          onChange={handleChange}
          name="age"
        />
      </div>
      <div className="mb-4 w-2/3 mx-auto">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Photo URL
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Photo URL ..."
          value={input.url}
          onChange={handleChange}
          name="url"
        />
      </div>
      <div className="mb-4 w-2/3 mx-auto">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Note
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Note ..."
          value={input.note}
          onChange={handleChange}
          name="note"
        />
      </div>
      <div className="mb-3 w-2/3 mx-auto">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
          Button
        </button>
      </div>
    </div>
  );
};

export default Form;
