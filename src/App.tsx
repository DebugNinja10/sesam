import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  Facebook,
  GraduationCap,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Newspaper,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
  X,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import InscriptionForm from '@/components/InscriptionForm';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const navItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Notre école', href: '#ecole' },
  { label: 'Cycles', href: '#cycles' },
  { label: 'Actualités', href: '#actualites' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Inscription', href: '#inscription' },
];

const formations = [
  {
    title: 'Formation générale',
    text: 'Un parcours structuré pour construire des bases solides et révéler le potentiel de chaque apprenant.',
    tag: 'Parcours académique',
  },
  {
    title: 'Discipline & leadership',
    text: 'Une éducation qui développe la confiance, le sens des responsabilités et l’esprit d’équipe.',
    tag: 'Valeurs & savoir-être',
  },
  {
    title: 'Préparation à l’avenir',
    text: 'Des compétences utiles et une ouverture sur le monde pour accompagner chaque ambition.',
    tag: 'Excellence durable',
  },
];

const cycles = [
  { name: 'Collège', age: '6e à 4e', icon: GraduationCap, color: 'from-[#f8e8eb] to-[#eef2f5]', text: 'Un encadrement rigoureux pour consolider les bases et préparer sereinement les examens.' },
  { name: 'Lycée', age: '2nde à 1ère', icon: Trophy, color: 'from-[#f5eeeb] to-[#f8e8eb]', text: 'Un parcours exigeant pour accompagner chaque élève vers le baccalauréat et l’enseignement supérieur.' },
];

const actualites = [
  {
    date: 'Sept. 2026',
    tag: 'Rentrée',
    title: 'Rentrée scolaire 2026-2027',
    text: 'SESAM ACADEMY ouvre ses portes pour une nouvelle année scolaire. Les inscriptions sont en cours.',
  },
  {
    date: 'Août 2026',
    tag: 'Événement',
    title: 'Journée portes ouvertes',
    text: 'Venez découvrir notre établissement, rencontrer l\'équipe pédagogique et échanger sur l\'avenir de vos enfants.',
  },
  {
    date: 'Juin 2026',
    tag: 'Résultats',
    title: 'Excellents résultats aux examens',
    text: 'Nos élèves ont brillé lors des derniers examens. Félicitations à tous pour leur travail et leur engagement.',
  },
];

const stats = [
  { value: '10+', label: 'Années d\'expérience' },
  { value: '500+', label: 'Élèves accompagnés' },
  { value: '95%', label: 'de réussite aux examens' },
  { value: '20+', label: 'Enseignants dévoués' },
];

const galleryItems = Array.from({ length: 8 }, (_, i) => i + 1);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useReveal();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbfaf8] text-[#272429]">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#40101d]/95 py-3 shadow-xl backdrop-blur-md' : 'bg-transparent py-5'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#accueil" className="flex items-center gap-3" onClick={closeMenu}>
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg ring-1 ring-white/40 transition hover:scale-105">
              <img src="/assets/logosesam.jpeg" alt="Logo officiel SESAM ACADEMY" className="h-full w-full object-cover" />
            </span>
            <span className="hidden text-sm font-bold tracking-[0.18em] text-white sm:block">SESAM ACADEMY</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="group relative text-sm font-medium text-white/90 transition hover:text-white">
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-[#efb74e] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a href="#inscription" className="rounded-full bg-[#efb74e] px-5 py-2.5 text-sm font-bold text-[#40101d] transition hover:-translate-y-0.5 hover:bg-[#ffd477]">
              S'inscrire
            </a>
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="rounded-full border border-white/50 p-2 text-white lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mx-4 mt-3 rounded-2xl bg-white p-4 shadow-2xl lg:hidden" aria-label="Menu mobile">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[#272429] transition hover:bg-[#f8e8eb] hover:text-[#8c182c]">
                {item.label}
                <ChevronRight size={15} className="text-[#b0a8ac]" />
              </a>
            ))}
            <a href="#inscription" onClick={closeMenu} className="mt-2 block rounded-xl bg-[#efb74e] px-4 py-3 text-center text-sm font-bold text-[#40101d]">
              S'inscrire maintenant
            </a>
          </nav>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="accueil" className="relative isolate flex min-h-[100vh] items-end overflow-hidden bg-[#40101d] pb-20 pt-36 sm:min-h-[780px] lg:pb-28">
          <img src="/assets/images/sesam1.jpeg" alt="Élèves de SESAM ACADEMY" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(35,8,17,0.9)_0%,rgba(55,10,24,0.65)_42%,rgba(71,15,27,0.15)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#fbfaf8] via-[#fbfaf8]/60 to-transparent" />

          <div className="absolute right-8 top-32 hidden h-32 w-32 rounded-full border-2 border-[#efb74e]/30 lg:block animate-float" />
          <div className="absolute right-24 top-72 hidden h-16 w-16 rounded-full bg-[#efb74e]/10 blur-xl lg:block animate-float" style={{ animationDelay: '1s' }} />

          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
                <Sparkles size={14} className="text-[#efb74e]" />
                La formule de l'excellence
              </div>
              <h1 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white animate-fade-up sm:text-6xl lg:text-8xl" style={{ animationDelay: '0.2s' }}>
                Grandir.<br /><span className="shimmer-text">Apprendre.</span><br />S'accomplir.
              </h1>
              <p className="mt-7 max-w-lg text-base leading-7 text-white/80 animate-fade-up sm:text-lg" style={{ animationDelay: '0.35s' }}>
                À Thiès, SESAM ACADEMY accompagne chaque apprenant vers l'excellence grâce à une éducation exigeante, humaine et tournée vers l'avenir.
              </p>
              <div className="mt-9 flex flex-col gap-3 animate-fade-up sm:flex-row" style={{ animationDelay: '0.5s' }}>
                <a href="#inscription" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#efb74e] px-6 py-3.5 text-sm font-bold text-[#40101d] transition hover:-translate-y-0.5 hover:bg-[#ffd477]">
                  S'inscrire <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </a>
                <a href="#ecole" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#8c182c]">
                  Découvrir l'école
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
            <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
              <div className="h-2 w-1 rounded-full bg-white/70 animate-bounce" />
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="relative z-10 mx-auto -mt-2 max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-xl shadow-[#501120]/10 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`px-6 py-8 text-center sm:px-8 ${index !== 0 ? 'border-t border-[#eee6e3] lg:border-l lg:border-t-0' : ''} ${index >= 2 ? 'border-t border-[#eee6e3] lg:border-t-0' : ''}`}>
                <p className="text-3xl font-bold text-[#8c182c] sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs font-medium leading-5 text-[#756b70]">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NOTRE ÉCOLE */}
        <section id="ecole" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -left-4 -top-4 h-28 w-28 rounded-3xl border-2 border-[#efb74e] sm:-left-6 sm:-top-6" />
              <div className="relative overflow-hidden rounded-[2rem] bg-[#8c182c] p-3 shadow-2xl shadow-[#501120]/15">
                <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <img src="/assets/images/sesam1.jpeg" alt="La communauté SESAM ACADEMY" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                </div>
                <div className="absolute bottom-8 left-8 rounded-2xl bg-white px-5 py-4 shadow-xl">
                  <p className="text-2xl font-bold text-[#8c182c]">Thiès</p>
                  <p className="text-xs font-medium text-[#756b70]">Sénégal</p>
                </div>
              </div>
              <div className="absolute -bottom-7 -right-5 flex h-24 w-24 items-center justify-center rounded-full bg-[#efb74e] text-center text-xs font-bold leading-4 text-[#40101d] shadow-xl sm:-right-8 animate-float">Savoir<br />&amp; savoir-être</div>
            </div>

            <div className="reveal">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#8c182c]">Notre identité</p>
              <h2 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-[-0.03em] text-[#272429] sm:text-5xl">L'école où chaque talent trouve sa voie.</h2>
              <p className="mt-6 text-base leading-8 text-[#756b70]">SESAM ACADEMY est un établissement qui place l'humain au cœur de l'apprentissage. Nous créons un cadre bienveillant et stimulant où chaque élève apprend à croire en lui, à respecter les autres et à construire son avenir.</p>
              <div className="mt-8 space-y-4">
                {['Un accompagnement attentif et personnalisé', 'Des valeurs fortes : respect, discipline et solidarité', 'Une vision moderne de la réussite scolaire'].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm font-semibold text-[#40393d]"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f8e8eb] text-[#8c182c]"><Check size={13} strokeWidth={3} /></span>{item}</div>
                ))}
              </div>
              <a href="#cycles" className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#8c182c] transition hover:gap-3">Voir nos cycles <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        {/* FORMATIONS */}
        <section id="formations" className="scroll-mt-24 bg-[#f5eeeb] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="reveal flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#8c182c]">Ce que nous proposons</p>
                <h2 className="text-4xl font-bold tracking-[-0.03em] text-[#272429] sm:text-5xl">Une éducation qui<br /><span className="text-[#8c182c]">fait la différence.</span></h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#756b70]">Chaque journée est une occasion d'apprendre, de progresser et de se préparer sereinement à demain.</p>
            </div>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {formations.map((formation, index) => (
                <article key={formation.title} className="reveal card-hover group rounded-3xl bg-white p-7 shadow-sm hover:shadow-xl hover:shadow-[#501120]/10 sm:p-8" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-bold text-[#eadcdf] transition group-hover:text-[#f0d5d8]">0{index + 1}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8e8eb] text-[#8c182c] transition group-hover:scale-110 group-hover:bg-[#8c182c] group-hover:text-white">{index === 0 ? <BookOpen size={21} /> : index === 1 ? <ShieldCheck size={21} /> : <Award size={21} />}</span>
                  </div>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.15em] text-[#8c182c]">{formation.tag}</p>
                  <h3 className="mt-3 text-xl font-bold text-[#272429]">{formation.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#756b70]">{formation.text}</p>
                  <a href="#inscription" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#272429] transition group-hover:gap-3 group-hover:text-[#8c182c]">En savoir plus <ArrowRight size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CYCLES */}
        <section id="cycles" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="reveal mx-auto max-w-2xl text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#8c182c]">Nos cycles scolaires</p>
              <h2 className="text-4xl font-bold tracking-[-0.03em] text-[#272429] sm:text-5xl">De la maternelle au lycée,<br /><span className="text-[#8c182c]">un parcours complet.</span></h2>
              <p className="mt-5 text-sm leading-7 text-[#756b70]">Chaque cycle est pensé pour accompagner l'élève à son rythme, du premier éveil jusqu'à la préparation des examens.</p>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cycles.map((cycle, index) => {
                const Icon = cycle.icon;
                return (
                  <article key={cycle.name} className="reveal card-hover group relative overflow-hidden rounded-3xl bg-white p-7 shadow-sm hover:shadow-xl hover:shadow-[#501120]/10" style={{ transitionDelay: `${index * 0.08}s` }}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${cycle.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f8e8eb] text-[#8c182c] transition group-hover:scale-110 group-hover:bg-[#8c182c] group-hover:text-white"><Icon size={26} /></span>
                        <span className="rounded-full bg-[#f5eeeb] px-3 py-1 text-xs font-bold text-[#8c182c]">{cycle.age}</span>
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-[#272429]">{cycle.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#756b70]">{cycle.text}</p>
                      <a href="#inscription" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#8c182c] transition group-hover:gap-2.5">Inscrire mon enfant <ArrowRight size={15} /></a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ACTUALITÉS */}
        <section id="actualites" className="scroll-mt-24 bg-[#f5eeeb] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="reveal flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#8c182c]">Actualités</p>
                <h2 className="text-4xl font-bold tracking-[-0.03em] text-[#272429] sm:text-5xl">La vie de l'école,<br /><span className="text-[#8c182c]">au quotidien.</span></h2>
              </div>
              <a href="#inscription" className="hidden items-center gap-2 text-sm font-bold text-[#8c182c] transition hover:gap-3 sm:inline-flex">Toutes les actualités <ArrowRight size={16} /></a>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {actualites.map((actu, index) => (
                <article key={actu.title} className="reveal card-hover group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl hover:shadow-[#501120]/10" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#40101d]">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(64,16,29,0.6),rgba(140,24,44,0.3))]" />
                    <div className="relative text-center">
                      <Newspaper size={40} className="mx-auto text-white/30" />
                      <p className="mt-3 text-sm font-semibold text-white/60">Image à venir</p>
                    </div>
                    <span className="absolute left-4 top-4 rounded-full bg-[#efb74e] px-3 py-1 text-xs font-bold text-[#40101d]">{actu.tag}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs font-medium text-[#b0a8ac]"><CalendarDays size={14} /> {actu.date}</div>
                    <h3 className="mt-3 text-lg font-bold leading-snug text-[#272429] transition group-hover:text-[#8c182c]">{actu.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-[#756b70]">{actu.text}</p>
                    <a href="#inscription" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#8c182c] transition group-hover:gap-2.5">Lire la suite <ArrowRight size={15} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIE */}
        <section id="galerie" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="reveal mx-auto max-w-2xl text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#8c182c]">Galerie</p>
              <h2 className="text-4xl font-bold tracking-[-0.03em] text-[#272429] sm:text-5xl">Des souvenirs à<br /><span className="text-[#8c182c]">construire ensemble.</span></h2>
              <p className="mt-5 text-sm leading-7 text-[#756b70]">Retrouvez bientôt nos activités, nos événements et les moments forts de la vie de l'école.</p>
            </div>
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {galleryItems.map((item, index) => (
                <div key={item} className="reveal group relative aspect-square overflow-hidden rounded-2xl bg-[#40101d]" style={{ transitionDelay: `${index * 0.06}s` }}>
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(64,16,29,0.7),rgba(140,24,44,0.4))]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center transition group-hover:scale-110">
                    <Clock size={28} className="text-white/40" />
                    <p className="mt-2 px-2 text-xs font-semibold text-white/50">Image à venir</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-[#40101d]/0 transition group-hover:bg-[#40101d]/40">
                    <span className="rounded-full bg-[#efb74e] px-4 py-2 text-xs font-bold text-[#40101d] opacity-0 transition group-hover:opacity-100">Bientôt, inchallah</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSCRIPTION */}
        <section id="inscription" className="scroll-mt-24 overflow-hidden bg-[#40101d] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <div className="reveal">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#efb74e]">Inscription</p>
                <h2 className="max-w-lg text-4xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-5xl">Inscrivez votre enfant<br />en quelques clics.</h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-white/70">Remplissez le formulaire ci-contre. Vos informations seront envoyées directement sur WhatsApp à notre équipe qui vous recontactera pour finaliser l'inscription.</p>
                <div className="mt-8 space-y-4">
                  {[
                    { icon: Check, text: 'Formulaire rapide et simple' },
                    { icon: Check, text: 'Envoi direct sur WhatsApp' },
                    { icon: Check, text: 'Réponse de notre équipe sous 24h' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.text} className="flex items-center gap-3 text-sm font-semibold text-white/90">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#efb74e] text-[#40101d]"><Icon size={14} strokeWidth={3} /></span>
                        {item.text}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#efb74e] text-[#40101d]"><Phone size={20} /></span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#efb74e]">Numéro d'information</p>
                    <a href="tel:+221782998181" className="mt-1 block text-lg font-bold text-white transition hover:text-[#efb74e]">78 299 18 10 · 78 591 89 89</a>
                  </div>
                </div>
              </div>
              <div className="reveal">
                <InscriptionForm />
              </div>
            </div>
            <div className="reveal mt-12 border-t border-white/10 pt-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#efb74e]">Frais d'inscription</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  ['Droits', '20 000 F'],
                  ['Package uniforme', '28 000 F'],
                  ['Tenue cérémonie & ordinaire', '15 000 F'],
                  ['Tenue de sport', '20 000 F'],
                  ['Mensualité', '2 000 · 85 000 F'],
                ].map(([label, price]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                    <p className="text-xs leading-4 text-white/60">{label}</p>
                    <p className="mt-2 text-lg font-bold text-white">{price}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-5 text-white/50">Mensualité payable à l'avance pour 6 mois (juillet). Réinscription : 65 000 F si le jacket et la blouse sont toujours fonctionnels ; sinon, il faut les renouveler.</p>
              <p className="mt-2 text-xs leading-5 text-white/50"><span className="font-bold text-[#efb74e]">Examens :</span> BFEM 2 000 F · Bac 7 000 F (+ 1 000 F par matière facultative choisie).</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 border-t border-[#eee6e3] bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="reveal">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#8c182c]">Parlons de votre avenir</p>
              <h2 className="max-w-lg text-4xl font-bold leading-tight tracking-[-0.03em] text-[#272429] sm:text-5xl">Votre prochaine étape commence ici.</h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#756b70]">Notre équipe est à votre écoute pour répondre à vos questions et vous accompagner dans votre découverte de SESAM ACADEMY.</p>
            </div>
            <div className="reveal space-y-4">
              <a href="tel:+221782998181" className="card-hover flex items-center gap-4 rounded-2xl border border-[#eee6e3] p-5 hover:border-[#8c182c] hover:shadow-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f8e8eb] text-[#8c182c]"><Phone size={19} /></span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#8c182c]">Téléphone</span>
                  <span className="mt-1 block text-sm font-semibold text-[#272429]">78 299 18 10 · 78 591 89 89</span>
                </span>
              </a>
              <a href="mailto:sesam.academy@gmail.com" className="card-hover flex items-center gap-4 rounded-2xl border border-[#eee6e3] p-5 hover:border-[#8c182c] hover:shadow-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f8e8eb] text-[#8c182c]"><Mail size={19} /></span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#8c182c]">Email</span>
                  <span className="mt-1 block text-sm font-semibold text-[#272429]">sesam.academy@gmail.com</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-[#eee6e3] p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f8e8eb] text-[#8c182c]"><MapPin size={19} /></span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#8c182c]">Nous trouver</span>
                  <span className="mt-1 block text-sm font-semibold text-[#272429]">Thiès, Sénégal</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#272429] px-5 py-14 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white">
                  <img src="/assets/logosesam.jpeg" alt="Logo officiel SESAM ACADEMY" className="h-full w-full object-cover" />
                </span>
                <div>
                  <p className="text-base font-bold tracking-[0.16em]">SESAM ACADEMY</p>
                  <p className="mt-1 text-xs text-white/50">La formule de l'excellence</p>
                </div>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
                Un établissement à Thiès qui accompagne chaque apprenant de la maternelle au lycée vers la réussite et l'épanouissement.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/70 transition hover:bg-[#8c182c] hover:text-white"><Facebook size={18} /></a>
                <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/70 transition hover:bg-[#8c182c] hover:text-white"><Instagram size={18} /></a>
                <a href="https://wa.me/221782998181" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/70 transition hover:bg-[#25d366] hover:text-white"><Phone size={18} /></a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#efb74e]">Navigation</h4>
              <ul className="mt-5 space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-sm text-white/60 transition hover:text-white hover:translate-x-1 inline-block">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cycles */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#efb74e]">Nos cycles</h4>
              <ul className="mt-5 space-y-3">
                {cycles.map((cycle) => (
                  <li key={cycle.name}>
                    <a href="#cycles" className="text-sm text-white/60 transition hover:text-white">{cycle.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#efb74e]">Contact</h4>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3 text-sm text-white/60">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-[#efb74e]" /> Thiès, Sénégal
                </li>
                <li>
                  <a href="tel:+221782998181" className="flex items-start gap-3 text-sm text-white/60 transition hover:text-white">
                    <Phone size={17} className="mt-0.5 shrink-0 text-[#efb74e]" /> 78 299 18 10 · 78 591 89 89
                  </a>
                </li>
                <li>
                  <a href="mailto:sesam.academy@gmail.com" className="flex items-start gap-3 text-sm text-white/60 transition hover:text-white">
                    <Mail size={17} className="mt-0.5 shrink-0 text-[#efb74e]" /> sesam.academy@gmail.com
                  </a>
                </li>
              </ul>
              <a href="#inscription" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#efb74e] px-5 py-2.5 text-xs font-bold text-[#40101d] transition hover:-translate-y-0.5 hover:bg-[#ffd477]">
                S'inscrire <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-white/40">© 2026 SESAM ACADEMY. Tous droits réservés.</p>
            <p className="flex items-center gap-1.5 text-xs text-white/40">
              Fait avec <Heart size={13} className="fill-[#8c182c] text-[#8c182c]" /> à Thiès, Sénégal
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
}

export default App;
