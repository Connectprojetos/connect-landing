
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Store, UtensilsCrossed, Shirt, Wrench, Building2, Zap, Cloud, Shield, Plug, TrendingUp, ChevronRight, X, Phone, Mail, Instagram, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import SolutionCard from "../components/landing/SolutionCard";
import BenefitCard from "../components/landing/BenefitCard";
import TestimonialCard from "../components/landing/TestimonialCard";

export default function Landing() {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const whatsappNumber = "5511965879386";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const logoUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f62e95746671667def3faf/c8fd58ec2_CpiadeLogoConnectSistemas.jpg";

  const solutions = [
    {
      icon: Store,
      title: "Varejo",
      subtitle: "Controle de estoque, PDV e vendas em tempo real",
      color: "#00A9E0",
      description: "Sistema completo para gestão de varejo com controle inteligente de estoque, ponto de venda integrado, gestão de clientes e fornecedores. Tenha visão em tempo real das suas vendas, estoque mínimo automatizado, relatórios gerenciais completos e integração com e-commerce. Aumente sua eficiência operacional e tome decisões baseadas em dados precisos."
    },
    {
      icon: UtensilsCrossed,
      title: "Food Services",
      subtitle: "Gestão completa para delivery e restaurantes",
      color: "#0077C8",
      description: "Plataforma all-in-one para restaurantes, bares e delivery. Gerencie pedidos de múltiplos canais (iFood, Rappi, site próprio), controle de cozinha com KDS, gestão de mesas, comandas digitais, integração com sistema fiscal e muito mais. Reduza tempo de preparo, evite erros de pedidos e aumente a satisfação dos clientes com tecnologia de ponta."
    },
    {
      icon: Shirt,
      title: "Locações e Serviços",
      subtitle: "Gestão de contratos e controle de vestuários",
      color: "#004C97",
      description: "Solução especializada para empresas de locação de uniformes, roupas profissionais e equipamentos. Controle completo de contratos, ciclos de troca, rastreamento de peças, gestão de manutenção e limpeza. Sistema de etiquetagem inteligente, relatórios de vencimento, cobrança automatizada e portal do cliente para acompanhamento em tempo real."
    },
    {
      icon: Wrench,
      title: "Ordens de Serviço",
      subtitle: "Organização e automação de chamados técnicos",
      color: "#00A9E0",
      description: "Gerencie todas as suas ordens de serviço em um só lugar. Abertura de chamados via web e mobile, distribuição automática para técnicos, acompanhamento em tempo real, histórico completo de atendimentos, assinatura digital do cliente, fotos antes/depois, gestão de peças e estoque de técnicos. Aumente a produtividade da equipe técnica em até 40%."
    },
    {
      icon: Building2,
      title: "Engenharia Civil",
      subtitle: "App inovador para engenheiros e arquitetos",
      color: "#0077C8",
      description: "Revolucione a gestão de obras com nosso app especializado. Controle financeiro de projetos, gestão de cronograma, acompanhamento fotográfico com geolocalização, integração com fornecedores, RDOs digitais, controle de medições, gestão de equipes e muito mais. Tenha toda a obra na palma da mão com dashboards executivos e relatórios personalizados."
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Automação Total",
      description: "Tudo em um só sistema integrado"
    },
    {
      icon: Cloud,
      title: "100% em Nuvem",
      description: "Acesse de qualquer lugar, a qualquer momento"
    },
    {
      icon: Shield,
      title: "Segurança Máxima",
      description: "Seus dados sempre protegidos"
    },
    {
      icon: Plug,
      title: "Integração Simples",
      description: "APIs modernas e comunicação fluida"
    },
    {
      icon: TrendingUp,
      title: "Crescimento Garantido",
      description: "Tecnologia para escalar seu negócio"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, Rede de Supermercados Alfa",
      text: "Após implementar o sistema Connect, reduzimos em 60% as perdas de estoque e aumentamos nossa eficiência operacional. A visibilidade em tempo real mudou completamente nossa gestão.",
      avatar: "C"
    },
    {
      name: "Marina Costa",
      role: "Proprietária, Restaurante Sabor & Arte",
      text: "O sistema de delivery integrado da Connect transformou nosso negócio. Conseguimos gerenciar todos os pedidos em um só lugar e nossa produtividade triplicou.",
      avatar: "M"
    },
    {
      name: "Roberto Mendes",
      role: "Diretor, Construtora Horizonte",
      text: "O app de engenharia civil nos deu controle total sobre múltiplas obras. O acompanhamento financeiro e de cronograma ficou muito mais preciso. Recomendo fortemente!",
      avatar: "R"
    }
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      {/* Floating Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/95 backdrop-blur-md shadow-lg border-b border-[#00A9E0]/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#004C97] to-[#00A9E0] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-xl text-white">Connect</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#solucoes" className="text-gray-300 hover:text-[#00A9E0] transition-colors">Soluções</a>
            <a href="#beneficios" className="text-gray-300 hover:text-[#00A9E0] transition-colors">Benefícios</a>
            <a href="#depoimentos" className="text-gray-300 hover:text-[#00A9E0] transition-colors">Depoimentos</a>
            <motion.div
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(0, 169, 224, 0.5)',
                  '0 0 40px rgba(0, 169, 224, 0.8)',
                  '0 0 20px rgba(0, 169, 224, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Button 
                className="bg-gradient-to-r from-[#004C97] to-[#00A9E0] hover:from-[#003875] hover:to-[#0087C0] text-white font-bold px-6 py-2 animate-pulse"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Falar no WhatsApp
              </Button>
            </motion.div>
          </div>

          <button 
            className="md:hidden text-[#00A9E0]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f172a] border-t border-[#00A9E0]/20"
          >
            <div className="px-6 py-4 space-y-4">
              <a href="#solucoes" className="block text-gray-300 hover:text-[#00A9E0]" onClick={() => setIsMenuOpen(false)}>Soluções</a>
              <a href="#beneficios" className="block text-gray-300 hover:text-[#00A9E0]" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
              <a href="#depoimentos" className="block text-gray-300 hover:text-[#00A9E0]" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
              <Button 
                className="w-full bg-gradient-to-r from-[#004C97] to-[#00A9E0] text-white animate-pulse"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Falar no WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-[#0a0f1c] via-[#004C97] to-[#0077C8]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-64 h-64 bg-[#00A9E0]/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#00A9E0]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ opacity, scale }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 bg-[#00A9E0]/20 backdrop-blur-sm text-[#00A9E0] rounded-full text-sm font-medium mb-6 border border-[#00A9E0]/30">
                  Tecnologia SaaS de Ponta
                </span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Tecnologia que{" "}
                <span className="bg-gradient-to-r from-[#00A9E0] to-white bg-clip-text text-transparent">
                  Conecta
                </span>{" "}
                o Seu Negócio ao Futuro
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Soluções SaaS para Varejo, Food Service, Locações, Engenharia Civil e muito mais. 
                Inove, automatize e cresça com a Connect.
              </p>
              
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#00A9E0] to-[#0077C8] hover:from-[#0087C0] hover:to-[#005FA8] text-white text-lg px-8 py-6 rounded-full shadow-2xl font-bold"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com um Especialista no WhatsApp
              </Button>

              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-[#00A9E0]">500+</div>
                  <div className="text-gray-400 text-sm">Empresas Atendidas</div>
                </div>
                <div className="w-px h-12 bg-[#00A9E0]/30"></div>
                <div>
                  <div className="text-3xl font-bold text-[#00A9E0]">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime Garantido</div>
                </div>
                <div className="w-px h-12 bg-[#00A9E0]/30"></div>
                <div>
                  <div className="text-3xl font-bold text-[#00A9E0]">24/7</div>
                  <div className="text-gray-400 text-sm">Suporte Técnico</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-[#00A9E0]/30 bg-[#0f172a]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Connect Projetos & Sistemas"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#00A9E0] to-[#0077C8] rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-[#004C97] to-[#0077C8] rounded-full opacity-50 blur-2xl"></div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#00A9E0]/50 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-[#00A9E0] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section id="solucoes" className="py-20 px-6 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#004C97] to-[#00A9E0] text-white rounded-full text-sm font-medium mb-4">
              Nossas Soluções
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tecnologia para Cada Segmento
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Sistemas especializados que entendem as necessidades do seu negócio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                solution={solution}
                index={index}
                onLearnMore={() => setSelectedSolution(solution)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 px-6 bg-[#0a0f1c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #00A9E0 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#004C97] to-[#00A9E0] text-white rounded-full text-sm font-medium mb-4">
              Por Que Escolher a Connect?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Benefícios que Transformam
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tecnologia de ponta para impulsionar seu crescimento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: "ISO 27001", sublabel: "Certificação" },
              { label: "LGPD", sublabel: "Compliance" },
              { label: "SSL/TLS", sublabel: "Criptografia" },
              { label: "Backup Diário", sublabel: "Redundância" }
            ].map((badge, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#004C97] to-[#00A9E0] rounded-full mb-3">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-[#00A9E0]">{badge.label}</div>
                <div className="text-sm text-gray-400">{badge.sublabel}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 px-6 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#004C97] to-[#00A9E0] text-white rounded-full text-sm font-medium mb-4">
              Depoimentos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Resultados reais de empresas que transformaram sua gestão
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#004C97] via-[#0077C8] to-[#00A9E0] relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full opacity-10"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Conecte sua empresa à tecnologia que transforma resultados
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Fale agora com um especialista e descubra como simplificar sua gestão
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
              animate={{ 
                boxShadow: [
                  '0 0 40px rgba(255, 255, 255, 0.6)',
                  '0 0 80px rgba(255, 255, 255, 1)',
                  '0 0 40px rgba(255, 255, 255, 0.6)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Button 
                size="lg"
                className="bg-white text-[#004C97] hover:bg-gray-100 text-lg px-12 py-7 rounded-full shadow-2xl font-bold animate-pulse"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Iniciar Conversa no WhatsApp
              </Button>
            </motion.div>

            <div className="mt-8 text-white/80 text-sm">
              Resposta em até 5 minutos • Sem compromisso • Consultoria gratuita
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f1c] text-white py-12 px-6 border-t border-[#00A9E0]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#004C97] to-[#00A9E0] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="font-bold text-xl">Connect</span>
              </div>
              <p className="text-gray-400 text-sm">
                Tecnologia que conecta seu negócio ao futuro.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-[#00A9E0]">Soluções</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#solucoes" className="hover:text-[#00A9E0] transition-colors">Varejo</a></li>
                <li><a href="#solucoes" className="hover:text-[#00A9E0] transition-colors">Food Services</a></li>
                <li><a href="#solucoes" className="hover:text-[#00A9E0] transition-colors">Locações</a></li>
                <li><a href="#solucoes" className="hover:text-[#00A9E0] transition-colors">Ordens de Serviço</a></li>
                <li><a href="#solucoes" className="hover:text-[#00A9E0] transition-colors">Engenharia Civil</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-[#00A9E0]">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#beneficios" className="hover:text-[#00A9E0] transition-colors">Benefícios</a></li>
                <li><a href="#depoimentos" className="hover:text-[#00A9E0] transition-colors">Depoimentos</a></li>
                <li><a href="#" className="hover:text-[#00A9E0] transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-[#00A9E0] transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-[#00A9E0]">Contato</h3>
              <div className="space-y-3">
                <a href="mailto:contato@connectprojetosesistemas.com.br" className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#00A9E0] transition-colors">
                  <Mail className="w-4 h-4" />
                  contato@connectprojetosesistemas.com.br
                </a>
                <a href="tel:+5511997725158" className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#00A9E0] transition-colors">
                  <Phone className="w-4 h-4" />
                  (11) 99772-5158
                </a>
                <div className="flex gap-3 mt-4">
                  <a 
                    href="https://www.instagram.com/connectnetwork_oficial/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-[#004C97] to-[#00A9E0] hover:from-[#00A9E0] hover:to-[#0077C8] rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#00A9E0]/20 pt-8 text-center text-sm text-gray-500">
            © 2025 Connect Projetos & Sistemas — Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Solution Details Modal */}
      <Dialog open={!!selectedSolution} onOpenChange={() => setSelectedSolution(null)}>
        <DialogContent className="max-w-2xl bg-[#0f172a] border-[#00A9E0]/30 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl text-white">
              {selectedSolution && (
                <>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: selectedSolution.color + '20' }}>
                    <selectedSolution.icon className="w-6 h-6" style={{ color: selectedSolution.color }} />
                  </div>
                  {selectedSolution.title}
                </>
              )}
            </DialogTitle>
            <DialogDescription className="text-base text-gray-300 leading-relaxed mt-4">
              {selectedSolution?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 flex gap-3">
            <Button 
              className="flex-1 bg-gradient-to-r from-[#004C97] to-[#00A9E0] text-white animate-pulse"
              onClick={() => {
                window.open(whatsappUrl, '_blank');
                setSelectedSolution(null);
              }}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Solicitar Demonstração
            </Button>
            <Button 
              variant="outline" 
              className="border-[#00A9E0]/30 text-gray-300 hover:bg-[#00A9E0]/10"
              onClick={() => setSelectedSolution(null)}
            >
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Fixed CTA Button - Bottom Right */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <MessageCircle className="w-8 h-8 text-white" />
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5] 
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.a>

      {/* Fixed CTA Banner - Bottom */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-[#004C97] via-[#0077C8] to-[#00A9E0] border-t-4 border-[#00A9E0] shadow-2xl md:hidden"
      >
        <div className="px-4 py-3">
          <motion.div
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(0, 169, 224, 0.5)',
                '0 0 40px rgba(0, 169, 224, 1)',
                '0 0 20px rgba(0, 169, 224, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Button 
              className="w-full bg-white text-[#004C97] hover:bg-gray-100 font-bold py-4 text-base animate-pulse"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com Especialista Agora
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
