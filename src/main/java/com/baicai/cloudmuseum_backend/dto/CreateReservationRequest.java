package com.baicai.cloudmuseum_backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;

public class CreateReservationRequest {
    @NotNull(message = "用户ID不能为空")
    private Long userId;

    @NotBlank(message = "预约类型不能为空")
    private String type;

    private Long courseId;

    @NotNull(message = "参观日期不能为空")
    private LocalDate visitDate;

    @NotNull(message = "参观人数不能为空")
    private Integer visitorCount;

    @NotBlank(message = "联系人姓名不能为空")
    private String contactName;

    @NotBlank(message = "联系人电话不能为空")
    private String contactPhone;

    private String remarks;

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public Long getCourseId() { return courseId; }
    public void setCourseId(Long courseId) { this.courseId = courseId; }

    public LocalDate getVisitDate() { return visitDate; }
    public void setVisitDate(LocalDate visitDate) { this.visitDate = visitDate; }

    public Integer getVisitorCount() { return visitorCount; }
    public void setVisitorCount(Integer visitorCount) { this.visitorCount = visitorCount; }

    public String getContactName() { return contactName; }
    public void setContactName(String contactName) { this.contactName = contactName; }

    public String getContactPhone() { return contactPhone; }
    public void setContactPhone(String contactPhone) { this.contactPhone = contactPhone; }

    public String getRemarks() { return remarks; }
    public void setRemarks(String remarks) { this.remarks = remarks; }
}
