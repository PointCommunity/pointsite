import { church } from '@/content/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid shell">
        <section>
          <h2>Service Times</h2>
          <p>{church.serviceTime}</p>
        </section>
        <section>
          <h2>Contact Info</h2>
          <address>
            <span>{church.addressLine1}</span>
            <span>{church.addressLine2}</span>
          </address>
        </section>
        <section>
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href={church.facebookUrl} target="_blank" rel="noreferrer" aria-label="Point ATX on Facebook">f</a>
            <a href={church.instagramUrl} target="_blank" rel="noreferrer" aria-label="Point ATX on Instagram">◎</a>
          </div>
        </section>
      </div>
    </footer>
  );
}
