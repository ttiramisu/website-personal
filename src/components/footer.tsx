const Footer = () => {
  return (
    <footer className="py-12 bg-zinc-950 border-t-violet-900 mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-violet-900 font-bold text-xl">Z:\</span>
            <p className="text-muted-foreground text-sm mt-2">© {new Date().getFullYear()} Zijie. All rights reserved.</p>
          </div>
          
          <div>
            <p className="text-muted-foreground text-sm">
              Designed & Built with <span className="text-violet-900">♥</span> using Vite.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;