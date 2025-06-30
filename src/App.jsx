import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Github, Send } from 'lucide-react'
const images = import.meta.glob('./assets/img/*.{jpg,png,jpeg}', { eager: true });
const getImg = name => images[`./assets/img/${name}`]?.default || '';

const portfolio = [
 
  {
    title: 'Многостраничный сайт каталог для Автомобильной компании',
    description: 'Многостраничный e-commerce сайт с каталогом и фильтрами.',
    img: getImg('multi-5.png'),
    link: 'https://multi-5.vitmp.ru/'
  },
  {
    title: 'Многостраничный сайт каталог для Автомобильной компании',
    description: 'Многостраничный e-commerce сайт с каталогом и фильтрами',
    img: getImg('multi-bu.png'),
    link: 'https://multi-bu-1.vitmp.ru/'
  },
  {
    title: 'Многостраничный сайт для компании Victory-Group',
    description: 'Cайт в темных тонах для бизнеса',
    img: getImg('victorygroup.png'),
    link: 'https://victorycompany.ru/'
  },
  {
    title: 'Landing Page для Автомобильной компании',
    description: 'Современный лендинг с адаптивной версткой и анимациями.',
    img: getImg('multi-landing.png'),
    link: 'https://landing-multi.vitmp.ru/'
  },
  {
    title: 'Лендинг для Стомотологии',
    description: 'Cайт в темных тонах для локального бизнеса с отзывами и меню.',
    img: getImg('dental.png'),
    link: 'https://dental-1.vitmp.ru/'
  },
  {
    title: 'Многостраничный сайт для компании Прибок-Уфа',
    description: 'Cайт в простом стиле с корзиной и меню',
    img: getImg('priborufa.png'),
    link: 'https://priborufa.ru/'
  } 
]

export default function App() {
  const [showMail, setShowMail] = useState(false)
  const [showPhone, setShowPhone] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#14142b] to-[#233047] text-white font-sans">
      <header className="max-w-4xl mx-auto pt-10 pb-8 px-4 flex flex-col items-center text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ахметов Энгель Айратович
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-6 text-slate-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
            Middle Web-Верстальщик, опыт 3+ года.<br />Собственный подход к оптимизации, создаю быстрые и современные интерфейсы.
        </motion.p>
        <div className="flex gap-4">
          <a href="https://ufa.hh.ru/resume/c8aa350bff0beb760b0039ed1f6c5a55393433" target="_blank"  className="bg-[#212245] shadow-lg rounded-2xl text-lg px-5 py-2 font-semibold hover:bg-[#232357] transition">Смотреть резюме</a>
          <a href="#contacts" className="bg-[#252558] shadow-lg rounded-2xl text-lg px-5 py-2 font-semibold hover:bg-[#2b2b6c] transition">Связаться</a>
        </div>
      </header>

      <motion.section 
        className="max-w-3xl mx-auto mb-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl p-7 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-2">Обо мне</h2>
          <p className="text-slate-200 text-lg leading-relaxed">
            Более 3 лет профессионального опыта в web-разработке. Специализируюсь на создании стильных, адаптивных и удобных интерфейсов, которые одинаково отлично работают на любых устройствах и в любых браузерах. Легко решаю задачи любой сложности — от лендингов до сложных интерфейсов с продуманной структурой и анимацией.          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-[#212245] rounded-xl px-4 py-1 text-sm">HTML5</span>
            <span className="bg-[#212245] rounded-xl px-4 py-1 text-sm">sCSS</span>
            <span className="bg-[#212245] rounded-xl px-4 py-1 text-sm">JavaScript</span>
            <span className="bg-[#212245] rounded-xl px-4 py-1 text-sm">Gulp</span>
            <span className="bg-[#212245] rounded-xl px-4 py-1 text-sm">Gsap</span>
            <span className="bg-[#212245] rounded-xl px-4 py-1 text-sm">Figma</span>
            <span className="bg-[#212245] rounded-xl px-4 py-1 text-sm">BEM</span>
            <span className="bg-[#212245] rounded-xl px-4 py-1 text-sm">e-commerce</span>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="max-w-5xl mx-auto px-4 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-6">Портфолио</h2>
        <div className="grid md:grid-cols-2 gap-7">
          {portfolio.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04, boxShadow: "0 4px 24px #0006" }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="bg-white/5 border-0 shadow-xl rounded-2xl backdrop-blur-xl overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-slate-300 mb-4 min-h-[40px]">{item.description}</p>
                  <div >
                    <span className="inline-block bg-[#252558] shadow rounded-xl text-sm px-5 py-2 font-semibold hover:bg-[#2b2b6c] transition">Смотреть сайт</span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <footer id="contacts" className="max-w-3xl mx-auto px-4 pb-12 flex flex-col items-center gap-5">
        <h2 className="text-xl font-bold mb-2">Контакты</h2>
        <div className="flex gap-6 text-slate-200">
          {/* <button onClick={() => setShowMail((v) => !v)} className="hover:text-blue-400 transition"><Mail size={26} /></button>
          <button onClick={() => setShowPhone((v) => !v)} className="hover:text-blue-400 transition"><Phone size={26} /></button> */}
          <a href="https://t.me/engelich" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><Send size={26} /></a>
          <a href="https://github.com/engelich" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><Github size={26} /></a>
        </div>
        {showMail && <div className="text-slate-100">По запросу</div>}
        {showPhone && <div className="text-slate-100">По запросу</div>}
        <p className="text-xs text-slate-400 mt-4">© {new Date().getFullYear()} Ахметов Энгель Айратович</p>
      </footer>
    </div>
  )
}