import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import hospitalImg from '../assets/hodpitalmanagment.png';
import schoolImg from '../assets/smartschool.png';
import toursImg from '../assets/toursandtravel.png';
import marketingImg from '../assets/marketingpro.png';
import hostelImg from '../assets/hostelmanagment.png';
import gymImg from '../assets/gym manahement.png';
import khataImg from '../assets/kahtabookpro.png';
import transportImg from '../assets/samrtschooltransport.png';
import gstImg from '../assets/gstilingpro.png';
import financeImg from '../assets/finance.png';

const products = [
  {
    title: "MediCare Hospital Management",
    category: "Healthcare Solution",
    image: hospitalImg,
    desc: "Comprehensive healthcare management platform streamlining patient care, appointments, and medical records for modern clinics and hospitals.",
    fullDescription: "MediCare Hospital Management is a state-of-the-art healthcare solution designed to revolutionize how medical facilities operate. Our comprehensive platform integrates all aspects of hospital administration into one seamless system, from patient registration and appointment scheduling to medical records management and billing. With real-time analytics and intuitive interfaces, healthcare providers can focus on what matters most - delivering exceptional patient care.",
    keyFeatures: [
      "Electronic Health Records (EHR) management",
      "Appointment scheduling and reminders",
      "Billing and insurance processing",
      "Pharmacy and inventory management",
      "Laboratory and radiology integration",
      "Telemedicine capabilities",
      "Real-time dashboard and analytics",
      "Mobile app for patients and doctors"
    ],
    benefits: [
      "Reduce administrative workload by 70%",
      "Improve patient satisfaction scores",
      "Enhance clinical decision making",
      "Ensure regulatory compliance",
      "Increase operational efficiency",
      "Better resource utilization"
    ]
  },
  {
    title: "Smart School",
    category: "Education Management",
    image: schoolImg,
    desc: "Advanced educational ecosystem empowering institutions with seamless student management, learning tools, and parent communication.",
    fullDescription: "Smart School is a comprehensive educational management system that transforms how schools operate in the digital age. Our platform brings together administrators, teachers, students, and parents in one unified ecosystem, streamlining everything from admissions and attendance to grading and communication. With powerful analytics and mobile accessibility, Smart School empowers educational institutions to focus on academic excellence while reducing administrative burden.",
    keyFeatures: [
      "Student information management",
      "Automated attendance tracking",
      "Grade book and report cards",
      "Timetable and scheduling",
      "Parent-teacher communication portal",
      "Online assignments and assessments",
      "Library management system",
      "Transportation tracking"
    ],
    benefits: [
      "Increase administrative efficiency by 60%",
      "Improve parent engagement by 80%",
      "Reduce paper usage significantly",
      "Enhance student academic performance",
      "Streamline communication processes",
      "Data-driven decision making"
    ]
  },
  {
    title: "Travel Wise Enterprise",
    category: "Travel Management",
    image: toursImg,
    desc: "Complete travel business solution managing bookings, itineraries, customer relationships, and financial operations seamlessly.",
    fullDescription: "Travel Wise Enterprise is a comprehensive travel management platform designed to meet the complex needs of modern travel businesses. From tour operators to travel agencies, our system handles every aspect of travel operations including booking management, itinerary planning, customer relationship management, and financial processing. With integrated payment gateways and real-time inventory management, Travel Wise Enterprise helps businesses deliver exceptional travel experiences while maximizing operational efficiency.",
    keyFeatures: [
      "Online booking engine",
      "Itinerary planning and management",
      "Customer relationship management",
      "Payment gateway integration",
      "Inventory and supplier management",
      "Automated invoicing and reporting",
      "Mobile app for travelers",
      "Multi-currency support"
    ],
    benefits: [
      "Increase booking conversions by 40%",
      "Reduce manual processing time by 70%",
      "Improve customer satisfaction scores",
      "Streamline financial operations",
      "Enhance supplier relationships",
      "Real-time business insights"
    ]
  },
  {
    title: "Marketing Hub",
    category: "Digital Marketing",
    image: marketingImg,
    desc: "Powerful marketing automation platform enabling businesses to reach customers effectively through multi-channel campaigns.",
    fullDescription: "Marketing Hub is a powerful digital marketing automation platform that helps businesses connect with their audience across multiple channels. Our comprehensive solution includes email marketing, SMS campaigns, social media management, and analytics all in one platform. With advanced segmentation, personalization features, and detailed reporting, Marketing Hub empowers businesses to create impactful campaigns that drive engagement and conversions.",
    keyFeatures: [
      "Email marketing automation",
      "SMS and WhatsApp campaigns",
      "Social media management",
      "Lead generation and nurturing",
      "Advanced analytics and reporting",
      "A/B testing capabilities",
      "Customer segmentation",
      "Integration with popular platforms"
    ],
    benefits: [
      "Increase campaign ROI by 300%",
      "Reduce marketing overhead costs",
      "Improve customer engagement rates",
      "Automate repetitive tasks",
      "Better customer insights",
      "Enhanced brand consistency"
    ]
  },
  {
    title: "Residence Management",
    category: "Property Management",
    image: hostelImg,
    desc: "Intelligent property management system optimizing operations, tenant services, and facility maintenance for residential spaces.",
    fullDescription: "Residence Management is an intelligent property management solution designed to streamline operations for residential properties including hostels, apartments, and student housing. Our platform handles everything from tenant management and rent collection to maintenance requests and facility scheduling. With automated workflows and real-time communication tools, Residence Management helps property managers provide exceptional service while reducing administrative workload.",
    keyFeatures: [
      "Tenant management and profiles",
      "Automated rent collection",
      "Maintenance request tracking",
      "Room and facility booking",
      "Visitor management system",
      "Financial reporting and analytics",
      "Mobile app for tenants",
      "Integration with payment gateways"
    ],
    benefits: [
      "Reduce administrative tasks by 65%",
      "Improve tenant satisfaction by 80%",
      "Increase rent collection efficiency",
      "Streamline maintenance operations",
      "Better financial visibility",
      "Enhanced security and safety"
    ]
  },
  {
    title: "Smart Fitness Pro",
    category: "Wellness Platform",
    image: gymImg,
    desc: "Complete fitness and wellness management solution designed for modern gyms, health clubs, and personal trainers.",
    fullDescription: "Smart Fitness Pro is a comprehensive wellness management platform designed for modern fitness centers, gyms, and health clubs. Our solution covers every aspect of fitness business operations including member management, class scheduling, personal training sessions, and billing. With mobile apps for members and trainers, plus advanced analytics for business owners, Smart Fitness Pro helps fitness businesses deliver exceptional experiences while maximizing revenue and operational efficiency.",
    keyFeatures: [
      "Member management system",
      "Class and session scheduling",
      "Personal trainer management",
      "Billing and payment processing",
      "Workout tracking and progress",
      "Nutrition planning tools",
      "Mobile apps for members",
      "Business analytics dashboard"
    ],
    benefits: [
      "Increase member retention by 45%",
      "Reduce administrative workload by 60%",
      "Improve class attendance rates",
      "Streamline billing processes",
      "Enhance member engagement",
      "Data-driven business decisions"
    ]
  },
  {
    title: "MyKhataBook Pro",
    category: "Financial Management",
    image: khataImg,
    desc: "Professional financial management tool simplifying accounting, invoicing, and business financial tracking for SMEs.",
    fullDescription: "MyKhataBook Pro is a professional financial management solution designed specifically for small and medium enterprises. Our platform simplifies complex accounting processes, from bookkeeping and invoicing to GST compliance and financial reporting. With an intuitive interface and powerful automation features, MyKhataBook Pro helps business owners manage their finances efficiently while ensuring compliance with regulatory requirements.",
    keyFeatures: [
      "Automated bookkeeping",
      "Invoice generation and tracking",
      "GST compliance and filing",
      "Expense management",
      "Bank reconciliation",
      "Financial reporting",
      "Inventory management",
      "Mobile access and alerts"
    ],
    benefits: [
      "Reduce accounting errors by 90%",
      "Save 20+ hours monthly on bookkeeping",
      "Ensure 100% GST compliance",
      "Improve cash flow management",
      "Better financial insights",
      "Simplify tax filing process"
    ]
  },
  {
    title: "Smart School Transport",
    category: "Logistics Solution",
    image: transportImg,
    desc: "Advanced fleet and logistics management platform optimizing routes, tracking, and operational efficiency.",
    fullDescription: "Smart School Transport is an advanced fleet management solution designed specifically for educational institutions. Our platform ensures student safety during transportation while optimizing routes and operational efficiency. With real-time GPS tracking, automated notifications, and comprehensive reporting, Smart School Transport provides peace of mind for parents and administrators while reducing operational costs for schools.",
    keyFeatures: [
      "Real-time GPS tracking",
      "Route optimization",
      "Student attendance in vehicles",
      "Parent notifications and alerts",
      "Driver management system",
      "Fuel and maintenance tracking",
      "Emergency response system",
      "Mobile apps for stakeholders"
    ],
    benefits: [
      "Enhance student safety by 95%",
      "Reduce fuel costs by 25%",
      "Improve route efficiency by 40%",
      "Increase parent satisfaction",
      "Streamline operations",
      "Better emergency preparedness"
    ]
  },
  {
    title: "GST Billing Pro",
    category: "Billing Solution",
    image: gstImg,
    desc: "Professional invoicing and billing system designed for businesses requiring accurate tax compliance and financial reporting.",
    fullDescription: "GST Billing Pro is a professional billing and invoicing solution designed to meet the complex needs of modern businesses. Our platform ensures accurate GST compliance while streamlining the entire billing process from quote generation to payment collection. With automated calculations, multiple tax rate support, and comprehensive reporting, GST Billing Pro helps businesses maintain compliance while improving operational efficiency.",
    keyFeatures: [
      "GST-compliant invoicing",
      "Multiple tax rate support",
      "Automated tax calculations",
      "Quote and estimate generation",
      "Payment tracking and reminders",
      "Inventory integration",
      "Financial reporting",
      "Multi-company support"
    ],
    benefits: [
      "Ensure 100% GST compliance",
      "Reduce billing errors by 95%",
      "Improve cash flow by 30%",
      "Save 15+ hours weekly on billing",
      "Better financial control",
      "Simplify tax season preparation"
    ]
  },
  {
    title: "Micro Finance Pro",
    category: "Finance",
    image: financeImg,
    desc: "Comprehensive microfinance management solution handling loans, collections, and customer relationships for financial institutions.",
    fullDescription: "Micro Finance Pro is a comprehensive solution designed specifically for microfinance institutions and NBFCs. Our platform handles the complete lifecycle of microfinance operations from customer onboarding and loan processing to collections and regulatory reporting. With advanced risk assessment tools and automated workflows, Micro Finance Pro helps institutions serve their communities efficiently while maintaining compliance and profitability.",
    keyFeatures: [
      "Customer onboarding and KYC",
      "Loan processing and approval",
      "Automated collections management",
      "Risk assessment and scoring",
      "Regulatory compliance reporting",
      "Mobile banking integration",
      "Field agent management",
      "Analytics and business intelligence"
    ],
    benefits: [
      "Reduce loan processing time by 70%",
      "Improve collection rates by 40%",
      "Enhance risk management",
      "Ensure regulatory compliance",
      "Increase operational efficiency",
      "Better customer service"
    ]
  }
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll ? products : products.slice(0, 6);

  return (
    <>
      <section id="projects" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-20">
            <h2 className="text-sm font-black tracking-[0.3em] text-accent-blue uppercase mb-4">Our Products</h2>
            <h3 className="text-5xl md:text-6xl font-serif font-black text-slate-900 leading-tight">
              Premium <span className="text-slate-400">Solutions</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {displayedProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-[16/10] shadow-md group-hover:shadow-xl transition-all duration-700 bg-slate-50 flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-contain transform scale-110 group-hover:scale-100 transition-transform duration-1000 z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                </div>
                
                <div className="px-2">
                  <p className="text-accent-blue text-[10px] font-black uppercase tracking-[0.3em] mb-2">{product.category}</p>
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="text-xl font-black font-serif text-slate-900 group-hover:text-accent-blue transition-colors duration-300 leading-tight">{product.title}</h4>
                    <div className="flex-shrink-0 w-10 h-10 rounded-2xl border border-slate-100 flex items-center justify-center group-hover:bg-accent-blue group-hover:border-accent-blue shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:shadow-blue-200">
                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                  <p className="text-slate-600 mt-3 text-sm font-medium leading-relaxed line-clamp-2">{product.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {!showAll && products.length > 6 && (
            <div className="text-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setShowAll(true)}
                className="inline-flex items-center px-8 py-4 bg-accent-blue text-white font-black rounded-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Load More Projects
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default Portfolio;
