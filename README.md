# Księgarnia CMS

Automatyczne testy panelu administracyjnego Sylius i lokalny panel QA, połączony z Centrum testów. Projekt zawiera 75 scenariuszy interfejsu, wykonywanych w Chromium, Firefox lub WebKit. Większość sprawdza widoczność formularzy, filtrów i kolumn; ich zaliczenie nie potwierdza wszystkich procesów biznesowych.

## Przygotowanie

Wymagane Node.js 22.13 lub nowszy oraz dostęp do testowanego środowiska (w razie potrzeby VPN).

```powershell
npm ci
npx playwright install
Copy-Item .env.example .env
```

Uzupełnij `.env`: `BASE_URL` (adres panelu, np. `https://example.com/admin/`), `USER_NAME`, `PASSWORD` oraz opcjonalnie `X_TEST_TOKEN`. Plik `.env`, sesja `auth.json`, raporty, logi i lokalna historia są ignorowane przez Git. Nie dodawaj ich do repozytorium. Uruchom ponownie panel po zmianie konfiguracji.

## Panel testów

Uruchom **KsiegarniaCMS.cmd** albo `npm start` i otwórz http://127.0.0.1:4181.

Panel ma wspólny układ z Centrum testów: przegląd, wyszukiwarkę scenariuszy, wybór przeglądarki, tryb z widocznym oknem, postęp, logi, historię i raporty Playwright. Zaznacz scenariusze i wybierz „Uruchom wybrane”. Otwarcie panelu nie uruchamia testów. Panel wykonuje jeden przebieg jednocześnie, z jednym pracownikiem Playwright. Lokalne blokady chronią również przed drugim panelem; bezpośrednie uruchomienia CLI pozostają osobną ścieżką.

Historia znajduje się w `.cms/history.json`, raporty w `.cms/reports/<id>`, a artefakty w `.cms/artifacts/<id>`. Nie usuwaj ich, jeśli korzystasz z przypiętych raportów w Centrum. Przed kopią zapasową zakończ uruchomienia i zamknij panel; zachowaj `.cms` osobno, poza GitHubem. Raporty mogą zawierać dane środowiska, dlatego są dostępne tylko lokalnie.

## Centrum testów

W sąsiednim folderze `../Centrum-testow` dodano integrację CMS: katalog scenariuszy, historię uruchomień, panel wbudowany oraz scenariusze i dowody raportów w zgłoszeniach Redmine. Launcher Centrum uruchamia cztery panele, w tym CMS na porcie 4181. Dla innej lokalizacji ustaw `cmsPath` w `projects.local.json` Centrum lub zmienną `TEST_CENTER_CMS`. Kod integracji Centrum pozostaje w jego własnym repozytorium.

## Polecenia

| Polecenie | Działanie |
|---|---|
| `npm start` | Lokalny panel CMS |
| `npm test` | Testy CMS we wszystkich trzech przeglądarkach |
| `npm run test:chromium` | Testy CMS tylko w Chromium |
| `npm run test:ui` | Wbudowany interfejs Playwright |
| `npm run test:headed` | Testy z widoczną przeglądarką |
| `npm run test:list` | Wczytanie i lista testów bez logowania do CMS |
| `npm run report` | Raport z ostatniego uruchomienia CLI |
| `npm run typecheck` | Kontrola TypeScript |
| `npm run test:unit` | Testy panelu na lokalnych danych próbnych |
| `node dashboard/ui-check.mjs` | Sprawdzenie UI w lokalnym Edge, bez testów CMS |

Raporty uruchomień z panelu otwieraj z jego historii. Testy panelu wykorzystują izolowany proces próbny i nie łączą się z CMS; potwierdzenie działania scenariuszy biznesowych wymaga osobnego wykonania na dostępnym środowisku.

## Struktura

- `tests/` — scenariusze Playwright.
- `pages/` i `locators/` — operacje na stronach i selektory Syliusa.
- `assertions/` — asercje z nazwanymi krokami w raporcie.
- `config/` i `shared/` — walidacja środowiska, logowanie i wspólne funkcje.
- `dashboard/` — lokalny serwer panelu, UI i testy jego API.

Logowanie sprawdza opuszczenie formularza przed zapisaniem sesji i zawsze zamyka przeglądarkę przygotowawczą. Nieudane testy zachowują ślady i zrzuty ekranu. Poprzednia historia GitLaba została zachowana lokalnie w ignorowanym folderze `.git-gitlab-backup`; nie jest częścią historii GitHuba.
