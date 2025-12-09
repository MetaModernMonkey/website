export default function PerspectiveGrid() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none" style={{ zIndex: 0 }}>
      <div
        className="absolute top-0 left-0 right-0 h-[150vh]"
        style={{
          backgroundImage: 'url(/perspective-grid.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0) 100%)',
          opacity: 0.8,
        }}
      />
    </div>
  );
}

