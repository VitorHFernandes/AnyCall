'use client'

import { createContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import firebase from '@/firebase/config'
import Cookies from 'js-cookie'
import User from "@/model/User";

interface iAuthContext {
  user?: User | null | undefined,
  loading?: boolean,
  googleLogin?: () => Promise<void>
  Login?: (email: string, password: string) => Promise<void>
  SignUp?: (email: string, password: string) => Promise<void>
  logOut?: () => Promise<void>
}

type tAuthProvider = {
  children: React.ReactNode
}

const AuthContext = createContext<iAuthContext>({})


const normalUser = async (firebaseUser: firebase.User): Promise<User> => {
  const token = await firebaseUser.getIdToken()

  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0]?.providerId,
    imgUrl: firebaseUser.photoURL
  }
}

const managementCookie = (logged: boolean) => {
  if (logged) {
    Cookies.set('anycall-auth', logged.toString(), {
      expires: 7
    })
  } else {
    Cookies.remove('anycall-auth')
  }
}

export const AuthProvider = ({ children }: tAuthProvider) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  const settingsSessions = async (firebaseUser: any) => {
    if (firebaseUser?.email) {
      const user = await normalUser(firebaseUser)
      setUser(user)
      managementCookie(true)
      setLoading(false)
      return user.email
    } else {
      setUser(null)
      managementCookie(false)
      setLoading(false)
      return false
    }
  }

  const Router = useRouter()

  const googleLogin = async () => {
    try {
      setLoading(true)
      const resp = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
      await settingsSessions(resp.user)
      Router.push("/")
    } finally {
      setLoading(false)
    }
  }

  const Login = async (email: string, password: string) => {
    try {
      setLoading(true)
      const resp = await firebase.auth().signInWithEmailAndPassword(email, password)
      await settingsSessions(resp.user)
      Router.push("/")
    } finally {
      setLoading(true)
    }
  }

  const SignUp = async ( email: string, password: string) => {
    try {
      setLoading(true)
      const resp = await firebase.auth().createUserWithEmailAndPassword(email, password)
      await settingsSessions(resp.user)
      Router.push("/")
    } finally {
      setLoading(false)
    }
  }

  const logOut = async () => {
    try {
      setLoading(true)
      await firebase.auth().signOut()
      await settingsSessions(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if(Cookies.get('anycall-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(settingsSessions)
      return () => cancel()
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      googleLogin,
      Login,
      SignUp,
      logOut
    }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext