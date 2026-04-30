import { useEffect, useMemo, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

const LEDGER_KEY = 'starship-constellation-ledger-v1';

function ConstellationLedger() {
  const [callsign, setCallsign] = useState('');
  const [markText, setMarkText] = useState('');
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem(LEDGER_KEY);
    if (stored) {
      setEntries(JSON.parse(stored));
    }
  }, []);

  const saveEntries = (nextEntries) => {
    setEntries(nextEntries);
    localStorage.setItem(LEDGER_KEY, JSON.stringify(nextEntries));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (!callsign.trim() || !markText.trim()) {
      setError('Callsign and text mark are required.');
      return;
    }

    const next = [
      {
        id: Date.now(),
        callsign: callsign.trim().slice(0, 16),
        markText: markText.trim().slice(0, 120),
      },
      ...entries,
    ].slice(0, 24);

    saveEntries(next);
    setCallsign('');
    setMarkText('');
  };

  const legend = useMemo(() => entries.slice(0, 6), [entries]);

  return (
    <section className="constellation-ledger reveal reveal-delay-2" aria-labelledby="ledger-heading">
      <h2 id="ledger-heading" className="page-heading">
        Constellation Ledger
      </h2>
      <p className="page-sub">
        Leave a plain-text visitor mark. This feed shows short log lines from people who stopped by.
      </p>

      <Card className="ledger-card">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="ledger-callsign">
                  <Form.Label>Callsign</Form.Label>
                  <Form.Control
                    type="text"
                    value={callsign}
                    onChange={(event) => setCallsign(event.target.value)}
                    maxLength={16}
                    placeholder="OrbitNomad"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="ledger-mark-text">
                  <Form.Label>Text Mark</Form.Label>
                  <Form.Control
                    type="text"
                    value={markText}
                    onChange={(event) => setMarkText(event.target.value)}
                    maxLength={120}
                    placeholder="Docked from Madison. Clean build."
                  />
                </Form.Group>
              </Col>
            </Row>
            {error && <p className="visitor-error mt-3 mb-0">{error}</p>}
            <Button type="submit" className="hero-btn mt-3">
              Place Mark
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="visitor-entry-list mt-3">
        {legend.length === 0 ? (
          <p className="empty-copy">No marks yet. Place the first one.</p>
        ) : (
          legend.map((entry) => (
            <p className="ledger-line" key={entry.id}>
              [{entry.callsign}] {entry.markText}
            </p>
          ))
        )}
      </div>
    </section>
  );
}

export default ConstellationLedger;
