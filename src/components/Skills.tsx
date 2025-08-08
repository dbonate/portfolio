'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Palette, Cpu } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 95 },
        { name: 'Google Cloud Platform', level: 85 },
        { name: 'Kubernetes', level: 94 },
        { name: 'Terraform', level: 85 },
        { name: 'Docker', level: 85 },
      ]
    },
    {
      icon: Code,
      title: 'CI/CD & Platform',
      skills: [
        { name: 'GitLab CI/CD', level: 94 },
        { name: 'ArgoCD', level: 85 },
        { name: 'Jenkins', level: 80 },
        { name: 'Backstage', level: 80 },
        { name: 'Helm', level: 85 },
      ]
    },
    {
      icon: Database,
      title: 'Infrastructure & Monitoring',
      skills: [
        { name: 'Grafana', level: 90 },
        { name: 'Prometheus', level: 80 },
        { name: 'Instana', level: 75 },
        { name: 'VMware vSphere', level: 85 },
        { name: 'Active Directory', level: 80 },
      ]
    },
    {
      icon: Cpu,
      title: 'Programming & Scripts',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Bash Scripting', level: 90 },
        { name: 'YAML', level: 94 },
        { name: 'JSON', level: 90 },
        { name: 'Linux Administration', level: 94 },
      ]
    },
    {
      icon: Palette,
      title: 'Security & Compliance',
      skills: [
        { name: 'DevSecOps', level: 85 },
        { name: 'Security Scanning', level: 80 },
        { name: 'Compliance', level: 75 },
        { name: 'VPN & Firewall', level: 85 },
        { name: 'IAM & RBAC', level: 90 },
      ]
    }
  ]

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
            Conheça as tecnologias e ferramentas que utilizo para criar soluções inovadoras
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
                      <span className="text-sm text-secondary-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
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
            Outras Competências
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Platform Engineering',
              'Infrastructure as Code',
              'Container Orchestration',
              'Microservices Architecture',
              'Cloud Native Applications',
              'Monitoring & Observability',
              'Security & Compliance',
              'Disaster Recovery'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 p-3 bg-secondary-50 rounded-lg"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-secondary-700 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 