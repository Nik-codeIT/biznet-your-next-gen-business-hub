import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-glow">
                <span className="text-xl font-bold text-primary-foreground">B</span>
              </div>
              <span className="text-2xl font-bold text-foreground">Biznet</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Бизнес-платформа нового поколения для вашего успеха
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Платформа</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/listings" className="text-sm text-muted-foreground hover:text-primary">
                  Объявления
                </Link>
              </li>
              <li>
                <Link to="/companies" className="text-sm text-muted-foreground hover:text-primary">
                  Компании
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary">
                  Тарифы
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Помощь
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Условия использования
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Biznet. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
