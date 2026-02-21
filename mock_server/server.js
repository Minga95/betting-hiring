const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const eventi = [
  { id: 1,  nome: 'Manchester United vs Manchester City', sport: 'Calcio',    categoria: 'Premier League' },
  { id: 2,  nome: 'Real Madrid vs Barcelona',             sport: 'Calcio',    categoria: 'La Liga' },
  { id: 3,  nome: 'Bayern Munich vs Borussia Dortmund',   sport: 'Calcio',    categoria: 'Bundesliga' },
  { id: 4,  nome: 'Inter  vs Juventus',              sport: 'Calcio',    categoria: 'Serie A' },
  { id: 5,  nome: 'RB Leipzig vs Borussia Monchengladbach', sport: 'Calcio',  categoria: 'Bundesliga' },
  { id: 6,  nome: 'Ajax vs PSV Eindhoven',                sport: 'Calcio',    categoria: 'Eredivisie' },
  { id: 7,  nome: 'Paris Saint-Germain vs Olympique Marseille', sport: 'Calcio', categoria: 'Ligue 1' },
  { id: 8,  nome: 'AC Milan vs Napoli',                   sport: 'Calcio',    categoria: 'Serie A' },
  { id: 9,  nome: 'Warriors vs Lakers',                   sport: 'Basket',  categoria: 'NBA' },
  { id: 10, nome: 'CSKA Moscow vs Fenerbahce',            sport: 'Basket',  categoria: 'EuroLeague' },
  { id: 11, nome: 'Maccabi Tel Aviv vs Real Madrid',      sport: 'Basket',  categoria: 'EuroCup' },
  { id: 12, nome: 'Duke vs North Carolina',               sport: 'Basket',  categoria: 'NCAA' },
  { id: 13, nome: 'Djokovic vs Sinner',                    sport: 'Tennis',      categoria: 'Grand Slam' },
  { id: 14, nome: 'Alcaraz vs Musetti',                    sport: 'Tennis',      categoria: 'ATP Tour' }
];

function quotaCasuale() {
  return parseFloat((Math.random() * 8 + 1.05).toFixed(2));
}

function aggiungiQuote(evento) {
  const base = {
    ...evento,
    quote: {
      home: quotaCasuale(),
      away: quotaCasuale(),
    },
  };
  
  if (evento.sport === 'Calcio') {
    base.quote.draw = quotaCasuale();
  }

  return base;
}

// Middleware per CORS
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  await next();
});

router.get('/events', (ctx) => {
  ctx.body = eventi.map(aggiungiQuote);
});

router.get('/event/:id', (ctx) => {
  const id = parseInt(ctx.params.id);
  const evento = eventi.find((e) => e.id === id);
  if (evento) {
    ctx.body = aggiungiQuote(evento);
  } else {
    ctx.status = 404;
    ctx.body = { messaggio: 'Evento non trovato' };
  }
});

app.use(router.routes());

app.listen(3000, () => {
  console.log('Mock server avviato sulla porta 3000');
});
