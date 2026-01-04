package org.example.red.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {
    private final List<String> products = new ArrayList<>();

    public ProductService() {
        for (int i = 0; i < 1000000; i++) {
            products.add("Banaan " + i);
        }
    }

    public List<String> getProducts() {
        return new  ArrayList<>(products);
    }

    public List<String> addItem(String item) {
        products.add(item);
        return new  ArrayList<>(products);
    }
}
