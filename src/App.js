import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
// import { getContacts } from 'redux/selectors';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Container } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList/ContactList';
import { ThreeDots } from 'react-loader-spinner';
import { Loader } from 'components/Loader/Loader.styled';
import { ErrorMessage } from './ErorrMessage';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && (
        <Loader>
          <ThreeDots color="lightseagreen" width="50" />
        </Loader>
      )}
      <ContactList />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
