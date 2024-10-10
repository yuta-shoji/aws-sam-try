import './App.css'
import {GreetingRepository} from "./repository/GreetingRepository.ts";
import {useState} from "react";

type Props = {
    greetingRepository: GreetingRepository
}

export default function App(
    {
        greetingRepository
    }: Props
) {
    const {
        onClickGreetingButton,
            setName,
            greeting,
    } = useApp({greetingRepository})

    return (
        <>
            <h1>AWS SAM Lambda APIGateway try!!!!</h1>

            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={onClickGreetingButton}>Get Greeting</button>

            <h2>{greeting}</h2>
        </>
    )
}

function useApp(
    {
        greetingRepository
    }: Props
) {
    const [name, setName] = useState<string>('')
    const [greeting, setGreeting] = useState<string>('')

    const onClickGreetingButton = () => {
        greetingRepository
            .getGreeting(name)
            .then(greeting => {
                console.log({greeting})
                setGreeting(greeting)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return {
        onClickGreetingButton,
        setName,
        greeting,
    }
}