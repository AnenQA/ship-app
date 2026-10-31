import { test, expect } from '@playwright/test'
import { LoginPage, type LoginFormData } from '../pages/login.page'
import { OrderFormPage } from '../pages/order-form.page'
import { SidebarComponent } from '../components/sidebar.component'

test.describe('Login', () => {
  test('existing user logs in and lands on the order form', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const orderFormPage = new OrderFormPage(page)
    const sidebar = new SidebarComponent(page)

    const credentials: LoginFormData = {
      email: 'ksa@qacart.com',
      password: 'Test@1234',
    }
    const fullName: string = 'Khalid Al-Otaibi'

    await loginPage.goto()
    await loginPage.fillForm(credentials)
    await loginPage.submit()

    await expect(page).toHaveURL('/')
    await expect(orderFormPage.headingLocator).toHaveText('Create a New Shipment')
    await expect(sidebar.userNameLocator).toHaveText(fullName)
    await expect(sidebar.userEmailLocator).toHaveText(credentials.email)
  })
})
