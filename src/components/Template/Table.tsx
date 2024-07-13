'use client'

import useAppData from "@/data/hook/useAppData"
import { IconDelete, IconEdit } from "../Icons/Icons"

interface iTable {
  sessions: Record<string, any>[]
} 

const Table = ({ sessions }: iTable) => {
  const { theme } = useAppData()
  const IconColor = theme === '' || theme === 'light' ? '#00000' : '#FFFFFF';

  const renderHeader = () => {
    const headers = Object.keys(sessions[0]);
    return (
      <tr>
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
    return sessions.map((session, rowIndex) => 
      <tr 
        key={rowIndex} 
        className={`
          ${rowIndex % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'} 
          ${rowIndex % 2 === 0 ? 'dark:bg-hoverTableDark' : 'dark:bg-hoverItemDark'}
        `}>
        {Object.values(session).map((value, colIndex) => (
          <td key={colIndex} className="text-center p-4">
            {value}
          </td>
        ))}
        {renderActions()}
      </tr>
    );
  }

  const renderActions = () => {
    return(
      <td className="flex justify-center items-center">
        <button 
          className={`
            flex justify-center items-center p-2 m-1
            text-green-600 rounded-full hover:bg-purple-50 dark:hover:bg-purpleDark
          `}  
        >
          {IconEdit(24, IconColor)}
        </button>
        <button 
          className={`
            flex justify-center items-center p-2 m-1
            text-red-500 rounded-full hover:bg-purple-50 dark:hover:bg-redLightItem
          `}  
        >
          {IconDelete(24, IconColor)}
        </button>
      </td>
    )
  }

  return (
      <table className="w-full table-auto rounded-xl overflow-auto-x">
        <thead 
          className={`
            text-white
            bg-lightItem dark:bg-darkItem
          `}>
          {renderHeader()}
        </thead>
        <tbody>
          {renderData()}
        </tbody>
      </table>
  )
}

export default Table