import { test } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage.js";

test.describe("SauceDemo Login Tests", () => {
  test("Successful login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
    await loginPage.assertLoginSuccessful();
  });

  test("Unsuccessful login with invalid password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "wrong_password");
    await loginPage.assertLoginFailed();
  });

  test("Unsuccessful login with locked out user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("locked_out_user", "secret_sauce");
    await loginPage.assertLoginFailed();
  });
});
