// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all numbers from 0 up to the user number
 */
function calcSum() {
  
  // initialize the sum to 0
	let sum = 0
  
	// get the user number
	let userNum1 = parseFloat(document.getElementById('userNum1').value)
	let userNum2 = parseFloat(document.getElementById('userNum2').value)

  
	// use a for loop to calculate the sum of numbers
	for (let counter = 1; counter <= userNum2; counter++) {
			sum = sum + userNum1
  }
      
  	// return the string of numbers back to html
  	document.getElementById('display-sum').innerHTML = "The sum of your two numbers are" + " = " + sum.toFixed(2)
}