const SEPARATE = '@#$&';

/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage
 */
export class Storage {
    /**
     * For setting value in local storage.
     *
     * @access [`Public`]
     *
     * @param key [`String`] Key of the data.
     * @param value [`String`] Recorded data.
     *
     * @returns [`Void`]
     */
    public setValue(key: string, value: string): void {
        window.localStorage.setItem(key, value);
    }

    /**
     * To get value from local storage.
     *
     * @access [`Public`]
     *
     * @param key [`String`] Key of the data.
     *
     * @returns [`String`]
     */
    public getValue(key: string): string {
        return window.localStorage.getItem(key);
    }

    /**
     * For setting object in local storage.
     *
     * @access [`Public`]
     *
     * @param key [`String`] Key of the data.
     * @param object [`Object`] Recorded data.
     *
     * @returns [`Void`]
     */
    public setObject(key: string, object: object): void {
        window.localStorage[key] = JSON.stringify(object);
    }

    /**
     * To get object from local storage.
     *
     * @access [`Public`]
     *
     * @param key [`String`] Key of the data.
     *
     * @returns [`Object`]
     */
    public getObject(key: string): object {
        return JSON.parse(window.localStorage[key] || '{}');
    }

    /**
     * To remove object or value from local storage.
     *
     * @access [`Public`]
     *
     * @param key [`String`] Key of the data.
     *
     * @returns [`Void`]
     */
    public remove(key: string): void {
        window.localStorage.removeItem(key);
    }

    /**
     * To clear all local storage.
     *
     * @access [`Public`]
     *
     * @returns [`Void`]
     */
    public clear(): void {
        window.localStorage.clear();
    }
}
