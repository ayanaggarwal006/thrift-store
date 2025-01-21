package com.thrift.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thrift.model.Category;
import com.thrift.service.CategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin(origins = "http://localhost:3000") // Add your frontend URL here
public class CategoryController {

	@Autowired
	private CategoryService categoryService;

	@GetMapping()
	public List<Category> getCategories() {
		return categoryService.getAllCategories();
	}
}