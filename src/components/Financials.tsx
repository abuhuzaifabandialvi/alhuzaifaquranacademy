import { 
  Wallet, 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Download, 
  Search, 
  Filter, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  TrendingUp,
  History
} from 'lucide-react';
import { motion } from 'motion/react';

const transactions = [
  { id: 1, type: 'Fee Payment', date: 'Oct 12, 2025', amount: 150.00, status: 'Completed', method: 'Visa •••• 4242' },
  { id: 2, type: 'Book Purchase', date: 'Oct 08, 2025', amount: 45.50, status: 'Completed', method: 'Mastercard •••• 8888' },
  { id: 3, type: 'Sadaqah Donation', date: 'Oct 05, 2025', amount: 25.00, status: 'Completed', method: 'PayPal' },
  { id: 4, type: 'Monthly Tuition', date: 'Sep 12, 2025', amount: 150.00, status: 'Completed', method: 'Visa •••• 4242' },
  { id: 5, type: 'Exam Fee', date: 'Sep 05, 2025', amount: 30.00, status: 'Pending', method: 'Bank Transfer' },
];

export default function Financials() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-headline font-bold mb-2">Financial Sanctuary</h2>
          <p className="text-emerald-100/40">Manage your academy fees and contributions</p>
        </div>
        <button className="px-6 py-3 bg-secondary text-on-secondary-fixed rounded-xl font-bold flex items-center gap-2 shadow-lg hover:brightness-110 transition-all">
          <CreditCard className="w-4 h-4" /> Make a Payment
        </button>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Main Financial Overview */}
        <div className="col-span-8 space-y-8">
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-3xl border border-white/5 bg-gradient-to-br from-primary-container/20 to-transparent">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-container/40 flex items-center justify-center text-primary">
                  <Wallet className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">+12%</span>
              </div>
              <p className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 mb-1">Current Balance</p>
              <h3 className="text-3xl font-bold text-on-surface">$1,240.50</h3>
            </div>
            <div className="glass-panel p-6 rounded-3xl border border-white/5 bg-gradient-to-br from-secondary-container/10 to-transparent">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container/20 flex items-center justify-center text-secondary">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-1 rounded-full">Active</span>
              </div>
              <p className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 mb-1">Total Contributions</p>
              <h3 className="text-3xl font-bold text-on-secondary-fixed">$4,850.00</h3>
            </div>
            <div className="glass-panel p-6 rounded-3xl border border-white/5 bg-gradient-to-br from-error-container/10 to-transparent">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-2xl bg-error-container/20 flex items-center justify-center text-error">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-error bg-error/10 px-2 py-1 rounded-full">Due</span>
              </div>
              <p className="text-[10px] font-label uppercase tracking-widest text-emerald-100/40 mb-1">Pending Dues</p>
              <h3 className="text-3xl font-bold text-error">$30.00</h3>
            </div>
          </div>

          {/* Transaction History */}
          <div className="glass-panel border border-white/5 rounded-3xl p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-headline font-bold flex items-center gap-3">
                <History className="text-secondary w-6 h-6" />
                Transaction History
              </h3>
              <div className="flex gap-3">
                <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-xl border border-white/5">
                  <Search className="w-4 h-4 text-emerald-100/30" />
                  <input type="text" placeholder="Search..." className="bg-transparent border-none text-xs outline-none placeholder:text-emerald-100/20 w-32" />
                </div>
                <button className="p-2 glass-panel border border-white/5 rounded-xl text-secondary hover:bg-white/5 transition-colors">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {transactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between p-4 rounded-2xl bg-surface-container/40 border border-white/5 hover:bg-white/5 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      tx.type.includes('Payment') || tx.type.includes('Tuition') ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                    }`}>
                      {tx.type.includes('Payment') || tx.type.includes('Tuition') ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownLeft className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="text-sm font-bold">{tx.type}</p>
                      <p className="text-[10px] text-emerald-100/40 font-label uppercase tracking-widest">{tx.date} • {tx.method}</p>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-6">
                    <div>
                      <p className="text-sm font-bold">${tx.amount.toFixed(2)}</p>
                      <div className="flex items-center gap-1 justify-end">
                        {tx.status === 'Completed' ? <CheckCircle2 className="w-3 h-3 text-primary" /> : <Clock className="w-3 h-3 text-secondary" />}
                        <span className={`text-[9px] font-bold uppercase tracking-widest ${tx.status === 'Completed' ? 'text-primary' : 'text-secondary'}`}>{tx.status}</span>
                      </div>
                    </div>
                    <button className="p-2 rounded-lg bg-surface-container-highest text-emerald-100/40 hover:text-on-surface transition-colors opacity-0 group-hover:opacity-100">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 text-xs font-bold text-emerald-100/40 hover:text-secondary transition-colors uppercase tracking-widest">
              View All Transactions
            </button>
          </div>
        </div>

        {/* Payment Methods & Quick Actions */}
        <div className="col-span-4 space-y-8">
          <div className="glass-panel border border-white/5 rounded-3xl p-8 bg-gradient-to-b from-secondary/10 to-transparent">
            <h4 className="text-sm font-bold mb-6">Saved Payment Methods</h4>
            <div className="space-y-4 mb-8">
              <div className="p-5 rounded-2xl bg-surface-container-highest/60 border border-secondary/30 relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <CreditCard className="w-16 h-16" />
                </div>
                <div className="relative z-10">
                  <p className="text-[10px] font-label uppercase tracking-widest text-secondary mb-4">Primary Card</p>
                  <p className="text-lg font-bold mb-1">•••• •••• •••• 4242</p>
                  <div className="flex justify-between items-end">
                    <p className="text-xs text-emerald-100/40">Exp: 12/28</p>
                    <img alt="Visa" className="h-4 opacity-60" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" />
                  </div>
                </div>
              </div>
              <button className="w-full py-4 rounded-2xl border border-dashed border-white/10 text-emerald-100/40 text-xs font-bold hover:border-secondary hover:text-secondary transition-all flex items-center justify-center gap-2">
                + Add New Method
              </button>
            </div>
            
            <div className="p-5 rounded-2xl bg-surface-container/60 border border-white/5">
              <h5 className="text-xs font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-secondary" />
                Upcoming Payments
              </h5>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <p className="text-[10px] text-emerald-100/60">Nov Tuition Fee</p>
                  <p className="text-[10px] font-bold">$150.00</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[10px] text-emerald-100/60">Library Membership</p>
                  <p className="text-[10px] font-bold">$15.00</p>
                </div>
                <div className="pt-3 border-t border-white/5 flex justify-between items-center">
                  <p className="text-xs font-bold">Total Due Nov 01</p>
                  <p className="text-xs font-bold text-secondary">$165.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel border border-white/5 rounded-3xl p-6">
            <h4 className="text-sm font-bold mb-4">Sadaqah & Zakat</h4>
            <p className="text-[10px] text-emerald-100/40 leading-relaxed mb-6">
              "The example of those who spend their wealth in the way of Allah is like a seed [of grain] which grows seven ears..." (2:261)
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button className="py-3 rounded-xl bg-primary-container/40 border border-primary/20 text-[10px] font-bold text-primary hover:bg-primary hover:text-on-primary transition-all">
                Donate Sadaqah
              </button>
              <button className="py-3 rounded-xl bg-secondary-container/20 border border-secondary/30 text-[10px] font-bold text-secondary hover:bg-secondary hover:text-on-secondary transition-all">
                Calculate Zakat
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
