'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp, BrainCircuit } from 'lucide-react'

// Sugestão: Importe os ícones que você já tem no Contact.tsx para reutilizar
import { Linkedin, Github, Twitter } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {process.env.NEXT_PUBLIC_NAME || 'Seu Nome'} {/* ← Alterado */}
            </h3>
            <p className="text-secondary-300 mb-6 max-w-md">
              {process.env.NEXT_PUBLIC_FOOTER_DESCRIPTION || 'Platform Engineer & DevSecOps...'} {/* ← Alterado */}
            </p>
            <div className="flex space-x-4">
              <a
                href={process.env.NEXT_PUBLIC_LINKEDIN || '#'} // ← Alterado
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-800 hover:bg-secondary-700 rounded-lg transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" /> {/* ← Alterado */}
              </a>
              <a
                href={process.env.NEXT_PUBLIC_GITHUB || '#'} // ← Alterado
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-800 hover:bg-secondary-700 rounded-lg transition-colors duration-200"
              >
                <Github className="h-5 w-5" /> {/* ← Alterado */}
              </a>
              <a
                href={process.env.NEXT_PUBLIC_TWITTER || '#'} // ← Alterado
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-800 hover:bg-secondary-700 rounded-lg transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" /> {/* ← Alterado */}
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  Contato
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-secondary-300">Platform Engineering</span>
              </li>
              <li>
                <span className="text-secondary-300">DevSecOps Implementation</span>
              </li>
              <li>
                <span className="text-secondary-300">Cloud Architecture</span>
              </li>
              <li>
                <span className="text-secondary-300">CI/CD Automation</span>
              </li>
              <li>
                <span className="text-secondary-300">Infrastructure as Code</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-secondary-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-secondary-300 mb-4 md:mb-0">
              <span>© {currentYear} {process.env.NEXT_PUBLIC_NAME || 'Seu Nome'}. Feito com</span>
              <BrainCircuit className="h-4 w-4 text-blue-500" />
              <span>e IA em Next.js</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 bg-secondary-800 hover:bg-secondary-700 rounded-lg transition-colors duration-200"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer