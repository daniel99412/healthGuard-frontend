import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAddressCard, faAnglesDown, faAnglesUp, faBaby, faCalendarDays, faChevronDown, faChevronUp, faDroplet, faEye, faGaugeHigh, faHeartPulse, faInbox, faInfo, faLungs, faMoon, faPencil, faPlus, faRulerVertical, faSearch, faStethoscope, faSun, faThermometer, faUser, faUserShield, faWeightHanging } from '@fortawesome/free-solid-svg-icons';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
        provideHttpClient(withFetch()),
        provideAnimationsAsync(),
        providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } } }),
        {
            provide: FaIconLibrary,
            useFactory: () => {
                const lib = new FaIconLibrary();
                lib.addIcons(
                    faSun,
                    faMoon,
                    faCalendarDays,
                    faInbox,
                    faUser,
                    faWeightHanging,
                    faRulerVertical,
                    faHeartPulse,
                    faGaugeHigh,
                    faThermometer,
                    faLungs,
                    faDroplet,
                    faStethoscope,
                    faPlus,
                    faEye,
                    faPencil,
                    faSearch,
                    faAddressCard,
                    faChevronDown,
                    faChevronUp,
                    faBaby,
                    faUserShield,
                    faAnglesDown,
                    faAnglesUp
                );
                return lib;
            }
        }
    ]
};
