import { useState, FormEvent } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black mb-12">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/projects/83125d48-51ba-44f6-8ca0-22911d5d266b/files/a45315f2-a71a-4a8e-9442-bed7eae970da.jpg" 
            alt="Security Systems"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <div className="mb-8">
              <img 
                src="https://cdn.poehali.dev/projects/83125d48-51ba-44f6-8ca0-22911d5d266b/files/21dc8471-fff5-4fcf-9a61-ca018af607d8.jpg" 
                alt="Системы безопасности"
                className="h-32 md:h-36 w-32 md:w-36 rounded-full object-cover"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Системы безопасности и <span className="text-primary">автоматизация</span>
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
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Готовые комплекты</h2>
          <p className="text-gray-600 text-lg">Подберите оптимальное решение для вашего объекта</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-0 overflow-hidden hover:shadow-xl transition-all border-2 hover:border-primary">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Building2" className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Комплект для офиса</h3>
              <p className="text-blue-100 text-sm">Надёжная защита вашего бизнеса</p>
            </div>
            <div className="p-6 bg-white">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">4 камеры видеонаблюдения</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Видеорегистратор</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Жёсткий диск</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Настройка приложения</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-gray-900">от 45 000 ₽</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                  Заказать комплект
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-0 overflow-hidden hover:shadow-xl transition-all border-2 hover:border-primary">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Warehouse" className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Комплект для склада</h3>
              <p className="text-orange-100 text-sm">Для коммерческих помещений</p>
            </div>
            <div className="p-6 bg-white">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">20 камер видеонаблюдения</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Коммутатор</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Монитор</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Установка и подключение</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Настройка системы</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-gray-900">от 180 000 ₽</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                  Заказать комплект
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-0 overflow-hidden hover:shadow-xl transition-all border-2 hover:border-primary">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Home" className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Комплект для дома</h3>
              <p className="text-green-100 text-sm">Полная защита вашего дома</p>
            </div>
            <div className="p-6 bg-white">
              <div className="space-y-5 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Icon name="Camera" className="h-5 w-5 text-green-600" />
                    Комплект видеонаблюдения
                  </h4>
                  <ul className="space-y-2 ml-7">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span className="text-gray-700 text-sm">4 камеры видеонаблюдения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Жёсткий диск</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Видеорегистратор</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Icon name="DoorOpen" className="h-5 w-5 text-green-600" />
                    Домофон
                  </h4>
                  <ul className="space-y-2 ml-7">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Вызывная панель на калитку</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Панель домофона в дом</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Настройка приложения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Открытие калитки с приложения</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Icon name="Wifi" className="h-5 w-5 text-green-600" />
                    Wi-Fi сеть в доме
                  </h4>
                  <ul className="space-y-2 ml-7">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span className="text-gray-700 text-sm">2 точки доступа в доме</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span className="text-gray-700 text-sm">1 уличная точка доступа</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Настройка единой сети</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Бесшовное покрытие</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-gray-900">от 120 000 ₽</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                  Заказать комплект
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-20 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h2>
            <p className="text-gray-600 text-lg">Более 500 довольных клиентов по всей России</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  АС
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Алексей Смирнов</h3>
                  <p className="text-sm text-gray-600">Владелец складского комплекса</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-4 w-4 text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Установили систему видеонаблюдения на складе. Качество картинки отличное, даже ночью всё видно. 
                Монтаж выполнили быстро и аккуратно. Теперь спокоен за свой бизнес!
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">2 недели назад</p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  МК
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Мария Козлова</h3>
                  <p className="text-sm text-gray-600">Частный дом</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-4 w-4 text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Поставили видеодомофон и камеры по периметру дачи. Очень удобно смотреть с телефона, кто приехал. 
                Оповещения приходят моментально. Отличный сервис и поддержка!
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">1 месяц назад</p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  ДП
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Дмитрий Петров</h3>
                  <p className="text-sm text-gray-600">Директор ресторана</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-4 w-4 text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Комплексное решение для ресторана: видеонаблюдение в зале и на кухне, Wi-Fi для гостей. 
                Всё работает стабильно, техподдержка реагирует быстро. Рекомендую!
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">3 недели назад</p>
              </div>
            </Card>
          </div>
        </div>

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