import React, { useState, useEffect } from 'react';
import { X, Cpu, RefreshCw, AlertTriangle } from 'lucide-react';
import { generateMissionLog } from '../services/gemini';
import { MissionEntry, AnalysisStatus } from '../types';

interface MissionLogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MissionLog: React.FC<MissionLogProps> = ({ isOpen, onClose }) => {
  const [logs, setLogs] = useState<MissionEntry[]>([
    {
      id: '1',
      timestamp: '08:00',
      sender: 'SYSTEM',
      content: 'Initialization complete. Life support at 98%.',
      type: 'info'
    },
    {
      id: '2',
      timestamp: '08:15',
      sender: 'SENSORS',
      content: 'Gravitational waves detected in Sector 4. Minor hull vibration.',
      type: 'alert'
    }
  ]);
  const [status, setStatus] = useState<AnalysisStatus>(AnalysisStatus.IDLE);

  const handleGenerateLog = async () => {
    setStatus(AnalysisStatus.ANALYZING);
    
    // Artificial delay for effect if no API key or fast response
    const startTime = Date.now();
    
    const text = await generateMissionLog();
    
    const elapsedTime = Date.now() - startTime;
    if (elapsedTime < 1000) {
        await new Promise(resolve => setTimeout(resolve, 1000 - elapsedTime));
    }

    const newLog: MissionEntry = {
      id: Date.now().toString(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sender: 'AI CORE',
      content: text,
      type: 'analysis'
    };

    setLogs(prev => [newLog, ...prev]);
    setStatus(AnalysisStatus.COMPLETE);
    setTimeout(() => setStatus(AnalysisStatus.IDLE), 2000);
  };

  useEffect(() => {
    // Generate an initial log on first open if empty? No, keep static for now.
  }, []);

  return (
    <div 
      className={`fixed top-0 right-0 h-full w-full md:w-96 bg-black/90 backdrop-blur-xl border-l border-white/10 z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-cyan-400">
            <Cpu className="w-5 h-5" />
            <h2 className="font-mono font-bold tracking-wider">AI MISSION LOG</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Log List */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
          {logs.map((log) => (
            <div 
              key={log.id} 
              className={`p-4 rounded border border-white/5 ${log.type === 'analysis' ? 'bg-cyan-950/20 border-cyan-500/30' : log.type === 'alert' ? 'bg-red-950/20 border-red-500/30' : 'bg-gray-900/40'}`}
            >
              <div className="flex justify-between items-center mb-2 font-mono text-xs text-gray-400">
                <span>[{log.timestamp}]</span>
                <span className={log.type === 'analysis' ? 'text-cyan-400' : log.type === 'alert' ? 'text-red-400' : 'text-gray-300'}>
                  {log.sender}
                </span>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed font-light">
                {log.content}
              </p>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <button 
            onClick={handleGenerateLog}
            disabled={status === AnalysisStatus.ANALYZING}
            className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-mono text-sm tracking-wider flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === AnalysisStatus.ANALYZING ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                ANALYZING TELEMETRY...
              </>
            ) : (
              <>
                <Cpu className="w-4 h-4" />
                GENERATE AI REPORT
              </>
            )}
          </button>
          
          <div className="mt-4 flex items-center gap-2 text-xs text-gray-600 font-mono">
            <AlertTriangle className="w-3 h-3 text-yellow-600" />
            <span>GEMINI 2.5 FLASH MODEL ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};