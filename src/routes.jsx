import { AuthPage } from "./pages/auth";
import { HotelesPage } from "./pages/hoteles/HotelesPage";
const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/*', element: <HotelesPage /> },
    { path: '/hoteles', element: <HotelesPage />}
]

export default routes;