import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Camera, Check, X } from 'lucide-react';

// Types for our memory
interface Memory {
  id: number;
  url: string;
  caption: string;
  author: string;
  rotation: string;
  approved: boolean;
}

const MemoriesSection: React.FC = () => {
  const [memories, setMemories] = useState<Memory[]>([
    // Mock Data to start
    { id: 1, url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500', caption: 'Best coding vibes!', author: 'Alex', rotation: '-3deg', approved: true },
    { id: 2, url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500', caption: 'Senate Hall was epic.', author: 'Sarah', rotation: '4deg', approved: true },
    { id: 3, url: 'https://images.unsplash.com/photo-1555664424-778a69022365?w=500', caption: 'Team 1 Winners!', author: 'Mike', rotation: '-2deg', approved: true },
  ]);

  const [caption, setCaption] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false); // For demo/testing
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !caption) return;

    setIsUploading(true);

    // 1. UPLOAD TO SUPABASE HERE (Mocking delay)
    // const { data, error } = await supabase.storage.from('memories').upload(...)
    
    setTimeout(() => {
      const newMemory: Memory = {
        id: Date.now(),
        url: previewUrl!, // In production, use the public URL from Supabase
        caption: caption,
        author: 'You',
        rotation: `${Math.random() * 6 - 3}deg`, 
        approved: false // Default to false for admin approval workflow
      };

      setMemories(prev => [newMemory, ...prev]);
      setIsUploading(false);
      setShowSuccess(true);
      
      // Reset Form
      setFile(null);
      setCaption('');
      setPreviewUrl(null);
      if(fileInputRef.current) fileInputRef.current.value = "";
    }, 1500);
  };

  // Mock Admin Approval (Delete this function when using real Supabase)
  const handleApproval = (id: number) => {
    setMemories(prev => prev.map(mem => 
      mem.id === id ? { ...mem, approved: true } : mem
    ));
  };

  return (
    <section id="memories" className="relative bg-[#050505] py-40 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-vibrant/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-passion/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-white/20 rounded-full bg-white/5 mb-6">
             <Camera size={14} className="text-vibrant" />
             <span className="text-vibrant font-bold tracking-widest text-xs uppercase">Live Feed</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-display font-bold tracking-normal uppercase mb-6">
            Memories <span className="text-vibrant">Booth</span>
          </h2>
          <p className="text-2xl text-muted font-hand max-w-2xl mx-auto">
             Share Your Technomantra Moment! <br/>
             <span className="text-white/50 text-lg font-sans">Upload your memory and see yourself in the Senate Hall.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Upload Form */}
          <div className="lg:col-span-4 sticky top-32">
             <div className="bg-secondary border border-white/10 rounded-3xl p-8 shadow-2xl relative">
                {/* Show Success Message or Form */}
                <AnimatePresence mode='wait'>
                  {!showSuccess ? (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      <h3 className="text-3xl font-display font-bold text-white mb-4">Upload Your Memory</h3>
                      
                      {/* File Input Area */}
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className={`relative border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all group
                        ${previewUrl ? 'border-vibrant bg-vibrant/5' : 'border-white/20 hover:border-white/40 hover:bg-white/5'}`}
                      >
                        <input 
                          ref={fileInputRef}
                          type="file" 
                          accept="image/*" 
                          onChange={handleFileChange}
                          className="hidden" 
                        />
                        
                        {previewUrl ? (
                          <img src={previewUrl} alt="Preview" className="w-full h-48 object-cover rounded-lg mb-2" />
                        ) : (
                          <div className="flex flex-col items-center justify-center gap-3 py-8">
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-vibrant group-hover:bg-vibrant group-hover:text-black transition-colors">
                              <Upload size={32} />
                            </div>
                            <span className="text-muted font-medium">Click to select photo</span>
                          </div>
                        )}
                      </div>

                      {/* Caption */}
                      <div>
                        <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Your Caption</label>
                        <textarea
                          value={caption}
                          onChange={(e) => setCaption(e.target.value)}
                          placeholder="e.g., Had a blast at the Hackathon!"
                          rows={3}
                          className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:border-vibrant focus:outline-none transition-all resize-none font-hand text-lg"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={!file || !caption || isUploading}
                        className={`w-full py-4 rounded-xl font-bold font-display tracking-wide uppercase flex items-center justify-center gap-2 transition-all
                        ${(!file || !caption) ? 'bg-white/10 text-muted cursor-not-allowed' : 'bg-vibrant text-black shadow-[0_0_20px_rgba(0,242,255,0.4)] hover:bg-white hover:scale-[1.02]'}`}
                      >
                        {isUploading ? 'Uploading...' : 'Upload Memory Now'}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-gradient-to-br from-vibrant/20 to-purple-900/20 border border-vibrant/30 rounded-3xl p-8 text-center"
                    >
                      <div className="w-16 h-16 bg-vibrant rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                        <Check size={32} />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white mb-2">Thanks!</h3>
                      <p className="text-white/70 mb-6">
                        We'll review and add to the wall soon. Keep checking the gallery!
                      </p>
                      <button 
                        onClick={() => setShowSuccess(false)}
                        className="text-vibrant font-bold hover:underline"
                      >
                        Upload another
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>

             {/* Dev Tool: Admin Panel Toggle (Remove in production) */}
             <div className="mt-4 text-center">
                <button onClick={() => setShowAdminPanel(!showAdminPanel)} className="text-xs text-white/10 hover:text-white/30 uppercase tracking-widest">
                    {showAdminPanel ? 'Close Admin Panel' : 'Open Admin Panel (Demo)'}
                </button>
             </div>
          </div>

          {/* RIGHT: The Wall */}
          <div className="lg:col-span-8">
            
            {/* Admin Demo Panel */}
            <AnimatePresence>
                {showAdminPanel && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mb-12 bg-red-900/10 border border-red-500/20 p-6 rounded-2xl overflow-hidden"
                    >
                        <h4 className="text-red-400 font-bold uppercase tracking-widest text-sm mb-4">Admin: Pending Approval</h4>
                        <div className="flex flex-wrap gap-4">
                            {memories.filter(m => !m.approved).map(mem => (
                                <div key={mem.id} className="w-40 bg-black/40 border border-white/10 p-2 rounded">
                                    <img src={mem.url} className="w-full h-24 object-cover rounded mb-2" />
                                    <p className="text-[10px] text-white truncate mb-2">{mem.caption}</p>
                                    <div className="flex gap-2">
                                        <button onClick={() => handleApproval(mem.id)} className="flex-1 bg-green-600/20 text-green-500 text-[10px] py-1 rounded hover:bg-green-600 hover:text-white transition">Approve</button>
                                        <button onClick={() => setMemories(prev => prev.filter(m => m.id !== mem.id))} className="flex-1 bg-red-600/20 text-red-500 text-[10px] py-1 rounded hover:bg-red-600 hover:text-white transition">Reject</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Polaroid Grid */}
            <div className="columns-1 md:columns-2 gap-8 space-y-8">
                <AnimatePresence>
                    {memories.filter(m => m.approved).map((memory) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 50, rotate: memory.rotation }}
                            animate={{ opacity: 1, y: 0, rotate: memory.rotation }}
                            key={memory.id}
                            whileHover={{ scale: 1.05, rotate: '0deg', zIndex: 50 }}
                            className="break-inside-avoid mb-8 relative group"
                        >
                            {/* Tape */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 backdrop-blur-sm z-20 rotate-[-2deg] shadow-sm"></div>
                            
                            <div className="bg-white p-4 pb-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-all">
                                <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] mb-4">
                                    <img src={memory.url} alt="Memory" className="w-full h-full object-cover" />
                                </div>
                                <div className="text-center">
                                    <p className="font-hand text-2xl text-gray-800 leading-tight">{memory.caption}</p>
                                    <p className="text-[10px] text-gray-400 font-bold mt-2 uppercase tracking-widest">- {memory.author}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;