import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — SingoTec",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-[18px] font-semibold text-black mb-3">{title}</h2>
      <div className="text-fg-3 text-[15px] leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <h1 className="font-display text-[32px] font-semibold tracking-[-0.02em] text-black mb-2">
            Datenschutzerklärung
          </h1>
          <p className="text-fg-4 text-sm mb-2">Stand: April 2025</p>
          <p className="text-fg-3 text-[15px] leading-relaxed">
            Der Schutz deiner personenbezogenen Daten ist uns wichtig. Diese Erklärung informiert dich
            darüber, welche Daten wir erheben, zu welchem Zweck und auf welcher Rechtsgrundlage.
          </p>

          <Section title="1. Verantwortlicher">
            <p>
              Verantwortlich im Sinne der DSGVO ist:
            </p>
            <p>
              {/* TODO: Ersetze mit vollständigen Angaben (Pflicht gem. Art. 13 DSGVO) */}
              <strong className="text-black">SingoTec</strong><br />
              [DEIN NAME]<br />
              [STRASSE, HAUSNUMMER]<br />
              [PLZ ORT]<br />
              E-Mail: [DEINE@EMAIL.DE]
            </p>
          </Section>

          <Section title="2. Hosting (Vercel)">
            <p>
              Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA
              gehostet. Beim Aufruf der Seite verarbeitet Vercel technisch notwendige Verbindungsdaten
              (IP-Adresse, Zeitpunkt, aufgerufene Seite). Vercel ist nach dem EU-US Data Privacy Framework
              zertifiziert.
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am zuverlässigen Betrieb
              der Website). Mit Vercel besteht ein Auftragsverarbeitungsvertrag.
            </p>
          </Section>

          <Section title="3. Kontaktformular">
            <p>
              Wenn du das Kontaktformular nutzt, erheben wir Name, E-Mail-Adresse und den Inhalt deiner
              Nachricht. Diese Daten verwenden wir ausschließlich zur Bearbeitung deiner Anfrage.
            </p>
            <p>
              Der E-Mail-Versand erfolgt über Resend Inc., 2261 Market Street #5039, San Francisco,
              CA 94114, USA. Resend ist nach dem EU-US Data Privacy Framework zertifiziert. Mit Resend
              besteht ein Auftragsverarbeitungsvertrag.
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1
              lit. a DSGVO (Einwilligung durch Absenden des Formulars). Daten werden nach vollständiger
              Bearbeitung der Anfrage gelöscht, spätestens nach 90 Tagen.
            </p>
          </Section>

          <Section title="4. Terminbuchung (Cal.eu)">
            <p>
              Für die Buchung eines Einrichtungstermins nutzen wir Cal.eu (Cal.com Inc., 2261 Market
              Street #5937, San Francisco, CA 94114, USA). Dabei werden Name und E-Mail-Adresse an
              Cal.com übermittelt. Cal.com speichert und verarbeitet diese Daten zur Verwaltung des
              Termins.
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).
              Es gelten zusätzlich die{" "}
              <a
                href="https://cal.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Datenschutzbestimmungen von Cal.com
              </a>.
            </p>
          </Section>

          <Section title="5. Deine Rechte">
            <p>Du hast gegenüber uns folgende Rechte hinsichtlich deiner personenbezogenen Daten:</p>
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p>
              Zur Ausübung deiner Rechte wende dich an die oben genannte E-Mail-Adresse.
            </p>
          </Section>

          <Section title="6. Beschwerderecht">
            <p>
              Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
              deiner personenbezogenen Daten zu beschweren. Die zuständige Behörde richtet sich nach
              deinem Wohnsitz oder dem Ort des mutmaßlichen Verstoßes.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
