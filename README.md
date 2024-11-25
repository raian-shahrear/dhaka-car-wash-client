# Dhaka Car Wash

## Introduction
Dhaka Car Wash is a service based website where various kind of vehicle service items are shown. Anyone can preview the services, and search, sort, filter by price. After that booking can be placed as per service slot. Service, slot, booking can be manage from admin & user dashboard.
###### Live Site: [Dhaka-Car-Wash](https://dhaka-car-wash-client.vercel.app)

## Project Description
Dhaka Car Wash is a platform offering a wide range of vehicle services, allowing users to browse, search, sort, and filter services by price. Customers can preview detailed descriptions of services, select available slots, and book appointments for services like car maintenance, cleaning, or specialized treatments. The website provides an intuitive user experience, enabling seamless booking management. Both admins and users can efficiently manage services, slots, and bookings through their respective dashboards as per permission. Dhaka Car Wash ensures convenience for vehicle owners, simplifying the process of finding, scheduling, and booking car care services online.

## Features
- User can register account and login.
- User can preview and place a review after login.
- To display service, can be searched, sorted by price and filtered by min-max price. Also an be compare two or more services at a time.
- To book a slot for any service, choose specific date and then free slot from a calender. Then fill the required vehicle information, and place booking. 
- Payment system will be applicable after booking a slot.
- Featured services are displayed to the home page which is controlled by toggling button in the product management page of the dashboard.
- User, Service, slot, review, booking can be managed from the dashboard.

## Technology Stack
- Frontend: React, Redux, TailwindCSS, Shadcn, Typescript etc.
- Backend: Node.js, Express.js, Typescript, MongoDB, Mongoose etc.
- Payment: AAmarPay.

## Installation Guideline
- First install the React App with Vite and select Typescript there.
- Install Redux, TailwindCSS, Shadcn, React-router and other required npm packages.
- Run the App by `npm run dev`
- Create require pages and connect them with the Router to navigate.
- Implement Redux Store and RTK Query.

### Prerequisites
- Must have a server and database for managing the App data dynamically through API.

### Installation Steps
1. Create React app with Vite by `npm create vite@latest`.
2. Install the required npm package where TailwindCSS & Shadcn for managing CSS, Redux for state management, React-router for routing and there are also others for carousel slider, toast.
3. Under the src folder there are some folder for specific purpose like assets, components, config, hooks, pages, redux, routes, types, styles and utils.
4. Implement Redux Store & RTK Query for managing local state and API by following [Redux-toolkit Doc](https://redux-toolkit.js.org/tutorials/quick-start)

### Configuration
1. Create a `.env` file in the root directory of the project.
2. Add necessary configuration variables in the `.env` file.
   Example:
   ```bash
    VITE_API_URL=local_url_or_live_server
    VITE_Api_Key_Imagbb=Api_key_for_Imagbb
   ```
3. Then the `.env` file needs to be connected with the `config` file.
   ```js
    export const ApiUrl = import.meta.env.VITE_API_URL
    export const Api_Key_Imagbb = import.meta.env.VITE_Api_Key_Imagbb
   ```

## Usage
- Create a user, by default it will be user. So, make it admin from the database. Can be create other users as well.
- Login as an Admin. The Admin can manage, profile, service, slot and user-role from the dashboard. Also toggle a featured product as well.
- Login as a user. The User can view the home page, service page, service-comparison page. Also can place review and book slot for any services, can manage profile, review and view booking from the dashboard.

### Important Login credentials:
##### Admin: 
- email: admin@gmail.com 
- password: Admin@1234
##### Demo User: 
- email: sam@gmail.com 
- password: User@1234