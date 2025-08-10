import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(onLoadingComplete, 800); // Delay for fade out animation
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Random increment for realistic loading
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-opacity duration-800 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={`vertical-${i}`}
              className="absolute top-0 bottom-0 w-px bg-primary/30"
              style={{ 
                left: `${(i + 1) * 5}%`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <div
              key={`horizontal-${i}`}
              className="absolute left-0 right-0 h-px bg-primary/30"
              style={{ 
                top: `${(i + 1) * 8.33}%`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Main Title */}
        <h1 
          className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-primary mb-8 animate-glow-pulse leading-none tracking-wider"
          style={{
            WebkitTextStroke: '3px hsl(var(--primary))',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 30px hsl(var(--primary) / 0.7))',
            textShadow: '0 0 40px hsl(var(--primary) / 0.5)'
          }}
        >
          CHANUKA
        </h1>

        {/* Loading Progress */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex justify-center mb-4">
            <div className="text-primary font-mono text-lg">
              {Math.floor(progress)}%
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-secondary/30 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out shadow-neon"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-neon"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <p className="text-muted-foreground font-mono text-sm mt-6 animate-fade-in-up">
          Initializing portfolio experience...
        </p>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-primary/50" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-primary/50" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-primary/50" />
    </div>
  );
};

export default LoadingScreen;