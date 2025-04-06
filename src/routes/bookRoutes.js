const express = require("express")
const router = express.Router()
const bookUrl = "/books"
const bookService = require("../service/bookService")

router.get(bookUrl, async (req,res) =>{
    //controll a get request
    try{
        await bookService.getAllBooks();
        res.status(200).send("Getjniun Books!!")
    }catch(er){
        console.error(er)
    }
});

router.post(bookUrl, async (req,res)=>{
    try{
        await bookService.addBook();
        res.status(201).send("Adduuu Book!!")
    }catch(er){
        console.error(er)
    }
})

router.patch(bookUrl, async (req,res)=>{
    try{
        await bookService.updateBook();
        res.status(204).send("Updat uu  Book!!")
    }catch(er){
        console.error(er)
    }
})

router.delete(bookUrl, async (req,res)=>{
    try{
        await bookService.deleteBook();
        res.status(204).send("Delete uu  Book!!")
    }catch(er){
        console.error(er)
    }
})

module.exports = router;