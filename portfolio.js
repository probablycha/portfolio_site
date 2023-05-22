
function goToAboutMe() {
  window.location.href = "aboutMe.html";
}

function goHome() {
  window.location.href = "landingPage.html";
}

function goToProject1() {
  window.location.href = "project1.html";
}


function goAdmilk() {
  window.open('https://www.admilk.co/work/bodega-x-hoka', '_blank');
}


function goProbably() {
  window.open('https://www.probablyalexcha.com', '_blank');
}



function goToDesignSystem() {
  window.open('https://www.figma.com/file/2fKKPVM5QUyU4dHHVju6tb/Catalis_Design_System?type=design&node-id=2%3A14&t=ynEANHFNN2DNWAiV-1', '_blank');
}

function goToPortal() {
  window.open('https://www.figma.com/file/U8XGohe9WCOjXtmHl7Wb19/Catalis_Portal_ReadyForDev?type=design&node-id=2%3A15410&t=Tp5ESb6ToQJRttln-1', '_blank');
}


function goToHostedCheckout() {
  window.open('https://www.figma.com/proto/y4tgzHU7wmpPbLl8dFuQck/Catalis_Hosted-Checkout_ReadyForDev?page-id=1466%3A9995&type=design&node-id=1466-9999&viewport=764%2C677%2C0.07&scaling=scale-down-width&starting-point-node-id=1466%3A9999', '_blank');
}

function goToIRSApp() {
  window.open('https://www.figma.com/proto/Gwb6P2OkJqiMyxcTqX4sGU/IRS-App-Ready-For-Dev?page-id=204%3A9037&type=design&node-id=534-9905&viewport=2615%2C-1606%2C0.22&scaling=scale-down&starting-point-node-id=534%3A9905', '_blank');
}




const skillBars = document.querySelectorAll(".skill-bar");

const skills = [
  { name: "Figma", level: 90 },
  { name: "Code", level: 70 },
  { name: "Photo", level: 85 },
  { name: "Video", level: 90 },
  { name: "Dancing", level: 100 }
];


skillBars.forEach((skillBar, index) => {
  const skillTitle = skillBar.querySelector(".skill-title");
  const barFill = skillBar.querySelector(".bar-fill");

  skillTitle.textContent = skills[index].name;
  barFill.style.width = skills[index].level + "%";
});




