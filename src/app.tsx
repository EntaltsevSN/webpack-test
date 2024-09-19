import { Route, Routes } from 'react-router-dom'
import style from './styles/style.module.scss'
import { Suspense } from 'react'
import Loader from './components/Loader'
import { Link } from 'react-router-dom'
import About from '@/pages/About'
import Projects from '@/pages/Projects'
import Home from '@/pages/Home'

const ProjectsItem = () => <div>ProjectsItem</div>

export default () => {
  return <>
    <Link to={'/'}>Home</Link>
    <Link to={'/about'}>About</Link>
    <Link to={'/projects'}>Projects</Link>
    <Routes>
      <Route path='/' element={<Suspense><Home /></Suspense>} />
      <Route path='about/' element={<Suspense fallback={<Loader />}><About /></Suspense>} />
      <Route path='projects/'>
        <Route index element={<Suspense fallback={<Loader />}><Projects /></Suspense>} />
        <Route path=':id' element={<ProjectsItem />} />
      </Route>
    </Routes>
  </>
}