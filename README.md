# KsiegarniaCMS
## Wymagania
WERSJA NODE - v22.13.0

## Struktura projektu
Projekt jest podzielony na kilka kluczowych katalogów i plików, z których każdy pełni określoną rolę:

- **`pages/`**: Zawiera klasy page object, które definiują strukturę i logikę nawigacji dla każdej strony w aplikacji.
  - **`base/BasePage.ts`**: Klasa bazowa dla wszystkich obiektów strony, dostarczająca wspólne metody (np. `open`, `checkElementsPresence`) oraz właściwości.
  - Podkatalogi (np. `announcements`, `callouts`, `productOptions`, `paymentMethods`): Zawierają klasy specyficzne dla danej strony (np. `AnnouncementsPage.ts`, `NewCalloutsPage.ts`).

- **`assertions/`**: Zawiera klasy asercji, które odpowiadają za logikę weryfikacji, oddzieloną od obiektów strony dla lepszej modularności.
  - Podkatalogi odzwierciedlają strukturę `pages/` (np. `announcements`, `callouts`, `productOptions`) i zawierają pliki asercji (np. `AnnouncementsAssertions.ts`, `NewCalloutsAssertions.ts`).

- **`locators/`**: Przechowuje definicje lokatorów dla wszystkich stron, zorganizowane według funkcji lub typu strony.
  - Podkatalogi (np. `announcements`, `callouts`, `productOptions`, `paymentMethods`): Zawierają pliki lokatorów (np. `announcementsLocators.ts`, `newCalloutsLocators.ts`).
  - **`commonLocators.ts`**: Definiuje wspólne lokatory (np. przyciski takie jak `createButton`, `cancelButton`) używane na wielu stronach.

- **`tests/`**: Zawiera pliki testowe napisane przy użyciu runnera testów Playwright.
  - Przykładowe pliki: `announcements.spec.ts`, `newCallouts.spec.ts`, itp., znajdujące się w głównym katalogu `tests` lub w podkatalogu, jeśli jest to potrzebne.

- **`shared/utils.ts`**: (Jeśli dotyczy) Zawiera funkcje pomocnicze (np. `checkElementPresence`, `goto`) używane przez framework. Zazwyczaj są one dziedziczone przez `BasePage`.

## Zależności
- **Playwright**: Główna biblioteka testowa, odpowiedzialna za automatyzację przeglądarki.
- **TypeScript**: Używany dla bezpieczeństwa typów i nowoczesnych funkcji JavaScript.
- **BasePage**: Wszystkie klasy strony i asercji zależą od `BasePage` dla wspólnej funkcjonalności.
- **Locators**: Klasy strony zależą od swoich odpowiednich plików lokatorów (np. `AnnouncementsPage` zależy od `announcementsLocators`).
- **Klasy asercji**: Zależą od swoich odpowiadających klas strony oraz `BasePage` dla logiki weryfikacji.
- **CommonLocators**: Używane przez wiele klas strony i asercji dla wspólnych elementów interfejsu (np. przycisków).

## Jak uruchamiać testy
1. **Wymagania wstępne**:
   - Upewnij się, że Node.js i npm są zainstalowane.
   - Zainstaluj zależności projektu, uruchamiając:
     ```bash
     npm install
     ```
   - Zainstaluj przeglądarki Playwright:
     ```bash
     npx playwright install
     ```

2. **Uruchamianie testów**:
   - Aby uruchomić wszystkie testy w trybie widocznym (z widoczną przeglądarką):
     ```bash
     npx playwright test --headed
     ```
   - Aby uruchomić konkretny plik testowy (np. `announcements.spec.ts`):
     ```bash
     npx playwright test ./tests/announcements.spec.ts --headed
     ```
   - Aby uruchomić testy w trybie bezgłowym:
     ```bash
     npx playwright test
     ```
   - Dodaj dodatkowe opcje w razie potrzeby (np. `--grep` do filtrowania testów po tytule, `--reporter` dla niestandardowego raportowania).

3. **Konfiguracja**:
   - Konfiguracja testów jest zazwyczaj zarządzana w pliku `playwright.config.ts`. Upewnij się, że jest poprawnie skonfigurowany z odpowiednim bazowym URL-em, ustawieniami projektu i raportami, jeśli są dostosowane.

## Gdzie szukać
- **Logika strony**: Sprawdź katalog `pages/` dla klas specyficznych dla strony (np. `pages/announcements/AnnouncementsPage.ts`).
- **Asercje**: Szukaj w katalogu `assertions/` dla logiki weryfikacji (np. `assertions/announcements/AnnouncementsAssertions.ts`).
- **Lokatory**: Znajdź definicje lokatorów w katalogu `locators/` (np. `locators/announcements/announcementsLocators.ts` dla lokatorów specyficznych dla strony lub `locators/commonLocators.ts` dla wspólnych elementów).
- **Testy**: Przejrzyj pliki testowe w katalogu `tests/` (np. `tests/announcements.spec.ts`).
- **Funkcje pomocnicze**: Jeśli używane, funkcje pomocnicze znajdują się w `shared/utils.ts`.
- **Podstawowa funkcjonalność**: Fundament projektu znajduje się w `pages/base/BasePage.ts`.

## Najlepsze praktyki
- **Modularność**: Unikaj dodawania logiki weryfikacyjnej bezpośrednio w klasach strony; zamiast tego używaj klas asercji.
- **Utrzymanie lokatorów**: Aktualizuj lokatory w ich odpowiednich plikach i ponownie używaj wspólnych lokatorów, gdzie to możliwe.
- **Organizacja testów**: Nazywaj pliki testowe tak, aby odzwierciedlały testowaną stronę lub funkcję (np. `newCallouts.spec.ts`).
- **Obsługa błędów**: Upewnij się, że `BasePage` zawiera solidną obsługę błędów dla metod takich jak `checkElementsPresence`.

## Wkład w projekt
- Aby dodać nową stronę:
  1. Utwórz nowy plik w `pages/` (np. `pages/newFeature/NewFeaturePage.ts`).
  2. Zdefiniuj lokatory w `locators/newFeature/newFeatureLocators.ts`.
  3. Utwórz klasę asercji w `assertions/newFeature/NewFeatureAssertions.ts`.
  4. Napisz testy w `tests/newFeature.spec.ts`.
- Aktualizuj `BasePage` lub `commonLocators`, jeśli potrzebne są nowe wspólne funkcjonalności lub elementy.
- Uruchom testy po zmianach, aby upewnić się, że wszystko działa poprawnie.

## Rozwiązywanie problemów
- **Niepowodzenia testów**: Sprawdź definicje lokatorów lub zmiany w interfejsie aplikacji.
- **Problemy ze ścieżkami**: Zweryfikuj, czy ścieżki importów zgadzają się ze strukturą Twojego projektu.
- **Problemy z przeglądarką**: Upewnij się, że przeglądarki Playwright są zainstalowane i kompatybilne z Twoją wersją Node.js.
