import { lazy } from "react";

const url = './About'
const About = lazy(() => import(`${url}`));

export default About;