package com.baicai.cloudmuseum_backend.dto;

public class TravelAdviceRequest {
    private String city;
    private String date;
    private String interests;

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getInterests() { return interests; }
    public void setInterests(String interests) { this.interests = interests; }
}
