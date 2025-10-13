import { useState } from 'react';
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

const Index = () => {
  const [selectedCamera, setSelectedCamera] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const cameras: Camera[] = [
    { id: 1, name: 'Камера 1', location: 'Главный вход', status: 'active', image: 'https://v3b.fal.media/files/b/tiger/r-JDlukzVa1jLl7xJcLok_output.png' },
    { id: 2, name: 'Камера 2', location: 'Парковка', status: 'alert', image: 'https://v3b.fal.media/files/b/tiger/r-JDlukzVa1jLl7xJcLok_output.png' },
    { id: 3, name: 'Камера 3', location: 'Склад', status: 'active', image: 'https://v3b.fal.media/files/b/tiger/r-JDlukzVa1jLl7xJcLok_output.png' },
    { id: 4, name: 'Камера 4', location: 'Офис', status: 'offline', image: 'https://v3b.fal.media/files/b/tiger/r-JDlukzVa1jLl7xJcLok_output.png' },
  ];

  const doorbells = [
    { id: 1, name: 'Домофон 1', location: 'Главная дверь', status: 'active' },
    { id: 2, name: 'Домофон 2', location: 'Боковой вход', status: 'active' },
  ];

  const wifiNetworks = [
    { id: 1, name: 'Office WiFi', devices: 12, signal: 95 },
    { id: 2, name: 'Guest WiFi', devices: 5, signal: 82 },
    { id: 3, name: 'Security WiFi', devices: 8, signal: 98 },
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
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Система видеонаблюдения</h1>
          <p className="text-gray-600">Мониторинг безопасности в реальном времени</p>
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
                <Card key={doorbell.id} className="p-6 hover:shadow-lg transition-shadow">
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
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wifi" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {wifiNetworks.map((network) => (
                <Card key={network.id} className="p-6 hover:shadow-lg transition-shadow">
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
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
