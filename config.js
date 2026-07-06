/* =========================================================
   CONFIG COMPARTILHADA - Central de Links das Squads
   Preencha SUPABASE_URL e SUPABASE_ANON_KEY com os dados do
   seu projeto (Supabase > Project Settings > API).
========================================================= */

const SUPABASE_URL = "https://gfabaucpogatrqqvvuqt.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_IR8qlDQ_5LrIPtO8DSgpSw_H7DoAUhP";

// Dominio interno usado nos logins das squads (o colaborador nunca ve isto).
const EMAIL_DOMAIN = "squad.local";

// As categorias (cards) de cada squad agora vivem na tabela "categorias" do
// Supabase, gerenciadas pela propria squad dentro do sistema. Ver index.html.

// Helpers usados pelas duas paginas.
function emailDaSquad(squadKey) {
  return `${squadKey}@${EMAIL_DOMAIN}`;
}

function squadDoEmail(email) {
  return (email || "").split("@")[0];
}

// Cliente Supabase unico (o SDK e carregado via <script> antes deste arquivo).
// Login persistente: a sessao fica salva no localStorage e o token e renovado
// sozinho, entao o colaborador continua logado mesmo fechando e reabrindo o
// navegador (ate dar Sair ou a sessao expirar no Supabase).
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storage: window.localStorage,
  },
});
