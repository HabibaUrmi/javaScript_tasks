# JavaScript Practice & Pancake Project Checklist

## Weekly Task Progress:

Week 01: Basics

- [x] data_types
- [x] operators
- [x] variables

Week 02: Core JavaScript

- [x] basic_functions
- [x] numbers
- [x] strings
- [x] conditions

Week 03: Control Flow

- [x] 8ball
- [x] loops

Week 04: DOM Manipulation

- [x] ATM_simulator
- [x] basic_DOM
- [x] pancake_step_1

Week 05: Arrays & Project Continuation

- [x] arrays
- [x] pancake_step_2

Week 06: Objects & Small Projects

- [x] little_zoo
- [x] objects

Week 07: Pancake Step 3

- [x] JSON.js
- [x] localstorage.js
- [x] pancake_step_3

Week 08: Debugging & Code Quality

- [x] error_handling
- [x] fault_finding
- [x] JS_writing_practises

Week 09: Advanced JavaScript

- [x] async
- [x] chaining
- [x] destructuring
- [x] spread_rest

# 🥞 Pancake Project

## Overview

This is a small web app where users can build their own pancake by choosing Pancake type, toppings, extras, and delivery method. This project is completed using basic JavaScript.

---

## 👣 Project Steps

### Step 1: Build the Basics

- Used `addEventListener` to detect changes in the form
- Got selected pancake, toppings, and extras from the form
- Calculated total price:
  - Base price + 1€ per topping + price of extras
- Updated the total price on the page
- Added custom styling and animation for price updates

### Step 2: Refactor & Show Summary

- Replaced multiple event listeners with one on the whole form
- Used arrays to store toppings and extras
- Price updates instantly when anything changes
- Added order summary showing:
  - Customer name
  - Pancake type
  - Toppings & extras
  - Delivery method
  - Total price

### Step 3: Save Orders

- Created an `orders` array to save all orders
- Used `localStorage` so orders don’t disappear after refresh
- Added a new page to view all orders with:
  - Order ID
  - Customer Name
  - Pancake details
  - Delivery method
  - Status (waiting, ready, delivered)
- Made it possible to update order status and save the change

---

## ✨ Extra Features

- Search orders by name or ID
- Sort orders (e.g. show waiting ones first)
- Remove orders after they are delivered

---

## working link to github repository:

- https://github.com/HabibaUrmi/pancake-maker.git

## Live page link:

- https://pancake-maker-three.vercel.app/
