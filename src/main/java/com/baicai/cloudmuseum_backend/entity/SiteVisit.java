package com.baicai.cloudmuseum_backend.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class SiteVisit {
    private Long id;
    private String pagePath;
    private LocalDate visitDate;
    private Integer pvCount;
    private Integer uvCount;
    private String ipAddresses;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getPagePath() { return pagePath; }
    public void setPagePath(String pagePath) { this.pagePath = pagePath; }

    public LocalDate getVisitDate() { return visitDate; }
    public void setVisitDate(LocalDate visitDate) { this.visitDate = visitDate; }

    public Integer getPvCount() { return pvCount; }
    public void setPvCount(Integer pvCount) { this.pvCount = pvCount; }

    public Integer getUvCount() { return uvCount; }
    public void setUvCount(Integer uvCount) { this.uvCount = uvCount; }

    public String getIpAddresses() { return ipAddresses; }
    public void setIpAddresses(String ipAddresses) { this.ipAddresses = ipAddresses; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}
