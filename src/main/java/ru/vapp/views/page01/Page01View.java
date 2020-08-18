package ru.vapp.views.page01;

import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.data.binder.BeanValidationBinder;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;
import com.vaadin.flow.templatemodel.TemplateModel;
import org.springframework.beans.factory.annotation.Autowired;
import ru.vapp.data.entity.OrderEntity;
import ru.vapp.data.service.OrderService;
import ru.vapp.views.main.MainView;

import ru.vapp.views.page01.Page01View.Page01ViewModel;

@Route(value = "form1", layout = MainView.class)
@RouteAlias(value = "Page01", layout = MainView.class)
@RouteAlias(value = "", layout = MainView.class)
@PageTitle("Page01")
@JsModule("./src/views/page01/page01-view.js")
@Tag("page01-view")
public class Page01View extends PolymerTemplate<Page01ViewModel> {
    OrderEntity neworder;

    private Binder<OrderEntity> binder;
    @Id("doctor")
    private ComboBox<String> doctor;
    @Id("branch")
    private ComboBox<String> branch;
    @Id("payment_type")
    private ComboBox<String> payment_type;
    @Id("method")
    private ComboBox<String> method;
    @Id("prefer_time")
    private ComboBox<String> prefer_time;
    @Id("enter")
    private Button enter;
    @Id("next")
    private Button next;

    // This is the Java companion file of a design
    // You can find the design file in /frontend/src/views/src/views/page01/page01-view.js
    // The design can be easily edited by using Vaadin Designer (vaadin.com/designer)

    public static interface Page01ViewModel extends TemplateModel {

    }


    public Page01View(@Autowired OrderService orderService) {
        
        method.setItems("Акушера","Хирурга","Онколога");
        doctor.setItems("Сидоренко А.П.","Петров И.И", "Гинзбург С.Л.");
        branch.setItems("КДЦ","Филиал №2");
        payment_type.setItems("ОМС","ПМУ");
        prefer_time.setItems("Не важно","Утро","День","Вечер");

        binder = new BeanValidationBinder<>(OrderEntity.class);
        newOrder();

        binder.bindInstanceFields(this);

        binder.readBean(neworder);
        binder.setBean(neworder);
        // Configure Form
//        Binder<Person> binder = new Binder<>(Person.class);

        // Bind fields. This where you'd define e.g. validation rules
       next.setEnabled(false);

        binder.addStatusChangeListener(evt -> next.setEnabled(binder.isValid()));

        next.addClickListener(e -> next.getUI().ifPresent(ui -> ui.navigate("Page02")));
        enter.addClickListener(e -> enter.getUI().ifPresent(ui -> ui.navigate("Page03")));
////        save.addClickListener(e -> {
//            Notification.show("Not implemented");
//        });
    }

    void newOrder(){
        if (neworder == null){
            neworder = new OrderEntity();
        }
    }
}
