package com.project;

import io.javalin.Javalin;

public class Main {
    public static void main(String[] args) {
        User user = new User("sonic", "sonic@gmail.com");

        var app = Javalin.create(/*config*/)
            .get("/", ctx -> ctx.json(user))
            .start(5678);
    }
}