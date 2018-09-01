#Book Me

![N|Solid](https://pbs.twimg.com/profile_images/2237800241/yesbookme_style_4_400x400.jpg)

# Project description

BookMe is a website which allows users to view, search for and book hotel rooms for their planned trip.The app is built with Angular 6 for front-end and Progress Kinvey for backend.
 The app functionality is split in 3 parts:
    -Authenticated view
    -Unauthenticated view
    -Admin view

### Common views

All users have access to Home, HotelDetails, Login and Register views.

-Home -This view allows users to search for hotels which have free rooms based on the data user has provided.Users must enter city,checkIn and checkOut date.After successfull request users will get a list of hotels which have free rooms,which can be booked immediately.

-HotelDetails -The view provides more data about hotel such as available and sold rooms for chosen date and option to book available rooms.

-Register form -Accessable trough Profile Register tab.Shows form for user registration. It consists of : email (must pass regex validation) and password (string of minimum 4 characters).

-Login form -Accessable trough Profile Login tab.Users must suply email and password.After successfull authorization users are authentucated with user role, which provides more options to comunicate with application.

### Authenticated view

Authenticated users can give a rating to hotels, ranging from 1 to 5,but only if they havent already voted.Also they can book available rooms and see their booking history from Profile->Your Bookings tab.

-Your Bookings-Shows all bookings made by user.It shows city, check in and check out date and link to the hotel which corresponds to the booking. 

### Admin view

Admins have access to: CreateHotel,CreateRoom,EditRoom and DeleteRoom pages.
-CreateHotel - Shows form which admin can fill and create new hotel for given city.All fields except description are required.
-CreateRoom - Going to Hotel Details view, admins have access to button which leads them to form which admin can fill and create a new room for given hotel. 
-Edit and Delete pages accessable from Home view.Admins can edit existing rooms or delete them.

##### Admin login:
username:admin@admin.com
password:admin