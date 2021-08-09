const db = require("../database/conn");
const multer = require("multer");

function bookingappointment(req,res){
    const {
        appointdate,
        instance,
        status,
        prevrecord,
        appointdetails
    } = req.body

    var info = {
        name : req.session.name,
        dateofbirth : req.session.dateofbirth,
        gender : req.session.gender,
        city : req.session.city,
        state : req.session.state,
        appointdate : appointdate,
        instance : instance,
        status : status,
        prevrecord : prevrecord,
        appointdetails : appointdetails
    }
    db.collection('appointments').findOne({appointdate:appointdate,instance:instance},function(err,result){
        if(err){
            console.log(err);
            throw err;
        }
        else{
            if(result){
                req.flash("error","Already have an appointment");
                res.render('appointment',{
                    messages : req.flash(),
                    username: req.session.name,
                    number: req.session.number,
                })
            }
            else{
                db.collection('appointments').insertOne(info,function(err,collection){
                    if(err){
                        console.log("error in appointments insertion");
                        throw err;
                    }
                    else{
                        console.log("appointment booked successfully" + collection);
                        req.flash('success','Appointment Booked')
                        return res.render("index",{
                            messages : req.flash(),
                            username: req.session.name,
                            number: req.session.number,
                        })
            
                    }
                })
            }
        }
    })

}

function feedbackmessage(req,res){
    const {
        name,email,subject,message
    } = req.body
    var feedback = {
        name : name,
        email : email,
        subject : subject,
        message : message
    }
    db.collection("Messages").insertOne(feedback,function(err,collection){
        if(err){
            console.log(err);
            throw err;
        }
        else{
            console.log("this is your message " + collection);
            req.flash("success","Message Sent");
            res.render("contactus",
            {
                messages : req.flash(),
                username: req.session.name,
                number: req.session.number,
            })
        }
    })
}
function askquery(req,res){
    const {
        name,email,number,query
    } = req.body
    var queries = {
        name : name,
        email : email,
        number : number,
       query: query
    }
    db.collection("Queries").insertOne(queries,function(err,collection){
        if(err){
            console.log(err);
            throw err;
        }
        else{
            console.log("this is your query " + collection);
            req.flash("success","Queries Asked");
            res.render("query",
            {
                messages : req.flash(),
                username: req.session.name,
                number: req.session.number,
            })
        }
    })
}

function cv(req,res){
    const {
        description,hospital,achievement,qualification,awards,specialization,fees,experience
    } = req.body;
    var fullinfo = {
        name: req.session.name,
        email: req.session.email,
        city: req.session.city,
        gender: req.session.gender,
        dateofbirth: req.session.dateofbirth,
        number: req.session.number,
        state: req.session.state,
        city: req.session.city,
        country: req.session.country,
        description :description,
        hospital:hospital,
        achievement:achievement,
        experience:experience,
        qualification:qualification,
        awards:awards,
        specialization:specialization,
        fees:fees,  
    }
    db.collection('resume').findOne({email:req.session.email},function(err,result){
        if(err){
            console.log(err);
            throw err;
        }
        else{
            if(result){
                console.log("Already Submitted");
                req.flash("warning","Already Submitted");
                res.render("doctor-signup",{
                    messages : req.flash(),
                    username: req.session.name,
                      number: req.session.number,
                })
            }
            else{
                db.collection('resume').insertOne(fullinfo,function(err,collection){
                    if(err){
                        console.log("error in resume insertion");
                        throw err;
                    }
                    else{
                        console.log("CV uploaded successfully" + collection);
                        req.flash('success','CV Uploaded')
                        return res.render("index",{
                            messages : req.flash(),
                            username: req.session.name,
                            number: req.session.number,
                        })
            
                    }
                })
            }
        }
    })
}
const myappointment = async (req,res)=>{
    var bookingdetails = await 
}

module.exports ={
    bookingappointment : bookingappointment,
    feedbackmessage : feedbackmessage,
    askquery : askquery,
    cv : cv
}