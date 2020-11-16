import { XContactCard } from './contact-card.component';
import { XContactDetails } from './contact-details.component';
import { XPageHeader } from './page-header.component';
import { XPaginationComponent } from './pagination.component';

export function initializeWebComponents() {
    // Register Web components
    customElements.define('x-page-header', XPageHeader as any);
    customElements.define('x-contact-card', XContactCard as any);
    customElements.define('x-contact-details', XContactDetails as any);
    customElements.define('x-pagination', XPaginationComponent as any);

    // Create a new event
    const WebComponentsReady = new CustomEvent('CustomWebComponentsReady', {
        cancelable: true,
    });
    document.body.dispatchEvent(WebComponentsReady);
}