import React, { Routes, Route } from 'react-router-dom';

import {
  Home,
  Login,
  Signup,
  Social,
  Recognitions,
  Profile,
  Winners,
} from './pages';

import { Layout, ProtectedLayout } from './layouts';
import { NavBar } from './components';

function App() {
  return (
    <main style={{ display: 'flex', height: '100vh' }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/" element={<ProtectedLayout />}>
          <Route path="/social" element={<Social />} />
          <Route path="/recognitions" element={<Recognitions />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/winners" element={<Winners />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
