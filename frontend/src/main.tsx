import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from "./App"
import {DefaultGreetingRepository} from "./repository/GreetingRepository.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App greetingRepository={new DefaultGreetingRepository()}/>
    </StrictMode>,
)
