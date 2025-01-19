package com.thrift.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thrift.model.Category;
import com.thrift.repository.CategoryRepository;
import com.thrift.service.CategoryService;

@Service
public class CategorySeviceImpl implements CategoryService{

	@Autowired
	private CategoryRepository categoryRepo;
	
	@Override
	public List<Category> getAllCategories() {
		
		return categoryRepo.findAll();
	}
	
	
}
