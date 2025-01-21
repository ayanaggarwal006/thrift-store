package com.thrift.controller;

import org.springframework.web.bind.annotation.RestController;

import com.thrift.RequestDTO.ProductRequest;
import com.thrift.model.Product;
import com.thrift.service.ProductService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService prodService;

    @PostMapping()
    public List<Product> getProductsForCategory(@RequestBody ProductRequest prodReq) {
        return prodService.getProdForCategory(prodReq.getCategoryId());
    }
    
}
