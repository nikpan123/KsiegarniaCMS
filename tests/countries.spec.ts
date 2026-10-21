import {debuggerStep} from '../shared/debugger-step';
import { test } from "../shared/browser-preview";
import { CountriesPage } from "../pages/countries/CountriesPage";
import { CountriesAssertions } from "../assertions/countries/CountriesAssertions";

test("Kraje", async ({ page }) => {
  const countriesPage = new CountriesPage(page);
  const assertions = new CountriesAssertions(page, countriesPage);

  await debuggerStep('Otwórz listę krajów',()=>countriesPage.open());

  await debuggerStep('Rozwiń filtry wyszukiwania',()=>countriesPage.openFilters());
  await debuggerStep('Sprawdź filtry, tabelę i przyciski listy',async()=>{
  await assertions.assertFiltersVisible();
  await assertions.assertTableVisible();
  await assertions.assertButtonsVisible();
  });
});