# Proposta di Consegna

Rimpiazza questo file con i tuoi elementi del progetto, allegando questo file nel tuo repo online.

## Descrizione

REHACKTOR è un'applicazione web sviluppata con React e Vite che consente agli utenti di viusualizzare giochi tramite l'integrazione con l'API di RAWG, filtrare per genere, per piattaforme e cercare titoli specifici. Gli utenti autenticati possono gestire un profilo personale, salvare giochi nei preferiti e partecipare a una chat in tempo reale per ciascun gioco. L'autenticazione e la gestione dei dati utente sono gestite tramite Supabase.

## API

API giochi: https://api.rawg.io

Backend as a Service: Supabase


## Stile

React Bootstrap CSS
CSS

## Pagine



Pagina 1 - Home page con lista GIOCHI
 Visualizza una lista di giochi con possibilità di filtro per generi, piattaforme e ricerca tramite searchbar integrata nella navabar.


Pagina 2 - Pagina dettaglio prodotto
 Mostra le informazioni dettagliate su un gioco specifico, con chat in tempo reale e toggle per aggiunta ai preferiti solo per utenti loggatti.


Pagina 3 - Pagina Registrazione utente
 Form per la creazione di un account tramite email, nome, cognome, username e password.


Pagina 4 - Pagina Login
 Accesso per utenti registrati con email e password .


Pagina 5 - Pagina Account
 Modifica profilo e visualizzazione giochi preferiti solo utenti loggati.


Pagina 6 - Pagina Ricerca
 Mostra risultati della ricerca di giochi per nome.


Pagina 7 - Pagina Genere
 Lista di giochi filtrati per genere specifico.


Pagina 8 - Pagina Piattaforme
Lista dei giochi filtrati per piattaforma 



## User Interactions

* Lista di interazioni che utenti autenticati e non posso fare nell'applicazione.

1.Utente non autenticato può scrollare sui giochi in piattaforma

2.Utente non autenticato può filtrare per nome del gioco

3.Utente non autenticato può registrarsi con email,nome, cognome , usernname e password in piattaforma

4.Utente autenticato può creare una lista di giochi favoriti

5.Utente autenticato può accedere e modificare il proprio profilo

6.Utente autenticato può caricare un'immagine avatar

7.Utente autenticato può inviare messaggi in una chat legata al gioco in tempo reale

8.Utente autenticato può accedere all'elenco dei propri giochi favoriti


## Context

SessionContext
 Fornisce globalmente la sessione utente autenticata per gestire accesso e logout

FavoritesContext
 Gestisce la lista di giochi favoriti dell'utente e ascolta aggiornamenti in tempo reale

## Librerie utilizzate

Core & Framework
 React (^19.0.0) – Per costruire l'interfaccia utente.
 React DOM (^19.0.0).
 Vite (^6.2.0) – Dev server e bundler.

Routing
 React Router (^7.4.0) – Per la gestione delle rotte.

UI & Componenti
 Bootstrap (^5.3.3).
 React Bootstrap (^2.10.9).
 React Icons (^5.5.0).
 @foxeian/react-read-more (^1.1.5) – Per troncare e mostrare contenuti "Leggi di più".

Immagini & Ottimizzazione
 react-lazy-load-image-component (^1.6.3) – Lazy loading per immagini e performance.

Autenticazione & Backend
 @supabase/supabase-js (^2.49.4) – Libreria ufficiale per interfacciarsi con Supabase.

Validazione
 Zod (^3.24.2) – Schema-based validation per i form (registrazione, login, ecc.).

Utilità
 Dayjs (^1.11.13) – Per manipolazione e formattazione delle date.


## Deployment

https://rehacktor-mario-fabrizio.vercel.app/