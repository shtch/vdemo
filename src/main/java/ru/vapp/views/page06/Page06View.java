package ru.vapp.views.page06;

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

import ru.vapp.views.page06.Page06View.Page06ViewModel;

@Route(value = "form6", layout = MainView.class)
@RouteAlias(value = "Page06", layout = MainView.class)
@PageTitle("Page06")
@JsModule("./src/views/page06/page06-view.js")
@Tag("page06-view")
public class Page06View extends PolymerTemplate<Page06ViewModel> {

    // This is the Java companion file of a design
    // You can find the design file in /frontend/src/views/src/views/page06/page06-view.js
    // The design can be easily edited by using Vaadin Designer (vaadin.com/designer)

    public static interface Page06ViewModel extends TemplateModel {

    }

    @Id
    private TextField firstName;
    @Id
    private TextField lastName;
    @Id
    private TextField middleName;

    @Id
    private Button next;
    @Id
    private Button home;

    public Page06View() {

        // Configure Form
//        Binder<Person> binder = new Binder<>(Person.class);

        // Bind fields. This where you'd define e.g. validation rules
//        binder.bindInstanceFields(this);

        next.addClickListener(e -> next.getUI().ifPresent(ui -> ui.navigate("Page07")));
        home.addClickListener(e -> next.getUI().ifPresent(ui -> ui.navigate("")));

    }
}
