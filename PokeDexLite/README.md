# Pokedex Lite v1.0
Welcome to Pokedex Lite V1.0, this app was built as a challenge for Certant company.


# Login

Login screen created with reactiveForms, both fields are required, the inputs are hidden 'till click on login, then a BottomSheet opens allowing the user to enter data. Alerts are managed by SweetAlert (Of course you see that coming)  Theres is connection to Certant's servers for this, no registration at this time. You may try:
**username: trainer
password: password**


![enter image description here](https://i.postimg.cc/Y0t98hsg/localhost-4200-home-i-Phone-SE-6.png)

## Main List

Displays all the pokemons registered by this user, I choose cards to display them. The list is rendered via services, and served to the component via State (ngrx).
![enter image description here](https://i.postimg.cc/wjW9Ywb1/localhost-4200-home-i-Phone-SE.png)



## Pokemon Data

Clicking on the pokemon picture displays data about that particular pokemon, in this case data is served via MAT_DATA injection. Evolution was a pretty tricky one data to get, as data in BBDD were very mishandled, and sometimes corrupt. I opted for state for this part of the card.
![enter image description here](https://i.postimg.cc/HxMJLqfZ/localhost-4200-home-i-Phone-SE-2.png)

## Register a Pokemon

Clicking the plus button user can add a Pokemon from scratch, I didn't like this style particullary, but given the extension of the form I choose to display inputs in expansion panels. Also the data base give me back null objects when trying to POST a new pokemon, even when server was giving a 200 response. Pretty annoying and weird at least for me. I opted for locally managing data via state (NGRX) 
![enter image description here](https://i.postimg.cc/d0mpK304/localhost-4200-home-i-Phone-SE-4.png)

## Updating Pokemon

This component was pretty straight forward, a component with data as placeholder.
![enter image description here](https://i.postimg.cc/yY8LDn8h/localhost-4200-home-i-Phone-SE-3.png)

## Conclusion
I learned a lot by doing this challenge, mainly about data management in different ways. No doubt Angular is an excellent framework even for me that is just scratching it's surface.
Hope you enjoyed the reading, and if you have got this far why don't you get in touch:
[franco_osores@hotmail](franco_osores@hotmail)


[www.osoresfranco.me](www.osoresfranco.me)


[www.linkedin.com/in/franco-osores](www.linkedin.com/in/franco-osores)
