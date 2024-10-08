import "./App.css";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setFilter } from "./redux/filtersSlice";
import { fetchContacts } from "./redux/operations";
import { selectError, selectLoading } from "./redux/selectors";

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
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
