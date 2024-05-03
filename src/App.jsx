import { useState } from 'react'
import { useRoutes } from 'react-router-dom';
import routes from "./routes.jsx";


function App() {

  let element = useRoutes(routes);

  return (
    <>
      {element}
    </>
  )
}

export default App
