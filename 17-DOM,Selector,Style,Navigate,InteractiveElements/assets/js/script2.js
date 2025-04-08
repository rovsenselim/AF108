// 1.Asagida sekilde verilen card-ı js-de interactive elements istifade ederek hazirlamaq(stiller js-de verilecek).


const card = document.createElement("div");
card.style.width = "350px"
card.style.borderRadius = "10px"
card.style.boxShadow = "0 5px 10px black)"
card.style.backgroundColor = "white"
card.style.overflow = "hidden"



const img = document.createElement("img");
img.src = "https://picsum.photos/200/300"
img.style.width = "100%"
img.style.height = "200px"

card.appendChild(img)


const content = document.createElement("div");
content.style.padding = "16px"

const title = document.createElement("h3");
title.textContent = "Detached House · 5y old"
title.style.margin = "0 0 8px 0"
title.style.color = "grey";
title.style.fontSize = "16px";
content.appendChild(title);

const price = document.createElement('h2');
price.textContent = "$750,000"
price.style.margin = "0"
price.style.color = "black"
content.appendChild(price);

const address = document.createElement("p");
address.textContent = "742 Evergreen Terrace"
address.style.margin = "4px 0 16px 0"
address.style.color = "grey"
content.appendChild(address);


const details = document.createElement("div");
details.style.display = "flex"
details.style.justifyContent = "space-between"

const bedrooms = document.createElement("div");
bedrooms.textContent = "3 Bedrooms"
bedrooms.style.color = "black"

const bathrooms = document.createElement("div");
bathrooms.textContent = " 2 Bathrooms"
bathrooms.style.color = "black"

details.appendChild(bedrooms);
details.appendChild(bathrooms);
content.appendChild(details);


const realtor = document.createElement('div');
realtor.style.display = "flex"
realtor.style.alignItems = "center"
realtor.style.marginTop = "16px"

const avatar = document.createElement("img");
avatar.src = "https://picsum.photos/200/300"
avatar.style.width = "40px";
avatar.style.height = "40px"
avatar.style.borderRadius = "50%"
avatar.style.marginRight = "10px"

const info = document.createElement("div");
const name = document.createElement("strong");
name.textContent = "Tiffany Heffner"

const phone = document.createElement("p");
phone.textContent = "(555) 555-4321"
phone.style.margin = "2px 0"
phone.style.fontSize = "14px"
phone.style.color = "grey"

info.appendChild(name);
info.appendChild(phone);
realtor.appendChild(avatar);
realtor.appendChild(info);
content.appendChild(realtor);

card.appendChild(content);
document.body.appendChild(card);