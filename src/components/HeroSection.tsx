import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
