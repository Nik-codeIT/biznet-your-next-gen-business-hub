import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Старт",
      price: "Бесплатно",
      period: "",
      description: "Для начинающих и тестирования платформы",
      popular: false,
      features: [
        "До 3 объявлений",
        "Базовый профиль компании",
        "Стандартная поддержка",
        "Поиск по каталогу",
        "Просмотр контактов компаний"
      ]
    },
    {
      name: "Бизнес",
      price: "₽4,990",
      period: "/месяц",
      description: "Для растущих компаний",
      popular: true,
      features: [
        "До 50 объявлений",
        "Расширенный профиль компании",
        "Приоритетная поддержка",
        "Аналитика и статистика",
        "Продвижение объявлений",
        "API для интеграции",
        "Персональный менеджер"
      ]
    },
    {
      name: "Корпоративный",
      price: "По запросу",
      period: "",
      description: "Для крупных организаций",
      popular: false,
      features: [
        "Неограниченно объявлений",
        "Премиум профиль компании",
        "VIP поддержка 24/7",
        "Расширенная аналитика",
        "Приоритетное размещение",
        "Индивидуальные условия",
        "Выделенный менеджер",
        "Обучение сотрудников"
      ]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-background py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground">Тарифные планы</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Выберите подходящий тариф для вашего бизнеса. Все планы включают 14 дней бесплатного периода
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative border-border transition-all ${
                    plan.popular 
                      ? 'scale-105 border-primary shadow-xl' 
                      : 'hover:shadow-lg'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-primary to-primary-glow px-4 py-1 text-sm font-semibold">
                        Популярный
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-8 pt-6">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      {plan.period && (
                        <span className="text-muted-foreground">{plan.period}</span>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-primary to-primary-glow shadow-lg hover:shadow-xl' 
                          : ''
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                      size="lg"
                    >
                      {plan.price === "Бесплатно" ? "Начать бесплатно" : "Выбрать план"}
                    </Button>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle2 className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                Часто задаваемые вопросы
              </h2>
              
              <div className="space-y-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Как работает бесплатный период?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Все платные тарифы включают 14 дней бесплатного использования. 
                      Вы можете отменить подписку в любой момент без объяснения причин.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Можно ли изменить тариф?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Да, вы можете изменить тариф в любое время. При переходе на более высокий тариф, 
                      разница будет пересчитана пропорционально.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Какие способы оплаты доступны?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Мы принимаем оплату банковскими картами (Visa, MasterCard, МИР), 
                      банковским переводом для юридических лиц и электронными кошельками.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Что включает поддержка?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Стандартная поддержка: ответ в течение 24 часов. 
                      Приоритетная: ответ в течение 4 часов. 
                      VIP поддержка: круглосуточная помощь с персональным менеджером.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary-glow py-20 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Нужна консультация?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Свяжитесь с нами, и мы поможем выбрать оптимальный тариф для вашего бизнеса
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Связаться с нами
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
