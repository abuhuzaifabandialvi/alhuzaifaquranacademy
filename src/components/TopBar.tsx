import { Search, Languages, Bell, ChevronDown } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="fixed top-0 right-0 left-72 h-16 bg-[#0c1511]/40 backdrop-blur-md flex justify-between items-center px-8 z-40">
      <div className="flex items-center gap-4 bg-surface-container-low/50 px-4 py-1.5 rounded-full border border-white/5 w-96">
        <Search className="text-emerald-100/40 w-4 h-4" />
        <input 
          className="bg-transparent border-none text-xs focus:ring-0 placeholder:text-emerald-100/30 w-full font-label tracking-widest uppercase outline-none" 
          placeholder="Explore Knowledge..." 
          type="text"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Languages className="text-secondary w-5 h-5" />
          <span className="text-[10px] font-label uppercase tracking-widest text-emerald-100/60 group-hover:text-secondary transition-colors">English</span>
          <ChevronDown className="text-emerald-100/30 w-3 h-3" />
        </div>

        <button className="relative text-emerald-100/60 hover:text-secondary transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full border border-surface"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
          <div className="text-right">
            <p className="text-xs font-bold text-on-surface leading-none">Ahmad Sulaiman</p>
            <p className="text-[9px] font-label text-emerald-100/40 tracking-widest uppercase">Premium Student</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-secondary/20 p-0.5 overflow-hidden">
            <img 
              alt="Student Profile" 
              className="w-full h-full object-cover rounded-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOdfguSt5ICC9_gySyCwoSAqhC5RxQK9-Dr08RmeWU4_Nkoc6_VksORYLf9MYGHpa1Sno2MAVMjNidUqwUHvcIokmahbCTW6ECdIlF0IAMoSwHiXPkB9SQ9fNVS8TVkWVvryDfBWMIgSxCtHsd2qsEGic3i75odAWUu7Unt9YFa6MWXhtQrrr4ZyqI2u4WbvF5NDbFNmmB8stTVZ2zIDDitQN25pV_BB8sdWavZ6_WFkvMN_SO-ykRvZ0T8UnU3g0yLSX1Bo6moxc"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
