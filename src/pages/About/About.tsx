import { FC } from "react";
import elephant from '@/assets/elephant.jpg'
import grass from '@/assets/grass-shape.png'
import Rose from '@/assets/rose.svg'

const About: FC = () => {
  return <div>
    <img src={ elephant } alt="" />
    <img src={grass} alt="" />
    <Rose width={96} height={96} fill={'red'} />
    <div>About page</div>
  </div>
};

export default About;