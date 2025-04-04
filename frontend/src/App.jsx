import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useQuery, gql } from "@apollo/client";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;