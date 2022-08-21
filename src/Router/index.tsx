import { Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { Home } from '../pages/Home'
import { Post } from '../pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  )
}
