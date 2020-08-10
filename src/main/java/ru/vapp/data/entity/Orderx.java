package ru.vapp.data.entity;

import javax.persistence.Entity;

import ru.vapp.data.AbstractEntity;

@Entity
public class Orderx extends AbstractEntity {

private String orderDate;

  public Orderx(Integer id, String orderDate, String orderMethod, String orderLocation) {
    this.setId(id);
    this.orderDate = orderDate;
    this.orderMethod = orderMethod;
    this.orderLocation = orderLocation;
  }

  public Orderx() {

  }

  public String getOrderDate() {
  return orderDate;
}
public void setOrderDate(String firstName) {
  this.orderDate = firstName;
}

private String orderMethod;
public String getOrderMethod() {
  return orderMethod;
}
public void setOrderMethod(String lastName) {
  this.orderMethod = lastName;
}

private String orderLocation;
public String getOrderLocation() {
  return orderLocation;
}
public void setOrderLocation(String email) {
  this.orderLocation = email;
}



}
