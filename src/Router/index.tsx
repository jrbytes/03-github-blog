import { Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { Home } from '../pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
