package com.thrift.service;

import java.util.List;

import com.thrift.model.Product;

public interface ProductService {
    List<Product> getProdForCategory(Long categoryId);
}
