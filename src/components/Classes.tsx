import { 
  Play, 
  Clock, 
  Users, 
  Calendar, 
  Search, 
  Filter, 
  ChevronRight, 
  BookOpen, 
  Star,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

const courses = [
  {
    id: 1,
    title: 'Tajweed Essentials',
    instructor: 'Qari Abdullah',
    duration: '12 Weeks',
    students: 156,
    rating: 4.9,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7QcdfG1s3MI49a_aCAo8dlikfs7BOOy0DuLzh7WqulDdNW8u7O8ZM8wHvFacakVlF0rZYv1yRza74tG1nnKXg9bceLeS7IxsMdiLtbLqgzNA2ZNeefUHdT949DG9sCZQf5g9N3tz7jJxxdWZFfkfMxUKKGKUwDBsJbn5Q9IbbeQJxkIHPVhvuwHh__Jr8C1XFqB6y5y5AvoHlwt1S6seYARSSk-dtixXJPp0EUR5qZcmSEerX3_0j03T-Q-98YFBxOcO2hV9wSRQ',
    level: 'Beginner',
    status: 'Live Now',
    progress: 45
  },
  {
    id: 2,
    title: 'Fiqh 101: Foundations',
    instructor: 'Ustadh Hamza',
    duration: '8 Weeks',
    students: 89,
    rating: 4.8,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqvhrTO7oBGtxs1QXM-wkaYJOZ8d1-VndmXP8fbkt5iQKz70buEbd9I0FI2CgV8JP908JkMaVa7n-IBmJPWtZTZjpddPnIGglabZgCvxkW0M21W7ez4VkjlUJf3lL3CSM7woYzFg9FKC4SyFAd5JgfWC8iQZjuWDaR0oXibJSMkn2t17yXimUrYV_bZhSkgND_730SUVT_oUnukxqN9zRlLucqUuVnkWxvzQu09SW8-fYzuzmJT1j9j5HFa8RywVVUzjxliYsEOu0',
    level: 'Intermediate',
    status: 'Upcoming',
    progress: 0
  },
  {
    id: 3,
    title: 'Arabic Grammar',
    instructor: 'Dr. Sarah Ali',
    duration: '16 Weeks',
    students: 210,
    rating: 4.7,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOdfguSt5ICC9_gySyCwoSAqhC5RxQK9-Dr08RmeWU4_Nkoc6_VksORYLf9MYGHpa1Sno2MAVMjNidUqwUHvcIokmahbCTW6ECdIlF0IAMoSwHiXPkB9SQ9fNVS8TVkWVvryDfBWMIgSxCtHsd2qsEGic3i75odAWUu7Unt9YFa6MWXhtQrrr4ZyqI2u4WbvF5NDbFNmmB8stTVZ2zIDDitQN25pV_BB8sdWavZ6_WFkvMN_SO-ykRvZ0T8UnU3g0yLSX1Bo6moxc',
    level: 'Advanced',
    status: 'Enrolled',
    progress: 72
  }
];

export default function Classes() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Header Section */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-headline font-bold mb-2">Knowledge Sanctuaries</h2>
          <p className="text-emerald-100/40">Explore our curated Islamic learning circles</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-xl border border-white/5">
            <Search className="w-4 h-4 text-emerald-100/30" />
            <input 
              type="text" 
              placeholder="Search classes..." 
              className="bg-transparent border-none text-sm outline-none placeholder:text-emerald-100/20 w-48"
            />
          </div>
          <button className="p-2 glass-panel border border-white/5 rounded-xl text-secondary hover:bg-white/5 transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {['All Classes', 'Quran & Tajweed', 'Fiqh & Hadith', 'Arabic Language', 'Islamic History', 'Spiritual Growth'].map((cat, i) => (
          <button 
            key={cat}
            className={`px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              i === 0 
                ? 'bg-secondary text-on-secondary-fixed shadow-lg shadow-secondary/20' 
                : 'glass-panel border border-white/5 text-emerald-100/60 hover:text-on-surface'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Class */}
      <section className="relative h-[350px] rounded-3xl overflow-hidden group cursor-pointer">
        <img 
          alt="Featured Class" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD451P8kphzeOHozE0zruFCqxa1_RmqK09HmJp9_q1qa4KjwAkl6Nf_ZshlIqBkoxWuLIVH9TfseN4-eeyoPrDzFb-Yp5L1rLSrO0J5AjlM7akyxM_fWBH9Li8Z_Ww_n2eyBi1gcRfCkTfWgHcEdrIFpx0Ypol4T1McXdGiGy6Tac0q0swEYNR8W9lNnJvSVXHoYipSnWO1pAxpHYFHzJ0lI12IIBZlWSYVCdcozBvWWVuzvNp1EBhUoTxfWmTGmP0yKazgP_xJcc4"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-error text-white text-[10px] font-bold rounded-full flex items-center gap-1 animate-pulse">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span> LIVE MASTERCLASS
            </span>
            <span className="text-secondary text-xs font-bold">1,240 students watching</span>
          </div>
          <h3 className="text-4xl font-headline font-bold mb-4 gold-glow">The Journey of the Soul: Akhirah Foundations</h3>
          <p className="text-on-surface-variant mb-6 line-clamp-2 opacity-80">A deep dive into the spiritual and theological foundations of life after death, guided by classical texts and modern insights.</p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-secondary text-on-secondary-fixed rounded-xl font-bold flex items-center gap-2 shadow-lg hover:brightness-110 transition-all">
              <Play className="w-4 h-4 fill-current" /> Join Live Now
            </button>
            <button className="px-8 py-3 glass-panel border border-white/10 text-on-surface rounded-xl font-medium hover:bg-white/10 transition-colors">
              View Syllabus
            </button>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <div className="grid grid-cols-3 gap-8">
        {courses.map((course) => (
          <motion.div 
            key={course.id}
            whileHover={{ y: -10 }}
            className="glass-card border border-white/5 rounded-3xl overflow-hidden group"
          >
            <div className="relative h-48">
              <img 
                alt={course.title} 
                className="w-full h-full object-cover" 
                src={course.image}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                  course.status === 'Live Now' ? 'bg-error text-white' : 'bg-surface/80 text-secondary backdrop-blur-md'
                }`}>
                  {course.status}
                </span>
              </div>
              <button className="absolute bottom-4 right-4 w-10 h-10 bg-secondary text-on-secondary-fixed rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <p className="text-[10px] font-label uppercase tracking-widest text-secondary">{course.level}</p>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-secondary fill-current" />
                  <span className="text-xs font-bold">{course.rating}</span>
                </div>
              </div>
              <h4 className="text-lg font-bold mb-1 group-hover:text-secondary transition-colors">{course.title}</h4>
              <p className="text-xs text-emerald-100/40 mb-6">Instructor: {course.instructor}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-emerald-100/60">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase font-label tracking-wider">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-100/60">
                  <Users className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase font-label tracking-wider">{course.students} Students</span>
                </div>
              </div>

              {course.progress > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between text-[10px] font-bold mb-1.5">
                    <span className="text-emerald-100/40">Progress</span>
                    <span className="text-secondary">{course.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-secondary rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <button className="w-full py-3 rounded-xl bg-surface-container-highest/50 border border-white/5 text-sm font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
                View Details <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Schedule Section */}
      <section className="glass-panel border border-white/5 rounded-3xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-headline font-bold flex items-center gap-3">
            <Calendar className="text-secondary w-6 h-6" />
            Weekly Sanctuary Schedule
          </h3>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-surface-container-highest text-xs font-bold">Week View</button>
            <button className="px-4 py-2 rounded-lg text-xs font-bold text-emerald-100/40">Month View</button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
            <div key={day} className={`p-4 rounded-2xl border ${i === 3 ? 'bg-primary-container/20 border-primary/30' : 'bg-surface-container/40 border-white/5'}`}>
              <p className={`text-[10px] font-label uppercase tracking-widest mb-4 ${i === 3 ? 'text-primary' : 'text-emerald-100/30'}`}>{day}</p>
              <div className="space-y-3">
                {i === 3 ? (
                  <>
                    <div className="p-2 rounded-lg bg-secondary/10 border-l-2 border-secondary">
                      <p className="text-[9px] font-bold text-secondary leading-tight">Tajweed Essentials</p>
                      <p className="text-[8px] text-emerald-100/40">09:00 AM</p>
                    </div>
                    <div className="p-2 rounded-lg bg-primary/10 border-l-2 border-primary">
                      <p className="text-[9px] font-bold text-primary leading-tight">Fiqh Foundations</p>
                      <p className="text-[8px] text-emerald-100/40">02:00 PM</p>
                    </div>
                  </>
                ) : (
                  <div className="h-10 flex items-center justify-center">
                    <div className="w-1 h-1 bg-white/10 rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
