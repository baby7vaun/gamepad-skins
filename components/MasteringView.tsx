
import React, { useState, useCallback } from 'react';
import type { MasteringResult } from '../types';
import { MasteringStyle } from '../types';
import GlowingButton from './GlowingButton';
import { masterTrack } from '../services/geminiService';
import Loader from './Loader';

const MasteringView: React.FC = () => {
  const [description, setDescription] = useState<string>('');
  const [masteringStyle, setMasteringStyle] = useState<MasteringStyle>(MasteringStyle.BALANCED_WARMTH);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<MasteringResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleMaster = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description) {
      setError('Please provide a description of your track.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const masteringResult = await masterTrack(description, masteringStyle);
      setResult(masteringResult);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      console.error('Mastering error:', errorMessage);
      setError(`Failed to master track. ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, [description, masteringStyle]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-orbitron font-bold bg-purple-blue-gradient text-transparent bg-clip-text inline-block">
          AI Mastering Engine
        </h2>
        <p className="text-light-gray font-inter mt-2 mb-10">
          Upload your track, describe its vibe, and let our AI provide professional mastering suggestions.
        </p>
      </div>

      <div className="bg-card-black p-8 rounded-lg border border-primary-purple/20">
        <form onSubmit={handleMaster}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="track-description" className="font-orbitron text-accent-blue">Track Description</label>
              <textarea
                id="track-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g., 'An upbeat lo-fi hip hop track with a prominent bassline and dreamy synth pads.'"
                className="w-full h-36 p-3 bg-background-black rounded-md border-2 border-primary-purple/30 focus:border-accent-blue focus:ring-accent-blue focus:outline-none transition-colors duration-300 font-inter text-off-white"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="mastering-style" className="font-orbitron text-accent-blue">Mastering Style</label>
              <select
                id="mastering-style"
                value={masteringStyle}
                onChange={(e) => setMasteringStyle(e.target.value as MasteringStyle)}
                className="w-full p-3 bg-background-black rounded-md border-2 border-primary-purple/30 focus:border-accent-blue focus:ring-accent-blue focus:outline-none transition-colors duration-300 font-inter text-off-white"
              >
                {Object.values(MasteringStyle).map(style => (
                  <option key={style} value={style}>{style}</option>
                ))}
              </select>
               <div className="pt-8">
                  <GlowingButton type="submit" disabled={isLoading || !description} className="w-full">
                    {isLoading ? 'Analyzing...' : 'Master My Track'}
                  </GlowingButton>
               </div>
            </div>
          </div>
        </form>
      </div>

      {isLoading && <Loader />}
      
      {error && (
        <div className="mt-8 bg-red-900/50 border border-red-500 text-red-300 p-4 rounded-lg text-center font-inter">
          <p><strong>Error:</strong> {error}</p>
        </div>
      )}

      {result && (
        <div className="mt-10 bg-card-black p-8 rounded-lg border border-accent-blue/20">
          <h3 className="text-2xl font-orbitron text-accent-blue mb-6">Mastering Report</h3>
          <div className="space-y-6 font-inter">
            <div>
                <h4 className="text-lg font-bold text-primary-purple mb-2">EQ Suggestions</h4>
                <ul className="list-disc list-inside space-y-1 text-off-white/90">
                    {result.eq_suggestions.map((item, i) => <li key={`eq-${i}`}>{item}</li>)}
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-bold text-primary-purple mb-2">Compression Settings</h4>
                 <ul className="list-disc list-inside space-y-1 text-off-white/90">
                    {result.compression_settings.map((item, i) => <li key={`comp-${i}`}>{item}</li>)}
                </ul>
            </div>
             <div>
                <h4 className="text-lg font-bold text-primary-purple mb-2">Stereo Imaging</h4>
                 <ul className="list-disc list-inside space-y-1 text-off-white/90">
                    {result.stereo_imaging.map((item, i) => <li key={`stereo-${i}`}>{item}</li>)}
                </ul>
            </div>
             <div>
                <h4 className="text-lg font-bold text-primary-purple mb-2">Final Thoughts</h4>
                <p className="text-off-white/90">{result.final_thoughts}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MasteringView;
