package ru.vapp.views.page07;

import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.grid.GridVariant;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.router.RouteAlias;
import org.springframework.beans.factory.annotation.Autowired;
import org.vaadin.artur.helpers.CrudServiceDataProvider;
import ru.vapp.data.entity.Orderx;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;
import ru.vapp.data.service.OrderxService;
import ru.vapp.views.main.MainView;

//import ru.vapp.views.page07.Page07View.Page07ViewModel;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Route(value = "form7", layout = MainView.class)
@RouteAlias(value = "Page07", layout = MainView.class)
@PageTitle("Page07")
@JsModule("./src/views/page07/page07-view.js")
@Tag("page07-view")
public class Page07View extends PolymerTemplate<TemplateModel> {
    @Id("back")
    private Button back;
//    @Id("grid")
//    Grid<Orderx> grid = new Grid<>(Orderx.class);
//    private Grid<Orderx> orders_list = new Grid<>(Orderx.class);

    // This is the Java companion file of a design
    // You can find the design file in /frontend/src/views/src/views/page07/page07-view.js
    // The design can be easily edited by using Vaadin Designer (vaadin.com/designer)

//   List<Orderx> ordersList;

//    private Binder<Orderx> binder;

    public Page07View(@Autowired OrderxService orderxService) {

// The Grid<>(Person.class) sorts the properties and in order to
// reorder the properties we use the 'setColumns' method.
//        grid.setColumns("orderDate", "lastName", "age", "address",                "phoneNumber");
        //        setId("page07-view");
 //       grid.setColumns("orderDate", "orderMethod", "orderLocation");
 //       grid.setDataProvider(new CrudServiceDataProvider<Orderx, Void>(orderxService));
 //       grid.addThemeVariants(GridVariant.LUMO_NO_BORDER);

//        ordersList = Arrays.asList(new Orderx("12.08.2020","Акушера", "Петров П.П."));

//        ordersList.add(new Orderx("12.08.2020","Акушера", "Петров П.П."));
//        grid.setHeightFull();

//        grid.getElement().setAttribute("slot", "grid");
//        getElement().appendChild(grid.getElement());

//        binder = new Binder<>(Orderx.class);

//        binder.bindInstanceFields(this);
//        orders_list.setItems(ordersList);

        // Configure Form
//        Binder<Person> binder = new Binder<>(Person.class);

        // Bind fields. This where you'd define e.g. validation rules
//        binder.bindInstanceFields(this);
//        grid.setItems(personList);
        back.addClickListener(e -> back.getUI().ifPresent(ui -> ui.navigate("")));

    }
}
