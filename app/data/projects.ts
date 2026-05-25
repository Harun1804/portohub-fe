export const PROJECTS = [
  {
    id: "enterprise-microservices-migration",
    title: "Enterprise Microservices Migration",
    category: "Microservices",
    client: "S8LLS Co Ltd",
    role: "Backend Developer",
    period: "2026",
    img: "/images/portfolios/portfolio-1.webp",
    description:
      "Migration initiative from a legacy monolithic system into Golang-based microservices to improve scalability, maintainability, and deployment flexibility.",
    overview:
      "This project focused on modernizing an existing backend application by gradually moving business capabilities from a monolithic codebase into modular Golang services. The work covered API contracts, service boundaries, inter-service communication, and refactoring strategies to reduce technical debt while keeping production systems stable.",
    problem:
      "The existing application had growing maintainability issues, slower change cycles, and limited flexibility for scaling individual business capabilities.",
    solution:
      "Designed and implemented Golang microservices, defined API contracts, improved inter-service communication, and refactored legacy modules for better resilience and deployment flexibility.",
    impact:
      "Improved system modularity, maintainability, and readiness for scalable cloud-native deployment.",
    techStack: ["Golang", "REST API", "Microservices", "PostgreSQL", "Docker", "Kubernetes"],
    highlights: [
      "Led migration from monolith to Golang microservices architecture.",
      "Designed API contracts and inter-service communication patterns.",
      "Refactored legacy services for maintainability and system resilience.",
    ],
  },
  {
    id: "diarium-super-apps-enhancement",
    title: "Diarium Super Apps Enhancement",
    category: "Backend",
    client: "PT Swamedia Informatika",
    role: "Backend Developer",
    period: "2022 - Present",
    img: "/images/portfolios/portfolio-2.webp",
    description:
      "Backend enhancements for an enterprise super app, improving system performance and adding new business features for production environments.",
    overview:
      "The project involved maintaining and enhancing backend services for Diarium Super Apps, with a focus on reliability, performance, feature delivery, and improved maintainability for enterprise users.",
    problem:
      "The application required continuous backend improvements to support new business requirements and production performance needs.",
    solution:
      "Implemented backend enhancements, optimized service logic, improved API behavior, and supported production-ready feature releases.",
    impact:
      "Delivered new business capabilities while improving backend maintainability and system performance.",
    techStack: ["Java Spring Boot", "REST API", "MySQL", "PostgreSQL", "Git"],
    highlights: [
      "Implemented enterprise backend enhancements for production use.",
      "Improved performance and maintainability of backend services.",
      "Supported feature development aligned with business requirements.",
    ],
  },
  {
    id: "abc-payment-sap-integration",
    title: "ABC System with Payment and SAP Integration",
    category: "Integration",
    client: "PT Swamedia Informatika",
    role: "Backend Developer",
    period: "2022 - Present",
    img: "/images/portfolios/portfolio-5.webp",
    description:
      "Enterprise backend system integrated with payment collection, payment settlement, and SAP systems for business process automation.",
    overview:
      "ABC System was built to support enterprise operational workflows involving payment collection, payment settlement, and SAP synchronization. The backend focused on reliable data exchange, transactional consistency, and integration readiness.",
    problem:
      "Business workflows required reliable integration between internal applications, payment processes, settlement logic, and SAP systems.",
    solution:
      "Developed backend services and integration workflows to connect payment collection, settlement, and SAP processes through structured APIs and synchronization logic.",
    impact:
      "Improved process automation, reduced manual data handling, and strengthened integration reliability between business systems.",
    techStack: ["Java Spring Boot", "REST API", "Payment Gateway", "SAP Integration", "Oracle", "PostgreSQL"],
    highlights: [
      "Integrated payment collection and settlement workflows.",
      "Connected internal systems with SAP integration flows.",
      "Built backend services for enterprise process automation.",
    ],
  },
  {
    id: "rfid-gallon-tracking-system",
    title: "RFID-Based Gallon Tracking System",
    category: "Integration",
    client: "PT Swamedia Informatika",
    role: "Backend Developer",
    period: "2022 - Present",
    img: "/images/portfolios/portfolio-6.webp",
    description:
      "Real-time asset tracking backend using RFID and IoT integration for gallon movement monitoring and operational visibility.",
    overview:
      "This project delivered a backend system that tracks gallon movement using RFID and IoT integration. It focused on asset traceability, operational monitoring, and reliable data capture from physical devices.",
    problem:
      "Manual tracking made it difficult to monitor gallon movement accurately and provide real-time operational visibility.",
    solution:
      "Built backend APIs and integration logic to receive RFID events, process tracking data, and support real-time monitoring dashboards.",
    impact:
      "Improved asset visibility, reduced manual tracking effort, and enabled more accurate operational monitoring.",
    techStack: ["Java Spring Boot", "REST API", "RFID", "IoT Integration", "PostgreSQL", "MySQL"],
    highlights: [
      "Developed RFID-based tracking backend services.",
      "Integrated IoT event data for real-time asset monitoring.",
      "Supported operational visibility through reliable tracking workflows.",
    ],
  },
  {
    id: "enterprise-risk-management-system",
    title: "Enterprise Risk Management System",
    category: "Enterprise App",
    client: "PT Swamedia Informatika",
    role: "Backend Developer",
    period: "2022 - Present",
    img: "/images/portfolios/portfolio-7.webp",
    description:
      "Enterprise risk management platform for risk identification, monitoring, reporting, and cross-department collaboration.",
    overview:
      "The Enterprise Risk Management System was developed to help departments identify, monitor, and report organizational risks through a structured backend and data workflow.",
    problem:
      "Risk tracking processes needed better structure, visibility, and reporting across departments.",
    solution:
      "Built backend services for risk identification, monitoring, reporting workflows, and data management.",
    impact:
      "Improved risk reporting consistency, monitoring visibility, and decision support for enterprise users.",
    techStack: ["Java Spring Boot", "REST API", "MySQL", "PostgreSQL", "Reporting"],
    highlights: [
      "Built backend modules for enterprise risk reporting.",
      "Supported risk monitoring and data-driven decision workflows.",
      "Improved structured collaboration across departments.",
    ],
  },
  {
    id: "integrated-talent-management-system",
    title: "Integrated Talent Management System",
    category: "Enterprise App",
    client: "PT Swamedia Informatika",
    role: "Backend Developer",
    period: "2022 - Present",
    img: "/images/portfolios/portfolio-10.webp",
    description:
      "Integrated HR platform designed to streamline employee lifecycle processes and talent management operations.",
    overview:
      "This project focused on backend development for HR operations, integrating employee data, lifecycle processes, and talent management workflows into a unified platform.",
    problem:
      "HR processes were spread across multiple workflows and required a more integrated system for employee lifecycle management.",
    solution:
      "Developed backend services to centralize employee data, support HR workflows, and improve operational consistency.",
    impact:
      "Streamlined HR operations and improved employee lifecycle management through integrated backend services.",
    techStack: ["Java Spring Boot", "REST API", "MySQL", "PostgreSQL", "HR System"],
    highlights: [
      "Developed backend services for integrated HR workflows.",
      "Supported employee lifecycle and talent management operations.",
      "Improved data consistency across HR modules.",
    ],
  },
  {
    id: "odoo-erp-project-management-integration",
    title: "Odoo ERP and Project Management Integration",
    category: "ERP",
    client: "PT Global Service Indonesia",
    role: "PHP Developer",
    period: "2022",
    img: "/images/portfolios/portfolio-2.webp",
    description:
      "Backend APIs and synchronization workflows connecting Odoo ERP with project management, attendance, and payroll systems.",
    overview:
      "This project involved developing backend APIs to integrate Odoo ERP with internal business applications, including project management, attendance, and payroll systems.",
    problem:
      "Operational data across project management, attendance, payroll, and ERP systems needed synchronization to reduce repetitive manual work.",
    solution:
      "Built backend APIs and integration workflows to synchronize data between Odoo ERP and internal applications.",
    impact:
      "Reduced manual data entry, improved operational workflow automation, and increased data consistency across business systems.",
    techStack: ["PHP", "Laravel", "Odoo ERP", "REST API", "MySQL"],
    highlights: [
      "Implemented Odoo ERP integration with internal systems.",
      "Built backend APIs for data synchronization and automation.",
      "Supported attendance, payroll, and project management workflows.",
    ],
  },
  {
    id: "attendance-payroll-system",
    title: "Attendance and Payroll System",
    category: "Automation",
    client: "PT Global Service Indonesia",
    role: "PHP Developer",
    period: "2022",
    img: "/images/portfolios/portfolio-2.webp",
    description:
      "Attendance and payroll automation system designed to reduce manual calculation and improve employee data processing.",
    overview:
      "The system automated attendance tracking and payroll calculation workflows, helping operational teams reduce repetitive administrative work and improve calculation consistency.",
    problem:
      "Manual attendance and payroll processes were time-consuming and prone to calculation inconsistencies.",
    solution:
      "Developed backend workflows and application modules to automate attendance records, payroll calculation, and data synchronization.",
    impact:
      "Improved payroll processing efficiency and reduced manual administrative effort.",
    techStack: ["PHP", "Laravel", "MySQL", "REST API", "Odoo ERP"],
    highlights: [
      "Built attendance tracking and payroll automation modules.",
      "Integrated payroll workflows with ERP-related processes.",
      "Improved consistency of employee data processing.",
    ],
  },
]

export const projectCategories = ["All", ...Array.from(new Set(PROJECTS.map((project) => project.category)))]

export function findProjectById(id: string | string[] | undefined) {
  return PROJECTS.find((project) => project.id === id)
}
