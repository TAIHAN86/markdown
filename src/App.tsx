import{ Routes,Route } from 'react-router-dom';
import './globals.css';

const App = () => {
  return (
    <main className="flex h-screen">
      <Route>
        {/* public routes*/}
        <route path="/sign-in" element={signinform/>} />
        {/* private  routes*/}
      </Route>
      <Route index element={<home/>}/>
    </main>
  )
}

export default App