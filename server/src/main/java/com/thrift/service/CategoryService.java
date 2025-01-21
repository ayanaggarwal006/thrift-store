package com.thrift.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.thrift.model.Category;

@Service
public interface CategoryService {

	List<Category> getAllCategories();
	
}
