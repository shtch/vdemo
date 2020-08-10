package ru.vapp.data.service;

import ru.vapp.data.entity.Orderx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.vaadin.artur.helpers.CrudService;

@Service
public class OrderxService extends CrudService<Orderx, Integer> {

    private OrderxRepository repository;

    public OrderxService(@Autowired OrderxRepository repository) {
        this.repository = repository;
    }

    @Override
    protected OrderxRepository getRepository() {
        return repository;
    }

}
