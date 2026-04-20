import { useLanguage } from './hooks/useLanguage'
import Header from './components/Header'
import Hero from './components/Hero'
import DailySchedule from './components/DailySchedule'
import Departments from './components/Departments'
import Gallery from './components/Gallery'
import Survey from './components/Survey'
import Staff from './components/Staff'
import Parents from './components/Parents'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { lang, t, toggleLang } = useLanguage()

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      <Header t={t} lang={lang} toggleLang={toggleLang} />
      <main>
        <Hero t={t} />
        <Departments t={t} />
        <DailySchedule t={t} />
        <Gallery t={t} />
        <Parents t={t} />
        <Staff t={t} />
        <Survey t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}
