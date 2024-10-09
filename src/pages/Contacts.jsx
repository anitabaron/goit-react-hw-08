import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import DocumentTitle from "../components/DocumentTitle";
import SearchBox from "../components/SearchBox";

export default function Contacts() {
  return (
    <>
      <DocumentTitle>Contacts</DocumentTitle>;<h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}
