import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Generate a synthetic ambient track URL or use a royalty-free ambient track
  const ambientTrackUrl = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEcBCJ+2Omsgy4GKoLO8tiJOggZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEcBCJ+2Omsgy4GKIH1BM8Gw7m5uSUm5gn5r5iq2eSJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEcBCJ+2Omsgy4GKoKusrq8sLq5pKSXm5yam5qZmZmYmJedl5qanZucnJ2fqKKsq6qsrqSkmZyZnZqam5qXmpifnJ2bnJyaGlqWmZyam5qXmpiGmZyZmZqZmZmZmKKhqKnJMILfBMKzrJOSmpedm5qanZudnKKjpKOlpKSlpKWmpaWmpqWkpKOkpJ2cnJucnJ2cn5yZmZqZmZqam5uam5ubmZqZl5ycnJ2bnJycnZ2cmJqUkpOTk5OTk5SUlJSUlJKTkpOUlJSUlJSUlJOTkpKTk5OTlJOUlJWVlZWUlJSUlZWUlJSTk5qanpqZlZKUlJOTk5OTlJSUlJSUlJSUlJOTk5OTk5OUlJSUlJSUlJKTk5OTlJSUlJOUlJOTk5OTk5OTk5OTk5OTkpKTk5OTk5OTk5OTk5OTk5OTk5STk5OTkpKSk5OTk5OTk5OTk5OTk5OTk5yfm5ybnJycnJycm5ybnJucnJycnJycnJucnJucnJycnJycnJycnJycnJucnJycnJycnJybnJybn5qbnJucnJyfnJubnJucnJycnJucnJybnJucnJucnJycnJycnJycnJycnJycnJycnJucnJycnJucnJyfnJucnJucnJycnJycnJybnJucnJybnJucnJucnJucnJucnJucnJycnJycnJycnJybm5ycnJucnJucnJucnJucnJucnJucnJucnJucnJucnJucnJucnJucnJucnJycnJucnJucnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJy';

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.volume = 0.3; // Set low volume for ambient music
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center space-x-2 bg-card/80 backdrop-blur-lg border border-primary/30 rounded-full p-2 shadow-neon">
        <Button
          onClick={togglePlay}
          size="sm"
          variant="ghost"
          className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary"
        >
          {isPlaying ? (
            <div className="flex space-x-0.5">
              <div className="w-1 h-4 bg-current animate-pulse"></div>
              <div className="w-1 h-4 bg-current animate-pulse" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-1 h-4 bg-current animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            </div>
          ) : (
            <div className="w-0 h-0 border-l-4 border-l-current border-y-2 border-y-transparent ml-0.5"></div>
          )}
        </Button>
        
        <Button
          onClick={toggleMute}
          size="sm"
          variant="ghost"
          className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
      </div>

      <audio
        ref={audioRef}
        src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default MusicPlayer;