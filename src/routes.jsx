import { AuthPage } from "./pages/auth";
import { LoginConfirm } from "./pages/loginConfirm";
const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <LoginConfirm/>}
]

export default routes;