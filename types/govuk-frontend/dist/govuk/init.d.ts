import { type AccordionConfig } from "./components/accordion/accordion.js";
import { type ButtonConfig } from "./components/button/button.js";
import { type CharacterCountConfig } from "./components/character-count/character-count.js";
import { type ErrorSummaryConfig } from "./components/error-summary/error-summary.js";
import { type ExitThisPageConfig } from "./components/exit-this-page/exit-this-page.js";
import { type NotificationBannerConfig } from "./components/notification-banner/notification-banner.js";
import { type PasswordInputConfig } from "./components/password-input/password-input.js";

export interface CompatibleClass {
    new(...args: any[]): any;
    defaults?: object;
    moduleName: string;
}

/**
 * Config for all components via `initAll()`
 */
export interface Config {
    /**
     * - Accordion config
     */
    accordion?: AccordionConfig | undefined;

    /**
     * - Button config
     */
    button?: ButtonConfig | undefined;

    /**
     * - Character Count config
     */
    characterCount?: CharacterCountConfig | undefined;

    /**
     * - Error Summary config
     */
    errorSummary?: ErrorSummaryConfig | undefined;

    /**
     * - Exit This Page config
     */
    exitThisPage?: ExitThisPageConfig | undefined;

    /**
     * - Notification Banner config
     */
    notificationBanner?: NotificationBannerConfig | undefined;

    /**
     * - Password input config
     */
    passwordInput?: PasswordInputConfig | undefined;
}

/**
 * Component config keys, e.g. `accordion` and `characterCount`
 */
export type ConfigKey = keyof Config;

/**
 * Initialise all components
 *
 * Use the `data-module` attributes to find, instantiate and init all of the
 * components provided as part of GOV.UK Frontend.
 *
 * @param {Config & { scope?: Element }} [config] - Config for all components (with optional scope)
 */
export function initAll(
    config?: Config & {
        scope?: Element;
    },
): void;

/**
 * Create all instances of a specific component on the page
 *
 * Uses the `data-module` attribute to find all elements matching the specified
 * component on the page, creating instances of the component object for each
 * of them.
 *
 * Any component errors will be caught and logged to the console.
 *
 * @template {CompatibleClass} T
 * @param {T} Component - class of the component to create
 * @param {T["defaults"]} [config] - config for the component
 * @param {Element|Document} [$scope] - scope of the document to search within
 * @returns {Array<InstanceType<T>>} - array of instantiated components
 */
export function createAll<T extends CompatibleClass>(
    Component: T,
    config?: T["defaults"],
    $scope?: Document | Element,
): Array<InstanceType<T>>;
