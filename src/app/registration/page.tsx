'use client'

import { IconDevices, IconGroupAdd, IconHandshake, IconMessage, IconPersonAdd, IconQueue, IconSupport, IconTag, IconUpload } from "@/components/Icons/Icons"
import Box from "@/components/Template/Box"
import Layout from "@/components/Template/Layout"
import useAppData from "@/data/hook/useAppData"

const Registration = () => {
  const { theme } = useAppData()
  const newTheme = theme === '' || theme === 'light' ? '#00000' : '#FFFFFF';
  
  return (
    <div>
      <Layout title="Cadastros" subtitle="">
        <div className="grid grid-cols-3 gap-3 items-center justify-center">
          <Box url="/registration/devices" text="Novo dispositivo" icon={ IconDevices(64, newTheme) } />
          <Box url="/registration/queues" text="Nova fila de atendimento" icon={ IconSupport(64, newTheme) } />
          <Box url="/registration/campaign" text="Nova campanha" icon={ IconQueue(64, newTheme) } />
          <Box url="/registration/messages" text="Nova mensagem" icon={ IconMessage(64, newTheme) } />
          <Box url="/registration/clients" text="Novo cliente" icon={ IconGroupAdd(64, newTheme) } />
          <Box url="/registration/saudations" text="Nova saudação" icon={ IconHandshake(64, newTheme) } />
          <Box url="/registration/user" text="Novo usuário" icon={ IconPersonAdd(64, newTheme) } />
          <Box url="/registration/media" text="Importar mídia" icon={ IconUpload(64, newTheme) } />
          <Box url="/registration/tags" text="Nova etiqueta" icon={ IconTag(64, newTheme) } />
        </div>   
      </Layout>
    </div>
  )
}

export default Registration