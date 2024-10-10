import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import DocumentTitle from "../components/DocumentTitle";
import SearchBox from "../components/SearchBox";
import { fetchContacts } from "../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshUser } from "../redux/auth/selectors";

export default function Contacts() {
  const dispatch = useDispatch();
  const isRefreshUser = useSelector(selectIsRefreshUser);

  useEffect(() => {
    if (!isRefreshUser) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isRefreshUser]);
  return (
    <>
      <DocumentTitle>Contacts</DocumentTitle>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}
