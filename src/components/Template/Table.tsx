'use client'

import useAppData from "@/data/hook/useAppData"
import { IconDelete, IconEdit } from "../Icons/Icons"

interface iTable {
  sessions: Record<string, any>[]
}

const Table = ({ sessions }: iTable) => {
  const { theme } = useAppData()
  const IconColor = theme === '' || theme === 'light' ? '#000000' : '#FFFFFF';

  const renderHeader = () => {
    const headers = Object.keys(sessions[0]);
    return (
      <tr className="hidden lg:table-row">
        {headers.map((header, i) => (
          <th key={i} className="text-center p-4">
            {header}
          </th>
        ))}
        <th className="text-center p-4">
          Ações
        </th>
      </tr>
    )
  }

  const renderData = () => {
    const headers = Object.keys(sessions[0]);
    return sessions.map((session, rowIndex) => (
      <tr
        key={rowIndex}
        className={`
          ${rowIndex % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
          ${rowIndex % 2 === 0 ? 'dark:bg-hoverTableDark' : 'dark:bg-hoverItemDark'}
          lg:table-row
        `}
      >
        {Object.values(session).map((value, colIndex) => (
          <td key={colIndex} className="text-center p-4 lg:table-cell hidden">
            {value}
          </td>
        ))}
        <td className="lg:table-cell hidden">
          {renderActions()}
        </td>
      </tr>
    ));
  }

  const renderActions = () => {
    return (
      <td className="flex justify-center items-center">
        <button
          className={`
            flex justify-center items-center py-2 px-2
            text-green-600 rounded-full hover:bg-purple-50 dark:hover:bg-purpleDark
          `}
        >
          {IconEdit(24, IconColor)}
        </button>
        <button
          className={`
            flex justify-center items-center py-2 px-2
            text-red-500 rounded-full hover:bg-purple-50 dark:hover:bg-redLightItem
          `}
        >
          {IconDelete(24, IconColor)}
        </button>
      </td>
    );
  }

  const renderResponsiveData = () => {
    const headers = Object.keys(sessions[0]);
    return sessions.map((session, rowIndex) => (
      <div
        key={rowIndex}
        className={`
          ${rowIndex % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
          ${rowIndex % 2 === 0 ? 'dark:bg-hoverTableDark' : 'dark:bg-hoverItemDark'}
          p-4
          lg:hidden
        `}
      >
        {headers.map((header, colIndex) => (
          <div key={colIndex} className="flex justify-between">
            <dt className="font-bold">{header}</dt>
            <dd>{session[header]}</dd>
          </div>
        ))}
        <div className="flex justify-between items-center">
          <dt className="font-bold">Ações</dt>
          <dd>{renderActions()}</dd>
        </div>
      </div>
    ));
  }

  return (
    <div className="min-h-screen">
      <table className="w-full rounded-xl overflow-hidden lg:table hidden">
        <thead
          className="
            text-white
            bg-lightItem dark:bg-darkItem
          ">
          {renderHeader()}
        </thead>
        <tbody>
          {renderData()}
        </tbody>
      </table>
      <div className="lg:hidden rounded-xl overflow-hidden">
        {renderResponsiveData()}
      </div>
    </div>
  )
}

export default Table