import { Route, Routes } from 'react-router-dom'
import { Default } from './layouts/Default'
import { Issues } from './pages/Issues'

import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/issues" element={<Issues />} />
      </Route>
    </Routes>
  )
}
