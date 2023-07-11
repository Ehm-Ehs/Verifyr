import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Index from "./component";
import AuthPage from "./component/auth/authPage";
import Layout from "./component/layout/layout";
import "./App.css";
import CreateAdmin from "./component/roles/createAdmin";
import EmployeePage from "./component/company/employee";
import Company from "./component/company/company";
import StaffVerify from "./component/verify/staffVerify";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Index />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<CreateAdmin />} />
      <Route path="/employee" element={<EmployeePage />} />
      <Route path="/verify" element={<StaffVerify />} />
      <Route
        path="/company/:id"
        render={({ match }) => <Company companyName={match.params.id} />}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
