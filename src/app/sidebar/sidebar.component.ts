import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'ti-dashboard', class: '' },
    { path: 'venda', title: 'Vendas',  icon: 'ti-shopping-cart', class: '' },
    { path: 'orcamento', title: 'Orçamentos',  icon: 'ti-file', class: '' },
    { path: 'client', title: 'Clientes',  icon: 'ti-id-badge', class: '' },
    { path: 'produto', title: 'Produtos',  icon: 'ti-package', class: '' },
    { path: 'fornecedor', title: 'Fornecedores',  icon: 'ti-truck', class: '' },
    { path: 'caixa', title: 'Caixa',  icon: 'ti-wallet', class: '' },
    { path: 'user', title: 'Usuários',  icon: 'ti-user', class: '' },
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
