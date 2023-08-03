import { createBrowserRouter } from"react-router-dom";

import AdminPage from "../pages/admin/AdminPage";
import SupportListPage from "../pages/support/SupportListPage";
import FarmerListComponent from "../components/adminComponents/farmer/FarmerListComponent";


const router = createBrowserRouter([
    {
        path: "",
        element: <AdminPage></AdminPage>
    },
    {
        path: "/farmer/list",
        element: <FarmerListComponent></FarmerListComponent>
    }
]);

export default router;