'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'RD Saúde',
      position: 'DevOps Senior',
      period: '11/2025 - Atual',
      location: 'São Paulo, SP',
      description: 'Liderança técnica em projetos de Cloud e IA.',
      technologies: ['AWS', 'Terraform', 'Kubernetes', 'GitLab', 'ArgoCD', 'Backstage', 'Python'],
      link: '#'
    },
    {
      company: 'Novigo IT',
      position: 'DevOps Senior',
      period: '08/2025 - 11/2025',
      location: 'São Paulo, SP',
      description: 'Administração de GCP e Cloud Terraform, gerenciamento de Kubernetes.',
      technologies: ['AWS', 'Terraform', 'Kubernetes', 'GitLab', 'Grafana', 'Prometheus', 'Kafka'],
      link: '#'
    },
    {
      company: 'NTT Data',
      position: 'Lead Engineer Technology',
      period: '08/2022 - 06/2025',
      location: 'São Paulo, SP',
      description: 'Liderança técnica em projetos de OCR com API-Gateway privado, Lambdas privadas, Cloudvision e Gemini. Administração de AWS, IAC com Terraform, Kubernetes, GitLab CI/CD, ArgoCD e Backstage para catálogo de serviços.',
      technologies: ['AWS', 'Terraform', 'Kubernetes', 'GitLab', 'ArgoCD', 'Backstage', 'Python'],
      link: 'https://br.nttdata.com/'
    },
    {
      company: 'FreteBras - FretePago',
      position: 'DevOps Engineer + Tech Lead',
      period: '01/2022 - 08/2022',
      location: 'São Paulo, SP',
      description: 'Administração de AWS e Cloud Terraform, gerenciamento de Kubernetes, implementação de GitLab, Instana, Kong/Konga, Rancher, Grafana, Prometheus e Kafka. Início do projeto "FretePago" Bank.',
      technologies: ['AWS', 'Terraform', 'Kubernetes', 'GitLab', 'Grafana', 'Prometheus', 'Kafka'],
      link: 'https://ib.fretepago.com.br/'
    },
    {
      company: 'Pravaler SA',
      position: 'Analista DevOps',
      period: '01/2022 - 08/2022',
      location: 'São Paulo, SP',
      description: 'Suporte para desenvolvedores em aplicativos e infraestrutura. Gerenciamento de nuvem Google Cloud Platform.',
      technologies: ['GCP', 'AWS', 'Kubernetes', 'Docker', 'Github'],
      link: 'https://www.pravaler.com.br/sobre-o-pravaler/'
    },
  ]

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Minha jornada profissional e as empresas que fizeram parte da minha evolução
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-secondary-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg"></div>

                <div className="ml-12 md:ml-16">
                  <div className="bg-white border border-secondary-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-secondary-900 mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-center space-x-4 text-secondary-600">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 md:mt-0 flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors duration-200"
                      >
                        <span className="text-sm font-medium">Visitar</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>

                    <p className="text-secondary-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold text-secondary-700 mb-2">
                        Tecnologias Utilizadas:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-secondary-900 mb-8 text-center">
            Formação Acadêmica
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-secondary-50 rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                MBA in Artificial Intelligence
              </h4>
              <p className="text-secondary-600 mb-2">Falculdade Impacta</p>
              <p className="text-sm text-secondary-500">08/2025</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-secondary-50 rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                AWS Solutions Architect - Associate
              </h4>
              <p className="text-secondary-600 mb-2">Amazon Web Services</p>
              <p className="text-sm text-secondary-500">07/2024</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 