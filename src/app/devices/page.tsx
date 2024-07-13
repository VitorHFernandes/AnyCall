'use client'

import Box from "@/components/Template/Box"
import Layout from "@/components/Template/Layout"
import Table from "@/components/Template/Table"
import useAppData from "@/data/hook/useAppData"

const Devices = () => {
  const { theme } = useAppData()
  const sessions = [
    {
      ID: 1,
      Perfil: `${theme}`,
      Cliente: 'Zema',
      Dispositivo: 'Emulador #01',
      Número: "(47) 9 9769-4781",
      Aleatório: "Não",
      Pausas: "Não pausado",
      "Qtde Pausas": 1,
      Contador: 80,
      Soneca: 'Dormindo',
      Status: "Online"
    },
    {
      ID: 2,
      Perfil: `${theme}`,
      Cliente: 'Zema',
      Dispositivo: 'Emulador #02',
      Número: "(47) 9 9698-0163",
      Aleatório: "Sim",
      Pausas: "Pausado",
      "Qtde Pausas": 3,
      Contador: 150,
      Soneca: 'Acordado',
      Status: "Online"
    },
    {
      ID: 3,
      Perfil: `${theme}`,
      Cliente: 'Salfer',
      Dispositivo: 'Samsung azul',
      Número: "(47) 9 8441-4897",
      Aleatório: "Sim",
      Pausas: "Pausado",
      "Qtde Pausas": 0,
      Contador: 30,
      Soneca: 'Acordado',
      Status: "Online"
    },
    {
      ID: 4,
      Perfil: `${theme}`,
      Cliente: 'Euro17',
      Dispositivo: 'iPhone X',
      Número: "(47) 9 9722-2500",
      Aleatório: "Não",
      Pausas: "Não pausado",
      "Qtde Pausas": 5,
      Contador: 100,
      Soneca: 'Dormindo',
      Status: "Offline"
    },
  ]

  return (
    <div>
      <Layout title="Dispositivos" subtitle="">
        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 items-center justify-center">
          <Box classDiv="shadow-xl cursor-default" text="Total Sessões" className={`font-bold text-purpleLight dark:text-purpleDark`} title="4" />
          <Box classDiv="shadow-xl cursor-default" text="Sessões Ativas" className={`font-bold text-purpleLight dark:text-purpleDark`} title="3"  />
          <Box classDiv="shadow-xl cursor-default" text="Sessões Inativas" className={`font-bold text-purpleLight dark:text-purpleDark`} title="1"  />
        </div>   
        <div className="flex justify-end mt-48">
          <button className="mb-6 rounded-lg w-1/6 h-full text-white bg-lightItem hover:bg-primaryLight dark:bg-hoverItemDark dark:hover:bg-darkItem">
            Cadastrar
          </button>
        </div>
        <div className={`mt-2`}>
          <Table sessions={sessions} />
        </div>
      </Layout>
    </div>
  )
}

export default Devices