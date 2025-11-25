import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Search, 
  Building2, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users,
  CheckCircle2,
  ArrowRight 
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 md:py-32"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                Бизнес-платформа{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  нового поколения
                </span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
                Современные объявления, компании и сервисы для вашего бизнеса.<br />
                Быстро. Удобно. Безопасно.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary-glow text-lg shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <Link to="/listings">
                    Начать работу <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <Link to="/pricing">Узнать тарифы</Link>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
              <Card className="border-none bg-background/60 backdrop-blur">
                <CardContent className="pt-6 text-center">
                  <div className="mb-2 text-4xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-muted-foreground">Активных объявлений</div>
                </CardContent>
              </Card>
              <Card className="border-none bg-background/60 backdrop-blur">
                <CardContent className="pt-6 text-center">
                  <div className="mb-2 text-4xl font-bold text-primary">5,000+</div>
                  <div className="text-sm text-muted-foreground">Зарегистрированных компаний</div>
                </CardContent>
              </Card>
              <Card className="border-none bg-background/60 backdrop-blur">
                <CardContent className="pt-6 text-center">
                  <div className="mb-2 text-4xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Время безотказной работы</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Почему выбирают Biznet?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Мы создали платформу, которая объединяет все необходимые инструменты для развития вашего бизнеса
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-border transition-shadow hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Умный поиск</h3>
                  <p className="text-muted-foreground">
                    Находите нужные объявления и компании за секунды благодаря мощным фильтрам и ИИ-поиску
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border transition-shadow hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Безопасность</h3>
                  <p className="text-muted-foreground">
                    Защита данных на уровне банков. Проверка всех пользователей и компаний
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border transition-shadow hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Быстрота</h3>
                  <p className="text-muted-foreground">
                    Размещайте объявления за минуты. Моментальные уведомления о новых предложениях
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border transition-shadow hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Каталог компаний</h3>
                  <p className="text-muted-foreground">
                    Полная информация о компаниях, отзывы, рейтинги и контакты в одном месте
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border transition-shadow hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Аналитика</h3>
                  <p className="text-muted-foreground">
                    Отслеживайте эффективность ваших объявлений в режиме реального времени
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border transition-shadow hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Поддержка 24/7</h3>
                  <p className="text-muted-foreground">
                    Наша команда всегда готова помочь вам в решении любых вопросов
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary-glow py-20 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Готовы начать?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Присоединяйтесь к тысячам успешных компаний на Biznet
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link to="/listings">
                  Просмотреть объявления <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/20 bg-primary-foreground/10 text-lg text-primary-foreground hover:bg-primary-foreground/20"
                asChild
              >
                <Link to="/companies">Каталог компаний</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                  Всё для роста вашего бизнеса
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Biznet — это не просто платформа объявлений. Это комплексное решение для развития вашего бизнеса
                </p>
                <ul className="space-y-4">
                  {[
                    "Размещение неограниченного количества объявлений",
                    "Продвижение в топ результатов поиска",
                    "Детальная статистика и аналитика",
                    "API для интеграции с вашими системами",
                    "Персональный менеджер для бизнес-клиентов",
                    "Приоритетная поддержка"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <Card className="border-border shadow-xl">
                  <CardContent className="p-8">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">Бизнес</h3>
                        <p className="text-muted-foreground">Для растущих компаний</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">₽4,990</div>
                        <div className="text-sm text-muted-foreground">/месяц</div>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-primary-glow" size="lg" asChild>
                      <Link to="/pricing">Выбрать тариф</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
