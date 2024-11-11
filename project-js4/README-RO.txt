# React Fit - Website gestionare abonament fitness

Aplicatie in React - website functional - al unei sali de sport - in care te poti loga si activa sau dezactiva un abonament de fitness

## Cuprins
- [Prezentare generala](#prezentare-generala)
  - [Tehnologii folosite](#tehnologii-folosite)
- [Instalare si rulare](#instalare-si-rulare)
  - [Cerinte](#cerinte)
  - [Pasi pentru instalare](#pasi-pentru-instalare)
- [Structura proiectului](#structura-proiectului)
  - [Explicatie Structura](#explicatie-structura)
- [Functionalitati principale](#functionalitati-principale)
- [Licenta](#licenta)
  - [Permisiuni](#permisiuni)
  - [Limitari](#limitari)
  - [Contact](#contact)

### Prezentare generala

Am decis sa dezvolt o aplicatie care sa faciliteze gestionarea abonamentelor la o sala de sport. 

Aceasta aplicatie permite utilizatorilor sa se logheze, sa activeze sau sa dezactiveze abonamentele de fitness cu usurinta, oferind o experienta intuitiva si eficienta. 

Am ales sa creez acest proiect ca parte a lucrarii de diploma pentru a demonstra abilitatile acumulate in timpul studiilor, dar si pentru a aborda o problema reala cu care se confrunta multi oameni: accesul facil la servicii de sanatate si fitness.

### Tehnologii folosite

- React
- JSON Server
- SCSS

Am optat pentru React pentru a construi interfata aplicatiei datorita eficientei sale si a flexibilitatii in crearea componentelor reutilizabile. JSON Server imi permite sa simulez un backend, oferind o modalitate rapida de gestionare a datelor utilizatorilor. De asemenea, am integrat SCSS pentru a asigura un design atractiv si responsive, astfel incat aplicatia sa fie accesibila pe diferite dispozitive.

### Instalare si rulare

#### Cerinte
- Node.js
- NPM
- JSON Server (pentru mock API)

#### Pasi pentru instalare:

1. Cloneaza repository-ul:
   ```
   git clone https://github.com/nume-utilizator/nume-proiect.git
   ```

2. Acceseaza folderul proiectului:
   ```
   cd nume-proiect
   ```

3. Instaleaza dependentele:
   ```
   npm install
   ```

4. Acceseaza folderul proiectului JSON-ului:
   ```
   cd nume-json
   ```

5. Ruleaza JSON Server pentru a simula backend-ul:
   ```
   json-server users.json --port=3002
   ```

6. Ruleaza aplicatia React:
   ```
   npm start
   ```

Acum site-ul ar trebui sa fie accesibil la `http://localhost:3000`, iar JSON Server la `http://localhost:3002`.

### Structura proiectului

```
PROIECT_FINALE/
│
├── dbs/
│   └── users.json
│
├── project-js4/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── website/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
│
└── README.md
```

#### Explicatie Structura:

- **dbs/**: Contine baza de date locala `users.json` care stocheaza utilizatorii.
- **project-js4/**: Folderul principal al aplicatiei React.
  - **src/**: Codul sursa pentru aplicatia React, impartit in componente, pagini si alte resurse.
    - **components/**: Componentele reutilizabile din aplicatie.
    - **pages/**: Paginile principale ale aplicatiei.
    - **assets/**: Resursele statice (imagini, stiluri, etc.).
    - **App.js**: Componenta principala a aplicatiei.
    - **index.js**: Punctul de intrare in aplicatie.

### Functionalitati principale

1. Logare/inregistrare utilizator
2. Activare sau dezactivare abonament fitness
3. Vizualizare status abonament
4. Management cont personal

### Licenta

Acest proiect este protejat de drepturile de autor. Folosirea, copierea sau modificarea codului sursa fara permisiunea expresa a autorului nu este permisa.

#### Permisiuni

- Utilizarea acestui cod este permisa exclusiv in scopuri personale si educationale.
- Nu este permisa vanzarea, inchirierea sau redistribuirea codului sursa sau a oricarei parti a acestuia in scopuri comerciale fara acordul scris al autorului.

#### Limitari

- Aceasta licenta nu ofera nicio garantie cu privire la functionarea codului. Autorul nu este responsabil pentru eventuale daune cauzate de utilizarea acestuia.
- Orice utilizare comerciala a acestui cod fara permisiune poate atrage actiuni legale.

#### Contact

Pentru intrebari sau cereri de permisiune, va rugam sa ne contactati la adresa de email: raducanu_gabriell@yahoo.com.