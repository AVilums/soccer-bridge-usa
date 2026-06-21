import logo from '../assets/logo.png';
import { useReveal } from '../hooks/useReveal';

export function Home() {
  useReveal();

  const handleSubmit = (e: React.FormEvent, msg: string) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector('button') as HTMLButtonElement;
    if (!btn) return;

    const originalText = btn.innerHTML;
    btn.innerHTML = `✓ ${msg}!`;
    const originalBg = btn.style.background;
    btn.style.background = "#00A344";
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = originalBg;
      btn.disabled = false;
    }, 3000);
  };

  return (
    <>
      <section className="hero" id="apply">
        <div className="hero-bg" id="hero-bg" style={{ backgroundImage: `url(${logo})` }}></div>
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
                <div className="f-group"><label>First Name</label><input type="text" placeholder="" required /></div>
                <div className="f-group"><label>Last Name</label><input type="text" placeholder="" required /></div>
              </div>
              <div className="f-group"><label>Email</label><input type="email" placeholder="you@email.com" required /></div>
              <div className="f-group"><label>Phone Number</label><input type="tel" placeholder="" required /></div>
              <div className="f-row">
                <div className="f-group">
                  <label>Class Of</label>
                  <select required>
                    <option value="">Select year</option>
                    <option>2025</option><option>2026</option><option>2027</option>
                    <option>2028</option><option>2029</option><option>2030</option>
                  </select>
                </div>
                <div className="f-group">
                  <label>Club Name</label>
                  <input type="text" placeholder="" required />
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
            <p>We understand the challenges of navigating the American college system from abroad. The eligibility requirements, the recruiting timelines, and the cultural differences. That is why we built a bridge between your talent and the opportunities waiting in the United States.</p>
            <p>Our team works hands on with every player, from building standout profiles and highlight reels to connecting directly with college coaches across NCAA, NAIA, and NJCAA programs. We do not just find you a spot on a team. We find the right program where you will thrive both on the pitch and in the classroom.</p>
          </div>
          <div className="about-logo reveal"><img src={logo} alt="Soccer Bridge USA" /></div>
        </div>
      </section>

      <section className="how-it-works" id="how">
        <div className="section-label reveal">The Process</div>
        <div className="section-title reveal">How It Works</div>
        <div className="section-sub reveal">Three simple steps from where you are now to a U.S. college soccer program.</div>
        <div className="steps-grid">
          <div className="step-card reveal">
            <div className="step-num">01</div>
            <div>
              <h3>Player Assessment</h3>
              <p>We review your highlight videos, stats, academic record, and goals to build a complete player profile that stands out to coaches.</p>
            </div>
          </div>
          <div className="step-card reveal">
            <div className="step-num">02</div>
            <div>
              <h3>Program Matching</h3>
              <p>Using our network of 1000+ schools, we match your talent and academic profile with the right programs and scholarship opportunities.</p>
            </div>
          </div>
          <div className="step-card reveal">
            <div className="step-num">03</div>
            <div>
              <h3>Scholarship &amp; Enrollment</h3>
              <p>We guide you through applications, coach communications, campus visits, and scholarship negotiations until you sign.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="section-label reveal">What We Do</div>
        <div className="section-title reveal">Our Services</div>
        <div className="section-sub reveal">Everything you need to make the move from international soccer to a U.S. college team.</div>
        <div className="services-grid">
          <div className="service-card reveal">
            <div className="service-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div>
            <div><h3>Highlight Video Production</h3><p>Professional quality player reels edited to showcase your strengths and catch a coach's eye.</p></div>
          </div>
          <div className="service-card reveal">
            <div className="service-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg></div>
            <div><h3>Coach Outreach</h3><p>Direct contact and relationship building with college coaches across NCAA, NAIA, and NJCAA programs.</p></div>
          </div>
          <div className="service-card reveal">
            <div className="service-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg></div>
            <div><h3>Academic Guidance</h3><p>SAT/ACT prep support, transcript evaluation, English proficiency guidance, and eligibility clearance.</p></div>
          </div>
          <div className="service-card reveal">
            <div className="service-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg></div>
            <div><h3>Scholarship Negotiation</h3><p>We advocate on your behalf to secure the best possible athletic and academic scholarship package.</p></div>
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
                <div className="fc-group"><label>Full Name</label><input type="text" placeholder="" required /></div>
                <div className="fc-group"><label>Email</label><input type="email" placeholder="you@email.com" required /></div>
              </div>
              <div className="fc-group"><label>Phone (optional)</label><input type="tel" placeholder="" /></div>
              <div className="fc-group"><label>Message</label><textarea placeholder="Your question or message..." required></textarea></div>
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
