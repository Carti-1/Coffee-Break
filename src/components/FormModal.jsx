import { useEffect, useState } from 'react'
import { formConfigs, formKickers } from '../data/forms.js'

function FormField({ field }) {
  const common = { id: `field-${field.name}`, name: field.name, required: Boolean(field.required), placeholder: field.placeholder || undefined }
  let control
  if (field.type === 'textarea') control = <textarea {...common} />
  else if (field.type === 'select') control = <select {...common}>{field.options.map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select>
  else control = <input {...common} type={field.type || 'text'} min={field.type === 'date' ? new Date().toISOString().slice(0, 10) : undefined} />
  return <div className="field"><label htmlFor={common.id}>{field.label}</label>{control}</div>
}

export default function FormModal({ type, onClose, onSubmit }) {
  const config = formConfigs[type]
  const [protocol, setProtocol] = useState('')

  useEffect(() => {
    function onKeyDown(event) { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = '' }
  }, [onClose])

  function submit(event) {
    event.preventDefault()
    setProtocol(onSubmit(type, Object.fromEntries(new FormData(event.currentTarget).entries())))
  }

  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    {!protocol ? <><div className="modal-top"><div><span className="mono">{formKickers[type] || (type === 'curso' ? 'formação & café' : 'clube do coffee break')}</span><h2 id="modal-title">{config.title}</h2></div><button className="close" onClick={onClose} aria-label="Fechar">×</button></div><p className="modal-intro">{config.intro}</p><form onSubmit={submit}><div>{config.fields.map((field) => <FormField field={field} key={field.name} />)}</div><button className="btn" type="submit">{config.button}</button></form></> : <div className="success"><span className="success-mark">✓</span><h3>{type === 'denuncia' ? 'Relato recebido com cuidado.' : type === 'curso' ? 'Interesse registrado!' : 'Chegou por aqui!'}</h3><p>{type === 'denuncia' ? 'Obrigado por avisar. A equipe responsável poderá verificar o ocorrido e tomar as providências necessárias. Guarde o protocolo para referência.' : 'Obrigado por contribuir com o Clube do Coffee Break. Sua mensagem foi registrada neste dispositivo.'}</p><span className="protocol">{type === 'denuncia' ? 'Protocolo ' : 'Recebido · '}{protocol}</span><p className="success-close"><button className="btn" onClick={onClose}>Fechar</button></p></div>}
  </section></div>
}
