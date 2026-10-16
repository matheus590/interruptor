
import { useState } from 'react'

export default function Interruptor() {
  const [ativo, setAtivo] = useState(false)

  return (
    <button
      className={ativo ? 'interruptor ativo' : 'interruptor inativo'}
      style={{
        backgroundColor: ativo ? 'green' : 'red',
        color: 'white'
      }}
      onClick={() => setAtivo(prev => !prev)}
    >
      {ativo ? 'ON' : 'OFF'}
    </button>
  )
}
