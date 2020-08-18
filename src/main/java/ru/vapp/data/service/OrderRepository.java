package ru.vapp.data.service;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.vapp.data.entity.OrderEntity;

public interface OrderRepository extends JpaRepository<OrderEntity, Long> {
}
