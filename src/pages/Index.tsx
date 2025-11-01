import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const navigation = [
    { id: 'main', label: 'Главная', icon: 'Home' },
    { id: 'education', label: 'Обучение', icon: 'GraduationCap' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'info', label: 'Сведения об организации', icon: 'FileText' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' },
  ];

  const courses = [
    {
      title: 'Водитель категории B',
      duration: '3 месяца',
      price: 'От 25 000 ₽',
      description: 'Полный курс обучения вождению легкового автомобиля'
    },
    {
      title: 'Водитель категории C',
      duration: '4 месяца',
      price: 'От 35 000 ₽',
      description: 'Обучение вождению грузового автомобиля'
    },
    {
      title: 'Водитель категории D',
      duration: '5 месяцев',
      price: 'От 40 000 ₽',
      description: 'Подготовка водителей автобусов'
    }
  ];

  const news = [
    {
      date: '15 октября 2024',
      title: 'Открыт набор на новые курсы',
      description: 'Начинается набор слушателей на курсы водителей категории B, C, D'
    },
    {
      date: '10 октября 2024',
      title: 'Обновление учебной базы',
      description: 'Закуплена новая техника для практических занятий'
    },
    {
      date: '5 октября 2024',
      title: 'Успешная сдача экзаменов',
      description: 'Группа из 25 человек успешно сдала экзамены в ГИБДД'
    }
  ];

  const infoSections = [
    'Основные сведения',
    'Структура и органы управления',
    'Документы',
    'Образование',
    'Образовательные стандарты',
    'Руководство. Педагогический состав',
    'Материально-техническое обеспечение',
    'Стипендии и меры поддержки обучающихся',
    'Платные образовательные услуги',
    'Финансово-хозяйственная деятельность',
    'Вакантные места для приема'
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/projects/3a86072c-9668-40b2-8f5f-592a1a994e11/files/7e8c5f3d-9c89-4e01-a2bf-8c7ae491aa2c.jpg" 
                alt="ДОСААФ" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold">ДОСААФ России</h1>
                <p className="text-sm opacity-90">Павловская автошкола</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                    activeSection === item.id
                      ? 'bg-primary-foreground text-primary font-semibold'
                      : 'hover:bg-primary-foreground/10'
                  }`}
                >
                  <Icon name={item.icon as any} size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className="md:hidden bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <Tabs value={activeSection} onValueChange={setActiveSection}>
            <TabsList className="w-full justify-start overflow-x-auto bg-transparent">
              {navigation.map((item) => (
                <TabsTrigger 
                  key={item.id} 
                  value={item.id}
                  className="data-[state=active]:bg-primary-foreground data-[state=active]:text-primary"
                >
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'main' && (
          <div className="space-y-16 animate-fade-in">
            <section className="relative rounded-lg overflow-hidden h-[500px]">
              <img 
                src="https://cdn.poehali.dev/projects/3a86072c-9668-40b2-8f5f-592a1a994e11/files/e6ac7d8f-b155-428d-a023-7f547bbc4ad9.jpg"
                alt="Обучение вождению"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl text-primary-foreground">
                    <h2 className="text-5xl font-bold mb-4">
                      Профессиональная подготовка водителей
                    </h2>
                    <p className="text-xl mb-8 opacity-95">
                      Качественное обучение с 1951 года. Современная техника и опытные инструкторы.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                      onClick={() => setActiveSection('education')}
                    >
                      Выбрать курс
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-8">
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Лицензированное обучение</h3>
                  <p className="text-muted-foreground">
                    Образовательная лицензия и аккредитация государственных органов
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Users" size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Опытные инструкторы</h3>
                  <p className="text-muted-foreground">
                    Квалифицированные преподаватели с многолетним стажем работы
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Car" size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Современная техника</h3>
                  <p className="text-muted-foreground">
                    Автопарк с новыми учебными автомобилями всех категорий
                  </p>
                </CardContent>
              </Card>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-8">
                <Icon name="Newspaper" size={32} className="text-primary" />
                <h2 className="text-3xl font-bold">Последние новости</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {news.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all hover-scale">
                    <CardContent className="p-6">
                      <div className="text-sm text-accent font-semibold mb-2">{item.date}</div>
                      <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeSection === 'education' && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Программы обучения</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Выберите подходящую программу обучения. Все курсы включают теоретическую и практическую подготовку.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="hover:shadow-xl transition-all border-t-4 border-t-primary">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <Icon name="GraduationCap" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-4">{course.title}</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Clock" size={18} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-accent font-semibold">
                        <Icon name="Banknote" size={18} />
                        <span>{course.price}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">{course.description}</p>
                    <Button className="w-full" onClick={() => setActiveSection('contacts')}>
                      Записаться на курс
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-muted">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <img 
                    src="https://cdn.poehali.dev/projects/3a86072c-9668-40b2-8f5f-592a1a994e11/files/e5bb96e8-5dd5-48b3-bd15-cc73172fc364.jpg"
                    alt="Обучение"
                    className="w-1/3 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Что входит в обучение</h3>
                    <ul className="space-y-3">
                      {[
                        'Теоретические занятия по ПДД',
                        'Практическое вождение с инструктором',
                        'Занятия на автодроме',
                        'Вождение в городе',
                        'Подготовка к экзамену в ГИБДД',
                        'Учебные материалы'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon name="Check" size={16} className="text-primary-foreground" />
                          </div>
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Новости и объявления</h2>
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-24 text-center flex-shrink-0">
                      <div className="text-3xl font-bold text-primary">
                        {item.date.split(' ')[0]}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.date.split(' ').slice(1).join(' ')}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-lg text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeSection === 'info' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Сведения об образовательной организации</h2>
            <Card>
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {infoSections.map((section, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                        {section}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-4">
                        <p className="mb-4">
                          Информация по разделу "{section}" находится в стадии наполнения.
                        </p>
                        <p>
                          Для получения подробной информации обращайтесь в приёмную организации или по телефону горячей линии.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Контактная информация</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Адрес</div>
                        <div className="text-muted-foreground">
                          Нижегородская область, г. Павлово, ул. Профсоюзная, д. 41
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Телефон</div>
                        <div className="text-muted-foreground">
                          +7 (83171) 2-14-96
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Email</div>
                        <div className="text-muted-foreground">
                          dosaaf-pavlovo@mail.ru
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Режим работы</div>
                        <div className="text-muted-foreground">
                          Пн-Пт: 9:00 - 18:00<br />
                          Сб-Вс: выходной
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Записаться на обучение</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Телефон</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Категория обучения</label>
                      <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>Категория B</option>
                        <option>Категория C</option>
                        <option>Категория D</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Комментарий</label>
                      <textarea 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-24"
                        placeholder="Дополнительная информация"
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ДОСААФ России</h3>
              <p className="opacity-90">
                Павловская автошкола - профессиональная подготовка водителей с 1951 года
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="space-y-2 opacity-90">
                <p>г. Павлово, ул. Профсоюзная, 41</p>
                <p>Тел: +7 (83171) 2-14-96</p>
                <p>Email: dosaaf-pavlovo@mail.ru</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Режим работы</h3>
              <div className="space-y-2 opacity-90">
                <p>Понедельник - Пятница: 9:00 - 18:00</p>
                <p>Суббота - Воскресенье: выходной</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-75">
            <p>&copy; 2024 ДОСААФ России. Павловская автошкола. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
