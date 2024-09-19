import { lazy } from "react";

const url = './Home'
const Home = lazy(() => import(`${url}`));

export default Home;