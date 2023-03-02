import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './formSchema';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { UserContext } from '../../../contexts/userContext';
import { iInputProps } from '../../../contexts/userContext/@types';

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iInputProps>({ resolver: yupResolver(formSchema) });

  const submit: SubmitHandler<iFormRegisterNewUser> = (
    formData: iInputProps
  ) => {
    userRegister(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        type='text'
        label='Nome'
        name='name'
        register={register('name')}
        errors={errors.name?.message}
      />
      <Input
        type='email'
        label='Seu e-mail'
        name='email'
        register={register('email')}
        errors={errors.email?.message}
      />
      <Input
        type='password'
        label='Inserir senha'
        name='password'
        register={register('password')}
        errors={errors.password?.message}
      />
      <Input
        label='Repetir senha'
        name='passwordConfirm'
        register={register('passwordConfirm')}
        errors={errors.passwordConfirm?.message}
      />
      <StyledButton $buttonSize='default' $buttonStyle='gray' type='submit'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
