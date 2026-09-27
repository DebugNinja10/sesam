import { useState, type FormEvent } from 'react';
import { ArrowRight, Check, Loader2, MessageCircle, User, Phone, GraduationCap, Calendar } from 'lucide-react';

const cycles = ['Collège', 'Lycée'];
const niveaux = ['6e', '5e', '4e', '2nde', '1ère'];

const WHATSAPP_NUMBER = '221782998181';

export default function InscriptionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    cycle: '',
    niveau: '',
    candidateType: '',
    birthYear: '',
    message: '',
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const lines = [
      '*Nouvelle demande d\'inscription — SESAM ACADEMY*',
      '',
      `👤 *Nom du parent :* ${form.parentName}`,
      `🎓 *Nom de l'élève :* ${form.studentName}`,
      `📱 *Téléphone :* ${form.phone}`,
      `Cycle souhaité : ${form.cycle}`,
      `Classe demandée : ${form.niveau}`,
      `Candidat : ${form.candidateType}`,
      `Année de naissance : ${form.birthYear}`,
      form.message ? `📝 *Message :* ${form.message}` : '',
      '',
      '📍 Thiès, Sénégal',
    ].filter(Boolean);

    const message = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    setTimeout(() => {
      window.open(url, '_blank');
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-10 text-center shadow-xl">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white animate-scale-in">
          <Check size={32} strokeWidth={3} />
        </span>
        <h3 className="mt-6 text-2xl font-bold text-[#272429]">Demande envoyée !</h3>
        <p className="mt-3 max-w-sm text-sm leading-7 text-[#756b70]">
          Votre demande d'inscription a été transmise via WhatsApp. Notre équipe vous contactera très prochainement pour finaliser l'inscription.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm({ parentName: '', studentName: '', phone: '', cycle: '', niveau: '', candidateType: '', birthYear: '', message: '' });
          }}
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#eee6e3] px-5 py-2.5 text-sm font-semibold text-[#8c182c] transition hover:bg-[#f8e8eb]"
        >
          Nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#8c182c]">Nom du parent *</label>
          <div className="relative">
            <User size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b0a8ac]" />
            <input
              type="text"
              required
              value={form.parentName}
              onChange={(e) => handleChange('parentName', e.target.value)}
              placeholder="Votre nom complet"
              className="w-full rounded-xl border border-[#eee6e3] bg-[#fbfaf8] py-3 pl-11 pr-4 text-sm text-[#272429] outline-none transition focus:border-[#8c182c] focus:bg-white focus:ring-2 focus:ring-[#8c182c]/15"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#8c182c]">Nom de l'élève *</label>
          <div className="relative">
            <GraduationCap size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b0a8ac]" />
            <input
              type="text"
              required
              value={form.studentName}
              onChange={(e) => handleChange('studentName', e.target.value)}
              placeholder="Prénom et nom de l'élève"
              className="w-full rounded-xl border border-[#eee6e3] bg-[#fbfaf8] py-3 pl-11 pr-4 text-sm text-[#272429] outline-none transition focus:border-[#8c182c] focus:bg-white focus:ring-2 focus:ring-[#8c182c]/15"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#8c182c]">Téléphone *</label>
          <div className="relative">
            <Phone size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b0a8ac]" />
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="Ex : 78 299 18 10"
              className="w-full rounded-xl border border-[#eee6e3] bg-[#fbfaf8] py-3 pl-11 pr-4 text-sm text-[#272429] outline-none transition focus:border-[#8c182c] focus:bg-white focus:ring-2 focus:ring-[#8c182c]/15"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#8c182c]">Année de naissance</label>
          <div className="relative">
            <Calendar size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b0a8ac]" />
            <input
              type="text"
              value={form.birthYear}
              onChange={(e) => handleChange('birthYear', e.target.value)}
              placeholder="Ex : 2012"
              className="w-full rounded-xl border border-[#eee6e3] bg-[#fbfaf8] py-3 pl-11 pr-4 text-sm text-[#272429] outline-none transition focus:border-[#8c182c] focus:bg-white focus:ring-2 focus:ring-[#8c182c]/15"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#8c182c]">Cycle souhaité *</label>
          <select
            required
            value={form.cycle}
            onChange={(e) => handleChange('cycle', e.target.value)}
            className="w-full rounded-xl border border-[#eee6e3] bg-[#fbfaf8] py-3 px-4 text-sm text-[#272429] outline-none transition focus:border-[#8c182c] focus:bg-white focus:ring-2 focus:ring-[#8c182c]/15"
          >
            <option value="">Sélectionnez un cycle</option>
            {cycles.map((cycle) => (
              <option key={cycle} value={cycle}>{cycle}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#8c182c]">Classe demandée *</label>
          <select
            required
            value={form.niveau}
            onChange={(e) => handleChange('niveau', e.target.value)}
            className="w-full rounded-xl border border-[#eee6e3] bg-[#fbfaf8] py-3 px-4 text-sm text-[#272429] outline-none transition focus:border-[#8c182c] focus:bg-white focus:ring-2 focus:ring-[#8c182c]/15"
          >
            <option value="">Sélectionnez une classe</option>
            {niveaux.map((niveau) => <option key={niveau} value={niveau}>{niveau}</option>)}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#8c182c]">Type de candidat *</label>
          <select
            required
            value={form.candidateType}
            onChange={(e) => handleChange('candidateType', e.target.value)}
            className="w-full rounded-xl border border-[#eee6e3] bg-[#fbfaf8] py-3 px-4 text-sm text-[#272429] outline-none transition focus:border-[#8c182c] focus:bg-white focus:ring-2 focus:ring-[#8c182c]/15"
          >
            <option value="">Sélectionnez</option>
            <option value="Nouveau candidat">Nouveau candidat</option>
            <option value="Candidat au BFEM">Candidat au BFEM</option>
            <option value="Candidat au Baccalauréat">Candidat au Baccalauréat</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#8c182c]">Message (optionnel)</label>
          <textarea
            rows={3}
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            placeholder="Une question ou une précision ?"
            className="w-full resize-none rounded-xl border border-[#eee6e3] bg-[#fbfaf8] py-3 px-4 text-sm text-[#272429] outline-none transition focus:border-[#8c182c] focus:bg-white focus:ring-2 focus:ring-[#8c182c]/15"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-7 flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25d366] py-4 text-sm font-bold text-white transition hover:bg-[#1ebe5a] disabled:opacity-70"
      >
        {loading ? (
          <><Loader2 size={18} className="animate-spin" /> Envoi en cours...</>
        ) : (
          <><MessageCircle size={19} /> Envoyer via WhatsApp <ArrowRight size={17} /></>
        )}
      </button>
      <div className="mt-6 rounded-2xl bg-[#fbfaf8] p-4 text-xs leading-5 text-[#756b70]">
        <p className="font-bold text-[#8c182c]">Pièces à prévoir</p>
        <p className="mt-1">Extrait de naissance, bulletin du second semestre et certificat de scolarité pour la 6e.</p>
        <p className="mt-2"><span className="font-bold text-[#8c182c]">Candidats au BFEM :</span> extrait de naissance de moins de 3 mois.</p>
        <p className="mt-1"><span className="font-bold text-[#8c182c]">Candidats au Bac :</span> extrait de naissance de moins de 3 mois, relevé du Bac si 2e présentation et copie de la carte nationale.</p>
      </div>
      <p className="mt-4 text-center text-xs text-[#b0a8ac]">
        Vos informations seront envoyées au <span className="font-bold text-[#8c182c]">78 299 18 10</span> sur WhatsApp
      </p>
    </form>
  );
}
