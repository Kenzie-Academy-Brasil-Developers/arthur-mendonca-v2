import * as yup from 'yup';

export const formSchema = yup.object({
  name: yup.string().required('Inserir um nome.'),
  email: yup
    .string()
    .required('Inserir um email.')
    .email('Insira um email válido.'),
  password: yup
    .string()
    .required('Necessário inserir uma senha')
    .min(6, 'A senha deve ter pelo menos 6 caracteres.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), 'As senhas devem ser idênticas.'])
    .required('Este campo é obrigatório.'),
});
