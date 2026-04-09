import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Briefcase, Send, X, ChevronDown, Star, Zap, Target, Award, TrendingUp } from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: "Senior React Developer",
    department: "Engineering",
    location: "Pune, India",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹8-15 LPA",
    posted: "2 days ago",
    description: "We are looking for an experienced React Developer to join our dynamic engineering team and help build cutting-edge web applications.",
    responsibilities: [
      "Develop and maintain responsive web applications using React.js",
      "Collaborate with cross-functional teams to define and design new features",
      "Write clean, maintainable, and efficient code",
      "Optimize applications for maximum speed and scalability",
      "Participate in code reviews and provide constructive feedback",
      "Mentor junior developers and best practices"
    ],
    requirements: [
      "3+ years of experience with React.js and its ecosystem",
      "Strong proficiency in JavaScript, including ES6+ features",
      "Experience with state management libraries (Redux, Context API)",
      "Familiarity with RESTful APIs and modern frontend build tools",
      "Excellent problem-solving and communication skills",
      "Bachelor's degree in Computer Science or related field"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Health insurance and wellness programs",
      "Flexible work arrangements",
      "Professional development opportunities",
      "Modern office environment with great amenities"
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Pune, India",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹6-12 LPA",
    posted: "5 days ago",
    description: "Join our team as a Full Stack Developer and work on exciting projects that impact thousands of users across multiple platforms.",
    responsibilities: [
      "Design and develop scalable web applications",
      "Build RESTful APIs and microservices",
      "Work with databases (SQL and NoSQL)",
      "Implement responsive frontend interfaces",
      "Participate in the entire software development lifecycle",
      "Collaborate with product managers and designers"
    ],
    requirements: [
      "2+ years of full-stack development experience",
      "Proficiency in JavaScript/TypeScript, Node.js, and React",
      "Experience with database design and optimization",
      "Knowledge of cloud platforms (AWS/Azure)",
      "Strong understanding of software architecture",
      "Excellent teamwork and communication skills"
    ],
    benefits: [
      "Competitive compensation package",
      "Comprehensive health benefits",
      "Learning and development budget",
      "Flexible working hours",
      "Annual team outings and events"
    ]
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Pune, India",
    type: "Full-time",
    experience: "2-3 years",
    salary: "₹5-10 LPA",
    posted: "1 week ago",
    description: "We are seeking a talented UI/UX Designer to create beautiful and intuitive user experiences for our products.",
    responsibilities: [
      "Create user-centered designs for web and mobile applications",
      "Develop wireframes, prototypes, and high-fidelity mockups",
      "Conduct user research and usability testing",
      "Collaborate with developers to implement designs",
      "Maintain and evolve our design system",
      "Stay updated with design trends and best practices"
    ],
    requirements: [
      "2+ years of experience in UI/UX design",
      "Proficiency in Figma, Adobe Creative Suite, or similar tools",
      "Strong portfolio demonstrating design skills",
      "Understanding of user-centered design principles",
      "Experience with responsive design and mobile-first approach",
      "Excellent communication and presentation skills"
    ],
    benefits: [
      "Creative work environment",
      "Latest design tools and resources",
      "Professional development opportunities",
      "Health and wellness benefits",
      "Flexible work arrangements"
    ]
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Pune, India",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹4-8 LPA",
    posted: "3 days ago",
    description: "We're looking for a Digital Marketing Specialist to help us grow our online presence and reach more customers.",
    responsibilities: [
      "Develop and execute digital marketing campaigns",
      "Manage social media accounts and content strategy",
      "Optimize website content for SEO",
      "Analyze marketing metrics and prepare reports",
      "Create engaging content for various platforms",
      "Collaborate with sales team to generate leads"
    ],
    requirements: [
      "1+ years of digital marketing experience",
      "Experience with SEO, SEM, and social media marketing",
      "Proficiency in Google Analytics and marketing tools",
      "Strong analytical and problem-solving skills",
      "Excellent written and verbal communication",
      "Bachelor's degree in Marketing or related field"
    ],
    benefits: [
      "Performance-based bonuses",
      "Professional development opportunities",
      "Creative freedom and autonomy",
      "Health insurance benefits",
      "Modern office environment"
    ]
  },
  {
    id: 5,
    title: "Business Development Executive",
    department: "Sales",
    location: "Pune, India",
    type: "Full-time",
    experience: "1-2 years",
    salary: "₹3-6 LPA + Commission",
    posted: "1 week ago",
    description: "Join our sales team and help us expand our client base while building a rewarding career in business development.",
    responsibilities: [
      "Identify and qualify new business opportunities",
      "Build and maintain relationships with potential clients",
      "Conduct product demonstrations and presentations",
      "Negotiate and close deals with clients",
      "Achieve monthly and quarterly sales targets",
      "Provide market feedback and insights"
    ],
    requirements: [
      "1+ years of experience in business development or sales",
      "Excellent communication and negotiation skills",
      "Strong understanding of technology products",
      "Self-motivated with a results-driven approach",
      "Ability to work in a fast-paced environment",
      "Bachelor's degree in Business or related field"
    ],
    benefits: [
      "Attractive commission structure",
      "Sales incentives and rewards",
      "Professional training and development",
      "Company vehicle allowance",
      "Health and insurance benefits"
    ]
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [expandedJob, setExpandedJob] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    mobile: '',
    position: '',
    experience: '',
    message: ''
  });
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setExpandedJob(expandedJob === job.id ? null : job.id);
  };

  const handleApplyClick = (jobTitle) => {
    setApplicationForm(prev => ({ ...prev, position: jobTitle }));
    setShowApplicationForm(true);
    setSelectedJob(null);
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    const message = `*New Job Application*%0A%0A*Name:* ${applicationForm.name}%0A*Email:* ${applicationForm.email}%0A*Mobile:* ${applicationForm.mobile}%0A*Position:* ${applicationForm.position}%0A*Experience:* ${applicationForm.experience}%0A*Message:* ${applicationForm.message || 'No additional message'}%0A%0APlease review this application for the position.`;
    const whatsappUrl = `https://wa.me/919527537131?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setShowApplicationForm(false);
    setApplicationForm({
      name: '',
      email: '',
      mobile: '',
      position: '',
      experience: '',
      message: ''
    });
  };

  return (
    <>
      <section id="careers" className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10">
          
          {/* Hero Section */}
          <div className="pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mb-6">
                  <Star className="w-4 h-4 text-yellow-300 mr-2" />
                  <span className="text-white text-sm font-bold">WE'RE HIRING!</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
                  BUILD YOUR
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
                    DREAM CAREER
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Join an innovative team where creativity meets technology. 
                  We're looking for passionate individuals who want to make a difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-500 text-white font-black rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all"
                  >
                    <Zap className="w-5 h-5 inline mr-2" />
                    Explore Opportunities
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-black rounded-full border border-white/20 hover:bg-white/20 transition-all"
                  >
                    Life at Code Luxe
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { icon: Users, label: "Team Members", value: "50+", color: "from-pink-500 to-rose-500" },
                  { icon: TrendingUp, label: "Growth Rate", value: "200%", color: "from-violet-500 to-purple-500" },
                  { icon: Award, label: "Awards Won", value: "15+", color: "from-blue-500 to-cyan-500" },
                  { icon: Target, label: "Projects Delivered", value: "100+", color: "from-emerald-500 to-teal-500" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Job Openings */}
          <div className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                  AVAILABLE
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
                    POSITIONS
                  </span>
                </h2>
                <p className="text-gray-300 text-lg">
                  Find your perfect role and join our mission
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {jobOpenings.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      {/* Job Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mb-4">
                            <span className="text-white text-xs font-bold uppercase tracking-wider">
                              {job.department}
                            </span>
                          </div>
                          <h3 className="text-2xl font-black text-white mb-2">
                            {job.title}
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {job.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
                            {job.salary}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {job.posted}
                          </div>
                        </div>
                      </div>

                      {/* Job Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-300">
                          <MapPin className="w-4 h-4 text-pink-400" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <Clock className="w-4 h-4 text-violet-400" />
                          <span className="text-sm">{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <Briefcase className="w-4 h-4 text-blue-400" />
                          <span className="text-sm">{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <Users className="w-4 h-4 text-emerald-400" />
                          <span className="text-sm">Immediate</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleJobClick(job)}
                          className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-md text-white font-black rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                        >
                          View Details
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleApplyClick(job.title)}
                          className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white font-black rounded-xl shadow-lg hover:shadow-pink-500/25 transition-all"
                        >
                          Apply Now
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Job Details Modal */}
          {selectedJob && expandedJob === selectedJob.id && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedJob(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative p-8 overflow-y-auto max-h-[90vh]">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="mb-8">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mb-4">
                      <span className="text-white text-sm font-bold uppercase tracking-wider">
                        {selectedJob.department}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                      {selectedJob.title}
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {selectedJob.description}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                        <MapPin className="w-5 h-5 text-pink-400 mb-2" />
                        <div className="text-white font-black">{selectedJob.location}</div>
                        <div className="text-gray-400 text-sm">Location</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                        <Clock className="w-5 h-5 text-violet-400 mb-2" />
                        <div className="text-white font-black">{selectedJob.type}</div>
                        <div className="text-gray-400 text-sm">Type</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                        <Briefcase className="w-5 h-5 text-blue-400 mb-2" />
                        <div className="text-white font-black">{selectedJob.experience}</div>
                        <div className="text-gray-400 text-sm">Experience</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                        <DollarSign className="w-5 h-5 text-emerald-400 mb-2" />
                        <div className="text-white font-black">{selectedJob.salary}</div>
                        <div className="text-gray-400 text-sm">Salary</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-black text-white mb-4">Key Responsibilities</h3>
                      <ul className="space-y-3">
                        {selectedJob.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-300">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white mb-4">Requirements</h3>
                      <ul className="space-y-3">
                        {selectedJob.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-300">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-black text-white mb-4">What We Offer</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedJob.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleApplyClick(selectedJob.title)}
                      className="px-12 py-4 bg-gradient-to-r from-pink-500 to-violet-500 text-white font-black rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all"
                    >
                      Apply for This Position
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowApplicationForm(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-8 overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setShowApplicationForm(false)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mb-4">
                  <Star className="w-4 h-4 text-yellow-300 mr-2" />
                  <span className="text-white text-sm font-bold">JOIN OUR TEAM</span>
                </div>
                <h2 className="text-3xl font-black text-white mb-2">
                  Apply Now
                </h2>
                <p className="text-gray-300">
                  Take the first step towards your dream career
                </p>
              </div>
              
              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-white mb-2">
                      Full Name <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationForm.name}
                      onChange={(e) => setApplicationForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-black text-white mb-2">
                      Email <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={applicationForm.email}
                      onChange={(e) => setApplicationForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-white mb-2">
                      Mobile Number <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicationForm.mobile}
                      onChange={(e) => setApplicationForm(prev => ({ ...prev, mobile: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Enter your mobile number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-black text-white mb-2">
                      Position <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationForm.position}
                      onChange={(e) => setApplicationForm(prev => ({ ...prev, position: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Position you're applying for"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-black text-white mb-2">
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    value={applicationForm.experience}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, experience: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="e.g., 2-3 years"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-white mb-2">
                    Tell us about yourself
                  </label>
                  <textarea
                    value={applicationForm.message}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, message: e.target.value }))}
                    rows="4"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                    placeholder="Why are you interested in this position? What makes you a great fit?"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-md text-white font-black rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white font-black rounded-xl shadow-lg hover:shadow-pink-500/25 transition-all"
                  >
                    Send Application
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Careers;
