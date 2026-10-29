import { FormEvent, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Car,
  Check,
  ChevronDown,
  Clock3,
  House,
  Facebook,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
  Wine,
  X,
} from 'lucide-react';
import { siteConfig, ServiceIconName } from '@/siteConfig';

const serviceIcons: Record<ServiceIconName, typeof Sparkles> = {
  sparkles: Sparkles,
  wine: Wine,
  users: Users,
  building: Building2,
  car: Car,
  house: House,
};

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our team', href: '#team' },
  { label: 'Reviews', href: '#reviews' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (siteConfig.formspreeEndpoint.includes('your-form-id')) {
      event.preventDefault();
      setSubmitted(true);
    }
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Top Flight Security home">
            <img className="brand-logo" src={siteConfig.images.logo} alt="" />
            <span className="brand-copy"><span>Top Flight</span><strong>Security</strong></span>
          </a>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Request a quote <ArrowRight size={15} /></a>
          </nav>
          <button className="menu-toggle" type="button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-media">
            {!videoFailed && <video autoPlay muted loop playsInline poster={siteConfig.images.heroFallback} src={siteConfig.videoUrl} onError={() => setVideoFailed(true)} />}
            <img className={`hero-fallback ${videoFailed ? 'is-visible' : ''}`} src={siteConfig.images.heroFallback} alt="Security professional on patrol" />
          </div>
          <div className="hero-overlay" />
          <div className="hero-grid" />
          <div className="container hero-content">
            <div className="eyebrow light"><span className="eyebrow-line" /> Local protection. Elevated standards.</div>
            <h1><span className="hero-title-left">Protection</span><span className="hero-title-right">with purpose.</span></h1>
            <p className="hero-intro">Quiet confidence for the moments that matter. Top Flight Security keeps people, places, and celebrations safe across the Yakima Valley.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Plan your protection <ArrowRight size={17} /></a>
              <a className="button button-ghost" href="#services"><span className="play-icon"><Video size={15} /></span> Explore services</a>
            </div>
            <div className="hero-proof"><span><ShieldCheck size={18} /> Licensed & insured</span><span><Clock3 size={18} /> Management available 24/7</span></div>
          </div>
          <div className="hero-scroll"><span>Scroll to discover</span><ChevronDown size={17} /></div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            <div className="trust-item"><span className="trust-icon"><MapPin size={19} /></span><span><b>Sunnyside based</b><small>Proudly serving Eastern Washington</small></span></div>
            <div className="trust-item"><span className="trust-icon"><BadgeCheck size={19} /></span><span><b>Licensed & bonded</b><small>Trained professionals you can trust</small></span></div>
            <div className="trust-item"><span className="trust-icon"><Clock3 size={19} /></span><span><b>Here when you need us</b><small>Our management team is always available</small></span></div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div className="about-image-wrap"><img src={siteConfig.images.about} alt="Security team members standing together" /><div className="image-stamp"><img className="stamp-logo" src={siteConfig.images.logo} alt="" /><span>Top Flight<br /><b>Security</b></span></div></div>
            <div className="about-copy"><div className="eyebrow"><span className="eyebrow-line" /> Who we are</div><h2>Security that lets you <em>stay in the moment.</em></h2><p>When you are hosting a celebration, running a business, or protecting your home, you should not have to carry every concern yourself. We bring a calm, capable presence so you can focus on what matters.</p><p>Based in Sunnyside, Top Flight Security serves the Yakima Valley and surrounding communities with thoughtful planning, professional personnel, and real local commitment.</p><div className="check-list"><span><Check size={15} /> People-first service</span><span><Check size={15} /> Clear communication</span><span><Check size={15} /> Responsive coverage</span></div><a className="text-link" href="#contact">Talk with our team <ArrowRight size={16} /></a></div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="container"><div className="section-heading centered"><div className="eyebrow"><span className="eyebrow-line" /> What we do</div><h2>Coverage built around <em>your world.</em></h2><p>From intimate gatherings to complex operations, our services adapt to the way you live, work, and celebrate.</p></div><div className="services-grid">{siteConfig.services.map((service, index) => { const Icon = serviceIcons[service.icon]; return <article className="service-card" key={service.title}><span className="service-number">0{index + 1}</span><div className="service-icon"><Icon size={23} strokeWidth={1.7} /></div><h3>{service.title}</h3><p>{service.description}</p><a href="#contact" aria-label={`Learn more about ${service.title}`}><ArrowRight size={17} /></a></article>; })}</div></div>
        </section>

        <section id="team" className="section team-section">
          <div className="container"><div className="section-heading team-heading"><div><div className="eyebrow light"><span className="eyebrow-line" /> The people behind the protection</div><h2>A team you can <em>count on.</em></h2></div><p>Good security starts with good people. Meet the professionals who bring experience, empathy, and readiness to every assignment.</p></div><div className="team-banner"><img src={siteConfig.images.team} alt="Top Flight Security team" /><div className="banner-label">One team. One standard.</div></div><div className="team-grid">{siteConfig.team.map((member) => <article className="member-card" key={member.name}><div className="member-image"><img src={siteConfig.images.members[member.imageIndex]} alt={member.name} /></div><div className="member-info"><h3>{member.name}</h3><span>{member.role}</span><p>{member.bio}</p></div></article>)}</div></div>
        </section>

        <section id="reviews" className="section reviews-section"><div className="container reviews-layout"><div className="review-intro"><div className="eyebrow"><span className="eyebrow-line" /> Kind words</div><h2>Peace of mind is <em>the best review.</em></h2><div className="rating"><strong>5.0</strong><span><span className="stars">★★★★★</span><small>Trusted by local families, businesses & event hosts</small></span></div></div><div className="review-card"><Quote size={34} className="quote-mark" /><p>“Top Flight made our event feel effortless. Their team was professional, present, and so respectful of the celebration. We could actually relax and enjoy our night.”</p><div className="review-author"><span className="author-avatar">JR</span><span><b>Jordan R.</b><small>Private event client</small></span><span className="review-stars">★★★★★</span></div></div></div></section>

        <section id="contact" className="section contact-section"><div className="container contact-layout"><div className="contact-copy"><div className="eyebrow light"><span className="eyebrow-line" /> Start a conversation</div><h2>Let’s make a <em>safe plan.</em></h2><p>Tell us a little about what you are protecting. We will follow up with thoughtful next steps and a clear quote.</p><div className="contact-details"><a href={siteConfig.phoneHref}><Phone size={17} /><span><small>Call us anytime</small>{siteConfig.phone}</span></a><a href={`mailto:${siteConfig.email}`}><Mail size={17} /><span><small>Email our team</small>{siteConfig.email}</span></a><div><MapPin size={17} /><span><small>Based in</small>{siteConfig.location}</span></div></div></div><div className="form-card">{submitted ? <div className="success-message"><span className="success-icon"><Check size={25} /></span><h3>Your message is ready to send.</h3><p>Add your Formspree form ID in the site configuration to connect this form and start receiving inquiries.</p></div> : <form action={siteConfig.formspreeEndpoint} method="POST" onSubmit={handleSubmit}><div className="form-row"><label>Full name<input required name="name" type="text" placeholder="Your full name" /></label><label>Phone number<input required name="phone" type="tel" placeholder="(509) 000-0000" /></label></div><div className="form-row"><label>Email address<input required name="email" type="email" placeholder="you@example.com" /></label><label>Event type<select required name="eventType" defaultValue=""><option value="" disabled>Select one</option><option>Wedding or quinceañera</option><option>Birthday or private event</option><option>Wine tasting</option><option>Concert or special event</option><option>Business or home monitoring</option><option>Other</option></select></label></div><label>Describe your event<textarea required name="message" rows={4} placeholder="Date, location, guest count, and what you have in mind..."></textarea></label><div className="consent-list"><label className="consent"><input required name="phoneConsent" type="checkbox" /> <span>I consent to being contacted by phone about my inquiry.</span></label><label className="consent"><input required name="emailConsent" type="checkbox" /> <span>I consent to being contacted by email about my inquiry.</span></label></div><button className="button button-primary form-submit" type="submit">Request your quote <ArrowRight size={17} /></button><p className="form-note">Your information stays with our team and is only used to respond to your request.</p></form>}</div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><a className="brand footer-brand" href="#top"><img className="brand-logo" src={siteConfig.images.logo} alt="" /><span className="brand-copy"><span>Top Flight</span><strong>Security</strong></span></a><p>Protecting what matters across the Yakima Valley.</p><div className="footer-links"><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a><a href={`mailto:${siteConfig.email}`} aria-label="Email Top Flight Security"><Mail size={18} /></a><a href={siteConfig.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Top Flight Security. All rights reserved.</span><span>Serving Sunnyside, WA & surrounding areas</span><span>Created by: <a className="creator-link" href="https://ctechsolution.tech" target="_blank" rel="noreferrer">Community Tech Solutions</a></span></div></footer>
    </div>
  );
}

export default App;
