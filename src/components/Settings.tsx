import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Moon, 
  LogOut, 
  ChevronRight, 
  Camera, 
  CheckCircle2, 
  AlertCircle,
  Mail,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto grid grid-cols-12 gap-8"
    >
      {/* Settings Navigation */}
      <div className="col-span-4 space-y-6">
        <div className="glass-panel border border-white/5 rounded-3xl p-6">
          <h3 className="text-xl font-headline font-bold mb-6">Settings Sanctuary</h3>
          <div className="space-y-2">
            {[
              { id: 'profile', label: 'Profile Settings', icon: User },
              { id: 'notifications', label: 'Notifications', icon: Bell },
              { id: 'security', label: 'Security & Privacy', icon: Shield },
              { id: 'appearance', label: 'Appearance', icon: Moon },
              { id: 'language', label: 'Language & Region', icon: Globe },
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all group ${
                  activeTab === tab.id ? 'bg-secondary/10 border-secondary/30 text-secondary' : 'bg-surface-container/40 border-white/5 text-emerald-100/60 hover:text-on-surface'
                }`}
              >
                <div className="flex items-center gap-4">
                  <tab.icon className="w-5 h-5" />
                  <span className="text-sm font-bold">{tab.label}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === tab.id ? 'rotate-90' : ''}`} />
              </button>
            ))}
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl border border-error/20 text-error hover:bg-error/10 transition-all font-bold text-sm">
          <LogOut className="w-5 h-5" /> Sign Out from All Devices
        </button>
      </div>

      {/* Settings Content Area */}
      <div className="col-span-8 glass-panel border border-white/5 rounded-3xl p-10 bg-gradient-to-b from-primary-container/10 to-transparent min-h-[600px]">
        {activeTab === 'profile' && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div className="flex items-center gap-8 border-b border-white/5 pb-10">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full border-4 border-secondary/20 p-1 overflow-hidden">
                  <img 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-full" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOdfguSt5ICC9_gySyCwoSAqhC5RxQK9-Dr08RmeWU4_Nkoc6_VksORYLf9MYGHpa1Sno2MAVMjNidUqwUHvcIokmahbCTW6ECdIlF0IAMoSwHiXPkB9SQ9fNVS8TVkWVvryDfBWMIgSxCtHsd2qsEGic3i75odAWUu7Unt9YFa6MWXhtQrrr4ZyqI2u4WbvF5NDbFNmmB8stTVZ2zIDDitQN25pV_BB8sdWavZ6_WFkvMN_SO-ykRvZ0T8UnU3g0yLSX1Bo6moxc"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <button className="absolute bottom-0 right-0 p-2.5 bg-secondary text-on-secondary-fixed rounded-full shadow-lg hover:scale-110 transition-transform">
                  <Camera className="w-5 h-5" />
                </button>
              </div>
              <div>
                <h4 className="text-2xl font-headline font-bold mb-1">Ahmad Sulaiman</h4>
                <p className="text-sm text-emerald-100/40 mb-4">ahmad@example.com</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-[10px] font-bold uppercase tracking-widest">Premium Student</span>
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest">Tajweed Pro</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 ml-1">Display Name</label>
                <div className="flex items-center gap-3 bg-surface-container-low/50 px-4 py-3 rounded-xl border border-white/5">
                  <User className="w-4 h-4 text-emerald-100/30" />
                  <input type="text" defaultValue="Ahmad Sulaiman" className="bg-transparent border-none text-sm outline-none w-full" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 ml-1">Email Address</label>
                <div className="flex items-center gap-3 bg-surface-container-low/50 px-4 py-3 rounded-xl border border-white/5">
                  <Mail className="w-4 h-4 text-emerald-100/30" />
                  <input type="email" defaultValue="ahmad@example.com" className="bg-transparent border-none text-sm outline-none w-full" />
                </div>
              </div>
              <div className="col-span-2 space-y-2">
                <label className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 ml-1">Spiritual Bio</label>
                <textarea 
                  rows={4} 
                  defaultValue="Seeking knowledge of the Quran and Sunnah to better myself and serve the Ummah." 
                  className="w-full bg-surface-container-low/50 p-4 rounded-xl border border-white/5 text-sm outline-none focus:border-secondary/30 transition-all"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button className="px-8 py-3 glass-panel border border-white/10 text-on-surface rounded-xl font-medium hover:bg-white/10 transition-colors">Cancel</button>
              <button className="px-8 py-3 bg-secondary text-on-secondary-fixed rounded-xl font-bold shadow-lg hover:brightness-110 transition-all">Save Changes</button>
            </div>
          </motion.div>
        )}

        {activeTab === 'notifications' && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-headline font-bold mb-6">Notification Preferences</h3>
            <div className="space-y-6">
              {[
                { title: 'Live Class Alerts', desc: 'Get notified when your classes go live', active: true },
                { title: 'Assignment Reminders', desc: 'Reminders for upcoming homework and exams', active: true },
                { title: 'Spiritual Reminders', desc: 'Daily verses and hadith notifications', active: false },
                { title: 'Academy Announcements', desc: 'Important news and event updates', active: true },
                { title: 'Direct Messages', desc: 'Notifications for messages from instructors', active: true },
              ].map((item) => (
                <div key={item.title} className="flex items-center justify-between p-6 rounded-2xl bg-surface-container/40 border border-white/5">
                  <div>
                    <p className="text-sm font-bold mb-1">{item.title}</p>
                    <p className="text-xs text-emerald-100/40">{item.desc}</p>
                  </div>
                  <button className={`w-12 h-6 rounded-full relative transition-colors ${item.active ? 'bg-secondary' : 'bg-surface-container-highest'}`}>
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${item.active ? 'right-1' : 'left-1'}`}></div>
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'security' && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <h3 className="text-xl font-headline font-bold mb-6">Security & Privacy</h3>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h5 className="text-xs font-bold uppercase tracking-widest text-secondary">Change Password</h5>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 ml-1">Current Password</label>
                    <div className="flex items-center gap-3 bg-surface-container-low/50 px-4 py-3 rounded-xl border border-white/5">
                      <Lock className="w-4 h-4 text-emerald-100/30" />
                      <input type={showPassword ? 'text' : 'password'} className="bg-transparent border-none text-sm outline-none w-full" />
                      <button onClick={() => setShowPassword(!showPassword)} className="text-emerald-100/30 hover:text-secondary">
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 ml-1">New Password</label>
                    <div className="flex items-center gap-3 bg-surface-container-low/50 px-4 py-3 rounded-xl border border-white/5">
                      <Lock className="w-4 h-4 text-emerald-100/30" />
                      <input type={showPassword ? 'text' : 'password'} className="bg-transparent border-none text-sm outline-none w-full" />
                    </div>
                  </div>
                </div>
                <button className="px-6 py-2.5 bg-surface-container-highest border border-white/10 text-xs font-bold rounded-xl hover:bg-white/5 transition-all">Update Password</button>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-6">
                <h5 className="text-xs font-bold uppercase tracking-widest text-secondary">Two-Factor Authentication</h5>
                <div className="flex items-center justify-between p-6 rounded-2xl bg-surface-container-highest/40 border border-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">2FA is Enabled</p>
                      <p className="text-xs text-emerald-100/40">Your account is protected with an extra layer of security</p>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-primary hover:underline">Manage</button>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-6">
                <h5 className="text-xs font-bold uppercase tracking-widest text-error">Danger Zone</h5>
                <div className="p-6 rounded-2xl border border-error/20 bg-error/5">
                  <p className="text-sm font-bold text-error mb-2">Delete Account</p>
                  <p className="text-xs text-emerald-100/40 mb-6">Once you delete your account, there is no going back. Please be certain.</p>
                  <button className="px-6 py-2.5 bg-error text-white text-xs font-bold rounded-xl hover:brightness-110 transition-all">Delete Account</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
