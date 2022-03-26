import { useState } from "react"
import Card from "./components/Card"
import Form from "./components/Form"

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string,
  }[]
}

const App = () => {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Ulvi Zasvia",
      url: "https://pbs.twimg.com/profile_images/1240673744596566016/3RYVVO4C_400x400.jpg",
      age: 24,
      note: "Only available for 2 hours"
    }
  ])

  return (
    <div className='max-w-xl mx-auto min-h-screen'>
      <h1 className='text-xl font-bold text-center mt-8'>People Invited to Party</h1>
      <Card people={people}/>
      <Form people={people} setPeople={setPeople} />
    </div>
  )
}

export default App  