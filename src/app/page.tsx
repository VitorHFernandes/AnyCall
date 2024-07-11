'use client'

import Layout from "@/components/Template/Layout";
import useAuth from "@/data/hook/useAuth";


export default function Home() {
  const { user } = useAuth()
  return (
    <div>
      <Layout title={`Olá ${user?.name}`} subtitle="Seja bem vindo(a)!">
        <h3>AnyCall</h3>
      </Layout>
    </div>
  );
}
