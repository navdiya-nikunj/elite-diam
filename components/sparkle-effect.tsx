export function SparkleEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Sparkle elements positioned across the screen */}
      <div className="sparkle absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full" />
      <div className="sparkle absolute top-1/3 right-1/4 w-1 h-1 bg-primary rounded-full" />
      <div className="sparkle absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary rounded-full" />
      <div className="sparkle absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary rounded-full" />
      <div className="sparkle absolute bottom-1/4 right-1/5 w-2 h-2 bg-primary rounded-full" />
      <div className="sparkle absolute top-1/5 left-1/2 w-1 h-1 bg-primary rounded-full" />
      <div className="sparkle absolute bottom-1/2 left-1/5 w-2.5 h-2.5 bg-primary rounded-full" />
      <div className="sparkle absolute top-3/4 right-1/2 w-1 h-1 bg-primary rounded-full" />
    </div>
  )
}
