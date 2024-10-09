import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import SearchBox from "../components/SearchBox";

export default function Contacts() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
