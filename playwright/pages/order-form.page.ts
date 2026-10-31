import type { Locator, Page } from '@playwright/test'

export class OrderFormPage {
  readonly headingLocator: Locator = this.page.getByTestId('order-form-heading')

  constructor(private readonly page: Page) {}
}
