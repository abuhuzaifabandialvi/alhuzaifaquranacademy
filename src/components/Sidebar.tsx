import { 
  LayoutDashboard, 
  BookOpen, 
  BookText, 
  Wallet, 
  UserPlus, 
  Settings, 
  PlayCircle, 
  HelpCircle, 
  LogOut,
  School
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: BookOpen, label: 'Classes', path: '/classes' },
  { icon: BookText, label: 'Quran Study', path: '/quran' },
  { icon: Wallet, label: 'Financials', path: '/financials' },
  { icon: UserPlus, label: 'Admissions', path: '/admissions' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <nav className="h-screen w-72 fixed left-0 top-0 border-r border-white/10 bg-[#0c1511]/60 backdrop-blur-xl flex flex-col p-4 z-50">
      <div className="flex items-center gap-3 px-4 mb-10 mt-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-container to-primary flex items-center justify-center shadow-lg">
          <School className="text-secondary-fixed w-6 h-6" />
        </div>
        <div>
          <h1 className="font-quran text-2xl text-[#D4AF37] leading-none">Al-Huzaifa</h1>
          <p className="text-[10px] text-emerald-100/50 uppercase tracking-[0.2em] font-label">Digital Sanctuary</p>
        </div>
      </div>

      <div className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300",
                isActive 
                  ? "bg-white/10 text-[#D4AF37] font-bold" 
                  : "text-emerald-100/70 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive && "fill-current")} />
              <span className="text-sm tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>

      <button className="mt-4 mb-8 mx-2 py-3 bg-gradient-to-r from-secondary-container to-secondary text-on-secondary-fixed rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition-all">
        <PlayCircle className="w-4 h-4" />
        Join Live Class
      </button>

      <div className="border-t border-white/5 pt-4 space-y-1">
        <button className="w-full flex items-center gap-4 px-4 py-2 text-emerald-100/50 hover:text-white text-xs transition-all">
          <HelpCircle className="w-4 h-4" />
          <span>Support</span>
        </button>
        <button className="w-full flex items-center gap-4 px-4 py-2 text-emerald-100/50 hover:text-error text-xs transition-all">
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </nav>
  );
}
