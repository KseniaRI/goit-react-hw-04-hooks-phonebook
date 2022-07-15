import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { StyledForm, Button } from './PhonebookForm.styled';
import { TextInput } from './TextInput';

const idName = nanoid();
const idNumber = nanoid();
const phonePattern = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

export const PhonebookForm = ({ onSubmit }) => {
 
    return (
    <>
    <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={Yup.object({
            name: Yup.string().matches(namePattern, 'Insert first name and second name').required('Required'),
            number: Yup.string().matches(phonePattern, 'Phone number is not valid').required('Required')
        })
        } 
        onSubmit={onSubmit}
      >
        <StyledForm autoComplete="off" >
          <TextInput label="Name" name="name" type="text" id={idName} placeholder="Jack Black" />
          <TextInput label="Number" name="number" type="tel" id={idNumber} placeholder="123-45-67" />
        <Button type="submit">Add contact</Button>
      </StyledForm>   
    </Formik>
    </>
    )
}