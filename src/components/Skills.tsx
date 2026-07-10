'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Palette, Cpu } from 'lucide-react'

// Constantes movidas para fora do componente para melhor performance (evita re-renderizações desnecessárias)
const skillCategories = [
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', width: 95, levelText: 'Especialista' },
      { name: 'Google Cloud Platform', width: 90, levelText: 'Especialista' },
      { name: 'Oracle Cloud (OCI)', width: 85, levelText: 'Avançado' },
      { name: 'Kubernetes', width: 94, levelText: 'Especialista' },
      { name: 'Terraform & Crossplane', width: 92, levelText: 'Especialista' },
    ]
  },
  {
    icon: Code,
    title: 'CI/CD & Platform',
    skills: [
      { name: 'GitLab CI/CD & ArgoCD', width: 95, levelText: 'Especialista' },
      { name: 'Backstage (IDP)', width: 85, levelText: 'Avançado' },
      { name: 'Docker & Helm', width: 90, levelText: 'Especialista' },
      { name: 'Jenkins', width: 75, levelText: 'Avançado' },
    ]
  },
  {
    icon: Database,
    title: 'Infrastructure & Data',
    skills: [
      { name: 'Mensageria (Kafka/SQS/RabbitMQ)', width: 85, levelText: 'Avançado' },
      { name: 'Grafana & Prometheus', width: 85, levelText: 'Avançado' },
      { name: 'Datadog & Instana', width: 80, levelText: 'Avançado' },
      { name: 'VMware vSphere & AD', width: 85, levelText: 'Avançado' },
    ]
  },
  {
    icon: Cpu,
    title: 'Programming & Scripts',
    skills: [
      { name: 'Shell Script', width: 95, levelText: 'Especialista' },
      { name: 'Python', width: 85, levelText: 'Avançado' },
      { name: 'YAML & JSON', width: 95, levelText: 'Especialista' },
      { name: 'NodeJS / Java', width: 65, levelText: 'Intermediário' },
    ]
  },
  {
    icon: Palette,
    title: 'Security & Compliance',
    skills: [
      { name: 'DevSecOps & Shift-Left', width: 90, levelText: 'Especialista' },
      { name: 'IAM & RBAC', width: 90, levelText: 'Especialista' },
      { name: 'Security Scanning', width: 85, levelText: 'Avançado' },
      { name: 'VPN & Firewall', width: 85, levelText: 'Avançado' },
    ]
  }
]

const otherCompetencies = [
  'Internal Developer Platform (IDP)',
  'IaC Governance & Standardization',
  'High Availability & Resiliency',
  'Event-Driven Architecture (EDA)',
  'Multi-Cloud Strategy',
  'Microservices Architecture',
  'Monitoring & Observability',
  'Disaster Recovery'
]

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Habilidades & Tecnologias
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Conheça as tecnologias e abordagens arquiteturais que utilizo para criar plataformas robustas e escaláveis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-secondary-700">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-primary-600">
                        {skill.levelText}
                      </span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.width}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-secondary-900 mb-6 text-center">
            Competências Estratégicas
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherCompetencies.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 p-3 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                <span className="text-secondary-700 font-medium text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
