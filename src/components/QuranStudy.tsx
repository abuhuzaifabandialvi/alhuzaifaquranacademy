import { 
  Search, 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Settings, 
  BookOpen, 
  Star, 
  Share2, 
  Bookmark, 
  ChevronDown, 
  Heart,
  Music,
  FileText,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

const surahs = [
  { id: 1, name: 'Al-Fatihah', arabic: 'الفاتحة', meaning: 'The Opening', verses: 7, type: 'Meccan' },
  { id: 2, name: 'Al-Baqarah', arabic: 'البقرة', meaning: 'The Cow', verses: 286, type: 'Medinan' },
  { id: 3, name: 'Ali Imran', arabic: 'آل عمران', meaning: 'Family of Imran', verses: 200, type: 'Medinan' },
  { id: 4, name: 'An-Nisa', arabic: 'النساء', meaning: 'The Women', verses: 176, type: 'Medinan' },
  { id: 5, name: 'Al-Maidah', arabic: 'المائدة', meaning: 'The Table Spread', verses: 120, type: 'Medinan' },
  { id: 6, name: 'Al-Anam', arabic: 'الأنعام', meaning: 'The Cattle', verses: 165, type: 'Meccan' },
];

export default function QuranStudy() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-12 gap-8 h-[calc(100vh-120px)]"
    >
      {/* Surah Navigation Sidebar */}
      <div className="col-span-3 glass-panel border border-white/5 rounded-3xl p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-6 bg-surface-container-low/50 px-4 py-2 rounded-xl border border-white/5">
          <Search className="w-4 h-4 text-emerald-100/30" />
          <input 
            type="text" 
            placeholder="Search Surah..." 
            className="bg-transparent border-none text-sm outline-none placeholder:text-emerald-100/20 w-full"
          />
        </div>

        <div className="flex-1 overflow-y-auto pr-2 space-y-2 scrollbar-hide">
          {surahs.map((surah) => (
            <button 
              key={surah.id}
              className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all group ${
                surah.id === 1 ? 'bg-primary-container/20 border-primary/30' : 'bg-surface-container/40 border-white/5 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${
                  surah.id === 1 ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-emerald-100/40'
                }`}>
                  {surah.id}
                </div>
                <div className="text-left">
                  <p className={`text-sm font-bold ${surah.id === 1 ? 'text-primary' : 'text-on-surface'}`}>{surah.name}</p>
                  <p className="text-[10px] text-emerald-100/40 uppercase tracking-widest font-label">{surah.meaning}</p>
                </div>
              </div>
              <p className={`font-quran text-xl ${surah.id === 1 ? 'text-secondary' : 'text-emerald-100/30 group-hover:text-secondary'}`}>
                {surah.arabic}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Main Reader View */}
      <div className="col-span-6 glass-panel border border-white/5 rounded-3xl p-10 flex flex-col h-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary animate-pulse"></div>
        
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-headline font-bold">Surah Al-Fatihah</h3>
              <p className="text-xs text-emerald-100/40 uppercase tracking-widest font-label">The Opening • 7 Verses • Meccan</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2.5 glass-panel border border-white/5 rounded-xl text-emerald-100/40 hover:text-secondary transition-colors"><Bookmark className="w-5 h-5" /></button>
            <button className="p-2.5 glass-panel border border-white/5 rounded-xl text-emerald-100/40 hover:text-secondary transition-colors"><Share2 className="w-5 h-5" /></button>
            <button className="p-2.5 glass-panel border border-white/5 rounded-xl text-emerald-100/40 hover:text-secondary transition-colors"><Settings className="w-5 h-5" /></button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pr-4 space-y-12 scrollbar-hide text-center">
          <div className="py-8">
            <p className="font-quran text-5xl text-secondary gold-glow mb-4">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            <p className="text-sm font-headline italic text-emerald-100/40">In the name of Allah, the Entirely Merciful, the Especially Merciful.</p>
          </div>

          <div className="space-y-6 group cursor-pointer">
            <div className="flex justify-center items-center gap-6">
              <span className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center text-secondary text-xs font-bold">1</span>
              <p className="font-quran text-4xl leading-relaxed text-on-surface group-hover:text-secondary transition-colors">الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</p>
            </div>
            <p className="text-lg font-headline text-on-surface-variant max-w-lg mx-auto opacity-80">[All] praise is [due] to Allah, Lord of the worlds -</p>
          </div>

          <div className="space-y-6 group cursor-pointer">
            <div className="flex justify-center items-center gap-6">
              <span className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center text-secondary text-xs font-bold">2</span>
              <p className="font-quran text-4xl leading-relaxed text-on-surface group-hover:text-secondary transition-colors">الرَّحْمَٰنِ الرَّحِيمِ</p>
            </div>
            <p className="text-lg font-headline text-on-surface-variant max-w-lg mx-auto opacity-80">The Entirely Merciful, the Especially Merciful,</p>
          </div>

          <div className="space-y-6 group cursor-pointer">
            <div className="flex justify-center items-center gap-6">
              <span className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center text-secondary text-xs font-bold">3</span>
              <p className="font-quran text-4xl leading-relaxed text-on-surface group-hover:text-secondary transition-colors">مَالِكِ يَوْمِ الدِّينِ</p>
            </div>
            <p className="text-lg font-headline text-on-surface-variant max-w-lg mx-auto opacity-80">Sovereign of the Day of Recompense.</p>
          </div>
        </div>

        {/* Audio Player Bar */}
        <div className="mt-8 pt-8 border-t border-white/5">
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-4 w-48">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10">
                <img 
                  alt="Reciter" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7QcdfG1s3MI49a_aCAo8dlikfs7BOOy0DuLzh7WqulDdNW8u7O8ZM8wHvFacakVlF0rZYv1yRza74tG1nnKXg9bceLeS7IxsMdiLtbLqgzNA2ZNeefUHdT949DG9sCZQf5g9N3tz7jJxxdWZFfkfMxUKKGKUwDBsJbn5Q9IbbeQJxkIHPVhvuwHh__Jr8C1XFqB6y5y5AvoHlwt1S6seYARSSk-dtixXJPp0EUR5qZcmSEerX3_0j03T-Q-98YFBxOcO2hV9wSRQ"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold truncate">Qari Abdullah</p>
                <p className="text-[9px] text-emerald-100/40 uppercase tracking-widest font-label">Warsh Recitation</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center gap-3">
              <div className="flex items-center gap-6">
                <button className="text-emerald-100/40 hover:text-secondary transition-colors"><SkipBack className="w-5 h-5" /></button>
                <button className="w-12 h-12 rounded-full bg-secondary text-on-secondary-fixed flex items-center justify-center shadow-lg shadow-secondary/20 hover:scale-105 transition-transform">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </button>
                <button className="text-emerald-100/40 hover:text-secondary transition-colors"><SkipForward className="w-5 h-5" /></button>
              </div>
              <div className="w-full flex items-center gap-3">
                <span className="text-[9px] font-label text-emerald-100/40">0:45</span>
                <div className="flex-1 h-1 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-1/3 rounded-full"></div>
                </div>
                <span className="text-[9px] font-label text-emerald-100/40">2:30</span>
              </div>
            </div>

            <div className="flex items-center gap-4 w-48 justify-end">
              <Volume2 className="w-4 h-4 text-emerald-100/40" />
              <div className="w-20 h-1 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-emerald-100/40 w-3/4 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Study Insights & Resources */}
      <div className="col-span-3 space-y-8 h-full overflow-y-auto scrollbar-hide">
        <div className="glass-panel border border-white/5 rounded-3xl p-6 bg-gradient-to-b from-secondary/10 to-transparent">
          <h4 className="text-sm font-bold mb-6 flex items-center gap-2">
            <Star className="text-secondary w-4 h-4 fill-current" />
            Tafsir Insights
          </h4>
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-surface-container/60 border border-white/5">
              <p className="text-[10px] font-label uppercase tracking-widest text-secondary mb-2">Verse 1 Context</p>
              <p className="text-xs text-on-surface-variant leading-relaxed">The word 'Al-Hamd' signifies both praise and gratitude, exclusively reserved for the Creator of all existence.</p>
            </div>
            <div className="p-4 rounded-2xl bg-surface-container/60 border border-white/5">
              <p className="text-[10px] font-label uppercase tracking-widest text-secondary mb-2">Grammar Note</p>
              <p className="text-xs text-on-surface-variant leading-relaxed">'Rabb' implies the Sustainer, Provider, and Master who nurtures everything towards its perfection.</p>
            </div>
          </div>
        </div>

        <div className="glass-panel border border-white/5 rounded-3xl p-6">
          <h4 className="text-sm font-bold mb-6 flex items-center gap-2">
            <Music className="text-primary w-4 h-4" />
            Recitation Modes
          </h4>
          <div className="space-y-3">
            {['Hafs an Asim', 'Warsh an Nafi', 'Qalun an Nafi', 'Ad-Duri an Abu Amr'].map((mode, i) => (
              <button key={mode} className={`w-full flex items-center justify-between p-3 rounded-xl border text-xs transition-all ${
                i === 0 ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-surface-container/40 border-white/5 text-emerald-100/60 hover:text-on-surface'
              }`}>
                {mode}
                {i === 0 && <CheckCircle2 className="w-3 h-3" />}
              </button>
            ))}
          </div>
        </div>

        <div className="glass-panel border border-white/5 rounded-3xl p-6">
          <h4 className="text-sm font-bold mb-6 flex items-center gap-2">
            <FileText className="text-emerald-400 w-4 h-4" />
            Study Materials
          </h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                <FileText className="w-4 h-4" />
              </div>
              <p className="text-[10px] font-bold flex-1">Fatihah Word-by-Word</p>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                <Music className="w-4 h-4" />
              </div>
              <p className="text-[10px] font-bold flex-1">Tajweed Audio Guide</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
