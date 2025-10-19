import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
                  <a href="tel:+79533555693" className="hover:text-primary transition-colors">
                    +7 (953) 355-56-93
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
                <span>г. Санкт-Петербург</span>
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
  );
};

export default Footer;