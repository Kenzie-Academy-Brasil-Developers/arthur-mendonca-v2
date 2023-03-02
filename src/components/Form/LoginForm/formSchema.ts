import * as yup from 'yup';

export const formSchema = yup.object({
  email: yup.string().required('Insira seu e-mail de login.'),
  password: yup.string().required('Insira sua senha para login.'),
});
