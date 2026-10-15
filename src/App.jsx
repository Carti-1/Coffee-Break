import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import PhotoCarousel from './components/PhotoCarousel.jsx'
import CoursePromo from './components/CoursePromo.jsx'
import Agenda from './components/Agenda.jsx'
import About from './components/About.jsx'
import Participation from './components/Participation.jsx'
import Footer from './components/Footer.jsx'
import FormModal from './components/FormModal.jsx'
import { saveSubmission } from './utils/submissions.js'

export default function App() {
  const [formType, setFormType] = useState(null)
  const [ideas, setIdeas] = useState([])

  function handleSubmit(type, data) {
    const submission = saveSubmission(type, data)
    if (type === 'ideia' && data.ideia?.trim()) {
      setIdeas((current) => [...current, { title: data.ideia.trim(), details: data.detalhes }])
    }
    return submission
  }

  return (
    <>
      <Header onJoin={() => setFormType('seletivo')} />
      <main>
        <Hero />
        <div className="ticker" aria-label="Ideias fresquinhas, gente que soma">
          <div className="wrap ticker-track"><span>☕ ideias fresquinhas</span><span>✳ gente que soma</span><span>☕ ideias fresquinhas</span><span>✳ gente que soma</span><span>☕ ideias fresquinhas</span></div>
        </div>
        <PhotoCarousel />
        <Agenda ideas={ideas} onSuggest={() => setFormType('ideia')} />
        <CoursePromo onRegisterInterest={() => setFormType('curso')} />
        <About />
        <Participation onOpenForm={setFormType} />
      </main>
      <Footer />
      {formType && <FormModal type={formType} onClose={() => setFormType(null)} onSubmit={handleSubmit} />}
    </>
  )
}
