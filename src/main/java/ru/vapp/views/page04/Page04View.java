package ru.vapp.views.page04;

import ru.vapp.data.entity.Person;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;
import ru.vapp.views.main.MainView;

import ru.vapp.views.page04.Page04View.Page04ViewModel;

@Route(value = "form2", layout = MainView.class)
@PageTitle("Page04")
@JsModule("./src/views/page04/page04-view.js")
@Tag("page04-view")
public class Page04View extends PolymerTemplate<Page04ViewModel> {

    // This is the Java companion file of a design
    // You can find the design file in /frontend/src/views/src/views/page04/page04-view.js
    // The design can be easily edited by using Vaadin Designer (vaadin.com/designer)

    public static interface Page04ViewModel extends TemplateModel {

    }

    @Id
    private TextField firstName;
    @Id
    private TextField lastName;
    @Id
    private TextField email;

    @Id
    private Button cancel;
    @Id
    private Button save;

    public Page04View() {

        // Configure Form
        Binder<Person> binder = new Binder<>(Person.class);

        // Bind fields. This where you'd define e.g. validation rules
        binder.bindInstanceFields(this);

        cancel.addClickListener(e -> binder.readBean(null));
        save.addClickListener(e -> {
            Notification.show("Not implemented");
        });
    }
}
