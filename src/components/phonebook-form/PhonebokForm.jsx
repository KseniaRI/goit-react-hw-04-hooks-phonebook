import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { StyledField, StyledForm, Label, Button} from './PhonebookForm.styled';

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
        <Label htmlFor={idName}>Name</Label>         
        <Field type="text" name="name" id={idName} placeholder="Jack Black" as={StyledField} />
        <ErrorMessage name="name" />       
        <Label htmlFor={idNumber}>Number</Label>
        <Field type="tel" name="number" id={idNumber} placeholder="123-45-67" as={StyledField}/>         
        <ErrorMessage name="number" />
        <Button type="submit">Add contact</Button>
      </StyledForm>   
    </Formik>
    </>
    )
}