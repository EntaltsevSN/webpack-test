import { lazy } from "react";

const url = './Projects'
const Projects = lazy(() => import(`${url}`));

export default Projects;