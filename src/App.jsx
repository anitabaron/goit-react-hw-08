import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { setFilter } from "./redux/filtersSlice";
import { fetchContacts } from "./redux/operations";
import { selectError, selectLoading } from "./redux/selectors";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";

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
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
