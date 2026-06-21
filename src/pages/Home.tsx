import logo from '../assets/logo.png';
import bg1 from '../assets/m-soccer-1200x800.png';
import bg2 from '../assets/mens-soccer-happy.jpg';
import { useReveal } from '../hooks/useReveal';
import { useMemo } from 'react';

export function Home() {
  useReveal();

  const heroBg = useMemo(() => {
    const bgs = [bg1, bg2];
    return bgs[Math.floor(Math.random() * bgs.length)];
  }, []);

  const handleSubmit = async (e: React.FormEvent, msg: string) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const btn = form.querySelector('button') as HTMLButtonElement;
    if (!btn) return;

    const originalText = btn.innerHTML;
    const originalBg = btn.style.background;
    
    btn.innerHTML = "Sending...";
    btn.disabled = true;

    try {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: msg,
          ...data
        }),
      });

      if (response.ok) {
        btn.innerHTML = `✓ ${msg}!`;
        btn.style.background = "#00A344";
        form.reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      btn.innerHTML = "Error! Try again";
      btn.style.background = "#E3263A";
      btn.disabled = false;
    }

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = originalBg;
      btn.disabled = false;
    }, 3000);
  };

  return (
    <>
      <section className="hero" id="apply">
        <div className="hero-bg" id="hero-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-inner">
          <div className="hero-content">
            <h1>YOUR TALENT.<br /><em>THEIR SCHOLARSHIP.</em><br />OUR BRIDGE.</h1>
            <p>We connect international soccer players with U.S. college programs, helping you earn a scholarship and a world class education.</p>
          </div>
          <div className="hero-form">
            <h2>START YOUR JOURNEY</h2>
            <div className="form-sub">Fill out this form and we will reach out within 24 hours.</div>
            <form onSubmit={(e) => handleSubmit(e, 'Application Submitted')}>
              <div className="f-row">
                <div className="f-group"><label>First Name</label><input type="text" name="firstName" placeholder="" required /></div>
                <div className="f-group"><label>Last Name</label><input type="text" name="lastName" placeholder="" required /></div>
              </div>
              <div className="f-group"><label>Email</label><input type="email" name="email" placeholder="you@email.com" required /></div>
              <div className="f-group"><label>Phone Number</label><input type="tel" name="phone" placeholder="" required /></div>
              <div className="f-row">
                <div className="f-group">
                  <label>Class Of</label>
                  <select name="classOf" required>
                    <option value="">Select year</option>
                    <option>2025</option><option>2026</option><option>2027</option>
                    <option>2028</option><option>2029</option><option>2030</option>
                  </select>
                </div>
                <div className="f-group">
                  <label>Club Name</label>
                  <input type="text" name="clubName" placeholder="" required />
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-submit-hero">
                Submit Application <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </form>
          </div>
        </div>
        <div className="scroll-hint">Scroll<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg></div>
      </section>

      <section className="about" id="about">
        <div className="section-label reveal">About Us</div>
        <div className="section-title reveal">Who We Are</div>
        <div className="about-grid">
          <div className="about-values reveal">
            <div className="value-item"><div className="value-dot"></div>Personalized Approach</div>
            <div className="value-item"><div className="value-dot"></div>NCAA, NAIA &amp; NJCAA Expertise</div>
            <div className="value-item"><div className="value-dot"></div>Working With 1000+ Schools</div>
            <div className="value-item"><div className="value-dot"></div>End to End Support</div>
          </div>
          <div className="about-text reveal">
            <p>Soccer Bridge USA is a specialized college soccer recruitment agency dedicated to helping talented international players find their path to U.S. universities through athletic scholarships.</p>
            <p>Soccer Bridge USA was built from personal experience. Our founder played academy soccer in Latvia and represented Latvia's youth national teams before making the move to play college soccer in the United States. Along the way, he saw too many talented players miss out on scholarship opportunities, not because they weren't good enough, but because they simply didn't know how the process works.</p>
            <p>That experience became the foundation for Soccer Bridge USA. Based in the Baltics and Portugal, we work closely with international players and their families, connecting them with NCAA, NAIA, and NJCAA programs that match their ability, academic goals, and ambitions. From there, we handle the complicated part of the journey, the research, the contacts, the communication, and the paperwork, so your talent can speak for itself and your path to a U.S. college scholarship is clear from day one.</p>
          </div>
          <div className="about-logo reveal"><img src={logo} alt="Soccer Bridge USA" /></div>
        </div>
      </section>

      <section className="how-it-works" id="how">
        <div className="section-label reveal">The Process</div>
        <div className="section-title reveal">How It Works</div>
        <div className="section-sub reveal">Simple on paper, personal in practice, here's how we get you there.</div>
        <div className="steps-grid">
          <div className="step-card reveal">
            <div className="step-num">01</div>
            <div>
              <h3>Player Assessment</h3>
              <p>We evaluate your game footage, athletic ability, academic background, and personal goals to create a strong player profile that gets coaches attention.</p>
            </div>
          </div>
          <div className="step-card reveal">
            <div className="step-num">02</div>
            <div>
              <h3>Program Matching</h3>
              <p>We evaluate your game footage, athletic ability, academic background, and personal goals to create a strong player profile that gets coaches attention.</p>
            </div>
          </div>
          <div className="step-card reveal">
            <div className="step-num">03</div>
            <div>
              <h3>Scholarship &amp; Enrollment</h3>
              <p>We evaluate your game footage, athletic ability, academic background, and personal goals to create a strong player profile that gets coaches attention.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="section-label reveal">What We Do</div>
        <div className="section-title reveal">Our Services</div>
        <div className="section-sub reveal">From highlight reels to scholarship offers, here's everything we handle for you.</div>
        <div className="services-grid">
          <div className="service-card reveal">
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <div>
              <h3>Direct Coach Connections</h3>
              <p>Through genuine relationships built across NCAA, NAIA, and NJCAA programs, we put your name in front of the right coaches in the right way.</p>
            </div>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
              </svg>
            </div>
            <div>
              <h3>Player CV &amp; Athletic Profile</h3>
              <p>A polished, shareable document covering your full athletic and academic story, written and designed to make the right first impression.</p>
            </div>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div>
              <h3>Highlight Video Production</h3>
              <p>We handle the full editing and production of a professional highlight reel so you can focus on your game.</p>
            </div>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
                <line x1="12" y1="2" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="22" />
                <line x1="2" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <div>
              <h3>Targeted College Promotion</h3>
              <p>We market your profile to programs that are the right fit, matching level, location, and major so every outreach is intentional.</p>
            </div>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div>
              <h3>Offer Evaluation &amp; Guidance</h3>
              <p>From first offer to final decision, we help you read between the lines, compare what's on the table, and choose with clarity, not guesswork.</p>
            </div>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div>
              <h3>Documentation &amp; Application Support</h3>
              <p>We help you stay on top of every form, deadline, and requirement, from college applications to the paperwork needed for your move to the U.S.</p>
            </div>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <div>
              <h3>Direct Line to Your Agent</h3>
              <p>You'll always know who to contact and where things stand, no waiting in a queue or guessing who's handling your case.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box reveal">
          <div className="section-title">Your American Dream<br />Starts Here</div>
          <a href={"#apply"} className="btn btn-primary" style={{ marginTop: '8px' }}>Apply Now <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label reveal">Get In Touch</div>
          <div className="section-title reveal">Send Us a Message</div>
        </div>
        <div className="contact-wrapper">
          <div className="contact-detail-row reveal">
            <div className="contact-detail"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg><a href="mailto:soccerbridgeusa@gmail.com">soccerbridgeusa@gmail.com</a></div>
            <div className="contact-detail"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg><a href="https://instagram.com/thesoccerbridge" target="_blank" rel="noreferrer">@thesoccerbridge</a></div>
            <div className="contact-detail"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg><a href="https://youtube.com/@soccerbridgeusa" target="_blank" rel="noreferrer">@soccerbridgeusa</a></div>
          </div>
          <div className="reveal">
            <form onSubmit={(e) => handleSubmit(e, 'Message Sent')}>
              <div className="fc-row">
                <div className="fc-group"><label>Full Name</label><input type="text" name="fullName" placeholder="" required /></div>
                <div className="fc-group"><label>Email</label><input type="email" name="email" placeholder="you@email.com" required /></div>
              </div>
              <div className="fc-group"><label>Phone (optional)</label><input type="tel" name="phone" placeholder="" /></div>
              <div className="fc-group"><label>Message</label><textarea name="message" placeholder="Your question or message..." required></textarea></div>
              <button type="submit" className="btn btn-primary btn-card">
                Send Message <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
