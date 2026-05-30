package com.baicai.cloudmuseum_backend.mapper;

import com.baicai.cloudmuseum_backend.entity.SiteVisit;
import org.apache.ibatis.annotations.*;

import java.time.LocalDate;
import java.util.List;

@Mapper
public interface SiteVisitMapper {

    @Insert("INSERT INTO site_visits (page_path, visit_date, pv_count, uv_count, ip_addresses) " +
            "VALUES (#{pagePath}, #{visitDate}, 1, 1, #{ip}) " +
            "ON DUPLICATE KEY UPDATE pv_count = pv_count + 1, " +
            "    uv_count = IF(FIND_IN_SET(#{ip}, ip_addresses), uv_count, uv_count + 1), " +
            "    ip_addresses = IF(FIND_IN_SET(#{ip}, ip_addresses), ip_addresses, CONCAT(ip_addresses, ',', #{ip}))")
    int trackVisit(@Param("pagePath") String pagePath, @Param("visitDate") LocalDate visitDate, @Param("ip") String ip);

    @Select("SELECT COALESCE(SUM(pv_count), 0) FROM site_visits WHERE visit_date = #{date}")
    long sumPvByDate(@Param("date") LocalDate date);

    @Select("SELECT COALESCE(SUM(uv_count), 0) FROM site_visits WHERE visit_date = #{date}")
    long sumUvByDate(@Param("date") LocalDate date);

    @Select("SELECT visit_date as visitDate, SUM(pv_count) as pvCount, SUM(uv_count) as uvCount " +
            "FROM site_visits WHERE visit_date >= #{since} AND visit_date <= #{until} " +
            "GROUP BY visit_date ORDER BY visit_date ASC")
    List<SiteVisit> findTrend(@Param("since") LocalDate since, @Param("until") LocalDate until);

    @Select("SELECT COALESCE(SUM(pv_count), 0) FROM site_visits")
    long sumTotalPv();
}
