// import { ReactComponent as DeleteIcon } from '../../icons/remove.svg';
// import { DeleteButton } from '../ContactList/ContactList.styled';
import { useSelector } from 'react-redux';
// import { selectContacts, selectFilter } from 'redux/selectors';
import { selectVisibleContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import { IoClose } from 'react-icons/io5';
import {
  ContactListBlock,
  ContactItem,
  ContactInfo,
  ContactName,
  DeleteButton,
  Text,
  // ContactButton,
} from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  const contacts = useSelector(selectVisibleContacts);
  // const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  // const visibleContacts = () => {
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  return (
    <>
      {!isLoading && contacts.length === 0 && (
        <Text textAlign="center">There are no any contacts ...😕 </Text>
      )}
      <ContactListBlock>
        {contacts.length > 0 &&
          contacts.map(({ id, name, number }) => (
            <ContactItem key={id}>
              {' '}
              <ContactInfo>
                {name}:<ContactName>{number}</ContactName>
              </ContactInfo>
              <DeleteButton
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                <IoClose size={32} fill="teal" />
              </DeleteButton>
            </ContactItem>
          ))}
      </ContactListBlock>
    </>
  );
};

export default ContactList;
