const express = require ('express');

const router = new express.Router();

const Employee =  require('./model');



router.post("/Emp", async (req, res) => {
    try {
      const emp = new Employee(req.body);
      console.log(req.body);
      const createEmployee = await emp.save();
      res.status(201).send(createEmployee);
    } catch (e) {
      res.status(400).send(e);
    }
  });

 
  
  //read the data of registered Emp
  router.get("/Emp", async (req, res) => {
    try {
      const employeeData = await Employee.find();
      res.send(employeeData);
    } catch (e) {
      res.send(e);
    }
  });
  
  //get the indivisual Emp data using id
  
  router.get("/Emp/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const employeeData = await Employee.findById(_id);
      console.log(employeeData);
      if (!employeeData) {
        return res.status(404).send();
      } else {
        res.send(employeeData);
      }
    } catch (e) {
      res.status(500).send(e);
    }
  });
  //delete the Emp by it id
  router.delete("/Emp/:id", async (req, res) => {
    try {
     
     const deleteEmployee= await Employee.findByIdAndDelete(req.params.id);
     if(!req.params.id){
         return res.status(400).send()
     }
     res.send(deleteEmployee);
    } catch (e) {
        res.status(500).send(e);
    }
  });
  //update the Emp by its id
  router.patch("/Emp/:id", async (req, res) => {
      try {
       const _id=req.params.id;
       const updateEmployee= await Employee.findByIdAndUpdate(_id,req.body,{
           new:true
       });
      //  if(!req.params.id){
      //      return res.status(400).send()
      //  }
       res.send(updateEmployee);
      } catch (e) {
          res.status(404).send(e);
      }
    });

    module.exports = router;