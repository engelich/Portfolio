import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Github, Send } from 'lucide-react'
import LazyImage from './components/LazyImage'

// Корректный импорт картинок
const images = import.meta.glob('./assets/img/*.{webp,jpg,png,jpeg}', { eager: true });

const getImg = name => images[`./assets/img/${name}`]?.default || '';

const portfolio = [
  {
    title: 'Многостраничный сайт каталог для Автомобильной компании',
    description: 'Многостраничный e-commerce сайт с каталогом и фильтрами.',
    img: getImg('multi-5.webp'),
    link: 'https://multi-5.vitmp.ru/'
  },
  {
    title: 'Многостраничный сайт каталог для Автомобильной компании',
    description: 'Многостраничный e-commerce сайт с каталогом и фильтрами',
    img: getImg('multi-bu.webp'),
    link: 'https://multi-bu-1.vitmp.ru/'
  },
  {
    title: 'Многостраничный сайт для компании Victory-Group',
    description: 'Cайт в темных тонах для бизнеса',
    img: getImg('victorygroup.webp'),
    link: 'https://victoryagency.ru/'
  },
  {
    title: 'Многостраничный сайт каталог для Автомобильной компании Lada',
    description: 'Современный лендинг с адаптивной версткой и анимациями.',
    img: getImg('lada-1.webp'),
    link: 'https://lada.vitmp.ru/auto'
  },
  {
    title: 'Лендинг для Стоматологии',
    description: 'Cайт для локального бизнеса с отзывами и меню.',
    img: getImg('dental.webp'),
    link: 'https://dental-1.vitmp.ru/'
  },
  {
    title: 'Многостраничник для компании СервисУфаХолод',
    description: 'Cайт каталог для бизнеса',
    img: getImg('holod.webp'),
    link: 'https://ремонт-холодильника-уфа.рф/'
  },
  {
    title: 'Многостраничный сайт для компании Прибок-Уфа',
    description: 'Cайт в простом стиле с корзиной и меню',
    img: getImg('priborufa.webp'),
    link: 'https://priborufa.ru/'
  },
  {
    title: 'Интернет магазин сайт для компании Пышка',
    description: 'Cайт магазин с корзиной и меню',
    img: getImg('pishka.webp'),
    link: 'https://pishkaexclusive.ru/'
  },  
  {
    title: 'Многостраничный сайт для компании AmegaPRINT',
    description: 'Cеть печатных центров',
    img: getImg('amegaprint.webp'),
    link: 'https://amegaprint.ru/?ysclid=mf9jc0i7te939424398'
  },
  {
    title: 'Многостраничный сайт для компании Victory-Group',
    description: 'Cайт в темных тонах для бизнеса',
    img: getImg('victorygroup.webp'),
    link: 'https://victorycompany.ru/'
  }
]

export default function App() {
  const [showMail, setShowMail] = useState(false)
  const [showPhone, setShowPhone] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#14142b] to-[#233047] text-white font-sans">
     <header className="max-w-5xl mx-auto pt-10 pb-8 px-4 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
  {/* Аватарка слева */}
  <motion.div
    className="flex-shrink-0 mb-4 md:mb-0"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.1, duration: 0.5 }}
  >
    <img
      src={getImg('avatar.jpg')}
      alt="Энгель Ахметов"
      className=" h-56 aspect-[1/1] rounded-lg border-4 border-[#232357] shadow-xl object-cover bg-[#232357]"
      loading="lazy"
    />
  </motion.div>

  {/* Текст справа */}
  <div className="flex flex-col justify-center">
    <motion.h1 
      className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Энгель Ахметов
    </motion.h1>
    <motion.p 
      className="text-xl md:text-2xl mb-5 text-slate-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      Frontend-разработчик, опыт 4+ года.<br />Собственный подход к оптимизации, создаю быстрые и современные интерфейсы.
    </motion.p>
    <div className="flex gap-2 justify-between md:gap-4">
      <a href="https://ufa.hh.ru/resume/c8aa350bff0beb760b0039ed1f6c5a55393433" target="_blank"  className=" flex w-full flex-col items-center justify-center text-center  bg-[#212245] shadow-lg rounded-2xl text-lg px-5 py-2 font-semibold hover:bg-[#232357] transition" rel="noopener noreferrer">Смотреть резюме</a>
      <a href="https://t.me/engelich" target="_blank" className="flex w-full justify-center flex-col items-center text-center bg-[#252558] shadow-lg rounded-2xl text-lg px-5 py-2 font-semibold hover:bg-[#2b2b6c] transition">Связаться</a>
    </div>
  </div>
</header>


      <motion.section 
        className="max-w-5xl mx-auto mb-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl p-7 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-2">Обо мне</h2>
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-slate-200 text-lg leading-relaxed">
              Более 4 лет профессионального опыта в web-разработке. Специализируюсь на создании стильных, адаптивных и удобных интерфейсов, которые одинаково отлично работают на любых устройствах и в любых браузерах. Легко решаю задачи любой сложности — от лендингов до сложных интерфейсов с продуманной структурой и анимацией.
            </p>
            <p className="text-slate-200 text-lg leading-relaxed text-info">
              Являюсь автором собственного продукта —  <a href='https://t.me/+EWJO558SfXVjMjJi' class="hover:text-[rgb(171,171,255)] transition" target="_blank" >Engel Lazy-Load</a> , универсального решения для ленивой загрузки контента с адаптацией под любые устройства и поддержку всех типов медиа-контента.          
            </p>
          </div>
         
          <div className="flex flex-wrap gap-2 mt-5">
            <a href="https://ru.wikipedia.org/wiki/HTML" target="_blank" className="bg-[#212245] rounded-xl px-4 py-1 text-sm hover:bg-[#232357] transition">HTML5</a>
            <a href="https://ru.wikipedia.org/wiki/Sass" target="_blank" className="bg-[#212245] rounded-xl px-4 py-1 text-sm hover:bg-[#232357] transition">SCSS</a>
            <a href="https://ru.wikipedia.org/wiki/JavaScript" target="_blank" className="bg-[#212245] rounded-xl px-4 py-1 text-sm hover:bg-[#232357] transition">JavaScript</a>
            <a href="https://vuejs-doc-ru.vercel.app/guide/introduction.html" target="_blank" className="bg-[#212245] rounded-xl px-4 py-1 text-sm hover:bg-[#232357] transition">Vue</a>
            <a href="https://gulpjs.com/" target="_blank" className="bg-[#212245] rounded-xl px-4 py-1 text-sm hover:bg-[#232357] transition">Gulp</a>
            <a href="https://webpack.js.org/" target="_blank" className="bg-[#212245] rounded-xl px-4 py-1 text-sm hover:bg-[#232357] transition">Webpack</a>
            <a href="https://www.gsap.com/" target="_blank" className="bg-[#212245] rounded-xl px-4 py-1 text-sm hover:bg-[#232357] transition">Gsap</a>
            <a href="https://www.figma.com/" target="_blank" className="bg-[#212245] rounded-xl px-4 py-1 text-sm hover:bg-[#232357] transition">Figma</a>
            <a href="https://git-scm.com/" target="_blank" className="bg-[#212245] rounded-xl px-4 py-1 text-sm hover:bg-[#232357] transition">Git</a>
            <a href="https://tailwindcss.com/" target="_blank" className="bg-[#212245] rounded-xl px-4 py-1 text-sm hover:bg-[#232357] transition">Tailwind</a>
            
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
        <h2 className="text-2xl font-bold mb-6">Мои проекты</h2>
        <div className="grid md:grid-cols-2 gap-7">
          {portfolio.map((item, idx) => (
             <motion.div
              key={idx}
              whileHover={{ scale: 1.04, boxShadow: "0 4px 24px #0006" }}
              transition={{ type: "spring", stiffness: 250 }}
              className="rounded-xl bg-black/15 overflow-hidden"
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer" className=" flex flex-col h-full  shadow-xl rounded-xl backdrop-blur-xl overflow-hidden">
                <LazyImage src={item.img} alt={item.title} />
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-slate-300 mb-4 min-h-[40px]">{item.description}</p>
                  <div className="flex flex-col flex-grow-[4] h-auto w-max justify-end">
                    <span className="inline-block  bg-[#252558] shadow rounded-xl text-sm px-5 py-2 font-semibold hover:bg-[#2b2b6c] transition">Смотреть сайт</span>
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
          {/* Можно добавить email и телефон по желанию */}
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
