package com.baicai.cloudmuseum_backend.dto;

import java.util.Map;

public class WeatherResponse {
    private String city;
    private String weather;
    private String temperature;
    private String windDirection;
    private String humidity;
    private String reportTime;
    private Map<String, Object> raw;

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getWeather() { return weather; }
    public void setWeather(String weather) { this.weather = weather; }

    public String getTemperature() { return temperature; }
    public void setTemperature(String temperature) { this.temperature = temperature; }

    public String getWindDirection() { return windDirection; }
    public void setWindDirection(String windDirection) { this.windDirection = windDirection; }

    public String getHumidity() { return humidity; }
    public void setHumidity(String humidity) { this.humidity = humidity; }

    public String getReportTime() { return reportTime; }
    public void setReportTime(String reportTime) { this.reportTime = reportTime; }

    public Map<String, Object> getRaw() { return raw; }
    public void setRaw(Map<String, Object> raw) { this.raw = raw; }
}
