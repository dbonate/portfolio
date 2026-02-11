'use client'

import { motion } from 'framer-motion'
import { User, MapPin, Calendar, GraduationCap } from 'lucide-react'

const About = () => {
  const personalInfo = [
    { icon: User, label: 'Nome', value: process.env.NEXT_PUBLIC_NAME_COMPLETO || 'Seu Nome Completo' },
    { icon: MapPin, label: 'Localização', value: process.env.NEXT_PUBLIC_CITY || 'Sua Cidade, Estado' },
    { icon: Calendar, label: 'Idade', value: process.env.NEXT_PUBLIC_AGE || 'XX anos' },
    { icon: GraduationCap, label: 'Formação', value: process.env.NEXT_PUBLIC_EDUCATION || 'Sua Formação' },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha jornada profissional e paixões
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
              Informações Pessoais
            </h3>

            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <info.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">{info.label}</p>
                    <p className="font-medium text-secondary-900">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-secondary-900">
              Minha História
            </h3>

            <div className="space-y-4 text-secondary-600">
              <p>
                Minha jornada na tecnologia começou em um lugar improvável: a roça. Em um
                ambiente onde poucos acreditavam ser possível, minha paixão por novas tecnologias, games e
                me impulsionou a quebrar barreiras e construir uma carreira como
                Engenheiro DevOps na maior cidade do país. Hoje, com mais de 13 anos de
                experiência, transformo essa mesma paixão em soluções de alta performance.
              </p>

              <p>
                Para mim, a tecnologia de ponta — seja arquitetura cloud, automação ou CI/CD — funciona com a mesma lógica de uma corrida de Fórmula 1: cada segundo, cada otimização e cada decisão estratégica contam. É com essa mentalidade, inspirada nas pistas e na lógica dos games, que abordo cada projeto, utilizando ferramentas como Python, Kubernetes e as principais plataformas de cloud para garantir entregas rápidas e eficientes.
              </p>

              <p>
                Acredito que o talento não tem CEP. Por ter vivido essa transformação, minha missão é ser a ponte para outros que também sonham com a área de TI. Dedico meu tempo a descomplicar o universo da tecnologia e a mentorar novos talentos, provando que, com a direção certa, qualquer um pode cruzar a linha de chegada.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                Valores e Objetivos
              </h4>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Construir soluções robustas, escaláveis e de alta performance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Garantir a melhor performance e confiabilidade na experiência do usuário</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Promover a colaboração e a comunicação como motores para a inovação</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Manter um compromisso real com o aprendizado contínuo e a evolução tecnológica</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Compartilhar conhecimento para fortalecer a comunidade e mentorar novos talentos</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 