import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Star, 
  CreditCard, 
  TrendingUp, 
  FileText, 
  Music, 
  Download,
  BookOpen
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      {/* Spiritual Hero Section */}
      <section className="relative h-[400px] rounded-3xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container via-surface to-surface-container-lowest z-0"></div>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img 
            alt="Islamic Art Pattern" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD451P8kphzeOHozE0zruFCqxa1_RmqK09HmJp9_q1qa4KjwAkl6Nf_ZshlIqBkoxWuLIVH9TfseN4-eeyoPrDzFb-Yp5L1rLSrO0J5AjlM7akyxM_fWBH9Li8Z_Ww_n2eyBi1gcRfCkTfWgHcEdrIFpx0Ypol4T1McXdGiGy6Tac0q0swEYNR8W9lNnJvSVXHoYipSnWO1pAxpHYFHzJ0lI12IIBZlWSYVCdcozBvWWVuzvNp1EBhUoTxfWmTGmP0yKazgP_xJcc4"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 flex h-full items-center justify-between px-16">
          <div className="max-w-xl">
            <span className="inline-block py-1 px-3 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-[10px] font-label tracking-widest uppercase mb-4">Daily Inspiration</span>
            <h2 className="font-quran text-5xl text-secondary leading-relaxed mb-6 gold-glow tracking-wide">
              خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
            </h2>
            <p className="text-lg font-headline italic text-on-surface-variant leading-relaxed opacity-80 border-l-2 border-secondary/30 pl-6">
              "The best of you are those who learn the Quran and teach it."
            </p>
            <div className="mt-8 flex gap-4">
              <button className="px-8 py-3 bg-secondary text-on-secondary-fixed rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-secondary/10">Continue Recitation</button>
              <button className="px-8 py-3 glass-panel border border-white/10 text-on-surface rounded-xl font-medium hover:bg-white/10 transition-colors">Study Plan</button>
            </div>
          </div>
          <div className="relative w-96 h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-secondary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative z-20 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700">
              <div className="w-64 h-80 bg-surface-container-highest rounded-2xl shadow-2xl border border-white/10 p-4 flex flex-col items-center justify-center text-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/40 to-transparent"></div>
                <BookOpen className="w-32 h-32 mb-4 opacity-80" />
                <p className="font-quran text-3xl opacity-90">القرآن الكريم</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Dashboard Grid */}
      <div className="grid grid-cols-12 gap-6 items-start">
        {/* Live Class Radar Card */}
        <div className="col-span-8 space-y-6">
          <div className="glass-panel border border-white/5 rounded-3xl p-8 relative overflow-hidden">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="text-xl font-headline font-bold mb-1">Live Sanctuary Radar</h3>
                <p className="text-sm text-emerald-100/40">Real-time active learning circles across the academy</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 glass-panel border border-white/5 rounded-lg text-secondary"><ChevronLeft className="w-5 h-5" /></button>
                <button className="p-2 glass-panel border border-white/5 rounded-lg text-secondary"><ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>
            
            <div className="flex gap-6 overflow-x-hidden">
              {/* Card 1 */}
              <div className="min-w-[320px] bg-surface-container-highest/40 p-6 rounded-2xl border border-white/5 group hover:border-secondary/30 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary/40">
                    <img 
                      alt="Qari Abdullah" 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7QcdfG1s3MI49a_aCAo8dlikfs7BOOy0DuLzh7WqulDdNW8u7O8ZM8wHvFacakVlF0rZYv1yRza74tG1nnKXg9bceLeS7IxsMdiLtbLqgzNA2ZNeefUHdT949DG9sCZQf5g9N3tz7jJxxdWZFfkfMxUKKGKUwDBsJbn5Q9IbbeQJxkIHPVhvuwHh__Jr8C1XFqB6y5y5AvoHlwt1S6seYARSSk-dtixXJPp0EUR5qZcmSEerX3_0j03T-Q-98YFBxOcO2hV9wSRQ"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="px-2 py-1 rounded bg-error/10 text-error text-[9px] font-bold tracking-widest flex items-center gap-1 uppercase">
                    <span className="w-1.5 h-1.5 bg-error rounded-full animate-ping"></span> LIVE
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-1">Tajweed Essentials</h4>
                <p className="text-xs text-emerald-100/40 mb-4">Instructor: Qari Abdullah</p>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full border border-surface bg-primary-container text-[8px] flex items-center justify-center">AJ</div>
                    <div className="w-6 h-6 rounded-full border border-surface bg-secondary-container text-[8px] flex items-center justify-center">SK</div>
                    <div className="w-6 h-6 rounded-full border border-surface bg-tertiary-container text-[8px] flex items-center justify-center">+12</div>
                  </div>
                  <span className="text-[10px] text-emerald-100/60">students active</span>
                </div>
                <button className="w-full py-2.5 rounded-xl border border-secondary/30 text-secondary text-sm font-bold hover:bg-secondary hover:text-on-secondary-fixed transition-all">Enter Session</button>
              </div>

              {/* Card 2 */}
              <div className="min-w-[320px] bg-surface-container-highest/40 p-6 rounded-2xl border border-white/5 opacity-60">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
                    <img 
                      alt="Ustadh Hamza" 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqvhrTO7oBGtxs1QXM-wkaYJOZ8d1-VndmXP8fbkt5iQKz70buEbd9I0FI2CgV8JP908JkMaVa7n-IBmJPWtZTZjpddPnIGglabZgCvxkW0M21W7ez4VkjlUJf3lL3CSM7woYzFg9FKC4SyFAd5JgfWC8iQZjuWDaR0oXibJSMkn2t17yXimUrYV_bZhSkgND_730SUVT_oUnukxqN9zRlLucqUuVnkWxvzQu09SW8-fYzuzmJT1j9j5HFa8RywVVUzjxliYsEOu0"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="px-2 py-1 rounded bg-surface/40 text-on-surface/40 text-[9px] font-bold tracking-widest flex items-center gap-1 uppercase">
                    Starts in 15m
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-1">Fiqh 101: Foundations</h4>
                <p className="text-xs text-emerald-100/40 mb-4">Instructor: Ustadh Hamza</p>
                <div className="h-[74px] flex items-end">
                  <button className="w-full py-2.5 rounded-xl bg-white/5 text-on-surface/30 text-sm font-bold cursor-not-allowed">Waitlisting</button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Row */}
          <div className="grid grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-3xl border border-white/5 flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary-container/40 flex items-center justify-center">
                <CheckCircle2 className="text-primary w-8 h-8" />
              </div>
              <div>
                <p className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40">Attendance</p>
                <p className="text-2xl font-bold text-on-surface">98%</p>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-3xl border border-white/5 flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-secondary-container/20 flex items-center justify-center">
                <Star className="text-secondary w-8 h-8 fill-current" />
              </div>
              <div>
                <p className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40">Total Points</p>
                <p className="text-2xl font-bold text-on-secondary-fixed">1,250</p>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-3xl border border-white/5 flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                <CreditCard className="text-emerald-400 w-8 h-8" />
              </div>
              <div>
                <p className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40">Fee Status</p>
                <p className="text-lg font-bold text-emerald-400">Paid</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gamified Progress Card */}
        <div className="col-span-4 space-y-6">
          <div className="glass-panel border border-white/5 rounded-3xl p-8 bg-gradient-to-b from-primary-container/20 to-transparent">
            <h3 className="text-xl font-headline font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="text-secondary w-6 h-6" />
              Progress Sanctuary
            </h3>
            <div className="mb-8">
              <div className="flex justify-between items-end mb-2">
                <p className="text-sm font-bold">Para 10 Completion</p>
                <span className="text-secondary font-bold">85%</span>
              </div>
              <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-secondary w-[85%] rounded-full relative">
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              <p className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 mb-4">Earned Sanctuaries (Badges)</p>
              <div className="flex flex-wrap gap-3">
                <div className="group relative">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-highest border border-secondary/20 flex items-center justify-center cursor-help">
                    <Star className="text-secondary w-8 h-8 fill-current" />
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-24 bg-surface-container-highest border border-white/10 rounded-lg p-2 text-[10px] text-center invisible group-hover:visible z-30">Tajweed Pro</div>
                </div>
                <div className="group relative">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-highest border border-primary/20 flex items-center justify-center cursor-help">
                    <TrendingUp className="text-primary w-8 h-8" />
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-24 bg-surface-container-highest border border-white/10 rounded-lg p-2 text-[10px] text-center invisible group-hover:visible z-30">10-Day Streak</div>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-surface-container/60 border border-white/5">
              <p className="text-xs text-emerald-100/60 mb-3">Weekly Engagement</p>
              <div className="flex justify-between items-end h-20 gap-2">
                <div className="flex-1 bg-primary/20 h-[40%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary/20 h-[65%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary/20 h-[50%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary h-[95%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary/20 h-[30%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary/20 h-[20%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary/20 h-[10%] rounded-t-sm"></div>
              </div>
              <div className="flex justify-between mt-2 text-[8px] text-emerald-100/30 font-label uppercase">
                <span>M</span><span>T</span><span>W</span><span className="text-secondary">T</span><span>F</span><span>S</span><span>S</span>
              </div>
            </div>
          </div>

          {/* Upcoming Resources */}
          <div className="glass-panel border border-white/5 rounded-3xl p-6">
            <h4 className="text-sm font-bold mb-4">Learning Resources</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold leading-tight">Tajweed Rules PDF</p>
                  <p className="text-[9px] text-emerald-100/40">2.4 MB • Shared yesterday</p>
                </div>
                <Download className="w-4 h-4 text-emerald-100/20 group-hover:text-on-surface transition-colors" />
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <Music className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold leading-tight">Para 10 Audio Recitation</p>
                  <p className="text-[9px] text-emerald-100/40">18.5 MB • Shared 2 days ago</p>
                </div>
                <Download className="w-4 h-4 text-emerald-100/20 group-hover:text-on-surface transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
