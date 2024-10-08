import { useDispatch } from "react-redux";
import styles from "./Contact.module.css";
import { deleteContact } from "../redux/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div className={styles.form}>
        <div className={styles.personData} key={id} id={id}>
          <h4>{name}</h4>
          <p>☎ {number}</p>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
};

export default Contact;
