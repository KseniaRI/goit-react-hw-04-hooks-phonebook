import { Contacts, Contact, DeleteButton, Tel } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
    return (
        <Contacts>
            {contacts.map(({ id, name, number }) => {
                return (
                        <Contact key={id}>{name}: <Tel>{number}</Tel>
                            <DeleteButton id={id} type="button" onClick={deleteContact}>Delete</DeleteButton>
                        </Contact>
                )
            }
            )}
        </Contacts>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }))
}