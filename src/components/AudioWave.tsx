const AudioWave = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-end gap-1 h-8 ${className}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="audio-wave-bar w-1 bg-primary/30 rounded-full"
          style={{ height: `${20 + Math.random() * 60}%` }}
        />
      ))}
    </div>
  );
};

export default AudioWave;
