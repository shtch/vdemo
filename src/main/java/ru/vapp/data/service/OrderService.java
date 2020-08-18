package ru.vapp.data.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.vaadin.artur.helpers.CrudService;
import ru.vapp.data.entity.OrderEntity;

@Service
public class OrderService extends CrudService<OrderEntity, Long> {
    private OrderRepository repository;

    public OrderService(OrderRepository repository) {
        this.repository = repository;
    }

    @Override
    protected JpaRepository<OrderEntity, Long> getRepository() {
        return repository;
    }
}
