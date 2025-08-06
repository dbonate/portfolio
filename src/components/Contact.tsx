'use client'

import { useState, FormEvent } from 'react' // Adicionado FormEvent
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react'
import emailjs from '@emailjs/browser'; // 1. IMPORT ADICIONADO

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // 2. FUNÇÃO ATUALIZADA
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Substitua pelo seu Template ID que você vai criar no próximo passo
    const templateId = 'template_s1qh1pn';

    emailjs.sendForm(
        'service_suy556a', // Seu Service ID
        templateId,        // O Template ID que você vai criar
        e.currentTarget,   // O formulário
        '-ZnHBs3XZ_F2hCPBZ'  // Sua Public Key
    )
    .then((result) => {
        console.log('E-mail enviado com sucesso!', result.text);
        alert('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
        console.error('Erro no envio:', error.text);
        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    })
    .finally(() => {
        setIsSubmitting(false);
    });
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: process.env.NEXT_PUBLIC_EMAIL || 'seu.email@exemplo.com',
      link: `mailto:${process.env.NEXT_PUBLIC_EMAIL || 'seu.email@exemplo.com'}`
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: process.env.NEXT_PUBLIC_PHONE || '+55 (11) 99999-9999',
      link: `tel:${process.env.NEXT_PUBLIC_PHONE?.replace(/\D/g, '') || '+5511999999999'}`
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: process.env.NEXT_PUBLIC_LOCATION || 'São Paulo, SP - Brasil',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: process.env.NEXT_PUBLIC_LINKEDIN || 'https://linkedin.com/in/seu-perfil',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      name: 'GitHub',
      url: process.env.NEXT_PUBLIC_GITHUB || 'https://github.com/seu-usuario',
      color: 'hover:text-gray-800'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: process.env.NEXT_PUBLIC_TWITTER || 'https://twitter.com/seu-usuario',
      color: 'hover:text-blue-400'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Vamos conversar sobre seu próximo projeto ou oportunidade de colaboração
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <info.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary-500">{info.title}</p>
                      <a
                        href={info.link}
                        className="font-medium text-secondary-900 hover:text-primary-600 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                Redes Sociais
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-3 bg-secondary-100 rounded-lg text-secondary-600 transition-colors duration-200 ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-secondary-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                Disponibilidade
              </h4>
              <p className="text-secondary-600 mb-4">
                Estou sempre aberto a novas oportunidades e projetos interessantes. 
                Se você tem uma ideia ou projeto em mente, vamos conversar!
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-secondary-600">Disponível para novos projetos</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name" // O 'name' é importante para o EmailJS
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email" // O 'name' é importante para o EmailJS
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject" // O 'name' é importante para o EmailJS
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Qual é o assunto da sua mensagem?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message" // O 'name' é importante para o EmailJS
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Conte-me sobre seu projeto ou oportunidade..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact