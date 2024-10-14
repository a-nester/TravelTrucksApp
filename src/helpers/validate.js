import * as Yup from 'yup';

export const ValidateSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short name!')
    .max(50, 'Too long name!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Email required'),
});

export const initialValues = { name: '', email: '', date: '', comment: '' };
