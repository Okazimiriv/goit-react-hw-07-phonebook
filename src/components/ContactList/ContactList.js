// import { ReactComponent as DeleteIcon } from '../../icons/remove.svg';
// import { DeleteButton } from '../ContactList/ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
import { deleteContact } from 'redux/operations';
import { getIsLoading } from 'redux/selectors';
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
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);

  const visibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {!isLoading && contacts.length === 0 && (
        <Text textAlign="center">There are no any contacts ...😕 </Text>
      )}
      <ContactListBlock>
        {contacts.length > 0 &&
          visibleContacts().map(({ id, name, number }) => (
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
