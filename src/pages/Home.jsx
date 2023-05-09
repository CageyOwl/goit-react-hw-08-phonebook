import Greeting from "components/Greeting/Greeting";
import { greetingText } from "services/constants";


export default function Home() {
    return (
        <Greeting text={greetingText} />
    );
}