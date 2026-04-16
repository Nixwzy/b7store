import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { register as registerAction } from '@/actions/register';
import { RegisterFormInputs, registerSchema } from '@/schemas/auth';

export const useRegisterForm = () => {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormInputs) => {
    startTransition(async () => {
      const { name, email, password } = data;
      const res = await registerAction({ name, email, password });

      if (res.error) {
        // set form error to display server error message
        setError('root.serverError', { message: res.error });
      } else {
        // redirect to login page after successful registration
        router.push('/login');
      }
    });
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    pending,
  };
};
