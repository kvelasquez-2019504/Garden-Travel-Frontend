import { AuthPage } from "./pages/auth";
import { HotelesPage } from "./pages/hoteles/HotelesPage";
import { ServicesPage } from "./pages/servicios/ServicesPage"

const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/hoteles', element: <HotelesPage /> },
    { path: '/services', element: <ServicesPage /> }
]

export default routes;