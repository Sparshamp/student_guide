const express=require('express');
const mongoose=require('mongoose');

const usersSchema=new mongoose.Schema({
    firstName: String, lastName: String, dateOfBirth: String,
    gender: String, email: String, phone: String, address: String,
});

const articlesSchema=new mongoose.Schema({
    title: String, author: String, publishedDate: String, association: String
});

const commentSchema=new mongoose.Schema({
    comment: String, rating: String, photo: [String][String]
});

const categoriesSchema=new mongoose.Schema({
    category: String, categoryNumber: String
});

const app=express();
const PORT=5001;
const MONGO_URI=
