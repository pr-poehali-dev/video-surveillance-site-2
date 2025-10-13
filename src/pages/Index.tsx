import { useState, FormEvent } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Camera {
  id: number;
  name: string;
  location: string;
  status: 'active' | 'alert' | 'offline';
  image: string;
}

interface Doorbell {
  id: number;
  name: string;
  location: string;
  status: 'active' | 'offline';
  image: string;
}

interface WifiNetwork {
  id: number;
  name: string;
  devices: number;
  signal: number;
  image: string;
}

const Index = () => {
  const [selectedCamera, setSelectedCamera] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitSuccess(true);
    setFormData({ name: '', phone: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const cameras: Camera[] = [
    { id: 1, name: 'Камера 1', location: 'Главный вход', status: 'active', image: 'https://cdn.poehali.dev/projects/83125d48-51ba-44f6-8ca0-22911d5d266b/files/aa1c621f-204d-41ff-95f6-073f4c588a3f.jpg' },
    { id: 2, name: 'Камера 2', location: 'Парковка', status: 'alert', image: 'https://cdn.poehali.dev/projects/83125d48-51ba-44f6-8ca0-22911d5d266b/files/aa1c621f-204d-41ff-95f6-073f4c588a3f.jpg' },
    { id: 3, name: 'Камера 3', location: 'Склад', status: 'active', image: 'https://cdn.poehali.dev/projects/83125d48-51ba-44f6-8ca0-22911d5d266b/files/aa1c621f-204d-41ff-95f6-073f4c588a3f.jpg' },
    { id: 4, name: 'Камера 4', location: 'Офис', status: 'offline', image: 'https://cdn.poehali.dev/projects/83125d48-51ba-44f6-8ca0-22911d5d266b/files/aa1c621f-204d-41ff-95f6-073f4c588a3f.jpg' },
  ];

  const doorbells: Doorbell[] = [
    { id: 1, name: 'Домофон 1', location: 'Главная дверь', status: 'active', image: 'https://cdn.poehali.dev/projects/83125d48-51ba-44f6-8ca0-22911d5d266b/files/67581b97-a608-4904-a013-2dd8b4851469.jpg' },
    { id: 2, name: 'Домофон 2', location: 'Боковой вход', status: 'active', image: 'https://cdn.poehali.dev/projects/83125d48-51ba-44f6-8ca0-22911d5d266b/files/67581b97-a608-4904-a013-2dd8b4851469.jpg' },
  ];

  const wifiNetworks: WifiNetwork[] = [
    { id: 1, name: 'Office WiFi', devices: 12, signal: 95, image: 'https://cdn.poehali.dev/projects/83125d48-51ba-44f6-8ca0-22911d5d266b/files/a9945c81-460d-4214-adfb-d462f47ee867.jpg' },
    { id: 2, name: 'Guest WiFi', devices: 5, signal: 82, image: 'https://cdn.poehali.dev/projects/83125d48-51ba-44f6-8ca0-22911d5d266b/files/a9945c81-460d-4214-adfb-d462f47ee867.jpg' },
    { id: 3, name: 'Security WiFi', devices: 8, signal: 98, image: 'https://cdn.poehali.dev/projects/83125d48-51ba-44f6-8ca0-22911d5d266b/files/a9945c81-460d-4214-adfb-d462f47ee867.jpg' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'alert': return 'bg-orange-500 animate-pulse';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Активна';
      case 'alert': return 'Тревога';
      case 'offline': return 'Офлайн';
      default: return 'Неизвестно';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black mb-12">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/projects/83125d48-51ba-44f6-8ca0-22911d5d266b/files/36e9ec69-aa7d-45f9-bf1e-dfad9b55484c.jpg" 
            alt="Security Control Room"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Профессиональная система
              <span className="text-primary"> безопасности</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Полный контроль над безопасностью вашего объекта: видеонаблюдение в реальном времени, 
              умная домофония и надёжные Wi-Fi сети под единым управлением
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Eye" className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Видеонаблюдение 24/7</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Мониторинг с функцией зума, мгновенные оповещения на смартфон при обнаружении движения
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Radio" className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Умная домофония</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Видеосвязь и аудио с посетителями, удалённое открытие дверей из любой точки мира
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Защищённая сеть</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Мониторинг Wi-Fi подключений, контроль устройств и защита от несанкционированного доступа
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Панель управления</h2>
          <p className="text-gray-600">Управляйте всеми системами безопасности в одном месте</p>
        </div>

        <Tabs defaultValue="surveillance" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
            <TabsTrigger value="surveillance" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Icon name="Camera" className="mr-2 h-4 w-4" />
              Видеонаблюдение
            </TabsTrigger>
            <TabsTrigger value="doorbell" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Icon name="DoorOpen" className="mr-2 h-4 w-4" />
              Домофония
            </TabsTrigger>
            <TabsTrigger value="wifi" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Icon name="Wifi" className="mr-2 h-4 w-4" />
              Wi-Fi сети
            </TabsTrigger>
          </TabsList>

          <TabsContent value="surveillance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {cameras.map((camera) => (
                <Card 
                  key={camera.id} 
                  className="p-0 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary"
                  onClick={() => setSelectedCamera(camera.id)}
                >
                  <div className="relative">
                    <img 
                      src={camera.image} 
                      alt={camera.name}
                      className="w-full h-64 object-cover"
                      style={{ transform: selectedCamera === camera.id ? `scale(${zoomLevel})` : 'scale(1)', transition: 'transform 0.3s ease' }}
                    />
                    <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${getStatusColor(camera.status)}`} />
                    {camera.status === 'alert' && (
                      <Badge className="absolute top-3 left-3 bg-orange-500 text-white animate-pulse">
                        <Icon name="Bell" className="mr-1 h-3 w-3" />
                        Оповещение
                      </Badge>
                    )}
                  </div>
                  <div className="p-4 bg-white">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg text-gray-900">{camera.name}</h3>
                      <Badge variant="outline" className="text-xs">{getStatusText(camera.status)}</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 flex items-center">
                      <Icon name="MapPin" className="mr-1 h-4 w-4 text-gray-400" />
                      {camera.location}
                    </p>
                    {selectedCamera === camera.id && (
                      <div className="flex items-center gap-2 pt-3 border-t">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            setZoomLevel(Math.max(1, zoomLevel - 0.5));
                          }}
                        >
                          <Icon name="ZoomOut" className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            setZoomLevel(Math.min(3, zoomLevel + 0.5));
                          }}
                        >
                          <Icon name="ZoomIn" className="h-4 w-4" />
                        </Button>
                        <span className="text-xs text-gray-500 ml-2">Зум: {zoomLevel.toFixed(1)}x</span>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="doorbell" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {doorbells.map((doorbell) => (
                <Card key={doorbell.id} className="p-0 overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={doorbell.image} 
                    alt={doorbell.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name="DoorOpen" className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">{doorbell.name}</h3>
                          <p className="text-sm text-gray-600">{doorbell.location}</p>
                        </div>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(doorbell.status)}`} />
                    </div>
                    <div className="space-y-2">
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <Icon name="Video" className="mr-2 h-4 w-4" />
                        Открыть видео
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Icon name="Volume2" className="mr-2 h-4 w-4" />
                        Аудиосвязь
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wifi" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {wifiNetworks.map((network) => (
                <Card key={network.id} className="p-0 overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={network.image} 
                    alt={network.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Wifi" className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">{network.signal}%</Badge>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{network.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Подключено устройств</span>
                        <span className="font-semibold text-gray-900">{network.devices}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${network.signal}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-20 mb-12">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 lg:p-12 text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Получите <span className="text-primary">бесплатную консультацию</span>
                </h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Наши специалисты помогут подобрать оптимальное решение для вашего объекта и рассчитают стоимость установки
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckCircle2" className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Выезд специалиста</h3>
                      <p className="text-gray-400 text-sm">Бесплатный осмотр объекта и расчёт стоимости</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckCircle2" className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Гарантия качества</h3>
                      <p className="text-gray-400 text-sm">Профессиональное оборудование и монтаж</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckCircle2" className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Техподдержка 24/7</h3>
                      <p className="text-gray-400 text-sm">Круглосуточная поддержка и обслуживание</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 lg:p-12 bg-white">
                {submitSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <Icon name="CheckCircle2" className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
                    <p className="text-gray-600">Мы свяжемся с вами в ближайшее время</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Ваше имя *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Сообщение
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Опишите ваши пожелания..."
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 py-6 text-lg font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Icon name="Loader2" className="mr-2 h-5 w-5 animate-spin" />
                          Отправка...
                        </>
                      ) : (
                        <>
                          <Icon name="Send" className="mr-2 h-5 w-5" />
                          Получить консультацию
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>

      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon name="ShieldCheck" className="h-7 w-7 text-primary" />
                SecureWatch
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Профессиональные системы безопасности для дома, офиса и промышленных объектов
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                  <Icon name="Mail" className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                  <Icon name="Phone" className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                  <Icon name="MessageCircle" className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Видеонаблюдение</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Домофония</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Wi-Fi сети</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Монтаж и настройка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Обслуживание</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Наши проекты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сертификаты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <Icon name="Phone" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="tel:+79991234567" className="hover:text-primary transition-colors">
                      +7 (999) 123-45-67
                    </a>
                    <p className="text-sm text-gray-500">Круглосуточно</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Mail" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <a href="mailto:info@securewatch.ru" className="hover:text-primary transition-colors">
                    info@securewatch.ru
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>г. Москва, ул. Примерная, д. 123</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 SecureWatch. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;