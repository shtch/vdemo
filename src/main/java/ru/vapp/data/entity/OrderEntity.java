package ru.vapp.data.entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "METHOD_LIST", schema = "WEBBOOKING")
public class OrderEntity  extends AbstractPersistable<Long> {
    Long timeslot_id;
    Date order_date;
    Long method_id;
    @NotNull
    @NotEmpty
    String method;
    Long doctor_id;
    @NotNull
    @NotEmpty
    String doctor;
    @NotNull
    @NotEmpty
    String branch;
    @NotNull
    @NotEmpty
    String payment_type;
    @NotNull
    @NotEmpty
    String prefer_time;

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public String getPayment_type() {
        return payment_type;
    }

    public void setPayment_type(String payment_type) {
        this.payment_type = payment_type;
    }

    public String getPrefer_time() {
        return prefer_time;
    }

    public void setPrefer_time(String prefer_time) {
        this.prefer_time = prefer_time;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OrderEntity that = (OrderEntity) o;
        return Objects.equals(getId(), that.getId()) &&
                Objects.equals(timeslot_id, that.timeslot_id) &&
                Objects.equals(method_id, that.method_id) &&
                Objects.equals(doctor_id, that.doctor_id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), timeslot_id, method_id, doctor_id);
    }

    public Long getTimeslot_id() {
        return timeslot_id;
    }

    public void setTimeslot_id(Long timeslot_id) {
        this.timeslot_id = timeslot_id;
    }

    public Date getOrder_date() {
        return order_date;
    }

    public void setOrder_date(Date order_date) {
        this.order_date = order_date;
    }

    public Long getMethod_id() {
        return method_id;
    }

    public void setMethod_id(Long method_id) {
        this.method_id = method_id;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method_name) {
        this.method = method_name;
    }

    public Long getDoctor_id() {
        return doctor_id;
    }

    public void setDoctor_id(Long doctor_id) {
        this.doctor_id = doctor_id;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor_name) {
        this.doctor = doctor_name;
    }
}
