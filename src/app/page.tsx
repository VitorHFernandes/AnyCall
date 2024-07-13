'use client'
import { IconDevices, IconGroupAdd, IconHandshake, IconMessage, IconPersonAdd, IconQueue, IconSupport, IconTag, IconUpload } from "@/components/Icons/Icons"
import Box from "@/components/Template/Box"
import Layout from "@/components/Template/Layout"
import useAppData from "@/data/hook/useAppData"
import useAuth from "@/data/hook/useAuth"

export default function Home() {
  const { user } = useAuth()
  const { theme } = useAppData()
  const newTheme = theme === '' || theme === 'light' ? '#00000' : '#FFFFFF';
  const title = user?.name === null ? 'Olá! Seja bem vindo(a)' : `Olá, ${user?.name}`
  const subtitle = user?.name === null ? 'Página inicial' : `Seja bem vindo(a)`

  return (
    <div>
      <Layout title={title} subtitle={subtitle}>
        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 items-center justify-center">
          <Box url="/devices" text="Dispositivos" icon={ IconDevices(64, newTheme) } />
          <Box url="/queues" text="Filas de Atendimento" icon={ IconSupport(64, newTheme) } />
          <Box url="/campaign" text="Campanhas" icon={ IconQueue(64, newTheme) } />
          <Box url="/messages" text="Mensagens" icon={ IconMessage(64, newTheme) } />
          <Box url="/clients" text="Clientes" icon={ IconGroupAdd(64, newTheme) } />
          <Box url="/saudations" text="Saudações" icon={ IconHandshake(64, newTheme) } />
          <Box url="/user" text="Usuários" icon={ IconPersonAdd(64, newTheme) } />
          <Box url="/media" text="Mídias" icon={ IconUpload(64, newTheme) } />
          <Box url="/tags" text="Etiquetas" icon={ IconTag(64, newTheme) } />
        </div>   
      </Layout>
    </div>
  )
}