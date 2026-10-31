import type { Locator, Page } from '@playwright/test'

export class ShipmentsPage {
  readonly successMessageLocator: Locator = this.page.getByTestId('shipments-success-message')
  readonly receiverNameLocator: Locator = this.page.getByTestId('shipments-receiver-name')

  constructor(private readonly page: Page) {}
}
