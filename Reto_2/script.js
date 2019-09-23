
var mainWrapper = document.querySelector('#main-wrapper');
var mainWrapper = document.querySelector('a');

fetch('https://randomuser.me/api/?results=50').then((value) =>{
    return value.json();
}).then((value) => {
   
    var usersInfo = [];

    for(i = 0; i < value.results.length; i ++){

        var user = {}

        user.picture =  value.results[i].picture;
        user.name = value.results[i].name;
        usersInfo.push(user);
    }
    return usersInfo
}).then((usersInfo) => {
    console.log('info usuarios API', usersInfo)
    
    for(i = 0; i < usersInfo.length; i++){
        var containerAnchor = document.createElement('a');
        var userPictureElment = document.createElement('img');
        var userNameElement = document.createElement('h4');

        var userPicture = usersInfo[i].picture ;
        var userName = usersInfo[i].name.first + " " + usersInfo[i].name.last ;
        var urlplusParams = './userPage.html' + '?' + 'name=' + userName + '&' + 'pic=' + userPicture.large;
        
         containerAnchor.href = urlplusParams;
        containerAnchor.classList.add('user-container');

        
        userPictureElment.src = userPicture.medium;
        userPictureElment.alt = 'Profile picture of ' + userName;
        userNameElement.innerHTML = userName;

        
        containerAnchor.appendChild(userPictureElment);
        containerAnchor.appendChild(userNameElement);
        mainWrapper.appendChild(containerAnchor);
    }
})
