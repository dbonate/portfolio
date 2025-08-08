'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Linkedin, Github } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-secondary-900"
            >
              Olá, eu sou{' '}
              <span className="text-primary-600 whitespace-nowrap inline-block">
                {process.env.NEXT_PUBLIC_NAME || 'Denis Bonate'}
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-secondary-600 font-medium"
            >
              {process.env.NEXT_PUBLIC_TITLE || 'Desenvolvedor Full Stack'}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-secondary-600 max-w-lg"
            >
              {process.env.NEXT_PUBLIC_DESCRIPTION || 'Apaixonado por criar soluções inovadoras e experiências digitais excepcionais. Especializado em desenvolvimento web moderno e tecnologias emergentes.'}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToContact}
                className="btn-primary flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Entre em Contato
              </button>
              
              <a
                href="/docs/CV_Cloud.docx"
                download="CV_Cloud.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex space-x-4"
            >
              <a
                href={process.env.NEXT_PUBLIC_LINKEDIN || "https://linkedin.com/in/seu-perfil"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary-100 hover:bg-secondary-200 rounded-lg transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6 text-secondary-700" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_GITHUB || "https://github.com/seu-usuario"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary-100 hover:bg-secondary-200 rounded-lg transition-colors duration-200"
              >
                <Github className="h-6 w-6 text-secondary-700" />
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Anéis animados de fundo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-8 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Container da Imagem de Perfil */}
              <div className="absolute inset-12 rounded-full overflow-hidden">
                <img 
                  src="/images/Denis.jpg" 
                  alt="Denis Souza Bonate de Oliveira"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero