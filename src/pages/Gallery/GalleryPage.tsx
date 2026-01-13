import { useState } from 'react';
import { X, FolderOpen, Maximize2, ChevronDown, Calendar, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
interface CategoryData {
  [category: string]: string[];
}

interface ArchiveData {
  [year: string]: CategoryData;
}

// Images Import
import campus1 from '@/assets/images/HomeGallery/1.jpg';
import sports1 from '@/assets/images/HomeGallery/2.jpg';
import event1 from '@/assets/images/HomeGallery/3.jpg';

const archiveData: ArchiveData = {
  "2025-26": {
    "Campus": [campus1, sports1, event1, sports1, campus1, event1, campus1],
    "Sports": [sports1, event1, sports1],
    "Events": [event1, campus1, sports1]
  },
  "2024-25": {
    "Campus": [campus1, event1],
    "Tours": [event1, sports1, campus1]
  }
};

export default function ResponsiveJustifiedGallery() {
  const years = Object.keys(archiveData);
  const [selectedYear, setSelectedYear] = useState<string>(years[0]);
  const [selectedCat, setSelectedCat] = useState<string>(Object.keys(archiveData[years[0]])[0]);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Mobile Dropdown States
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isCatOpen, setIsCatOpen] = useState(false);

  const categories = Object.keys(archiveData[selectedYear] || {});
  const currentImages = archiveData[selectedYear]?.[selectedCat] || [];

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      
      {/* --- Sidebar/Header Section --- */}
      {/* Mobile: Sticky Top, Desktop: Sticky Left */}
      <aside className="w-full md:w-72 bg-[#fcfcfd] border-b md:border-b-0 md:border-r border-slate-100 p-4 md:p-6 sticky top-0 md:h-screen md:overflow-y-auto z-[10]">
        
        <div className="mb-4 md:mb-10 pt-2 flex items-center justify-between md:block">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <div className="w-2 h-6 bg-blue-600 rounded-full" /> Gallery Hub
          </h2>
          <div className="md:hidden text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {selectedYear}
          </div>
        </div>

        {/* --- Mobile View: Dropdowns --- */}
        <div className="flex gap-2 md:hidden">
          {/* Year Dropdown */}
          <div className="relative flex-1">
            <button 
              onClick={() => { setIsYearOpen(!isYearOpen); setIsCatOpen(false); }}
              className="w-full flex items-center justify-between bg-white border border-slate-200 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700"
            >
              <div className="flex items-center gap-2"><Calendar size={14}/> {selectedYear}</div>
              <ChevronDown size={14} className={`transition-transform ${isYearOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isYearOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}
                  className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 shadow-xl rounded-lg overflow-hidden z-[60]"
                >
                  {years.map(year => (
                    <button 
                      key={year} 
                      onClick={() => { setSelectedYear(year); setSelectedCat(Object.keys(archiveData[year])[0]); setIsYearOpen(false); }}
                      className="w-full text-left px-4 py-3 text-xs hover:bg-blue-50"
                    >
                      {year}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Category Dropdown */}
          <div className="relative flex-1">
            <button 
              onClick={() => { setIsCatOpen(!isCatOpen); setIsYearOpen(false); }}
              className="w-full flex items-center justify-between bg-slate-900 text-white px-3 py-2 rounded-lg text-xs font-semibold"
            >
              <div className="flex items-center gap-2"><Filter size={14}/> {selectedCat}</div>
              <ChevronDown size={14} className={`transition-transform ${isCatOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isCatOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}
                  className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 shadow-xl rounded-lg overflow-hidden z-[60]"
                >
                  {categories.map(cat => (
                    <button 
                      key={cat} 
                      onClick={() => { setSelectedCat(cat); setIsCatOpen(false); }}
                      className="w-full text-left px-4 py-3 text-xs hover:bg-slate-50 border-b border-slate-50 last:border-0"
                    >
                      {cat}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* --- Desktop View: Original Sidebar UI --- */}
        <div className="hidden md:block space-y-8">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Session</p>
            <div className="flex flex-col gap-1">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => { setSelectedYear(year); setSelectedCat(Object.keys(archiveData[year])[0]); }}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${selectedYear === year ? 'bg-blue-200 text-blue-900' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Categories</p>
            <div className="flex flex-col gap-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${selectedCat === cat ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                  <FolderOpen size={14} /> {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* --- Main Gallery Area --- */}
     <main className="flex-1 p-4 md:p-10">
  <header className="mb-6 md:mb-10 hidden md:block">
    <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase italic">
      {selectedCat}
    </h1>
    <div className="h-1 w-20 bg-blue-600 mt-2" />
  </header>

  {/* --- Google Photos / Pinterest Style Masonry Grid --- */}
  <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
    <AnimatePresence mode='popLayout'>
      {currentImages.map((img, index) => (
        <motion.div
          key={`${selectedYear}-${selectedCat}-${index}`}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          /* break-inside-avoid images ko todne se rokta hai */
          className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-2xl shadow-sm border border-slate-100 bg-slate-50"
          onClick={() => setSelectedImg(img)}
        >
          {/* Image apne natural size ke hisaab se height legi */}
          <img 
            src={img} 
            alt="" 
            className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
              <Maximize2 className="text-white" size={20} />
            </div>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
</main>

      {/* --- Lightbox --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white border-none bg-black/20 p-2 rounded-full cursor-pointer hover:bg-white/20 transition-all">
              <X size={32} />
            </button>
            <img src={selectedImg} className="max-w-full max-h-[90vh] rounded shadow-2xl" alt="Preview" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}