package ru.vapp.views.page03;

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

import ru.vapp.views.page03.Page03View.Page03ViewModel;

@Route(value = "form3", layout = MainView.class)
@RouteAlias(value = "Page03", layout = MainView.class)
@PageTitle("Page03")
@JsModule("./src/views/page03/page03-view.js")
@Tag("page03-view")
public class Page03View extends PolymerTemplate<Page03ViewModel> {
    @Id("phone")
    private TextField phone;
    @Id("next")
    private Button next;
    @Id("home")
    private Button home;

    // This is the Java companion file of a design
    // You can find the design file in /frontend/src/views/src/views/page03/page03-view.js
    // The design can be easily edited by using Vaadin Designer (vaadin.com/designer)

    public static interface Page03ViewModel extends TemplateModel {

    }

    public Page03View() {

        // Configure Form
     //   Binder<Person> binder = new Binder<>(Person.class);

        // Bind fields. This where you'd define e.g. validation rules
    //    binder.bindInstanceFields(this);

        next.addClickListener(e -> next.getUI().ifPresent(ui -> ui.navigate("Page04")));
        home.addClickListener(e -> next.getUI().ifPresent(ui -> ui.navigate("")));

    }
}
