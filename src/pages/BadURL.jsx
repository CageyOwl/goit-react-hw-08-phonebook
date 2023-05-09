import Greeting from 'components/Greeting/Greeting';
import { falseRouteExplanationText } from 'services/constants';


export default function BadURL() {
  return (
    <Greeting text={falseRouteExplanationText} />
  );
}
