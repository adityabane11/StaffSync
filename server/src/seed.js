import 'dotenv/config';import mongoose from 'mongoose';import bcrypt from 'bcryptjs';import {User,Announcement,Training} from './models.js';
await mongoose.connect(process.env.MONGO_URI||'mongodb://127.0.0.1:27017/staffsync');
const password=await bcrypt.hash('StaffSync123!',12);
const people=[['Olivia Carter','hr@staffsync.demo','hr','People & Culture','HR Administrator'],['Noah Williams','manager@staffsync.demo','manager','Engineering','Team Manager'],['Ava Patel','employee@staffsync.demo','employee','Engineering','Software Associate']];
for(const [name,email,role,department,jobTitle] of people) await User.updateOne({email},{$set:{name,email,role,department,jobTitle,password}},{upsert:true});
const hr=await User.findOne({email:'hr@staffsync.demo'});
if(!await Announcement.countDocuments()) await Announcement.create([{title:'Welcome to StaffSync',message:'Company updates and people operations now live in one place.',author:hr._id},{title:'Learning week',message:'Check the training section for upcoming development sessions.',author:hr._id}]);
if(!await Training.countDocuments()) await Training.create({title:'Workplace communication',description:'Practical communication and collaboration skills.',date:new Date(Date.now()+7*86400000),createdBy:hr._id});
console.log('Seed complete. Demo password: StaffSync123!');await mongoose.disconnect();
