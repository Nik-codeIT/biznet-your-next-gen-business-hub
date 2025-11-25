import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-glow">
            <span className="text-xl font-bold text-primary-foreground">B</span>
          </div>
          <span className="text-2xl font-bold text-foreground">Biznet</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <Link
            to="/listings"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Объявления
          </Link>
          <Link
            to="/companies"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Компании
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Тарифы
          </Link>
        </div>

        <div className="hidden items-center space-x-4 md:flex">
          <Button variant="ghost" size="sm">
            Войти
          </Button>
          <Button variant="default" size="sm" className="bg-gradient-to-r from-primary to-primary-glow shadow-lg hover:shadow-xl transition-all">
            Начать бесплатно
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container mx-auto space-y-4 px-4 py-6">
            <Link
              to="/listings"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Объявления
            </Link>
            <Link
              to="/companies"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Компании
            </Link>
            <Link
              to="/pricing"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Тарифы
            </Link>
            <div className="space-y-2 pt-4">
              <Button variant="ghost" size="sm" className="w-full">
                Войти
              </Button>
              <Button variant="default" size="sm" className="w-full bg-gradient-to-r from-primary to-primary-glow">
                Начать бесплатно
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
