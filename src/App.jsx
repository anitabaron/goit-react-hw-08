import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import { selectError, selectLoading } from "./redux/contacts/selectors";
import { setFilter } from "./redux/filters/filtersSlice";
import { fetchContacts } from "./redux/contacts/operations";

const HomePage = lazy(() => import("./pages/Home"));
const ContactsPage = lazy(() => import("./pages/Contacts"));
const RegisterPage = lazy(() => import("./pages/Register"));
const LoginPage = lazy(() => import("./pages/Login"));

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(setFilter(""));
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) return <p>Error: {error}</p>;

  if (loading)
    return (
      <>
        <h1>Phonebook</h1>
        <p>Loading...</p>
      </>
    );

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectPath="/login"
                Component={<ContactsPage />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectPath="/contacts"
                Component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectPath="/contacts"
                Component={<LoginPage />}
              />
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
