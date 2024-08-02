'use client'

import { IconClose } from "@/components/Icons/Icons"
import { useState, useEffect } from "react"
import { Modal } from "@/components/Template/Modal"
import { useForm, SubmitHandler } from "react-hook-form"
import Box from "@/components/Template/Box"
import Table from "@/components/Template/Table"
import Layout from "@/components/Template/Layout"
import useAppData from "@/data/hook/useAppData"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

type tInputPhone = {
  telphoneDevice: string
};

const Devices = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<tInputPhone>();

  const onSubmit: SubmitHandler<tInputPhone> = data => console.log(data);

  useEffect(() => {
    register('telphoneDevice', { required: 'Telefone é obrigatório' });
  }, [register]);



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


  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  
  const getThemeColor = (theme: string | undefined): 'dark' | 'light' | 'none' => {
    if (theme === 'dark' || theme === 'light' || theme === 'none') {
      return theme;
    }
    return 'none'; // default case, adjust if needed
  }

  const color = getThemeColor(theme)


  return (
    <div>
      <Layout title="Dispositivos" subtitle="" appbar openDialog={handleOpenModal}>
        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 items-center justify-center select-none">
          <Box classDiv="shadow-xl cursor-default" text="Total Sessões" className={`font-bold text-purpleLight dark:text-purpleDark`} title="4" />
          <Box classDiv="shadow-xl cursor-default" text="Sessões Ativas" className={`font-bold text-purpleLight dark:text-purpleDark`} title="3"  />
          <Box classDiv="shadow-xl cursor-default" text="Sessões Inativas" className={`font-bold text-purpleLight dark:text-purpleDark`} title="1"  />
        </div>   
        <div className="flex justify-end mt-48">
        <button onClick={handleOpenModal}
          className={`
              hidden lg:inline-block rounded-lg w-1/6 h-12 text-white
            bg-lightItem hover:bg-primaryLight dark:bg-hoverItemDark
            dark:hover:bg-darkItem
            `}>
          Cadastrar
        </button>
        </div>
        <div className={`mt-2`}>

          <Table sessions={sessions} />
          
          <Modal.Root isOpen={isOpen}>
            <Modal.Header className="font-semibold">
              <Modal.Title>Cadastro de dispositivo</Modal.Title> 
              <Modal.Action onClick={handleCloseModal} title="close">
                { theme === 'dark' ? IconClose(24, '#FFFFFF') : IconClose(24, '#1e1f1f') }
              </Modal.Action>
            </Modal.Header>
            <Modal.Content>
              <div className={`flex flex-col items-center`}>
                <form id='hook-form' className={`flex items-center justify-center`} onSubmit={handleSubmit(onSubmit)}>
                  <PhoneInput
                    country={'br'}
                    enableSearch
                    searchNotFound="País não encontrado. Certifique-se de estar utilizando o nome oficial"
                    containerClass={`text-black dark:bg-black flex items-center`}
                    inputClass={`color:`}
                    onChange={phone => setValue('telphoneDevice', phone)}
                    inputProps={{
                      required: true,
                      autoFocus: true 
                    }}
                  />
                  {errors.telphoneDevice && <p>{errors.telphoneDevice.message}</p>}
                </form>
              </div>
            </Modal.Content>
            <Modal.Actions>
              <Modal.Action id={'hook-form'} color={color}>
                Salvar
              </Modal.Action>
            </Modal.Actions>
          </Modal.Root>
        </div>
      </Layout>
      
    </div>
  )
}

export default Devices