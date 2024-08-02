'use client'

import { IconClose } from "@/components/Icons/Icons";
import { useState, useEffect } from "react";
import { Modal } from "@/components/Template/Modal";
import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@/components/Template/Box";
import Table from "@/components/Template/Table";
import Layout from "@/components/Template/Layout";
import useAppData from "@/data/hook/useAppData";
import 'react-phone-input-2/lib/style.css';
import ToggleButton from "@/components/Template/ToggleButton";

type tInput = {
  agent: string,
  queue: string,
  hasActive: boolean
};

interface iQueue {
  id: number,
  queue: string
}

const Queues = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(true);
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<tInput>();

  const valueToggle = () => {
    const newToggleValue = toggle === true ? false : true;
    setToggle(newToggleValue);
    setValue("hasActive", newToggleValue)

  };

  const onSubmit: SubmitHandler<tInput> = data => console.log(data);

  useEffect(() => {
    setValue("hasActive", toggle)
  })

  useEffect(() => {
    register('agent', { required: 'O agente é obrigatório' });
    register('queue', { required: 'A fila é obrigatória' });
   
  }, [register]);

  const { theme } = useAppData();

  const sessions = [
    {
      ID: 1,
      Fila: `Clientes 31-90 dias`,
      Usuário: 'Vítor H. Fernandes',
      Status: 'Ativo'
    },
    {
      ID: 2,
      Fila: `Clientes 91-120 dias`,
      Usuário: 'Izadora S. Fernandes',
      Status: 'Ativo'
    },
    {
      ID: 3,
      Fila: `Clientes 121-150 dias`,
      Usuário: 'Isadora M. Fernandes',
      Status: 'Ativo'
    },
    {
      ID: 4,
      Fila: `Clientes 151-180 dias`,
      Usuário: 'Vítor H. Fernandes',
      Status: 'Inativo'
    },
  ];

  const users = [
    {
      id: 1,
      user: 'Mauricio Troiano'
    },
    {
      id: 2,
      user: 'Vítor H. Fernandes'
    },
    {
      id: 3,
      user: 'Izadora S. Fernandes'
    },
    {
      id: 4,
      user: 'Isadora M. Fernandes'
    }
  ];

  const queues: iQueue[] = [
    {
      id: 1,
      queue: 'Clientes 31-90 dias'
    },
    {
      id: 2,
      queue: 'Clientes 91-120 dias'
    },
    {
      id: 3,
      queue: 'Clientes 121-150 dias'
    },
    {
      id: 4,
      queue: 'Clientes 151-180 dias'
    }
  ];

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const getThemeColor = (theme: string | undefined): 'dark' | 'light' | 'none' => {
    if (theme === 'dark' || theme === 'light' || theme === 'none') {
      return theme;
    }
    return 'none'; // default case, adjust if needed
  };

  const color = getThemeColor(theme);

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
              <Modal.Title>Cadastro de Fila</Modal.Title> 
              <Modal.Action onClick={handleCloseModal} title="close">
                { theme === 'dark' ? IconClose(24, '#FFFFFF') : IconClose(24, '#1e1f1f') }
              </Modal.Action>
            </Modal.Header>
            <Modal.Content>
            <div className="flex flex-col items-center">
              <form id='hook-form' className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <select {...register("agent")} className="focus text-gray focus:border-2 border-lightItem dark:text-white dark:bg-darkItem rounded-md h-10 w-full mb-4">
                  <option selected disabled>Selecione um agente</option>
                  {users.map((user) => (
                    <option key={user.id}>{user.user}</option>
                  ))}
                </select>

                <select {...register("queue")} className="focus text-gray focus:border-2 border-lightItem dark:text-white dark:bg-darkItem rounded-md h-10 w-full mb-4">
                  <option selected disabled>Selecione uma fila</option>
                  {queues.map((queues) => (
                    <option key={queues.id}>{queues.queue}</option>
                  ))}
                </select>
                <div className="flex flex-row items-center mb-4">
                  <label className={`mr-4`}>Ativo</label>
                  <ToggleButton value={toggle} ToggleButton={ valueToggle } />
                </div>
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

export default Queues;