import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TestimonialsSection = () => {
  return (
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
  );
};

export default TestimonialsSection;
