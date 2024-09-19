import { FC, useState } from "react";

const Home: FC = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1);

  const handleClick = (e: any) => {
    e.preventDefault();

    increment()
  }

  return <div>Home page now

  <h1>{ count }</h1>
  <p></p>
  <button onClick={e => handleClick(e)}>increment</button>
  <p></p>
  <ul>
    <li>_MODE_: { _MODE_ }</li>
    <li>_PORT_: { _PORT_ }</li>
    <li>_ANALYZER_: { _ANALYZER_ }</li>
    <li>_PLATFORM_: { _PLATFORM_ }</li>
  </ul>
  </div>
};

export default Home;