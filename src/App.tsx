import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircuitBoard, FileSpreadsheet, FileVideo, Linkedin, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function App() {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme('dark');
  }, [setTheme]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Theme Toggle */}
      {/* <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50"
        onClick={() => setTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark')}
      >
        <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-900" />
        <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button> */}

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 mix-blend-multiply" />
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
            alt="Circuit Board Background"
            className="w-full h-full object-cover object-center opacity-20"
          />
        </div>
        <div className="w-full px-4 relative z-10 text-center">
          <Zap className="w-24 h-24 mx-auto mb-8 text-blue-500 animate-pulse drop-shadow-lg" />
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 leading-tight drop-shadow-[0_4px_20px_rgba(59,130,246,0.5)]">
            Domina la Ingeniería Eléctrica
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Excel especializado para cálculos de baja tensión. Diseña, calcula y documenta instalaciones eléctricas con una precisión profesional.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full py-20 bg-white dark:bg-gray-900">
        <div className="w-full px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Descubre Nuestra Herramienta</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[2000px] mx-auto">
            {[
              {
                title: "Cálculos",
                description: "Calcula automáticamente para instalaciones de baja tensión",
                videoUrl: "https://www.youtube.com/watch?v=ItGcHOoosbQ"
              },
              {
                title: "Exportaciones",
                description: "Genera documentación en PDF y esquemas en CAD",
                videoUrl: "https://www.youtube.com/watch?v=ELjehrBpviw"
              },      
              {
                title: "Normativa",
                description: "Cumplimenta los proyectos según normativa REBT",
                videoUrl: "https://www.youtube.com/watch?v=8Zd_nkWBzr0"
              }
            ].map((video, index) => (
              <Card 
                key={index} 
                className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-blue-500/20"
              >
                <CardHeader>
                  <CardTitle>{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video mb-4 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
                    <iframe
                      width="100%"
                      height="100%"
                      src={video.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-gray-50 dark:bg-gray-800">
        <div className="w-full px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Características Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[2000px] mx-auto">
            {[
              {
                icon: <CircuitBoard className="w-12 h-12" />,
                title: "Cálculos de Baja Tensión",
                description: "Precisión y eficiencia en el diseño y verificación de instalaciones eléctricas"
              },
              {
                icon: <FileSpreadsheet className="w-12 h-12" />,
                title: "Exportaciones Profesionales",
                description: "Genera documentación en PDF y esquemas en CAD con facilidad"
              },
              {
                icon: <FileVideo className="w-12 h-12" />,
                title: "Documentación Completa",
                description: "Elabora presupuestos y proyectos detallados automáticamente"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Cuadros Eléctricos",
                description: "Diseña instalaciones complejas de forma escalable"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-blue-500/20"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 text-blue-600 flex justify-center transition-transform duration-300 hover:scale-110">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20 bg-white dark:bg-gray-900">
        <div className="w-full px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Inversión en Excelencia</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-blue-500/20">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Herramienta Base</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-8">
                  <span className="text-5xl font-bold">2.500€</span>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">Pago único</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Zap className="w-6 h-6 text-blue-600 mr-2" />
                    <span>Herramienta de uso libre</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-6 h-6 text-blue-600 mr-2" />
                    <span>Totalmente personalizable</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-6 h-6 text-blue-600 mr-2" />
                    <span>Plantilla reutilizable</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-blue-500/20 border-blue-500">
              <div className="absolute -top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                Recomendado
              </div>
              <CardHeader>
                <CardTitle className="text-3xl text-center">Servicio Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-8">
                  <span className="text-5xl font-bold">+166<span className="text-xl">€/mes</span></span>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">Servicio postventa</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Zap className="w-6 h-6 text-blue-600 mr-2" />
                    <span>Implementación y soporte</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-6 h-6 text-blue-600 mr-2" />
                    <span>Consultoría personalizada</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-6 h-6 text-blue-600 mr-2" />
                    <span>10 horas mensuales incluidas</span>
                  </div>
                  {/* <div className="flex items-center">
                    <Zap className="w-6 h-6 text-blue-600 mr-2" />
                    <span>Resolución de dudas y errores</span>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="w-full py-20 bg-gray-50 dark:bg-gray-800">
        <div className="w-full px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Comparativa de Mercado</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-blue-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">CYPE REBT</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold">1.200<span className="text-xl">€/PC</span></span>
                </div>
                <div className="space-y-2">
                  <p>✓ Exportación CAD</p>
                  <p>✓ Exportar Documentación Técnica</p>
                  <p className="text-red-500">× No personalizable</p>
                  <p className="text-red-500">× Precio elevado para equipos técnicos</p>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-blue-500/20 border-blue-500 dark:border-blue-400">
              <div className="absolute -top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                Nuestra Solución
              </div>
              <CardHeader>
                <CardTitle className="text-3xl text-center">Excel Baja Tensión</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">2.500€</span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">+166€/mes Soporte Premium</p>
                </div>
                <div className="space-y-2">
                  <p className="text-green-500 font-semibold">✓ Exportación CAD</p>
                  <p className="text-green-500 font-semibold">✓ Exportar Documentación Técnica</p>
                  <p className="text-green-500 font-semibold">✓ Totalmente Personalizable</p>
                  <p className="text-green-500 font-semibold">✓ Precio único</p>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-blue-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Otros (proveedores)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-6">  
                  <span className="text-2xl font-bold">Variable</span>
                </div>
                <div className="space-y-2">
                  <p className="text-red-500">× Sin exportación CAD</p>
                  <p>✓ Documentación PDF</p>
                  <p className="text-red-500">× Compra a un único proveedor</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contacto</h3>
              <p>Email: jm.coll.gonzalez@gmail.com</p>
              <p>Teléfono: +34 623 92 62 99</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Redes Sociales</h3>
              <div className="flex justify-center">
                <a href="https://www.linkedin.com/in/jmcoll/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="hover:text-blue-400 transition-colors">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;