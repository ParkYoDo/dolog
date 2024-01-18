import Modal from '@components/Modal/Modal';
import useModal from '@hooks/useModal';
import { Button, Form, Input } from '@styles/GlobalStyle';
import { IAuthLogin } from '@type/authInterface';
import { SubmitHandler, useForm } from 'react-hook-form';
import authApi from '@apis/reactQuery/authApi';
import useAuth from '@hooks/useAuth';
import { useEffect } from 'react';

const LoginModal = () => {
  const { onCloseModal } = useModal();
  const { signIn } = authApi();
  const { auth, onLogin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthLogin>({
    defaultValues: {
      id: '',
      password: '',
    },
  });

  const onSignIn: SubmitHandler<IAuthLogin> = input => {
    signIn.mutate(input, {
      onSuccess: async data => {
        onLogin({ uuid: data.uuid });
        onCloseModal();
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const content = (
    <Form
      onKeyDown={e => {
        if (e.key === 'Enter') handleSubmit(onSignIn)();
      }}
    >
      <Input
        type="text"
        placeholder="Id"
        {...register('id', {
          required: 'id를 입력하세요',
        })}
      />
      <Input
        type="password"
        placeholder="Password"
        {...register('password', {
          required: 'password를 입력하세요',
        })}
      />
      {errors.id?.message || errors.password?.message}
    </Form>
  );

  const buttons = [
    <Button onClick={handleSubmit(onSignIn)}>SignIn</Button>,
    <Button onClick={onCloseModal}>Cancel</Button>,
  ];

  return <Modal title="Login" content={content} buttons={buttons} />;
};

export default LoginModal;
