package ru.vapp.views.page05;

import com.vaadin.flow.router.RouteAlias;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;
import ru.vapp.views.main.MainView;

import ru.vapp.views.page05.Page05View.Page05ViewModel;

@Route(value = "form5", layout = MainView.class)
@RouteAlias(value = "Page05", layout = MainView.class)
@PageTitle("Page05")
@JsModule("./src/views/page05/page05-view.js")
@Tag("page05-view")
public class Page05View extends PolymerTemplate<Page05ViewModel> {
    @Id("birthday")
    private TextField birthday;
    @Id("next")
    private Button next;
    @Id("home")
    private Button home;

    // This is the Java companion file of a design
    // You can find the design file in /frontend/src/views/src/views/page05/page05-view.js
    // The design can be easily edited by using Vaadin Designer (vaadin.com/designer)

    public static interface Page05ViewModel extends TemplateModel {

    }



    public Page05View() {


        next.addClickListener(e -> next.getUI().ifPresent(ui -> ui.navigate("Page06")));
        home.addClickListener(e -> next.getUI().ifPresent(ui -> ui.navigate("")));
    }
}
