# Pokrycie widoków CMS

Wzorzec odczytany 19 października 2026 r. Zapisano 153 typy widoków oraz kontrolę 51 pozycji menu. Konkretnych rekordów nie zapisano w testach; widoki rekordów odnajdują aktualny odnośnik na liście.

Zestaw sprawdza HTTP, obecność treści, nagłówki i kolumny tabel, widoczne pola i przyciski, filtry i zakładki oraz błędy JavaScript. Nie wysyła formularzy; żądania modyfikujące dane są blokowane. Jedyny dozwolony POST aplikacji to odczyt podglądu edytora MonsieurBiz (`render_elements`), po weryfikacji obsługi w kodzie wtyczki. Zewnętrzna telemetria jest blokowana i opisywana w diagnostyce. Dane w wierszach, daty, liczniki i wartości pól nie są wzorcem.

## Uruchamianie

- Panel: „Testy po aktualizacji”, następnie „Uruchom wybrane”.
- `npm run test:views` — struktura w Chromium, dwóch pracowników.
- `npm run test:views:assets` — dodatkowo wymaga poprawnego ładowania wszystkich zasobów, w tym obrazów.
- `npm run test:views -- --project=firefox` — inna przeglądarka.

## Wynik odniesienia i ograniczenia

W bieżącym CMS formularz dodawania metody wysyłki oraz przykładowa edycja metody wysyłki zwracają HTTP 500. Testy tych widoków oczekują poprawnej odpowiedzi i pozostają czerwone do naprawy aplikacji. Miniatury części obrazów już teraz zwracają HTTP 500; podstawowy zestaw dołącza tę informację w diagnostyce i uwagach, a tryb zasobów zgłasza błąd. Żaden z tych problemów nie jest akceptowany jako nowy poprawny wzorzec.

Widok edycji/szczegółów jest reprezentowany przez pierwszy dostępny rekord pasujący do odnośnika. Brak rekordu oznacza pominięcie z uzasadnieniem. Formularze zawierające zależne od danych kolekcje nie wymagają konkretnej liczby ich elementów. Pusta lista musi pokazać komunikat; nie można wtedy potwierdzić kolumn tabeli. Katalog nie obejmuje ekranów niedostępnych dla użytego konta, nieodkrywalnych stanów procesów ani wszystkich kombinacji danych. Aktywacja PayPal sprawdza tylko lokalny odnośnik do dostawcy, bez przechodzenia onboardingu.

Zachowaj ten wzorzec przed aktualizacją. Po aktualizacji uruchom ten sam zestaw na odpowiadającym środowisku i porównaj raporty. Nie nadpisuj wzorca na podstawie nowej wersji przed sprawdzeniem różnic.

## Zweryfikowany przebieg referencyjny

19 października 2026 r., Chromium: **154 wykonane, 152 zaliczone, 2 niezaliczone, 0 pominiętych**. Czas: 7 min 32 s. Niepowodzenia dotyczą wyłącznie istniejącego HTTP 500 w dodawaniu i edycji metody wysyłki. Zestaw działa w trybie struktury; błędy obrazów są dodatkowymi uwagami i będą błędami w trybie zasobów.

Raport referencyjny jest zapisany lokalnie w historii CMS i zaimportowany do Centrum testów. Identyfikator przebiegu: `337c597c-624c-46bf-9411-a38073d4d042`. Zawartość raportów, ślady, sesje i dane środowiska pozostają poza repozytorium. Przebiegi robocze z dopracowywania testów pozostały w historii; powyższy identyfikator wskazuje końcowy, pełny przebieg.

## Widoki

| Widok | Adres / wyszukiwanie rekordu | Tabele | Pola (z filtrami i zakładkami) | Zakładki / filtry | HTTP podczas przeglądu |
|---|---|---:|---:|---:|---:|
| Szkolenia dla rad | /academy/admin/closed-courses | 1 | 7 | 1 | 200 |
| Prowadzący | /academy/admin/consultants | 1 | 7 | 1 | 200 |
| Szkolenia dla nauczycieli | /academy/admin/paid-courses | 1 | 9 | 1 | 200 |
| Pakiety szkoleń | /academy/course-package | 1 | 16 | 1 | 200 |
| Nowy pakiet szkoleń | /academy/course-package/new | 0 | 0 | 0 | 200 |
| Komunikaty | /admin/announcements | 1 | 2 | 1 | 200 |
| Nowy komunikat | /admin/announcements/new | 0 | 6 | 0 | 200 |
| Labelki | /admin/callouts | 1 | 0 | 0 | 200 |
| Nowa labelka Zarządzaj labelkami | /admin/callouts/new | 0 | 4 | 0 | 200 |
| Inne konfiguracje | /admin/configurations | 0 | 1 | 0 | 200 |
| Zaplanowane zadania | /admin/cron/list | 1 | 0 | 0 | 200 |
| Payload synchronizacji DPD | /admin/dpd-product-sync-payloads | 1 | 0 | 0 | 200 |
| Procesy eksportu | /admin/exporters | 0 | 0 | 0 | 200 |
| Import prod. powiązanych | /admin/import-products-association | 0 | 1 | 0 | 200 |
| Raport handlowy | /admin/legacy-trade-raport | 0 | 10 | 0 | 200 |
| Wyszukiwarka kodów | /admin/orders-by-codes | 1 | 2 | 0 | 200 |
| Aktualizacja cen | /admin/price-importer | 0 | 3 | 0 | 200 |
| Promotorzy | /admin/promoter-list | 1 | 0 | 0 | 200 |
| Śledzenie kolejki | /admin/queue-tracker | 1 | 0 | 0 | 200 |
| Regulaminy | /admin/regulations | 1 | 0 | 0 | 200 |
| Wnioski o zwrot | /admin/return-requests | 1 | 7 | 1 | 200 |
| Oferty specjalne | /admin/special-offers | 1 | 6 | 1 | 200 |
| Nowa oferta specjalna — podstawowa | /admin/special-offers/new/basic | 1 | 24 | 6 | 200 |
| Nowa oferta specjalna — oparta na listach | /admin/special-offers/new/list_based | 1 | 21 | 6 | 200 |
| Nowa oferta specjalna — N+ | /admin/special-offers/new/n_plus | 1 | 21 | 6 | 200 |
| Nowa oferta specjalna — oparta na produktach | /admin/special-offers/new/product_based | 1 | 22 | 6 | 200 |
| Nowa oferta specjalna — zestaw produktów | /admin/special-offers/new/product_set | 1 | 22 | 6 | 200 |
| Synchronizacja cech | /admin/synchronized-attributes-list | 1 | 0 | 0 | 200 |
| Raport handlowy (NOWY) | /admin/trade-raport | 0 | 10 | 0 | 200 |
| Promocje katalogowe | /catalog-promotions | 1 | 0 | 0 | 200 |
| New catalog promotion Zarządzaj rabatami w katalogu produktów | /catalog-promotions/new | 0 | 15 | 0 | 200 |
| Kanały | /channels | 1 | 3 | 1 | 200 |
| Nowy kanał Skonfiguruj kanały dostępne w twoim sklepie | /channels/new | 0 | 31 | 0 | 200 |
| Kraje | /countries | 1 | 3 | 1 | 200 |
| Nowy kraj Zarządzaj miejscami docelowymi wysyłek | /countries/new | 0 | 2 | 0 | 200 |
| Waluty | /currencies | 1 | 2 | 1 | 200 |
| Nowa waluta Zarządzaj walutami dostępnymi w sklepie | /currencies/new | 0 | 1 | 0 | 200 |
| Grupy | /customer-groups | 1 | 2 | 1 | 200 |
| Grupy klientów Zarządzaj grupami klientów | /customer-groups/new | 0 | 2 | 0 | 200 |
| Klienci | /customers | 1 | 2 | 1 | 200 |
| Nowy Klient Zarządzaj klientami | /customers/new | 0 | 9 | 0 | 200 |
| Panel | / | 2 | 0 | 0 | 200 |
| Raport dla księgowości | /empik/report-generator | 0 | 1 | 0 | 200 |
| Kursy wymiany walut | /exchange-rates | 0 | 1 | 1 | 200 |
| Nowy kurs wymiany Zarządzaj kursami wymiany walut | /exchange-rates/new | 0 | 3 | 0 | 200 |
| Zapasy | /inventory | 1 | 6 | 1 | 200 |
| Ustawienia regionalne | /locales | 1 | 2 | 1 | 200 |
| Nowe ustawienia regionalne Zarządzaj językami dostępnymi w sklepie | /locales/new | 0 | 1 | 0 | 200 |
| Zamówienia | /orders | 1 | 23 | 1 | 200 |
| Metody płatności | /payment-methods | 1 | 3 | 1 | 200 |
| Nowa metoda płatności — offline | /payment-methods/new/offline | 0 | 9 | 0 | 200 |
| Nowa metoda płatności — PayPal Express | /payment-methods/new/paypal_express_checkout | 0 | 13 | 0 | 200 |
| Nowa metoda płatności — PayU | /payment-methods/new/payu | 0 | 14 | 0 | 200 |
| Nowa metoda płatności — Stripe Checkout | /payment-methods/new/stripe_checkout | 0 | 11 | 0 | 200 |
| Enable PayPal | /payment-methods/new/sylius.pay_pal | 0 | 0 | 0 | 200 |
| Płatności | /payments | 1 | 10 | 1 | 200 |
| Typy powiązań | /product-association-types | 1 | 4 | 1 | 200 |
| Nowe powiązanie produktu Zarządzaj powiązaniami Twojego produktu | /product-association-types/new | 0 | 2 | 0 | 200 |
| Cechy | /product-attributes | 1 | 3 | 1 | 200 |
| Nowy atrybut produktu — pole wyboru | /product-attributes/checkbox/new | 0 | 5 | 0 | 200 |
| Nowy atrybut produktu — data | /product-attributes/date/new | 0 | 6 | 0 | 200 |
| Nowy atrybut produktu — data i godzina | /product-attributes/datetime/new | 0 | 6 | 0 | 200 |
| Nowy atrybut produktu — liczba całkowita | /product-attributes/integer/new | 0 | 5 | 0 | 200 |
| Nowy atrybut produktu — procent | /product-attributes/percent/new | 0 | 5 | 0 | 200 |
| Nowy atrybut produktu — lista wyboru | /product-attributes/select/new | 0 | 9 | 0 | 200 |
| Nowy atrybut produktu — tekst | /product-attributes/text/new | 0 | 7 | 0 | 200 |
| Nowy atrybut produktu — pole tekstowe | /product-attributes/textarea/new | 0 | 5 | 0 | 200 |
| Warianty | /product-options | 1 | 2 | 1 | 200 |
| Nowa opcja produktu Zarządzaj opcjami konfiguracji produktów | /product-options/new | 0 | 3 | 0 | 200 |
| Recenzje produktu | /product-reviews | 0 | 2 | 1 | 200 |
| Produkty | /products | 1 | 6 | 1 | 200 |
| Nowy produkt: Aplikacja z wariantami | /products/new/APP | 1 | 17 | 7 | 200 |
| Nowy produkt: Kompozytor z wariantami | /products/new/COMPOSER | 1 | 16 | 7 | 200 |
| Nowy produkt: Aplikacja | /products/new/simple/APP | 1 | 30 | 9 | 200 |
| Nowy produkt: Książka | /products/new/simple/BOOK | 1 | 31 | 9 | 200 |
| Nowy produkt: Kompozytor | /products/new/simple/COMPOSER | 1 | 30 | 9 | 200 |
| Nowy produkt: Ebook | /products/new/simple/EBOOK | 1 | 29 | 9 | 200 |
| Nowy produkt: Multipodręcznik | /products/new/simple/MHB | 1 | 29 | 9 | 200 |
| Nowy produkt: Wykład online | /products/new/simple/VIDEO | 1 | 30 | 9 | 200 |
| Promocje koszykowe | /promotions | 1 | 6 | 1 | 200 |
| New cart promotion Zarządzaj rabatami i kampaniami promocyjnymi | /promotions/new | 0 | 16 | 0 | 200 |
| Szkolenia dla rad — edycja | /academy/admin/closed-courses → Edytuj | 1 | 15 | 6 | 200 |
| Prowadzący — edycja | /academy/admin/consultants → Edytuj | 0 | 11 | 0 | 200 |
| Szkolenia dla nauczycieli — edycja | /academy/admin/paid-courses → Edytuj | 1 | 23 | 7 | 200 |
| Pakiety szkoleń — edycja | /academy/course-package → Edytuj | 1 | 1 | 0 | 200 |
| Pakiety szkoleń — szczegóły | /academy/course-package → Pokaż | 7 | 1 | 0 | 200 |
| Komunikaty — edycja | /admin/announcements → Edytuj | 0 | 7 | 0 | 200 |
| Labelki — edycja | /admin/callouts → Edytuj | 0 | 4 | 0 | 200 |
| Wnioski o zwrot — szczegóły | /admin/return-requests → Pokaż | 2 | 0 | 0 | 200 |
| Oferty specjalne — edycja | /admin/special-offers → Edytuj | 1 | 24 | 6 | 200 |
| Promocje katalogowe — szczegóły | /catalog-promotions → Pokaż | 3 | 0 | 0 | 200 |
| Promocje katalogowe — edycja | /catalog-promotions → Edytuj | 0 | 15 | 0 | 200 |
| Kanały — edycja | /channels → Edytuj | 0 | 31 | 0 | 200 |
| Kraje — edycja | /countries → Edytuj | 0 | 2 | 0 | 200 |
| Waluty — edycja | /currencies → Edytuj | 0 | 1 | 0 | 200 |
| Grupy — edycja | /customer-groups → Edytuj | 0 | 2 | 0 | 200 |
| Klienci — szczegóły | /customers → Pokaż | 0 | 0 | 0 | 200 |
| Klienci — pokaż zamówienia | /customers → Pokaż → Pokaż zamówienia | 0 | 23 | 1 | 200 |
| Klienci — edycja | /customers → Edytuj | 0 | 9 | 0 | 200 |
| Ustawienia regionalne — edycja | /locales → Edytuj | 0 | 1 | 0 | 200 |
| Zamówienia — szczegóły | /orders → Pokaż | 3 | 0 | 0 | 200 |
| Zamówienia — historia | /orders → Pokaż → Historia | 0 | 0 | 0 | 200 |
| Metody płatności — edycja | /payment-methods → Edytuj | 0 | 14 | 0 | 200 |
| Typy powiązań — edycja | /product-association-types → Edytuj | 0 | 2 | 0 | 200 |
| Cechy — edycja | /product-attributes → Edytuj | 0 | 14 | 0 | 200 |
| Warianty — edycja | /product-options → Edytuj | 0 | 3 | 0 | 200 |
| Produkty — szczegóły | /products → Szczegóły | 5 | 0 | 1 | 200 |
| Produkty — edycja | /products → Edytuj | 2 | 31 | 9 | 200 |
| Produkty — wylistuj warianty | /products → Edytuj → Wylistuj warianty | 1 | 4 | 1 | 200 |
| Produkty — wylistuj warianty — utwórz | /products → Edytuj → Wylistuj warianty → Utwórz | 2 | 28 | 6 | 200 |
| Produkty — wylistuj warianty — edytuj | /products → Edytuj → Wylistuj warianty → Edytuj | 2 | 28 | 6 | 200 |
| Nowy wariant produktu | /products → Utwórz | 2 | 28 | 6 | 200 |
| Zapasy — edycja | /inventory → Edytuj | 1 | 18 | 5 | 200 |
| Nowy kupon promocji | /promotions → Utwórz | 0 | 5 | 0 | 200 |
| Promocje koszykowe — edycja | /promotions → Edytuj | 0 | 16 | 0 | 200 |
| Promocje koszykowe — zarządzaj kuponami | /promotions → Edytuj → Zarządzaj kuponami | 1 | 2 | 1 | 200 |
| Promocje koszykowe — zarządzaj kuponami — utwórz | /promotions → Edytuj → Zarządzaj kuponami → Utwórz | 0 | 5 | 0 | 200 |
| Promocje koszykowe — zarządzaj kuponami — edytuj | /promotions → Edytuj → Zarządzaj kuponami → Edytuj | 0 | 5 | 0 | 200 |
| Przesyłki — szczegóły | /shipments → Pokaż | 1 | 0 | 0 | 200 |
| Kategorie wysyłki — edycja | /shipping-categories → Edytuj | 0 | 3 | 0 | 200 |
| Sposób wysyłki — edycja | /shipping-methods → Edytuj | 0 | 0 | 0 | 500 |
| Kategorie podatkowe — edycja | /tax-categories → Edytuj | 0 | 3 | 0 | 200 |
| Stawki podatkowe — edycja | /tax-rates → Edytuj | 0 | 7 | 0 | 200 |
| Nowa podtaksonomia | /taxons/new → Utwórz | 0 | 6 | 0 | 200 |
| Taksonomie — edycja | /taxons/new → Edytuj | 0 | 6 | 0 | 200 |
| Administratorzy — edycja | /users → Edytuj | 0 | 7 | 0 | 200 |
| Hurtownicy — edycja | /wholesale/admin/wholesaler → Edytuj | 1 | 3 | 0 | 200 |
| Hurtownicy — adresy — utwórz | /wholesale/admin/wholesaler → Edytuj → Adresy → Utwórz | 0 | 9 | 0 | 200 |
| Hurtownicy — adresy | /wholesale/admin/wholesaler → Edytuj → Adresy | 0 | 0 | 0 | 200 |
| Hurtownicy — rabaty | /wholesale/admin/wholesaler → Edytuj → Rabaty | 0 | 0 | 0 | 200 |
| Hurtownicy — zamówienia | /wholesale/admin/wholesaler → Edytuj → Zamówienia | 0 | 0 | 0 | 200 |
| Hurtownicy — ustawienia hurtownika | /wholesale/admin/wholesaler → Edytuj → Ustawienia hurtownika | 0 | 3 | 0 | 200 |
| Strefy — edycja | /zones → Edytuj | 0 | 4 | 0 | 200 |
| Redirects | /redirects | 0 | 2 | 1 | 200 |
| New redirect Manage redirects | /redirects/new | 0 | 6 | 0 | 200 |
| Przesyłki | /shipments | 1 | 4 | 1 | 200 |
| Kategorie wysyłki | /shipping-categories | 1 | 2 | 1 | 200 |
| Nowa kategoria wysyłki Zarządzaj kategoriami wysyłki dla Twojego sklepu | /shipping-categories/new | 0 | 3 | 0 | 200 |
| Sposób wysyłki | /shipping-methods | 1 | 4 | 1 | 200 |
| Nowa metoda wysyłki | /shipping-methods/new | 0 | 0 | 0 | 500 |
| Powiadomienia o dostępności | /subscriptions | 1 | 11 | 1 | 200 |
| Kategorie podatkowe | /tax-categories | 1 | 2 | 1 | 200 |
| Nowa kategoria podatkowa Zarządzaj opodatkowaniem produktów | /tax-categories/new | 0 | 3 | 0 | 200 |
| Stawki podatkowe | /tax-rates | 1 | 2 | 1 | 200 |
| Nowa stawka podatkowa Zarządzaj opodatkowaniem produktów | /tax-rates/new | 0 | 7 | 0 | 200 |
| Taksonomie | /taxons/new | 0 | 6 | 0 | 200 |
| Administratorzy | /users | 1 | 3 | 1 | 200 |
| Nowy administrator Zarządzaj użytkownikami mającymi dostęp do panelu administracyjnego | /users/new | 0 | 7 | 0 | 200 |
| Hurtownicy | /wholesale/admin/wholesaler | 1 | 8 | 1 | 200 |
| Strefy | /zones | 1 | 4 | 1 | 200 |
| Nowa strefa Zarządzaj strefami geograficznymi | /zones/country/new | 0 | 4 | 0 | 200 |
| Nowa strefa Zarządzaj strefami geograficznymi | /zones/province/new | 0 | 4 | 0 | 200 |
| Nowa strefa Zarządzaj strefami geograficznymi | /zones/zone/new | 0 | 4 | 0 | 200 |
