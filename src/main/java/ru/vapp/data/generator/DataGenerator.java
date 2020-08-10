package ru.vapp.data.generator;

import com.vaadin.flow.spring.annotation.SpringComponent;

import org.vaadin.artur.exampledata.DataType;
import ru.vapp.data.service.OrderxRepository;
import ru.vapp.data.entity.Orderx;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.vaadin.artur.exampledata.ExampleDataGenerator;

@SpringComponent
public class DataGenerator {

    @Bean
    public CommandLineRunner loadData(OrderxRepository orderxRepository) {
        return args -> {
            Logger logger = LoggerFactory.getLogger(getClass());
            if (orderxRepository.count() != 0L) {
                logger.info("Using existing database");
                return;
            }
            long seed = 123L;

            logger.info("Generating demo data");

            logger.info("... generating 100 Person entities...");
            ExampleDataGenerator<Orderx> orderxRepositoryGenerator = new ExampleDataGenerator<>(Orderx.class, seed);
            orderxRepositoryGenerator.setData(Orderx::setOrderDate, DataType.FIRST_NAME);
            orderxRepositoryGenerator.setData(Orderx::setOrderMethod, DataType.LAST_NAME);
            orderxRepositoryGenerator.setData(Orderx::setOrderLocation, DataType.LAST_NAME);
            orderxRepository.saveAll(orderxRepositoryGenerator.create(10));



            logger.info("Generated demo data");
        };
    }

}