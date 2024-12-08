package com.library.LMS.repository;

import com.library.LMS.entity.People;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PeopleRepository {

    private final JdbcClient jdbcClient;

    public PeopleRepository(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    public List<People> findAll() {
        return jdbcClient.sql("SELECT * FROM people")
                .query(BeanPropertyRowMapper.newInstance(People.class))
                .list();
    }
}

