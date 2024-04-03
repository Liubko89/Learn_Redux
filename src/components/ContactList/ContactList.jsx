import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {visibleContacts.length === 0 && (
        <li>
          <b>
            There are no contacts in your phonebook yet. Add some to get
            started!
          </b>
        </li>
      )}

      {visibleContacts &&
        Array.isArray(visibleContacts) &&
        visibleContacts.length > 0 &&
        visibleContacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={css.contactListItem}>
              <Contact
                contactName={name}
                contactNumber={number}
                contactId={id}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
