import { IBreadcrumb } from './IBreadcrumb';

export interface IComponent {
	breadcrumbData : IBreadcrumb[];
	isRequesting:boolean;
}