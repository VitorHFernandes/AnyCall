'use client'
import AuthInput from "@/components/Auth/AuthInput"
import { IconWarn } from "@/components/Icons/Icons"
import useAuth from "@/data/hook/useAuth"
import Image from "next/image"
import { useState } from "react"

const Auth = () => { 
  const { Login, SignUp, googleLogin } = useAuth()

  const [mode, setMode] = useState<'login' | 'SignUp'>('login')
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')

  const showError = (message: any, timeInSeconds: number = 5) => {
    setError(message)
    setTimeout(() => setError(null), timeInSeconds * 1000)
  }

  const submit = async () => {
    try {
      if (mode === 'login'){
        if(Login) {
          await Login(email, password)
        } else {
          showError('Falha ao logar! Contate o suporte do sistema.')
        }
      } else {
        if (SignUp) {
          await SignUp(email, password)
        } else {
          showError('Falha ao cadastrar! Contate o suporte do sistema')
        }
      } 
    } catch (e) {
      showError((e as Error).message ?? 'Unknown error.')
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <Image
          src={`/wallpaper-2.jpg`}
          alt="Authentication screen image"
          width={3840}
          height={2160}
          quality={100}
          priority={true}
          className="h-screen w-full object-cover"
        />
      </div>
    
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-xl font-bold mb-5">
          { mode === 'login' ? 'Entre com sua conta' : 'Criar conta'}
        </h1>
        { error ? (
          <div 
            className={`
              flex items-center
              bg-red-400 text-white py-3 px-5 my-2
              border border-red-700 rounded-lg
            `}
          >
            { IconWarn }
            <span className="ml-3">{ error }</span>
          </div>
        ) : false }
        <AuthInput
          label="E-mail"
          value={email}
          changeValue={setEmail}
          type="email"
          required
        />
        <AuthInput
          label="Senha"
          value={password}
          changeValue={setPass}
          type="password"
          required
        />

        <button
          onClick={submit}
          className={`w-full bg-lightItem hover:shadow-2xl text-white rounded-lg px-4 py-3 mt-6`}
        >
          { mode === 'login' ? 'Entrar' : 'Cadastrar' }
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          onClick={googleLogin}
          className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3`}
        >
          Entre com o Google
        </button>

        { mode === 'login' ? (
          <p className="mt-8">
            Novo por aqui?
          
            <a
              onClick={() => setMode('SignUp')}
              className={`
                text-blue-500 hover:text-blue-700
                font-semibold cursor-pointer
              `}
            > Crie uma conta</a>
          </p>
        ) : (
          <p className="mt-8">
            Já é cadastrado?
            <a
              onClick={() => setMode('login')}
              className={`
                text-blue-500 hover:text-blue-700
                font-semibold cursor-pointer
              `}
            > Entre com suas credenciais</a>
          </p>
        )}
      </div>
    </div>
  )
}

export default Auth