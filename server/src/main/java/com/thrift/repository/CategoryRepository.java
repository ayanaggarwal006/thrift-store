package com.thrift.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thrift.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>{
	
}
