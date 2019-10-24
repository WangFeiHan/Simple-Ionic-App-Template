import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class CustomPreload implements PreloadingStrategy {
    /**
     * Check preload or not.
     *
     * @access [`Public`]
     *
     * @param route [`Object`] Route objects.
     * @param load [`Function`] Load page.
     *
     * @see `Route`
     * @see `Router`
     *
     * @returns [`Observable`] preload or not to preload.
     */
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if (route.data && route.data.preload) {
            console.dir(`<CustomPreload> Path: ${route.path} [load]`);
            return load();
        } else {
            console.dir(`<CustomPreload> Path: ${route.path} [pass]`);
            return of(null);
        }
    }
}