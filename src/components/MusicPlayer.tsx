import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Plus, Minus } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3); // initial volume
  const audioRef = useRef<HTMLAudioElement>(null);

  const trackUrl = 'https://ia601800.us.archive.org/33/items/gladiator-soundtrack-elysium-honor-him-now-we-are-free-1_202103/Gladiator%20Soundtrack%20%27Elysium%27%2C%20%27Honor%20Him%27%2C%20%27Now%20We%20Are%20Free%27%20%281%29.mp3';

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

  const increaseVolume = () => {
    if (audioRef.current) {
      const newVolume = Math.min(volume + 0.1, 1);
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
      if (newVolume > 0) setIsMuted(false);
    }
  };

  const decreaseVolume = () => {
    if (audioRef.current) {
      const newVolume = Math.max(volume - 0.1, 0);
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
      if (newVolume === 0) setIsMuted(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.volume = volume;
    }
  }, [volume]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center space-x-2 bg-card/80 backdrop-blur-lg border border-primary/30 rounded-full p-2 shadow-neon">
        {/* Play / Pause */}
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

        {/* Mute */}
        <Button
          onClick={toggleMute}
          size="sm"
          variant="ghost"
          className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>

        {/* Volume Down */}
        <Button
          onClick={decreaseVolume}
          size="sm"
          variant="ghost"
          className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary"
        >
          <Minus className="h-4 w-4" />
        </Button>

        {/* Volume Up */}
        <Button
          onClick={increaseVolume}
          size="sm"
          variant="ghost"
          className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <audio
        ref={audioRef}
        src={trackUrl}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default MusicPlayer;
