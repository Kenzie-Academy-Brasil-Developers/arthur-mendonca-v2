import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './formSchema';
import { UserContext } from '../../../contexts/userContext';
import { iInputProps, iLoginUser } from '../../../contexts/userContext/@types';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

const LoginForm = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iInputProps>({ resolver: yupResolver(formSchema) });

  const submit: SubmitHandler<iLoginUser> = (formData: iInputProps) => {
    loginUser(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='E-mail'
        type='email'
        name='email'
        register={register('email')}
        errors={errors.email?.message}
        email=''
        password=''
        passwordConfirm=''
      />
      <Input
        label='Senha'
        name='password'
        type='password'
        register={register('password')}
        errors={errors.password?.message}
        email=''
        password=''
        passwordConfirm=''
      />
      <StyledButton $buttonSize='default' $buttonStyle='green' type='submit'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
