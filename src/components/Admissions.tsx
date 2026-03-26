import { 
  UserPlus, 
  BookOpen, 
  Calendar, 
  Globe, 
  Phone, 
  Mail, 
  User, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  FileText,
  ShieldCheck,
  Users
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const steps = [
  { id: 1, title: 'Personal Info', icon: User },
  { id: 2, title: 'Academic History', icon: BookOpen },
  { id: 3, title: 'Guardian Details', icon: Users },
  { id: 4, title: 'Review & Submit', icon: ShieldCheck },
];

export default function Admissions() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-10"
    >
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold mb-3 gold-glow">Al-Huzaifa Admissions</h2>
        <p className="text-emerald-100/40">Embark on your journey of spiritual and academic excellence</p>
      </div>

      {/* Progress Stepper */}
      <div className="flex justify-between items-center px-12 relative">
        <div className="absolute top-1/2 left-12 right-12 h-0.5 bg-surface-container -translate-y-1/2 z-0"></div>
        <div 
          className="absolute top-1/2 left-12 h-0.5 bg-secondary -translate-y-1/2 z-0 transition-all duration-500" 
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>
        
        {steps.map((step) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border-2 ${
              currentStep >= step.id 
                ? 'bg-secondary border-secondary text-on-secondary-fixed shadow-lg shadow-secondary/20' 
                : 'bg-surface border-white/10 text-emerald-100/30'
            }`}>
              {currentStep > step.id ? <CheckCircle2 className="w-6 h-6" /> : <step.icon className="w-6 h-6" />}
            </div>
            <p className={`text-[10px] font-bold uppercase tracking-widest ${
              currentStep >= step.id ? 'text-secondary' : 'text-emerald-100/30'
            }`}>{step.title}</p>
          </div>
        ))}
      </div>

      {/* Form Content */}
      <div className="glass-panel border border-white/5 rounded-3xl p-10 bg-gradient-to-b from-primary-container/10 to-transparent">
        {currentStep === 1 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-headline font-bold mb-6">Personal Sanctuary Details</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 ml-1">Full Name</label>
                <div className="flex items-center gap-3 bg-surface-container-low/50 px-4 py-3 rounded-xl border border-white/5">
                  <User className="w-4 h-4 text-emerald-100/30" />
                  <input type="text" placeholder="Ahmad Sulaiman" className="bg-transparent border-none text-sm outline-none w-full" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 ml-1">Date of Birth</label>
                <div className="flex items-center gap-3 bg-surface-container-low/50 px-4 py-3 rounded-xl border border-white/5">
                  <Calendar className="w-4 h-4 text-emerald-100/30" />
                  <input type="date" className="bg-transparent border-none text-sm outline-none w-full text-emerald-100/40" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 ml-1">Email Address</label>
                <div className="flex items-center gap-3 bg-surface-container-low/50 px-4 py-3 rounded-xl border border-white/5">
                  <Mail className="w-4 h-4 text-emerald-100/30" />
                  <input type="email" placeholder="ahmad@example.com" className="bg-transparent border-none text-sm outline-none w-full" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 ml-1">Phone Number</label>
                <div className="flex items-center gap-3 bg-surface-container-low/50 px-4 py-3 rounded-xl border border-white/5">
                  <Phone className="w-4 h-4 text-emerald-100/30" />
                  <input type="tel" placeholder="+92 300 1234567" className="bg-transparent border-none text-sm outline-none w-full" />
                </div>
              </div>
              <div className="col-span-2 space-y-2">
                <label className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 ml-1">Country of Residence</label>
                <div className="flex items-center gap-3 bg-surface-container-low/50 px-4 py-3 rounded-xl border border-white/5">
                  <Globe className="w-4 h-4 text-emerald-100/30" />
                  <select className="bg-transparent border-none text-sm outline-none w-full text-emerald-100/40">
                    <option>Pakistan</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Saudi Arabia</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-headline font-bold mb-6">Academic Background</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 ml-1">Previous Islamic Education</label>
                <textarea 
                  rows={4} 
                  placeholder="Describe your previous religious studies, if any..." 
                  className="w-full bg-surface-container-low/50 p-4 rounded-xl border border-white/5 text-sm outline-none focus:border-secondary/30 transition-all"
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 ml-1">Arabic Proficiency</label>
                  <select className="w-full bg-surface-container-low/50 p-4 rounded-xl border border-white/5 text-sm outline-none focus:border-secondary/30 transition-all">
                    <option>None</option>
                    <option>Beginner (Alphabet only)</option>
                    <option>Intermediate (Basic Reading)</option>
                    <option>Advanced (Fluent Reading & Grammar)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 ml-1">Quran Memorization</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 5 Paras" 
                    className="w-full bg-surface-container-low/50 p-4 rounded-xl border border-white/5 text-sm outline-none focus:border-secondary/30 transition-all" 
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-headline font-bold mb-6">Guardian Information</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 ml-1">Guardian Full Name</label>
                <div className="flex items-center gap-3 bg-surface-container-low/50 px-4 py-3 rounded-xl border border-white/5">
                  <User className="w-4 h-4 text-emerald-100/30" />
                  <input type="text" placeholder="Sulaiman Khan" className="bg-transparent border-none text-sm outline-none w-full" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 ml-1">Relationship</label>
                <select className="w-full bg-surface-container-low/50 p-4 rounded-xl border border-white/5 text-sm outline-none focus:border-secondary/30 transition-all">
                  <option>Father</option>
                  <option>Mother</option>
                  <option>Brother</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="col-span-2 space-y-2">
                <label className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 ml-1">Emergency Contact Number</label>
                <div className="flex items-center gap-3 bg-surface-container-low/50 px-4 py-3 rounded-xl border border-white/5">
                  <Phone className="w-4 h-4 text-emerald-100/30" />
                  <input type="tel" placeholder="+92 300 9876543" className="bg-transparent border-none text-sm outline-none w-full" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 4 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center space-y-8"
          >
            <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-6">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-headline font-bold">Review Your Application</h3>
            <p className="text-emerald-100/40 max-w-md mx-auto">Please ensure all information provided is accurate. By submitting, you agree to the academy's code of conduct and spiritual guidelines.</p>
            
            <div className="p-6 rounded-2xl bg-surface-container/60 border border-white/5 text-left space-y-4 max-w-lg mx-auto">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-xs text-emerald-100/40">Applicant</span>
                <span className="text-xs font-bold">Ahmad Sulaiman</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-xs text-emerald-100/40">Program</span>
                <span className="text-xs font-bold">Tajweed Essentials</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-emerald-100/40">Guardian</span>
                <span className="text-xs font-bold">Sulaiman Khan</span>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-12 pt-8 border-t border-white/5 flex justify-between">
          <button 
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
              currentStep === 1 ? 'opacity-0 pointer-events-none' : 'glass-panel border border-white/10 text-on-surface hover:bg-white/10'
            }`}
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          
          {currentStep < 4 ? (
            <button 
              onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
              className="px-10 py-3 bg-secondary text-on-secondary-fixed rounded-xl font-bold flex items-center gap-2 shadow-lg hover:brightness-110 transition-all"
            >
              Next Step <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button className="px-10 py-3 bg-gradient-to-r from-primary to-secondary text-on-secondary-fixed rounded-xl font-bold flex items-center gap-2 shadow-lg hover:brightness-110 transition-all">
              Submit Application <UserPlus className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Help Card */}
      <div className="glass-panel border border-white/5 rounded-3xl p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-surface-container-highest flex items-center justify-center text-secondary">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-bold">Need assistance with your application?</p>
            <p className="text-[10px] text-emerald-100/40 uppercase tracking-widest font-label">Our admissions team is here to help</p>
          </div>
        </div>
        <button className="text-secondary text-xs font-bold hover:underline">Contact Support</button>
      </div>
    </motion.div>
  );
}
