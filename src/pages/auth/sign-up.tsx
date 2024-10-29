import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email()
});

type SignUpForm = z.infer<typeof signUpForm>

export const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SignUpForm>();

  const handleSignUp = (data: SignUpForm) => {
    toast.success('Estabelecimento cadastrado com sucesso.');
    navigate("/sign-in")
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button asChild  className='absolute right-8 top-8'>
          <Link to="/sign-in">
            Fazer login
          </Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Crie uma conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e acompanhe de perto suas vendas!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col gap-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input id="restaurantName" type="string" {...register('restaurantName')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input id="managerName" type="text" {...register('managerName')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu telefone</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>
            <Button disabled={isSubmitting} type="submit">Cadastrar</Button>
            <p className='px-6 text-center text-sm leading-relaxed text-muted-foreground'>
              Ao continuar, você concorda com nossos 
              <a href='#' className='underline underline-offset-auto'>Termos de serviço</a> e 
              <a href='#' className='underline underline-offset-auto'>políticas de privacidade</a>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
