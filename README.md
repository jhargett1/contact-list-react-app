# Contact List App

This is a simple React contact list app. 

## Components

There are 4 components:

- App - The main component that renders the entire app
- Card - Renders a card for each contact
- Avatar - Renders the avatar image for a contact
- Details - Renders a detail item (phone or email) for a contact

## App component

The App component renders the title, an example avatar image, and a Card component for each contact.

The contacts are imported from the contacts.js file and mapped over to generate a card for each one.

## Card component

The Card component renders the name, Avatar, and Details components for each contact.

It takes in the following props:

- name - The name of the contact
- imgURL - The URL for the avatar image
- phone - The phone number of the contact
- email - The email of the contact

## Avatar component

The Avatar component renders the image for the contact.

It takes in the imgURL prop and renders an `<img>` with that source.

## Details component

The Details component renders a detail item like phone or email for a contact.

It takes in a single prop:

- detailInfo - The info to display (phone or email)

And renders it in a `<p>` element.

## Contacts data

The contacts data is defined in contacts.js as an array of objects. 

Each object has:

- name 
- imgURL
- phone
- email

This data is imported in App.jsx and mapped over to create the contact cards.

So in summary:

- App renders the whole app with Card components 
- Card renders the contact card with Avatar and Details
- Avatar renders the image 
- Details renders the phone/email
- Contacts provides the data