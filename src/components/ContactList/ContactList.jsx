import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);

  return (
    <ul className={css.contactList}>
      {(selectNameFilter
        ? selectContacts.filter((contact) =>
            contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
          )
        : selectContacts
      ).map(({ id, name, number }) => {
        return (
          <li key={id} className={css.contactListItem}>
            <Contact contactName={name} contactNumber={number} contactId={id} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
