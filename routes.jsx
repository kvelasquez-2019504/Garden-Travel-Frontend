import { TipoHabitacion } from "./src/components/TipoHabitacion/TipoHabitacion";

const routes = [ 
    {path:"/tipoHabitacion", element:<TipoHabitacion/> },
    {path:"/tipoHabitacion/:id/:nombre/:idPack/:pack/:pr", element:<TipoHabitacion/> },
];

export default routes;