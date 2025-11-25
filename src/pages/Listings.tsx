import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Calendar, Star } from "lucide-react";

const Listings = () => {
  const listings = [
    {
      id: 1,
      title: "Услуги веб-разработки",
      company: "TechSolutions",
      description: "Профессиональная разработка сайтов и веб-приложений любой сложности",
      category: "IT услуги",
      location: "Москва",
      date: "2024-03-15",
      rating: 4.8,
      featured: true
    },
    {
      id: 2,
      title: "Оптовая поставка канцтоваров",
      company: "ОфисСнаб",
      description: "Широкий ассортимент канцелярских товаров по оптовым ценам",
      category: "Товары",
      location: "Санкт-Петербург",
      date: "2024-03-14",
      rating: 4.6
    },
    {
      id: 3,
      title: "Консультации по бухгалтерии",
      company: "БухЭксперт",
      description: "Профессиональное бухгалтерское сопровождение для малого и среднего бизнеса",
      category: "Услуги",
      location: "Онлайн",
      date: "2024-03-13",
      rating: 4.9,
      featured: true
    },
    {
      id: 4,
      title: "Склад в аренду",
      company: "ЛогистикПро",
      description: "Современный складской комплекс класса А с удобной транспортной развязкой",
      category: "Недвижимость",
      location: "Московская область",
      date: "2024-03-12",
      rating: 4.5
    },
    {
      id: 5,
      title: "Маркетинговые услуги",
      company: "PromoDrive",
      description: "Комплексное продвижение бизнеса в интернете. SMM, SEO, контекстная реклама",
      category: "Маркетинг",
      location: "Москва",
      date: "2024-03-11",
      rating: 4.7
    },
    {
      id: 6,
      title: "Поставка офисной мебели",
      company: "ОфисСтиль",
      description: "Качественная офисная мебель от производителя. Доставка и сборка",
      category: "Товары",
      location: "Казань",
      date: "2024-03-10",
      rating: 4.4
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-muted/30">
        {/* Hero Section */}
        <section className="border-b border-border bg-background py-12">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-4xl font-bold text-foreground">Объявления</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Тысячи актуальных предложений для вашего бизнеса
            </p>
            
            {/* Search */}
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Поиск объявлений..." 
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
                Все категории
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                IT услуги
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Товары
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Услуги
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Недвижимость
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Маркетинг
              </Badge>
            </div>
          </div>
        </section>

        {/* Listings Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Найдено {listings.length} объявлений
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {listings.map((listing, index) => (
                <Card 
                  key={listing.id} 
                  className="border-border animate-fade-in hover:border-primary/50" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {listing.featured && (
                    <div className="rounded-t-lg bg-gradient-to-r from-primary to-primary-glow px-4 py-1 text-center text-sm font-semibold text-primary-foreground">
                      Рекомендуем
                    </div>
                  )}
                  <CardHeader>
                    <div className="mb-2 flex items-start justify-between">
                      <Badge variant="secondary">{listing.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
                        {listing.rating}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{listing.title}</CardTitle>
                    <CardDescription className="text-sm font-medium text-foreground">
                      {listing.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {listing.description}
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        {listing.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        {new Date(listing.date).toLocaleDateString('ru-RU')}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">
                      Подробнее
                    </Button>
                  </CardFooter>
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

export default Listings;
