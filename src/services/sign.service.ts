import {Injectable} from '@angular/core';
import { User } from '../models';

/*
 * @class Represents SignIn Service
 */
 @Injectable()
 export class SignInService{
   public currentUser: User;

   constructor(private user: User){
   }
   login(){

   }
   logout(){
     
   }
 }
