package ru.vapp.views.main;

import java.util.Arrays;
import java.util.Optional;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.tabs.Tab;
import com.vaadin.flow.component.tabs.TabVariant;
import com.vaadin.flow.component.tabs.Tabs;
import com.vaadin.flow.router.RouteConfiguration;
import com.vaadin.flow.router.RouterLink;
import com.vaadin.flow.server.PWA;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.theme.lumo.Lumo;

import ru.vapp.views.main.MainView;
import ru.vapp.views.page01.Page01View;
import ru.vapp.views.page02.Page02View;
import ru.vapp.views.page03.Page03View;
import ru.vapp.views.page04.Page04View;
import ru.vapp.views.page05.Page05View;
import ru.vapp.views.page06.Page06View;
import ru.vapp.views.page07.Page07View;

/**
 * The main view is a top-level placeholder for other views.
 */
@JsModule("./styles/shared-styles.js")
@CssImport(value = "styles/views/main/main-view.css", themeFor = "vaadin-app-layout")
@Theme(value = Lumo.class, variant = Lumo.LIGHT)
@CssImport("styles/views/main/main-view.css")
public class MainView extends AppLayout {

//    private final Tabs menu;

    public MainView() {
        HorizontalLayout header = createHeader();
//        menu = createMenuTabs();
//        addToNavbar(createTopBar(header, menu));
    }

    private VerticalLayout createTopBar(HorizontalLayout header, Tabs menu) {
        VerticalLayout layout = new VerticalLayout();
//        layout.getThemeList().add("dark");
        layout.setWidthFull();
        layout.setSpacing(false);
        layout.setPadding(false);
        layout.setAlignItems(FlexComponent.Alignment.CENTER);
        layout.add(header, menu);
        return layout;
    }

    private HorizontalLayout createHeader() {
        HorizontalLayout header = new HorizontalLayout();
        header.setPadding(false);
        header.setSpacing(false);
        header.setWidthFull();
        header.setAlignItems(FlexComponent.Alignment.CENTER);
        header.setId("header");
        Image logo = new Image("images/logos/18.png",
                "Weblk logo");
        logo.setId("logo");
        header.add(logo);
//        Image avatar = new Image("https://randomuser.me/api/portraits/women/8.jpg", "Avatar");
//        avatar.setId("avatar");
        header.add(new H1("Личный кабинет"));
//        header.add(avatar);
        return header;
    }
/*
    private static Tabs createMenuTabs() {
        final Tabs tabs = new Tabs();
        tabs.getStyle().set("max-width", "100%");
        tabs.add(getAvailableTabs());
        return tabs;
    }
*/
    private static Tab[] getAvailableTabs() {
        RouterLink[] links = new RouterLink[] {
            new RouterLink("Page01", Page01View.class),
            new RouterLink("Page02", Page02View.class),
            new RouterLink("Page03", Page03View.class),
            new RouterLink("Page04", Page04View.class),
            new RouterLink("Page05", Page05View.class),
            new RouterLink("Page06", Page06View.class),
            new RouterLink("Page07", Page07View.class)
        };
        return Arrays.stream(links).map(MainView::createTab).toArray(Tab[]::new);
    }

    private static Tab createTab(Component content) {
        final Tab tab = new Tab();
        tab.addThemeVariants(TabVariant.LUMO_ICON_ON_TOP);
        tab.add(content);
        return tab;
    }

    @Override
    protected void afterNavigation() {
        super.afterNavigation();
//        selectTab();
    }
/*
    private void selectTab() {
        String target = RouteConfiguration.forSessionScope().getUrl(getContent().getClass());
        Optional<Component> tabToSelect = menu.getChildren().filter(tab -> {
            Component child = tab.getChildren().findFirst().get();
            return child instanceof RouterLink && ((RouterLink) child).getHref().equals(target);
        }).findFirst();
        tabToSelect.ifPresent(tab -> menu.setSelectedTab((Tab) tab));
    }

 */
}
