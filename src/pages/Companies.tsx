import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, MapPin, Users, Star, Building2 } from "lucide-react";

const Companies = () => {
  const companies = [
    {
      id: 1,
      name: "TechSolutions",
      industry: "IT & Разработка",
      description: "Ведущая компания в области разработки программного обеспечения и цифровых решений",
      location: "Москва",
      employees: "50-100",
      rating: 4.8,
      verified: true,
      activeListings: 12
    },
    {
      id: 2,
      name: "ОфисСнаб",
      industry: "Оптовая торговля",
      description: "Крупнейший поставщик офисных товаров и канцелярии в России",
      location: "Санкт-Петербург",
      employees: "100-250",
      rating: 4.6,
      verified: true,
      activeListings: 8
    },
    {
      id: 3,
      name: "БухЭксперт",
      industry: "Финансовые услуги",
      description: "Профессиональное бухгалтерское сопровождение и консультации",
      location: "Онлайн",
      employees: "10-50",
      rating: 4.9,
      verified: true,
      activeListings: 5
    },
    {
      id: 4,
      name: "ЛогистикПро",
      industry: "Логистика",
      description: "Современные складские комплексы и логистические решения",
      location: "Московская область",
      employees: "250+",
      rating: 4.5,
      verified: true,
      activeListings: 15
    },
    {
      id: 5,
      name: "PromoDrive",
      industry: "Маркетинг",
      description: "Комплексное продвижение бизнеса и digital-маркетинг",
      location: "Москва",
      employees: "50-100",
      rating: 4.7,
      verified: true,
      activeListings: 20
    },
    {
      id: 6,
      name: "ОфисСтиль",
      industry: "Производство",
      description: "Производитель качественной офисной мебели",
      location: "Казань",
      employees: "100-250",
      rating: 4.4,
      verified: false,
      activeListings: 6
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-muted/30">
        {/* Hero Section */}
        <section className="border-b border-border bg-background py-12">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-4xl font-bold text-foreground">Каталог компаний</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Найдите надежных партнеров для вашего бизнеса
            </p>
            
            {/* Search */}
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Поиск компаний..." 
                  className="pl-10"
                />
              </div>
              <Button className="bg-gradient-to-r from-primary to-primary-glow">
                Найти
              </Button>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b border-border bg-background py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Все отрасли
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                IT & Разработка
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Финансы
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Логистика
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Маркетинг
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Производство
              </Badge>
            </div>
          </div>
        </section>

        {/* Companies Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Найдено {companies.length} компаний
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {companies.map((company) => (
                <Card key={company.id} className="border-border transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 flex items-start justify-between">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-xl font-bold text-primary-foreground">
                          {company.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      {company.verified && (
                        <Badge className="bg-green-500">Проверено</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{company.name}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Building2 className="mr-1 h-4 w-4" />
                      {company.industry}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {company.description}
                    </p>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4" />
                          {company.location}
                        </div>
                        <div className="flex items-center">
                          <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
                          {company.rating}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        {company.employees} сотрудников
                      </div>
                    </div>

                    <div className="rounded-lg bg-muted p-3">
                      <p className="text-sm">
                        <span className="font-semibold text-foreground">{company.activeListings}</span>
                        {" "}активных объявлений
                      </p>
                    </div>

                    <Button className="w-full" variant="outline">
                      Посмотреть профиль
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-2">
              <Button variant="outline" size="sm">Предыдущая</Button>
              <Button variant="default" size="sm" className="bg-primary">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Следующая</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Companies;
