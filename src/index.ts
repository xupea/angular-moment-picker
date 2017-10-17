import * as angular from 'angular';
import {default as Provider, IProviderOptions} from './provider';
import Directive from './directive';

angular
	.module('moment-picker', [])
	.provider('momentPicker', [() => new Provider()])
	.directive('momentPicker', [
		'$timeout', '$sce', '$log', '$window', 'momentPicker', '$compile', '$templateCache',
		($timeout: ng.ITimeoutService, $sce: ng.ISCEService, $log: ng.ILogService, $window: ng.IWindowService, momentPicker: IProviderOptions,
		$compile: ng.ICompileService, $templateCache: ng.ITemplateCacheService) => {
			return new Directive($timeout, $sce, $log, $window, momentPicker, $compile, $templateCache);
		}
	]);

export { Provider, Directive };