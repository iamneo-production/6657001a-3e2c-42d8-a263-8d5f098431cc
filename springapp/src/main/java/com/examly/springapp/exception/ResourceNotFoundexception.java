package com.examly.springapp.exception;

public class ResourceNotFoundexception extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public ResourceNotFoundexception(String message) {
        super(message);
    }
}
