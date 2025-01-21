package com.thrift.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thrift.model.Product;
import com.thrift.repository.ProductRepository;
import com.thrift.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService{
    
    @Autowired
    private ProductRepository prodRepo;

    @Override
    public List<Product> getProdForCategory(Long categoryId) {
        return prodRepo.findAllByCategoryId(categoryId);
    }
}
